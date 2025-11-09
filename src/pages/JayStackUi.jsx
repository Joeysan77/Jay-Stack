import { useState } from 'react'
import Footer from '../components/Footer'
export default function JayStackUi() {

    const [active, setActive] = useState('installation')

    return (
        <div>
            
            <div className="hide-scrollbar overflow-x-auto whitespace-nowrap flex ">
                
                <Page
                text="Installation"
                active={active === 'installation'}
                onClick={() => {
                    setActive('installation')
                }}
                />
                
                <Page
                text="Getting Started"
                active={active === 'gett'}
                onClick={() => {
                    setActive('gett')
                }}
                />
                
                <Page
                text="Documentation"
                active={active === 'docs'}
                onClick={() => {
                    setActive('docs')
                }}
                />
                
                <Page
                text="Utility Classes"
                active={active === 'util'}
                onClick={() => {
                    setActive('util')
                }}
                />
                
            </div>
            
            <Div/>
            <Footer/>
        </div>
    )
}

function Page({ text, active, onClick }) {
    return (
        <div
        onClick={onClick}
         className={`w-auto px-4 inline-block border-b-2  ${active ? ' bblue font-medium' : 'border-[transparent]'}`}>
            <p>
                {text}
            </p>
        </div>
    )
}

function Div() {
    return (
        <div className={``}>
            <Installation />
            <GettingStarted/>
        </div>
    )
}

function Installation()  {

    let tailwindcss;
    tailwindcss = "https://tailwindcss.com/docs/installation/using-vite";
  
    return (
        <div className="w-[100%]">
            
            <p className=" w90 border-x my-15 px-5 py-8 shadow-xl shadow-white/10 leading-relaxed">
                <b>Jay Stack UI</b> goes hand in hand with <b>Tailwindcss</b> and <b>Vite</b>, it is entirely dependent on it , before the Installation make sure you already have tailwindcss installed, if you don't have it installed, install it using the steps on their site <a href={tailwindcss} className="text-sky-500">Tailwindcss Installation</a>
            </p>
            
            
            <Step
            step="1"
            text="Install the package"
            dir="Terminal"
            flex=""
            code={
            <>
            <Pink text="npm" />
            <Blue text="install jay-stack-ui" />
            </>
                }
            copy="npm install jay-stack-ui"
            />
            
            
            
            
            <Step
            step="2"
            text="Start the CLI build process"
            dir="Terminal"
            flex=""
            code={
            <>
            <Pink text="npx" />
            <Blue text="jay-stack-ui" />
            </>
                }
            copy="npx jay-stack-ui"
            />
            
            
            
            <Step
            step="3"
            text="Generate Colors.css"
            dir="Terminal"
            flex=""
            code={
            <>
            <Red text="node" />
            <Blue text="styles/colors.js" />
            </>
                }
            copy="node styles/colors.js"
            />
            
            
            
            
            <Step
            step="1"
            text="Import CSS to your main.jsx/tsx"
            dir="main.tsx"
            flex="flex-col"
            desc="Locate colors.js from your project root in styles/colors.js"
            code={
            <>
            <Blue text="import '../styles/colors.css'" />
            <Blue text="import '../styles/classes.css'" />
            
            </>
                }
            copy="import '../styles/colors.css' import '../styles/classes.css'"
            />
            
            
            
            
            <div className="w90 border-x border-white px-5 py-10 shadow-xl shadow-white/10 my-10">
                <p className="text-xl font-medium my-5">And That's It</p>
                
                <p>you can start using <b>Jay Stack Ui</b>'s custom <p className="inline tblue">Utility Classes</p> , use and create your own custom colors with colors.js , how add a custom color?</p>
            </div>
            
            
        </div>
    )
}


function Step({ step, text, dir, code, copy, flex, desc }) {

   const [icon, setIcon] = useState(false)

   function copyCode(copy) {
       navigator.clipboard.writeText(copy)
   }

    return (
        <div className="my-29">
            <span className="mx-3 py-2 px-3 border rounded">STEP {step}</span>
            
            
            <p className="text-xl text-center my-5">{text}</p>
            <p className="w70 text-sm tgray my-5">{desc}</p>
            <div className="w90 sblue-xs shadow-xl bg-[#10141E] border bblue-sm p-2 rounded-xl">
                <div className="flex text-sm between px-2 v-center">
                    <p className="tgray">{dir}</p>
                    
                    <p className={` tgreen text-sm ${icon ? "show" : "hide"} `}>Copied</p>
                    <div className="border rounded py-1 px-2 gap-2 flex">
                        
                        
                        <i
                        onClick={() => {
                            copyCode(copy)
                            setIcon(true)
                            setTimeout(() => {
                                setIcon(false)
                            }, 2000)
                        }}
                         className={`far ${icon ? "fa-check" : "fa-clipboard"} `}></i>
                    </div>
                </div>
                
                
                <div className={` bg-[rgba(255,255,255,.05)] rounded-lg p-2 mt-2 flex ${flex} `}>
                    {code}
                </div>
            </div>
            
            
        </div>
    )
}

 
function GettingStarted() {
    return(
        <div className="w-[100%]">
            nddndnddn
        </div>
    )
}





































function Red({ text, className }) {
    return (
        <p className={` ${className} px-1 tred`}>{text}</p>
    )
}
function Green({ text, className }) {
    return (
        <p className={` ${className} px-1 tgreen`}>{text}</p>
    )
}
function Pink({ text, className }) {
    return (
        <p className={` ${className} px-1 tpink`}>{text}</p>
    )
}
function Blue({ text, className }) {
    return (
        <p className={` ${className} px-1 text-sky-500`}>{text}</p>
    )
}
function Yellow({ text, className }) {
    return (
        <p className={` ${className} px-1 tyellow`}>{text}</p>
    )
}
function Purple({ text, className }) {
    return (
        <p className={` ${className} px-1 tpurple`}>{text}</p>
    )
}
function Orange({ text, className }) {
    return (
        <p className={` ${className} px-1 torange`}>{text}</p>
    )
}

