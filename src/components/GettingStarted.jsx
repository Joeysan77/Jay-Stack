import { useState, useRef } from 'react'
import Bullets from './Bullets'
import { Red, Blue, Pink, Purple, Orange } from './SyntaxColors'
import Step from './Step'
import UtilClass from './UtilClass'

export default function GettingStarted({ openInstall }) {

    
    const [div, setDiv] = useState('blue h-10 w-10')
    const inputRef = useRef(null)
   
    function setdiv() {
        setDiv(inputRef.current.value)
    }

    return (
        <div className="w-screen">
            <img className="h-15 mx-3"src="logo-ui.png" alt=""/>
            <div className="shadow-white/10 shadow-xl border-x border-white w90 px-2 py-5 my-5">
                <p className="text-2xl font-medium my-8 text-center">What Jay-Stack-UI is</p>
                <p className="text-center text-white/70 px-2">
                    JayStackUI is a <b>React-based</b> extension for <b>TailwindCSS</b> that delivers fast, pre-built utility classes, custom component classes, and a curated color system designed for rapid UI development. It enhances Tailwind’s core utilities with additional shortcuts, layout helpers, standardized spacing rules, and expressive color styling so you can build consistent, elegant interfaces with minimal effort.
                </p>
                
                
                <p className="text-center text-white text-2xl font-medium my-10">JayStackUI Is a TailwindCSS + React-Only Framework</p>
                <p className="text-center text-white/70"> 
                    JayStackUI is built specifically for React projects that use TailwindCSS. It is not a standalone library — it extends Tailwind’s utility system and adds custom classes, quick-style components, and a streamlined color palette designed for fast, consistent UI development.
                </p>
                
               
                
                <div className="my-10">
                     <p className="font-medium px-4 my-5">Because JayStackUI depends on Tailwind and React:</p>
                     
                    <Bullets
                    text="Your project must have TailwindCSS installed and configured"
                    />
                    
                    <Bullets
                    text="Your project must run inside a React environment"
                    />
                    
                    <Bullets
                    text="Tailwind must scan JayStackUI’s components so its styles are generated correctly"
                    />
                    
                </div>
                
                <p className="text-center text-white/70 my-8 px-1 ">JayStackUI does not support plain HTML, vanilla JavaScript, or other frameworks like Vue or Angular. It is optimized strictly for the React + Tailwind workflow.
The result is a lightweight, fast, expressive UI layer that enhances Tailwind with additional utilities, simplified component classes, and ready-to-use styling patterns for building modern interfaces quickly. <br/> visit our installation guides to properly go through the installation process</p>

                 <div onClick={openInstall} className="blue w90 rounded-lg font-medium py-2 center gap-5 flex">
                     <i className="fa fa-arrow-left"></i>
                     <p>Installation</p>
                     
                 </div>
                 
                 
                

            </div>
            
             <div className="my-20 border w90 rounded-xl px-4 py-8 border-white/10 ">
                     <p className="text-xl text-center font-medium">
                         Install Jay-Stack-UI 
                     </p>
                     
                     <Step
                     step="1"
                     dir="terminal"
                     code={
                         <>
                         <Pink text="npm"/>
                         <Blue text="install jay-stack-ui"/>
                         </>
                     }
                     copy="npm install jay-stack-ui"
                     text="Install Jay Stack UI with one command "
                     />
                     
                      <p className="text-center">Visit our <button className ="text-sky-500"onClick={openInstall}>Installation page</button> for more information</p>
                      
                 </div>
                 
                 
                 <div>
                     
                     <UtilClass
                     className="flex center py-10"
                     content={<button className="blue btn">Click</button>}
                     src="btn.png"
                     />
                     
                     
                 </div>
                
               
        </div>
    )
}
