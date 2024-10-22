
import { motion } from 'framer-motion';

const Courses = () => (
  <section className="py-8">
    <h3 className="text-3xl text-center font-bold mb-6">Courses We Offer</h3>
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-4"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
    >
      <div className="p-4 bg-white shadow-lg rounded-md">
        <h4 className="text-2xl font-bold">Computer Science</h4>
        <p>Learn modern software development, AI, and data science.</p>
      </div>
      <div className="p-4 bg-white shadow-lg rounded-md">
        <h4 className="text-2xl font-bold">Business Administration</h4>
        <p>Master business skills to become a leader in today market.</p>
      </div>
      <div className="p-4 bg-white shadow-lg rounded-md">
        <h4 className="text-2xl font-bold">Engineering</h4>
        <p>Build innovative solutions for real-world problems.</p>
      </div>
    </motion.div>
  </section>
);

export default Courses;
