import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import UserTable from "./UserTable";
import UserForm from "./UserForm";
import { getUsers, deleteUser, addUser, updateUser } from "../services/UserServices";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id); // Call the API to delete the user
    setUsers(users.filter(user => user.id !== id)); // Update the state by removing the deleted user
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingUser(null);
  };

  const handleSave = async (user) => {
    if (user.id) {
      const updatedUser = await updateUser(user);
      setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    } else {
      const newUser = await addUser(user);
      setUsers([...users, newUser]);
    }
    setIsModalOpen(false);
    setEditingUser(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* <h1 className="text-2xl font-bold text-gray-800 mb-4">User Management Dashboard</h1> */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        onClick={() => handleEdit({})}>
        Add User
      </button>
      
      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />

      {isModalOpen && (
  <motion.div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg w-98 flex flex-col items-center"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-bold mb-4">Edit User</h2>
      
      {/* User Form */}
      <UserForm user={editingUser} onSave={handleSave} />

      {/* Buttons with proper spacing */}
      <div className="flex justify-end w-full gap-3 mt-4">
       
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
          onClick={handleCloseModal}
        >
          Close
        </button>
      </div>
    </motion.div>
  </motion.div>
)}

    </div>
  );
};

export default UserList;
