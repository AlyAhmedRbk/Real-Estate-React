import React,{useState} from 'react'
import { toast } from 'react-toastify';
import { motion } from "framer-motion"

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "6d127002-7f59-47a5-8539-48bc5fd2ecdf");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        toast.success("Form Submitted Successfully")
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error("Error while sending data.")
      }
    };
  
  return (
    <motion.div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'
    initial={{ opacity :0, x:-200 }}
    transition={{ duration : 2 }}
    whileInView={{ opacity : 1, x : 0  }}
    viewport={{ once : true }}
    >
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
            Contact 
        <span className='underline underline-offset-4 decoration-1 under font-light'> With Us</span>
        </h1>
        <p className='text-gray-500 text-center mb-8 max-w-80 mx-auto'>
            Ready to Make a Move? Let’s Build Your Future Together
        </p>

        <form className='max-w-2xl mx-auto text-gray-600 rounded py-3' onSubmit={onSubmit}>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left'>
                    Your Name
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' 
                    type="text" placeholder='Your Name' required name='Name'/>
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                    Your Email
                    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' 
                    type="email" placeholder='Your Email' required name='Email'/>
                </div>
            </div>

                <div className='my-6 text-left'>
                     Message
                    <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' placeholder='Your Message' required name='Message'/>
                </div>

                <button type='submit' className='bg-blue-600 text-white py-2 px-10 mb-10 rounded hover:scale-105
                duration-300 transition-all'>
                    {result ? result : "Send Message"}
                </button>
                
        </form>
    </motion.div>
  )
}

export default Contact
