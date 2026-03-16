import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'

const Navbar = () => {
    const [topmenu ,settopMenu] = useState(false);
  return (
    <nav className=' fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between  items-center h-14 sm:h-16 md:h-20'>               
                <div className='flex items-center space-x-1 group cursor-pointer'>
                 <div>
                    <img src="/Beda.png" alt="logo" className='w-6 h-6 sm:w-8 sm:h-8'/>
                </div>
                <span className='text-lg sm:text-sm md:text-2xl font-medium'>
                    <span className='text-white'>Code</span>
                    <span className='text-blue-400'>Flow</span>
                </span>
                </div>
                {/* nav links */}
                <div className='hidden md:flex items-center space-x-6 lg:space-x-8'>
                    <a 
                        href="#features" className='text-gray-300 hover:text-white text-sm lg:text-base'>
                        Features
                    </a>

                    <a 
                        href="#pricing" className='text-gray-300 hover:text-white text-sm lg:text-base'>
                        Pricing
                    </a>
                    
                    <a 
                        href="#testimonials" className='text-gray-300 hover:text-white text-sm lg:text-base'>
                        Testimonials
                    </a>
                    
                </div>
                <button 
                className='md:hidden p-2 text-gray-300 hover:text-white'
                onClick={()=>settopMenu((prev)=>!prev)}
                >
                  
                {topmenu ? (<X className='w-5 h-5 sm:w-6 sm:h-6 ' />):(
                     <Menu className='w-5 h-5 sm:w-6 sm:h-6 '/>
                )}
                </button>
            </div>
        </div>
        {/* {menu && <p>Hello</p>} */}
        {
            topmenu && (
            <div className='absolute right-0 top-full w-50 h-40 px-4 items-center md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 aniamtion-in slide-in-from-top duration-300'>
                <div className='px-4 py-4 sm:py-6 space-y-3 sm:space-y-4'>
                    <a 
                        onClick={()=>settopMenu(false)}
                        href="#features" className='block text-gray-300 hover:text-white text-sm lg:text-base'>
                        Features
                    </a>

                    <a 
                        onClick={()=>settopMenu(false)}
                        href="#pricing" className='block text-gray-300 hover:text-white text-sm lg:text-base'>
                        Pricing
                    </a>
                    
                    <a 
                        onClick={()=>settopMenu(false)}
                        href="#testimonials" className='block text-gray-300 hover:text-white text-sm lg:text-base'>
                        Testimonials
                    </a>
                </div>
            </div>
            )
        }
    </nav>
  )
}

export default Navbar