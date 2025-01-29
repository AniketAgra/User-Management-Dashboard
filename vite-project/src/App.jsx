import { motion } from "framer-motion";
import UserList from "./components/UserList";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <motion.h1
        className="text-3xl font-bold text-center text-blue-600 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        User Management Dashboard
      </motion.h1>
      <UserList />
    </div>
  );
}
