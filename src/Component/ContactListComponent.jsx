import { useContext } from "react";
import { ContactContext } from "../Component/Context/ContactContext";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";

function ContactListComponent() {
  const { contacts, removeContact } = useContext(ContactContext);
  console.log(contacts);

  return (
    <div className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-800 mb-8 text-center">
        Submitted Messages
      </h1>

      {contacts.length === 0 ? (
        <p className="text-center text-slate-500">No messages yet.</p>
      ) : (
        <div className="space-y-6">
          {contacts.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-xl border border-slate-200 bg-white shadow-sm flex justify-between items-start"
            >
              <div>
                <p className="text-lg font-semibold text-slate-800">{item.name}</p>
                <p className="text-slate-600 text-sm">{item.email}</p>
                <p className="text-slate-700 mt-2">{item.message}</p>
              </div>

              <button
                onClick={() => {
                  removeContact(item.id);
                  toast.success("Message removed!");
                }}
                className="text-red-500 hover:text-red-600 transition"
              >
                <FaTrash size={18} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ContactListComponent;
