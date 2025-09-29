import type { ChangeEvent } from "react"

interface InputDataProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder: string
}

function InputData({ onChange, placeholder }: InputDataProps) {
    return (
        <input
            onChange={onChange}
            placeholder={placeholder}
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
    )
}

export {
    InputData
}