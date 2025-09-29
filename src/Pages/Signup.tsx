import { Button } from "../components/Button"
import { InputData } from "../components/Input"

function Signup(){
    return(
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded border min-w-48">
                <InputData placeholder="Username"/>
                <InputData placeholder="Password"/>
                <Button variant="Primary" text="Signup" />
            </div>
        </div>
    )
}

export {
    Signup
}