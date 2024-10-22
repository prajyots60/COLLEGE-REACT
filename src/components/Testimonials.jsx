import { motion } from 'framer-motion';

export const Testimonials = () => (
  <section className="py-16 bg-emerald-light text-center">
    <h2 className="text-4xl font-bold text-emerald-dark mb-8">What Our Students Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <motion.div 
        className="p-4 bg-white shadow-md rounded-lg"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <p className="mb-4">This college has truly transformed my life. The faculty is amazing, and the courses are challenging yet rewarding.</p>
        <h4 className="text-xl font-bold">John Doe</h4>
        <p>Computer Science, Class of 2024</p>
      </motion.div>
      <motion.div 
        className="p-4 bg-white shadow-md rounded-lg"
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <p className="mb-4">I gained invaluable skills and made lifelong friends here. The college really prepares you for the real world.</p>
        <h4 className="text-xl font-bold">Jane Smith</h4>
        <p>Business Administration, Class of 2023</p>
      </motion.div>
    </div>
  </section>
);
