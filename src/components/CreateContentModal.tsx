import { useEffect, useState, useRef} from "react";
import { Button } from "./Button";
import { InputData } from "./Input";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";

interface CreateContentModalProps {
    open: boolean
    onClose: () => void
}

    enum ContentType {
        Youtube = "Youtube",
        Twitter = "Twitter"
    }


function CreateContentModal({ open, onClose }: CreateContentModalProps) {
    const [openModal, setOpenModal] = useState(open)
    const [title, setTitle] = useState("")
    const [link, setLink] = useState("")
    const [contentType, setContentType] = useState("");
    const [type, setType ] = useState<ContentType>(ContentType.Youtube)
    const navigate = useNavigate();

    const modalRef = useRef<HTMLDivElement>(null)

        const titleRef = useRef<HTMLInputElement>(null);
        const linkRef = useRef<HTMLInputElement>(null);


    useEffect(() => {
        setOpenModal(open)
    }, [open])

        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            onClose()
        }
    }
    
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
        document.removeEventListener("mousedown", handleClickOutside)
    }
    }, [onClose])

    if (!openModal) {
        return null
    }

    async function addContent(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/vi/content`, {
            link,
            title,
            type
        }, {
            headers:{
                "Authorization": localStorage.getItem("token")
            }
        })

        onClose()
    }

    const youtubeType:ContentType = ContentType.Youtube;
    const twitterType:ContentType = ContentType.Twitter

    return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
        <div className="bg-white rounded-xl shadow-lg w-96 p-6 relative" ref={modalRef}>
        {/* Close Button */}
        <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1 rounded-full hover:bg-purple-200 cursor-pointer"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>

        {/* Modal Content */}
        <div className="flex flex-col space-y-4 justify-center items-center">
            <h2 className="text-lg font-bold text-center">Create Content</h2>

            <InputData
                reference={titleRef}
                placeholder="Enter your title here"
            />
            <InputData
                reference={linkRef}
                placeholder="Put your link here"
            />

            <div className="flex flex-col font-semibold justify-center items-center gap-3">
                <h1>Type of Content</h1>
                <div className="flex gap-5">
                    <Button text="Youtube" variant={ type === ContentType.Youtube ? "Primary" : "Secondary"} onClick={() => { setType(ContentType.Youtube)}}/>
                    <Button text="Twitter" variant={ type === ContentType.Twitter ? "Primary" : "Secondary"} onClick={() => setType(ContentType.Twitter)}/>
                </div>
            </div>

            <Button
                onClick={addContent}
                variant="Primary"
                text="Submit"
                fullWidth={true}
            />
            </div>
        </div>
        </div>
    )
}



export { 
    CreateContentModal
}
