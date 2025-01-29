import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import UserTable from "./UserTable";
import UserForm from "./UserForm";
import { getUsers, deleteUser, addUser, updateUser } from "../services/UserServices";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter(user => user.id !== id));
  };

  const handleSave = async (user) => {
    if (user.id) {
      const updatedUser = await updateUser(user);
      setUsers(users.map(u => (u.id === user.id ? updatedUser : u)));
    } else {
      const newUser = await addUser(user);
      setUsers([...users, newUser]);
    }
    setEditingUser(null);
  };

  return (
    <motion.div 
      className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold text-gray-800 mb-4">User Management Dashboard</h1>
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        onClick={() => setEditingUser({})}
      >
        Add User
      </button>
      {editingUser && <UserForm user={editingUser} onSave={handleSave} />}
      <UserTable users={users} onEdit={setEditingUser} onDelete={handleDelete} />
    </motion.div>
  );
};

export default UserList;
