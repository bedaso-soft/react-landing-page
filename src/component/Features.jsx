import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs'
 const features = [
  {
    title:"AI Code Complation",
    descripion:"Intelligent code suggestion powered by advanced AI that learns from you",
    codeSnipet:` function greet(name) {
           return "Hello " + name;
          }
        console.log(greet("Developer")); `,
    imagePosition:"left",
  },
  {
    title:"Testing",
    descripion:"Intelligent code  testing  by advanced AI that learns from you",
    codeSnipet:` function greet(name) {
           return "Hello " + name;
          }
        console.log("here we go wil try to develop another )   
        const x=a;
        const y=b;
        const sum = x+y; // a+b
        console.log(greet("Developer")); `,
    imagePosition:"right",
  },
  {
    title:"Smart debugging",
    descripion:"identify and fix bugs before they reach production level by advanced AI that learns from you",
    codeSnipet:` function greet(name) {
           return "Hello " + name;
          }
        const x=a;
        const y=b;
        const sum = x-y; //a-b
        console.log(greet("Developer")); `,
    imagePosition:"left",
  },
 ]
const Features = () => {
  return (
    <section
    id='features'className='py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative '>
    <div className='max-w-6xl mx-auto'>
      <div className='text-center mb-12 sm:mb-16 lg:mb-20 '> 
        <h2 className='text-5xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6'>
          <span className='bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent'>
            Your Complete Developement </span>
          <br />
          <span className='bg-gradient-to-b from-blue-500 to-cyan-500 bg-clip-text text-transparent'>
            Workflow</span>
        </h2>
      </div>
      <div className='space-y-16 sm:space-y-20 lg:space-y-32'>
        {features.map((feature,key) => {
          return( 
          <div key={key} className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 
          ${feature.imagePosition === "right" ? "lg:flex-row-reverse":""}`}>
            {/* code section */}
            <div className='flex-1 w-full'>
              <div className='relative group'>
                <div className='absolute inset-0 bg-gradient-to-br from-blue-700/10 to-purple-700
                rounded-xl sm:rounded-2xl transition-all duration-500'/>
              <div className='relative bg-gray-950/50 backdrop-blur-sm border border-gray-700/50
              rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden group-hover:border-1
              group-hover:border-blue-600/50 transiition-all duration-300'>
                {/* ide interface */}
                <div className='bg-gray-950 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm'>
                  <div className='flex items-center space-x-1 sm:space-x-2 mb-3 sm:mb-4'>
                   <div className='flex items-center space-x-1 sm:space-x-2'>
                      <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500'/>
                      <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500'/>
                      <div className='w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500'/>
                   </div>
                   <span className='text-gray-400 ml-2 sm:ml-4 text-xs sm:text-sm'>
                    {feature.title}</span>
                  </div>
                  <div>
                                  
              <SyntaxHighlighter language ="javascript"
              style={nightOwl} 
              customStyle={{
                margin:0,
                background:"transparent",
                borderRadius:"8px",
                fontSize:"0.75rem",
                lineHeight:"1.4",
                height:"100%",
              }}>
                {feature.codeSnipet}
              </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              </div>
            </div>
            {/* text section  */}
            <div className='flex-1 w-full'>
              <div className='max-w-lg mx-auto lg:mx-0 text-center lg:text-left'>
                <h3 className='text-4xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white'>
                  {feature.title}</h3>
                <p className='text-gray-300 text-base text-xl sm:text-lg leading-relaxed'>
                  {feature.descripion}</p>
              </div>
            </div>
          </div>
          )
        })}
      </div>
    </div>
    </section>
  )
}

export default Features