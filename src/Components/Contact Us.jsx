import React from 'react'
import { useState } from 'react';
import './Components.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-green-500 flex justify-center bg-center border border-black w-full bg-cover h-screen mt-16 sm:mt-8 absolute -z-10 left-0 font-serif tracking-wider bg-scroll">
      <div className='animate w-3/4 h-80 mt-20 sm:w-1/3 sm:h-2/3 bg-white bg-opacity-10 hover:scale-95 transition-all duration-1000 flex justify-center items-center border-x-4 border-y-2 border-white rounded-lg sm:mt-3'>
      
      <form onSubmit={handleSubmit} className="mt-8 sm:mt-0 p-6 sm:p-0 w-full max-w-md">  
      <h1 className="sm:text-3xl text-lg font-extrabold sm:mb-2 sm:mt-6 text-white">Contact Us</h1>
        <div className="mb-2">
          <label htmlFor="name" className="block text-sm sm:text-md font-normal sm:font-bold sm:mb-2 text-white text-left">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full sm:py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="block text-sm sm:text-md font-normal sm:font-bold sm:mb-2 text-white text-left">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="shadow appearance-none border rounded w-full sm:py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-2">
          <label htmlFor="subject" className="block text-sm sm:text-md font-normal sm:font-bold sm:mb-2 text-white text-left">Subject</label>
          <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="shadow appearance-none border rounded w-full sm:py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-2">
          <label htmlFor="message" className="block text-sm sm:text-md font-normal sm:font-bold sm:mb-2 text-white text-left">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} sm:rows="5" className="shadow appearance-none border rounded w-full sm:py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <div className="flex items-center mb-6 justify-between">
          <button type="submit" className="bg-red-500 hover:bg-green-500 text-white font-bold sm:py-2 px-2 sm:px-4 rounded focus:outline-none focus:shadow-outline mb-2">Send</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Contact;
