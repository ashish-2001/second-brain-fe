import type { ReactElement } from "react"

interface ButtonInterface{
    variant: "Primary" | "Secondary",
    text?: string,
    startIcon?: ReactElement
    onClick?: () => void;
    fullWidth?: boolean;
}

const variantClasses = {
    "Primary": "bg-purple-600 text-white",
    "Secondary": "bg-purple-200 text-purple-600"
}

const defaultStyles = "px-4 py-2 rounded-md font-light flex"

function Button ({variant, text, startIcon, onClick, fullWidth} : ButtonInterface){
    return (
        <div>
            <button className={`${variantClasses[variant] + " " + defaultStyles + `${fullWidth  ? " w-full items-center justify-center" : "" }` } ${startIcon ? "cursor-pointer" : "pr-6 cursor-pointer"} hover:scale-105 duration-200 transition-all`} onClick={onClick}> <div className="pr-2">{startIcon}</div> {text}</button>
        </div>
    )
}

export {
    Button
}