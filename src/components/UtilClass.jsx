export default function UtilClass({ content, className, src, mt,cont }) {
    return (
        <div className={`relative pb-20 ${cont} w-full`}>
            <div className={`bg-white/80 ${className} rounded-xl `}>{content}</div>
            <img src={src} alt="" className={`w50 rounded-xl absolute ${mt} shadow-lg shadow-white/10 border-x border-white`}></img>
        </div>
    )
}