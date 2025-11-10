import { useState } from 'react'
import Footer from '../components/Footer'
import GettingStarted from '../components/GettingStarted'
import Installation from '../components/Installation'
import Documentation from '../components/Documentation'
import Utility from '../components/Utility'


export default function JayStackUi() {

    const [active, setActive] = useState('installation')
    const [page, setPage] = useState('')

    return (
        <div>
          <div className="top-12 mt-0 z-10 py-3 bg-[#060010] fixed w-screen">
            <div className="hide-scrollbar overflow-x-auto whitespace-nowrap flex sticky">
                
                <Page
                text="Installation"
                active={active === 'installation'}
                onClick={() => {
                    setActive('installation')
                    setPage("")
                }}
                />
                
                <Page
                text="Getting Started"
                active={active === 'gett'}
                onClick={() => {
                    setActive('gett')
                    setPage("-translate-x-100")
                }}
                />
                
                <Page
                text="Documentation"
                active={active === 'docs'}
                onClick={() => {
                    setActive('docs')
                    setPage("-translate-x-200")
                }}
                />
                
                <Page
                text="Utility Classes"
                active={active === 'util'}
                onClick={() => {
                    setActive('util')
                    setPage("-translate-x-300")
                }}
                />
                
            </div>
           </div>
            
            <Div
            page={page}
            openUtil={() => {
                setActive("util")
                setPage("-translate-x-300")
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

function Div({ page, openUtil }) {
    return (
    <div className="relative overflow-hidden">
        
        <div className={`transform ${page} flex w-[400%] `}>
           <Installation openUtil={openUtil} />
           <GettingStarted/>
           <Documentation />
           <Utility />
        </div>
        
    </div>
    
    )
}


































