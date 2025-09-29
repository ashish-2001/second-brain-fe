import { useEffect, useState, useRef} from "react";
import { Button } from "./Button";
import { InputData } from "./Input";

interface CreateContentModalProps {
    open: boolean
    onClose: () => void
}

function CreateContentModal({ open, onClose }: CreateContentModalProps) {
    const [openModal, setOpenModal] = useState(open)
    const [title, setTitle] = useState("")
    const [link, setLink] = useState("")
    const [contentType, setContentType] = useState("")

    const modalRef = useRef<HTMLDivElement>(null)


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
        <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-bold text-center">Create Content</h2>

            <InputData
                placeholder="Enter your title here"
                onChange={(e) => setTitle(e.target.value)}
            />
            <InputData
                placeholder="Put your link here"
                onChange={(e) => setLink(e.target.value)}
            />
            <InputData
                placeholder="Enter your type of content here"
                onChange={(e) => setContentType(e.target.value)}
            />

            <Button
                variant="Primary"
                text="Submit"
                onClick={() => {
                    console.log({ title, link, contentType })
                    onClose()
                }}
            />
            </div>
        </div>
        </div>
    )
}



export { 
    CreateContentModal
}
