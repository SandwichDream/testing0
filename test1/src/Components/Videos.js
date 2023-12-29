import { FaPlay } from "react-icons/fa";

export default function Videos() {
    return (<div className="videos d-flex">
        <div className="video">
            <div className="d-flex justify-content-center align-items-center"><FaPlay/></div>
            <p>Название видео</p>
        </div>
        <div className="video">
            <div className="d-flex justify-content-center align-items-center"><FaPlay/></div>
            <p>Название видео</p>
        </div>
    </div>)
}