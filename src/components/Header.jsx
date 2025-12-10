import Dark from './Dark'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Search from './Search'

/* --------------------------
   Helper: header text by URL
---------------------------*/
function getHeaderText(path) {
    if (path === "/") return "";
    if (path.startsWith("/docs")) return "-Docs";
    if (path.startsWith("/jay-stack-ui")) return "-UI";
    if (path.startsWith("/jay-fonts")) return "-Fonts";
    if (path.startsWith("/about")) return "-About";
    return "";
}

/* --------------------------
            HEADER
---------------------------*/
export function Header() {
    const [showDark, setShowDark] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
   
        
    const location = useLocation()
    const text = getHeaderText(location.pathname)

    return (
        <>
            <Dark
                show={showDark}
                className="z-20"
                onClick={() => {
                    setShowDark(false)
                    setShowMenu(false)
                }}
            />

            <Menu
                show={showMenu}
                onClose={() => {
                    setShowMenu(false)
                    setShowDark(false)
                }}
            />
            
           

            <div className="fixed w-full flex between center py-1 px-2 border-white/10 border-b top-0 backdrop-blur-lg z-10">
                <div className="flex center">
                    <img src="logo.png" className="h-10" alt="logo" />
                    <p className="text-lg font-medium mt-1 tblue">{text}</p>
                </div>

                <div className="flex">
                    <i
                        onClick={() => {
                            setShowDark(true)
                            setShowMenu(true)
                        }}
                        className="far fa-bars text-lg mr-5"
                    ></i>
                    <i className="fa-brands fa-github text-lg mx-5"></i>
                </div>
            </div>
        </>
    )
}

/* --------------------------
              MENU
---------------------------*/
function Menu({ show, onClose }) {
    const location = useLocation()
    const path = location.pathname
    const [showSearch, setShowSearch] = useState(false)
    
    // Compute active button from URL
    function getActive(path) {
        if (path === "/") return "home";
        if (path.startsWith("/docs")) return "documentation";
        if (path.startsWith("/jay-stack-ui")) return "jay-stack";
        if (path.startsWith("/jay-stack-fonts")) return "jay-fonts";
        if (path.startsWith("/about")) return "about";
        return "";
    }

    const active = getActive(path)

    return (
    <>
    
         <Search
            showSearch={ showSearch }
            onClose={() => {
                setShowSearch(false)
            }}
            />
    
    
        <div className={`backdrop-blur-3xl w-[70%] fixed z-30 h-full bg-[rgba(255,255,255,.12)] top-0 rounded-l-3xl py-5 ${show ? 'show right-0' : 'hide -right-full'} `}>

            <div className="flex between v-center px-5 my-3">
                <img src="logo.png" className="h-10" alt="" />
                <i className="fab fa-github text-2xl px-1 py-0 border border-white/60 rounded-full"></i>
            </div>

            <div className="line my-7 w90 gray-md"></div>
            
            <div
            onClick={() => {
                setShowSearch(true)
            }}
             className="border bgray v-center rounded-xl hover:shadow w90 hsblue-sm flex py-1 hbblue">
                <i className="far fa-search px-2 text-lg"></i>
                <input className="text-sm font-light pl-1 outline-none"  type="search" name="" id="" placeholder="Search..."/>
            </div>
            
            
         

            <div className="w90 my-7 ">
                
                <Button 
                icon="fa-home" 
                text="Home" 
                to="/" 
                active={active === "home"} 
                onClick={onClose} 
                />
                
                
                <Button 
                icon="fa-file" 
                text="Documentation" 
                to="/docs" 
                active={active === "documentation"}     
                onClick={onClose} 
                />
                
                
                <Button 
                icon="fa-sidebar" 
                text="Jay Stack UI" 
                to="/jay-stack-ui" 
                active={active === "jay-stack"} 
                onClick={onClose} 
                />



                <Button 
                icon="fa-font-case" 
                text="Jay Stack Fonts" 
                to="/jay-stack-fonts" 
                active={active === "jay-fonts"} 
                onClick={onClose} 
                />
                
                
                <Button 
                icon="fa-circle-info" 
                text="About Us" 
                to="/about" 
                active={active === "about"} 
                onClick={onClose} 
                />
                
                
            </div>
        </div>
     </>
    )
}

/* --------------------------
            BUTTON
---------------------------*/
function Button({ icon, text, active, onClick, to }) {
    return (
        <Link
            onClick={onClick}
            to={to}
            className={`hblue-sm flex px-3 py-1 rounded-lg v-center gap-5 my-3 ${active ? 'purple' : ''}`}
        >
            <div className="flex center w-3 text-lg">
                <i className={`${active ? 'fas' : 'far'} ${icon} `}></i>
            </div>
            <p className={`${active ? 'font-medium' : ''}`}>{text}</p>
        </Link>
    )
}
