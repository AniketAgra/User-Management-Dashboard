import { useState, useEffect } from "react";

const UserForm = ({ user, onSave }) => {
  const [formData, setFormData] = useState(user);

  useEffect(() => {
    setFormData(user);
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form className="mt-4 bg-gray-100 p-4 rounded-lg shadow-md" onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name || ""} onChange={handleChange} className="w-full p-2 mb-2 border rounded" placeholder="Full Name" required />
      <input type="email" name="email" value={formData.email || ""} onChange={handleChange} className="w-full p-2 mb-2 border rounded" placeholder="Email" required />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
    </form>
  );
};

export default UserForm;
