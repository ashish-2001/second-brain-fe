import { useEffect, useState } from "react";

interface CreateContentModalProps {
    open: boolean;
    onClose: () => void;
}

function CreateContentModal({open, onClose} : CreateContentModalProps){
    const [openModal, setOpenModal] = useState(open);

    useEffect(() => setOpenModal(open), [open])

    if(!open){
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/10 backdrop-blur-xs z-50 bg-opacity-40">
            <div className="bg-white p-g rounded-xl shadow-lg w-96">
                <h2 className="text-lg font-bold mb-4">Create Content</h2>
                <p className="mb-4 text-gray-600">This is your modal body...</p>
                <div className="flex justify-end space-x-2">
                    <button className="px-4 py-2 bggray-200 rounded-lg cursor-pointer" onClick={onClose}>
                        Cancel
                    </button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer" onClick={() => {
                        onClose()
                    }}>Create</button>
                </div>
            </div>
        </div>
    )
}


export{
    CreateContentModal
}