import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "framer-motion"

const Testimonials = () => {
  return (
    <motion.div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'
        initial={{ opacity : 0, x: 100}}
        transition={{ duration : 1.5 }}
        whileInView={{ opacity : 1, x: 0}}
        viewport={{ once : true }}
    >
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
            Customer 
        <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span>
        </h1>
        <p className='text-gray-500 text-center mb-8 max-w-80 mx-auto'>
            Real Stories from Those Who Found Home with Us
        </p>

        <div className='flex flex-wrap justify-center gap-8'> 
            {testimonialsData.map((item, index)=>{
                return(
                    <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12
                    text-center'>
                        <img src={item.image} className='w-20 h-20 rounded-full mx-auto mb-4'/>
                        <h2 className='text-xl text-gray-700 font-medium'>{item.name}</h2>
                        <p className='text-gray-500 mb-4 text-sm'>{item.title}</p>

                        <div className='flex justify-center text-red-500 gap-1 mb-4'>
                            {
                                Array.from({length: item.rating}, (item, index) => {
                                    return <img key={index} src={assets.star_icon}/>
                                })
                            }
                        </div>

                        <p className='text-gray-600'>{item.text}</p>
                    </div>
                )
            })}
        </div>
    </motion.div>
  )
}

export default Testimonials
