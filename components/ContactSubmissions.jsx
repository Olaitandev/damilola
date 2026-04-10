"use client";

import { useState, useEffect } from "react";
import { contactHelpers } from "@/lib/contactHelpers";
import { useAuth } from "@/contexts/AuthContext";

export default function ContactSubmissions() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchContacts();
    }
  }, [user]);

  const fetchContacts = async () => {
    setLoading(true);
    const { data, error } = await contactHelpers.getAllContacts();

    if (error) {
      setError(error.message);
    } else {
      setContacts(data || []);
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this contact submission?")) {
      const { error } = await contactHelpers.deleteContact(id);
      if (error) {
        alert("Error deleting contact: " + error.message);
      } else {
        setContacts(contacts.filter((contact) => contact.id !== id));
      }
    }
  };

  if (!user) {
    return (
      <div className="p-6 text-center">
        <p>Please sign in to view contact submissions.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="p-6 text-center">
        <p>Loading contact submissions...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-center text-red-600">
        <p>Error loading contacts: {error}</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Contact Submissions</h1>
        <button
          onClick={fetchContacts}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Refresh
        </button>
      </div>

      {contacts.length === 0 ? (
        <p className="text-gray-600">No contact submissions yet.</p>
      ) : (
        <div className="space-y-4">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">{contact.full_name}</h3>
                <button
                  onClick={() => handleDelete(contact.id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Delete
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm mb-3">
                <p>
                  <strong>Email:</strong> {contact.email}
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  {contact.phone_number || "Not provided"}
                </p>
                <p>
                  <strong>Newsletter:</strong>{" "}
                  {contact.subscribe_to_newsletter ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Submitted:</strong>{" "}
                  {new Date(contact.created_at).toLocaleDateString()}
                </p>
              </div>

              <div>
                <strong>Message:</strong>
                <p className="mt-1 p-2 bg-gray-50 rounded text-sm whitespace-pre-wrap">
                  {contact.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
