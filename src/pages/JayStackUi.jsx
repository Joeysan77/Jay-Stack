import { useState, useRef } from 'react'
import Footer from '../components/Footer'
import GettingStarted from '../components/GettingStarted'
import Installation from '../components/Installation'
import Documentation from '../components/Documentation'
import Utility from '../components/Utility'
import { scrollToTop } from '../functions/scrollToTop'

export default function JayStackUi() {

    const [active, setActive] = useState('installation')
    const [page, setPage] = useState('')
    const pageRef = useRef(null)

    function changePage( newActive, newPage, amount ) {
        setActive(newActive);
        setPage(newPage);
        setTimeout(scrollToTop, 200);
        pageRef.current?.scrollTo({ left: amount, behavior: "smooth"})
    }
  

    return (
        <div className="py-5">
          <div className="top-12 mt-0 z-10 py-3 bg-[#060010] fixed w-screen">
            <div ref={pageRef} className="hide-scrollbar overflow-x-auto whitespace-nowrap flex sticky">
                
                <Page
                text="Installation"
                active={active === 'installation'}
                onClick={() => {
                    changePage('installation', '-translate-x-[0]', 0)
                  
                }}
                />
                
                <Page
                text="Getting Started"
                active={active === 'gett'}
                onClick={() => {
                    changePage('gett', '-translate-x-[25%]', 50)
                }}
                />
                
                <Page
                text="Documentation"
                active={active === 'docs'}
                onClick={() => {
                    changePage('docs', '-translate-x-[50%]', 100)
                }}
                />
                
                <Page
                text="Utility Classes"
                active={active === 'util'}
                onClick={() => {
                    changePage('util', '-translate-x-[75%]', 150)
                }}
                />
                
            </div>
           </div>
            
            <Div
            page={page}
            openUtil={() => {
                changePage('util', '-translate-x-[75%]', 150)
            }}
            openInstall={() => {
                changePage('installation', '-translate-x-[0]', 0)
            }}
            />
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

function Div({ page, openUtil, openInstall }) {
    return (
    <div className="relative overflow-hidden w-screen">
        
        <div className={`transform ${page} flex w-[400%] `}>
           <Installation openUtil={openUtil} />
           <GettingStarted openInstall={openInstall}/>
           <Documentation />
           <Utility />
        </div>
        
    </div>
    
    )
}


































