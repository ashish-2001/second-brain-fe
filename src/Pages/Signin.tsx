import { useRef } from "react";
import { Button } from "../components/Button"
import { InputData } from "../components/Input"
import { BACKEND_URL } from "../config";
import axios  from "axios";
import { useNavigate } from "react-router-dom";

function Signin(){


        const navigate = useNavigate()
        const usernameRef = useRef<HTMLInputElement>();
        const passwordRef = useRef<HTMLInputElement>();

    async function signin(){
                
                const username = usernameRef.current?.value;
                const password = passwordRef.current?.value;
        
            const response: Response = await axios.post(BACKEND_URL + "/api/v1/signin", {

                    username,
                    password
                
            })

            const jwt = response.data.token;
            localStorage.setItem("token",jwt)
            navigate("/dashboard")
    }
    return(
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center absolute">
            <div className="bg-white flex flex-col rounded border min-w-60 min-h-40 items-center border-purple-600 justify-center gap-3 p-3">
                <InputData placeholder="Username" reference={usernameRef}/>
                <InputData placeholder="Password" reference={passwordRef}/>
                <Button variant="Primary" onClick={signin} text="Signin" fullWidth={true}/>
            </div>
        </div>
    )
}

export {
    Signin
}