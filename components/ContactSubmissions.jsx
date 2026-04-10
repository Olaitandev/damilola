// "use client";

// import { useState, useEffect } from "react";
// import { contactHelpers } from "@/lib/contactHelpers";
// import { useAuth } from "@/contexts/AuthContext";

// export default function ContactSubmissions() {
//   const [contacts, setContacts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { user } = useAuth();

//   useEffect(() => {
//     if (user) {
//       fetchContacts();
//     }
//   }, [user]);

//   const fetchContacts = async () => {
//     setLoading(true);
//     const { data, error } = await contactHelpers.getAllContacts();

//     if (error) {
//       setError(error.message);
//     } else {
//       setContacts(data || []);
//     }
//     setLoading(false);
//   };

//   const handleDelete = async (id) => {
//     if (confirm("Are you sure you want to delete this contact submission?")) {
//       const { error } = await contactHelpers.deleteContact(id);
//       if (error) {
//         alert("Error deleting contact: " + error.message);
//       } else {
//         setContacts(contacts.filter((contact) => contact.id !== id));
//       }
//     }
//   };

//   if (!user) {
//     return (
//       <div className="p-6 text-center">
//         <p>Please sign in to view contact submissions.</p>
//       </div>
//     );
//   }

//   if (loading) {
//     return (
//       <div className="p-6 text-center">
//         <p>Loading contact submissions...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="p-6 text-center text-red-600">
//         <p>Error loading contacts: {error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6">
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-2xl font-bold">Contact Submissions</h1>
//         <button
//           onClick={fetchContacts}
//           className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
//         >
//           Refresh
//         </button>
//       </div>

//       {contacts.length === 0 ? (
//         <p className="text-gray-600">No contact submissions yet.</p>
//       ) : (
//         <div className="space-y-4">
//           {contacts.map((contact) => (
//             <div
//               key={contact.id}
//               className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
//             >
//               <div className="flex items-start justify-between mb-2">
//                 <h3 className="text-lg font-semibold">{contact.full_name}</h3>
//                 <button
//                   onClick={() => handleDelete(contact.id)}
//                   className="text-sm text-red-500 hover:text-red-700"
//                 >
//                   Delete
//                 </button>
//               </div>

//               <div className="grid grid-cols-1 gap-2 mb-3 text-sm md:grid-cols-2">
//                 <p>
//                   <strong>Email:</strong> {contact.email}
//                 </p>
//                 <p>
//                   <strong>Phone:</strong>{" "}
//                   {contact.phone_number || "Not provided"}
//                 </p>
//                 <p>
//                   <strong>Newsletter:</strong>{" "}
//                   {contact.subscribe_to_newsletter ? "Yes" : "No"}
//                 </p>
//                 <p>
//                   <strong>Submitted:</strong>{" "}
//                   {new Date(contact.created_at).toLocaleDateString()}
//                 </p>
//               </div>

//               <div>
//                 <strong>Message:</strong>
//                 <p className="p-2 mt-1 text-sm whitespace-pre-wrap rounded bg-gray-50">
//                   {contact.message}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
