import { useRef } from "react"
import { Button } from "../components/Button"
import { InputData } from "../components/Input"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup(){

    const navigate = useNavigate();
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();

    async function signup(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

    await axios.post(BACKEND_URL + "/api/v1/signup", {
        
            username,
            password
        
    })

        navigate("/signin")
}
    

    return(
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center absolute">
            <div className="bg-white flex flex-col rounded border min-w-60 min-h-40 items-center border-purple-600 justify-center gap-3 p-3">
                <InputData reference={usernameRef} placeholder="Username"/>
                <InputData reference={passwordRef} placeholder="Password"/>
                <div className="flex justify-center pt-4">
                    <Button onClick={signup} variant="Primary" text="Signup" fullWidth={true}/>
                </div>
            </div>
        </div>
    )
}

export {
    Signup
}