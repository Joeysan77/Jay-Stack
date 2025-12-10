import Threads from './threads/Threads'

export default function Welcome() {
    return (
        <div className="relative w-full">
            
            <div className="w-[100%] relative h-[400px] mt-0">
  <Threads
    amplitude={1}
    distance={0}
    enableMouseInteraction={true}
  /> 
            </div>
                    
        <div className="absolute top-0 w-full pt-10">
            
           <div className="text-center mx-10 my-5">
           
               
               <p className=" inline text-3xl font-bold my-10 text-center">    
               <p className="inline text-4xl font-bold tblue">JayStack</p> : Optimizing Frontend Designs</p>
           </div>
         
         <div className="flex center gap-5 mt-5">
                     <button className="border text-sm px-6 py-3 rounded-full border-white/10 backdrop-blur-lg shadow">Learn more</button>
                
                <button className="blue text-sm px-6 py-3 rounded-full shadow-xl sblue-xs">Get Started</button>
           
            </div>
            
        </div>
            
            
        </div>
    )
}