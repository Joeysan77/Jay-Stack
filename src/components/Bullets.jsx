export default function Bullets({ text }) {
    return (
        <div className="flex px-4 gap-5 my-2">
            <i className="fa fa-circle-small"></i>
            <p>{text}</p>
        </div>
    )
}