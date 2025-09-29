import type { ReactElement } from "react";

interface SidebarItemProps {
    text: string;
    icon: ReactElement
}

function SidebarItem({icon, text}: SidebarItemProps){
    
    return(
        <div className={`${text=="Brain App" ? "flex text-3xl gap-3 pt-4 pl-3" : "hover:bg-purple-100 hover:cursor-pointer rounded-md text-2xl p-2 flex justify-start items-center gap-3 w-full hover:transition-all hover:duration-100"}`}>
            <div>
                {icon} 
            </div>
            <div>
                {text}
            </div>
        </div>
    )
}

export { 
    SidebarItem 
}