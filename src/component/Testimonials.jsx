import React from 'react'
const testimonials = [
  { 
    name: "Soretti Chen",
    role: "Software Developer",
    image: "https://images.pexels.com/photos/5561451/pexels-photo-5561451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content:
      "This AI-powered development platform has completely transformed the way our team writes and manages code. The automation features and intuitive interface allow developers to focus more on solving real problems instead of repetitive tasks."
  },

  { 
    name: "Duretti Sanbatuu",
    role: "Operations Manager",
    image: "https://images.pexels.com/photos/3763583/pexels-photo-3763583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content:
      "The platform provides a reliable and well-organized environment for managing complex tasks. Its tools make collaboration easier and help our team stay productive and aligned throughout every stage of a project."
  },

  { 
    name: "Bedaso Dersu",
    role: "Technical Mentor",
    image: "https://images.pexels.com/photos/7988087/pexels-photo-7988087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content:
      "This platform creates a powerful learning environment for developers. It allows beginners and experienced programmers alike to experiment, build real-world projects, and improve their skills much faster."
  },

  { 
    name: "Lina Roberts",
    role: "Product Designer",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content:
      "What impressed me the most is how seamlessly this platform integrates design and development workflows. It helps teams prototype ideas quickly while maintaining a clean and scalable structure."
  }
];
const Testimonials = () => {
  return (
    <section id='testimonials' className='py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative'>
    <div className='max-w-7xl mx-auto'>
      <div className='flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16'>
      <div className='lg:w-1/2 w-full text-center lg:text-left'> 
        <h2 className='text-5xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6'>
          what developers are saying about us 
        </h2>
        <p className='text-gray-400 text-base text-xl sm:text-lg max-w-2xl mx-auto'>
          choose the perfect plan for your needs. All plans include a 14-day free trial</p>
      </div>
      {/* right testimonials */}
      <div className='lg:w-1/2 w-full'>
      <div className='space-y-6 sm:spce-y-8'>
        {testimonials.map((testimonial,key)=>{
          return(
            <div key={key} className='bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl '>
              <div className='flex items-start space-x-3 sm:space-x-4'>
                <div className='flex-shrink-0'>
                  <div className='text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400
                  to-cyan-400 bg-clip-text text-transparent'>"
                  </div>
                </div>

                <div className='flex-row'>
                  <p className='text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4'>
                    {testimonial.content}</p>
                  <div className='flex items-center space-x-2 sm:space-x-3'>
                    <img src={testimonial.image} alt={testimonial.name}
                    className='w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover' />
                  </div>
                  <div>
                    <h4 className='font-semibold text-white text-white text-sm sm:text-basse'>
                       {testimonial.name} </h4>
                    <p className='text-xs sm:text-sm text-gray-400'> {testimonial.role} </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      </div>
      </div>
      </div>
      </section>
  )
}

export default Testimonials