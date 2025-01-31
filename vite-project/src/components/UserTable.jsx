import {motion} from "framer-motion";
const UserTable = ({ users, onEdit, onDelete }) => {
  return (
    <motion.div className="mt-6 bg-white shadow-md rounded-lg overflow-hidden"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Full Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <motion.tr key={user.id} className="border-b"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
              <td className="px-4 py-2">{user.id}</td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2 flex gap-2">
                <button onClick={() => onEdit(user)}
                  className="bg-green-500 text-white px-3 py-1 rounded">Edit</button>
                <button onClick={() => onDelete(user.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default UserTable;
