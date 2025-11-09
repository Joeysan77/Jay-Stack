export default function JayFontsCard() {
    return (
        <div className="w90 my-30 blue-xs border  bblue-md rounded-2xl shadow-xl sblue-sm ">
            
            <img src="fonts.png" className="rounded-2xl mb-8 w-full"alt=""/>
            
            <p className="font-medium mx-5 text-xl">Jay-Stack-Fonts</p>
            <p className=" text-sm mx-5 mt-5  mb-5 tgray-lg">Get a handful of fonts to choose from, install and use with just <b>One npm command</b>, if minimalism and professionalism is your style then <b>Jay Fonts</b> is the tool for you......</p>
            
            <button className="shadow-xl sblue-sm w95 blue  flex center gap-10 py-2 rounded-xl my-2">
                <p>Learn more</p>
                <i className="far fa-chevron-right"></i>
            </button>
            
        </div>
    )
}