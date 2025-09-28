import type { ReactElement } from "react"

interface ButtonInterface{
    variant: "Primary" | "Secondary",
    text: string,
    startIcon: ReactElement
    onClick: () => void
}

const variantClasses = {
    "Primary": "bg-purple-600 text-white",
    "Secondary": "bg-purple-200 text-purple-400"
}

const defaultStyles = "px-4 py-2 rounded-md font-light flex"

function Button ({variant, text, startIcon, onClick} : ButtonInterface){
    return (
        <div>
            <button className={`${variantClasses[variant] + " " + defaultStyles} cursor-pointer`} onClick={onClick}> <div className="pr-2">{startIcon}</div> {text}</button>
        </div>
    )
}

export {
    Button
}