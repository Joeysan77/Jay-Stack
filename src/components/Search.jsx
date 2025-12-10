import Dark from './Dark'

export default function Search({ showSearch, onClose }) {
    return (
    <>
    
    <Dark
    show = { showSearch }
    className="z-40"
    onClick={ onClose }
    />
    
        <div className={`fixed top-0 z-50 left-0 w-full h-full ${showSearch ? 'show' : 'hide'} hide `}>
            <i className="fa fa-xmark text-xl m-3" onClick={onClose}></i>
            <p className="text-center text-2xl ">Search</p>
            <div className="hsblue-sm hbblue w80 my-10 border border-white/50 rounded-xl flex between">
                <input className="px-4 outline-none"  type="search" name="" id="" placeholder="Search Here...."/>
                <i className="fa fa-search text-lg blue px-3 py-1 rounded-r-xl "></i>
            </div>
        </div>
    </>
    )
}