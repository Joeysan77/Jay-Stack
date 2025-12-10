import { useEffect } from 'react'

export default function Dark({ show, className, onClick }) {

     useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);



    return (
        <div 
        onClick={onClick}
        className={`top-0 w-full fixed h-full backdrop-blur-lg bg-[rgba(0,0,0,.6)] ${show ? 'show' : 'hide'} ${className}`}>
             
        </div>
        
    )
}

