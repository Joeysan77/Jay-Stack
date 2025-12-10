import { Red, Pink, Blue, Purple } from './SyntaxColors'
import Step  from './Step'
import UtilClass from './UtilClass'

export default function Installation( {openUtil} )  {

    let tailwindcss;
    tailwindcss = "https://tailwindcss.com/docs/installation/using-vite";
    
  
    return (
        <div className="h-full w-screen">
  
            
            
            
              <p className=" w90 border-x my-15 px-5 py-8 shadow-xl shadow-white/10 leading-relaxed">
                <b>Jay Stack UI</b> goes hand in hand with <b>Tailwindcss</b> and <b>Vite</b>, it is entirely dependent on it , before the Installation make sure you already have tailwindcss installed, if you don't have it installed, install it using the steps on the official <a href={tailwindcss} className="text-sky-500">Tailwindcss Installation</a> site.
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
            text="Generate colors.css"
            dir="Terminal"
            flex=""
            desc="from your root folder, run this to generate colors.css  "
            code={
            <>
            <Red text="node" />
            <Blue text="styles/colors.js" />
            </>
                }
            copy="node styles/colors.js"
            />
            
            
            
            <Step
            step="4"
            text="Import CSS to your main.jsx/tsx"
            dir="main.tsx"
            flex="flex-col"
            desc="Locate colors.js from your project root in styles/colors.js"
            code={
            <>
            <p className="flex">
                <Purple text="import" />
                <Blue text="'../styles/classes.css'"/>
            </p>
             <p className="flex">
                <Purple text="import" />
                <Blue text="'../styles/colors.css'"/>
            </p>
            
            
            </>
                }
            copy="import '../styles/colors.css' import '../styles/classes.css'"
            />
            
            
            
            <div className="w90 border-x border-white px-5 py-10 shadow-xl shadow-white/10 my-10">
                <p className="text-xl font-medium my-5">And That's It</p>
                
                <p>you can start using <b>Jay Stack Ui</b>'s custom <p onClick={openUtil} className="inline tblue">Utility Classes</p> , use and create your own custom colors with colors.js , how to add a custom color?</p>
            </div>
            
            
            
            
          <div>
              
              <p className="text-xl font-medium my-5 mx-3 text-center">Easy, Quick and Customizable Utility Classes</p>
              
           <UtilClass
            className="my-5 flex center py-10"
            content={<button className="btn blue hblue-md">Click Me</button>}
            src="btn.png" 
            mt="top-25"
            cont=""
            />
            
            
            
            
            <UtilClass 
            className="my-10 flex center py-15 gap-2" 
            content={<>
            <div className="btn purple-xs">xs</div>
            <div className="btn purple-sm">sm</div>
            <div className="btn purple-md">md</div>
            <div className="btn purple-lg">lg</div>
            
            </>}
            src="smmd.png"
            mt="top-33"
            cont="my-25"
            />
            
            
            
          
              
          </div>  
            
            
            
            
            <div className="border-x s-lg-white-sm w90 text-center border-white my-15 mt-[150px] py-5 ">
                Visit our <button onClick={openUtil} className="text-sky-500">Utility Classes</button> page for more 
            </div>
            
            
            
            
        </div>
    )
}



