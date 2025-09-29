import { Brain } from "../icons/Brain"
import { Link } from "../icons/Links"
import { Twitter } from "../icons/Twitter"
import { Youtube } from "../icons/Youtube"
import { SidebarItem } from "./SidebarItem"
import { Document } from "../icons/Documents"
import { Tag } from "../icons/Tag"

function Sidebar(){
    return(
        <div className="h-screen bg-white w-76 absolute left-0 top-0 shadow-[10px_0_10px_rgba(128,0,128,0.1)]">
            <div className="h-screen bg-white justify-center items-center w-72 fixed left-0 top-0">
                <div className="pb-6 font-semibold">
                    <SidebarItem text="Brain App" icon={<Brain/>}/>
                </div>
                <SidebarItem icon={<Twitter/>} text="Tweets"/>
                <SidebarItem icon={<Youtube/>} text="Videos"/>
                <SidebarItem icon={<Document/>} text="Documents"/>
                <SidebarItem icon={<Link/>} text="Links"/>
                <SidebarItem icon={<Tag/>} text="Tags"/>
            </div>
        </div>
    )
}

export {
    Sidebar
}