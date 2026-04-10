import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vqyyxwtacovdqzhsdafi.supabase.co" ?? "";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxeXl4d3RhY292ZHF6aHNkYWZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUyODE4MDAsImV4cCI6MjA3MDg1NzgwMH0.JOr0gQ5xP6uN_qF6yTMumpFwEVfz1gIsaNN_GSZpkII" ??
  "";
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Supabase environment variables not set. NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY must be set in your .env.local file."
  );
}

// Client for regular operations (respects RLS)
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

// Admin client with service role key (bypasses RLS)
// Use this only in server-side code (API routes, server actions)
// NEVER expose this client to the browser
export const supabaseAdmin =
  supabaseUrl && supabaseServiceRoleKey
    ? createClient(supabaseUrl, supabaseServiceRoleKey, {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      })
    : null;
