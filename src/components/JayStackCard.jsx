import { Link } from 'react-router-dom'

export default function JayStackCard() {
    return (
        <div className="border bblue-sm blue-xs shadow-xl sblue-sm rounded-2xl w90 my-20">
            <img src="tailwind_jay-stack.png" className="rounded-2xl mb-10" alt=""/>
            <p className="font-medium mx-5 text-xl">Jay-Stack-UI</p>
            <p className=" text-sm mx-5 mt-5  mb-10 tgray-lg">Making Frontend Development easier one file at a time, <b>Jay Stack</b> is dependent on <b>TailwindCss</b> as all custom classes are applied with tailwindcss modules......</p>
            
            <Link to="/jay-stack-ui" className="shadow-xl sblue-sm w95 blue  flex center gap-10 py-2 rounded-xl my-2">
                <p>Learn more</p>
                <i className="far fa-chevron-right"></i>
            </Link>
        </div>
    )
}
