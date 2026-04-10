import { supabase } from "./supabase";

// Generic CRUD operations
export const dbHelpers = {
  // Create a new record
  async create(table, data) {
    try {
      const { data: result, error } = await supabase
        .from(table)
        .insert(data)
        .select()
        .single();

      if (error) throw error;
      return { data: result, error: null };
    } catch (error) {
      console.error(`Error creating record in ${table}:`, error);
      return { data: null, error };
    }
  },

  // Read records with optional filtering
  async read(table, filters = {}, options = {}) {
    try {
      let query = supabase.from(table).select(options.select || "*");

      // Apply filters
      Object.entries(filters).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          query = query.in(key, value);
        } else {
          query = query.eq(key, value);
        }
      });

      // Apply ordering
      if (options.orderBy) {
        query = query.order(options.orderBy, {
          ascending: options.ascending ?? true,
        });
      }

      // Apply limit
      if (options.limit) {
        query = query.limit(options.limit);
      }

      const { data, error } = await query;

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error(`Error reading from ${table}:`, error);
      return { data: null, error };
    }
  },

  // Update a record
  async update(table, id, data) {
    try {
      const { data: result, error } = await supabase
        .from(table)
        .update(data)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return { data: result, error: null };
    } catch (error) {
      console.error(`Error updating record in ${table}:`, error);
      return { data: null, error };
    }
  },

  // Delete a record
  async delete(table, id) {
    try {
      const { error } = await supabase.from(table).delete().eq("id", id);

      if (error) throw error;
      return { error: null };
    } catch (error) {
      console.error(`Error deleting record from ${table}:`, error);
      return { error };
    }
  },

  // Real-time subscription
  subscribe(table, callback, filters = {}) {
    let channel = supabase
      .channel(`${table}_changes`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: table,
          ...filters,
        },
        callback
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  },
};

// File upload helper
export const uploadFile = async (bucket, path, file) => {
  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(path, file);

    if (error) throw error;

    // Get public URL
    const {
      data: { publicUrl },
    } = supabase.storage.from(bucket).getPublicUrl(path);

    return { data: { ...data, publicUrl }, error: null };
  } catch (error) {
    console.error("Error uploading file:", error);
    return { data: null, error };
  }
};

// Delete file helper
export const deleteFile = async (bucket, path) => {
  try {
    const { error } = await supabase.storage.from(bucket).remove([path]);

    if (error) throw error;
    return { error: null };
  } catch (error) {
    console.error("Error deleting file:", error);
    return { error };
  }
};
