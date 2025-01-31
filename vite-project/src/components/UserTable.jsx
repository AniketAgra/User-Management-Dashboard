import { motion } from "framer-motion";

const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <motion.div
      className="mt-6 bg-white shadow-md rounded-lg overflow-hidden p-6"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
    >
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
            <th className="px-4 py-2 text-left text-sm font-medium uppercase tracking-wider">ID</th>
            <th className="px-4 py-2 text-left text-sm font-medium uppercase tracking-wider">Full Name</th>
            <th className="px-4 py-2 text-left text-sm font-medium uppercase tracking-wider">Email</th>
            <th className="px-4 py-2 text-center text-sm font-medium uppercase tracking-wider ml-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <motion.tr
              key={user.id}
              className="border-b transition duration-300 ease-in-out hover:bg-gray-100"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
            >
              <td className="px-4 py-2 text-gray-700">{user.id}</td>
              <td className="px-4 py-2 text-gray-900">{user.name}</td>
              <td className="px-4 py-2 text-gray-700">{user.email}</td>
              <td className="px-4 py-2 flex gap-4 justify-center">
                <button
                  onClick={() => onEdit(user)}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded transition-all duration-300 transform hover:scale-105 "
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => onDelete(user.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-all duration-300 transform hover:scale-105 ml-"
                >
                  🗑 Delete
                </button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default UserTable;
