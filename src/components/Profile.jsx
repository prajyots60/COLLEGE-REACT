
// //create profile page

// import  { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Profile = () => {
//   const navigate = useNavigate();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState(''); 
//   const [error, setError] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//     } else {
//       setError('');
//       // Save the user's profile data to local storage
//       localStorage.setItem('name', name);
//       localStorage.setItem('email', email);
//       localStorage.setItem('password', password);
//       navigate('/login');
//     }
//   };

//   return (
//     <div className='flex flex-col h-screen px-6 py-16'>
//       <h1>Contact Us</h1>
//       <form onSubmit={handleSubmit} className="">
//        <div className='flex flex-col gap-4'>
//        <label className=''> Name:</label>
//         <input
//           type="text"
//           className='text-black border-2 border-emerald-300'
//           value={name}  
//           onChange={(event) => setName(event.target.value)}
//         />
//         <label> Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//         />
//         <label> Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         />
//         <label> Confirm Password:</label>
//         <input
//           type="password"
//           value={confirmPassword}
//           onChange={(event) => setConfirmPassword(event.target.value)}
//         />
//        </div>
//         <button type="submit">Submit</button>
//       </form>
//       {error && <p>{error}</p>}
//     </div>
//   );
//     }

// export default Profile;


import  { useState } from 'react';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here (API call, etc.)
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-gray-400  rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-gray-600 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full text-black p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>
          
          {/* Email Input */}
          <div>
            <label className="block text-gray-600 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full text-black p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>

          {/* Feedback Input */}
          <div>
            <label className="block text-gray-600 mb-2" htmlFor="feedback">
              Feedback
            </label>
            <textarea
              name="feedback"
              id="feedback"
              value={formData.feedback}
              onChange={handleChange}
              rows="5"
              className="w-full text-black p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-emerald-500 text-white p-3 rounded-lg font-semibold hover:bg-emerald-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
