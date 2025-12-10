import { useState } from 'react'

export default function Step({ step, text, dir, code, copy, flex, desc }) {

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
                    
                    <p className={` tgreen text-xs ${icon ? "show" : "hide"} `}>Copied</p>
                    <div className="border bgray rounded-lg py-1 px-2 gap-2 flex">
                        
                        
                        <i
                        onClick={() => {
                            copyCode(copy)
                            setIcon(true)
                            setTimeout(() => {
                                setIcon(false)
                            }, 2000)
                        }}
                         className={`far  ${icon ? "fa-check tgreen" : "fa-copy tgray"} `}></i>
                    </div>
                </div>
                
                
                <div className={` bg-[rgba(255,255,255,.05)] rounded-lg p-2 mt-2 flex ${flex} `}>
                    {code}
                </div>
            </div>
            
            
        </div>
    )
}

 