import { ShareIcon } from "../icons/ShareIcon";

interface cardProps {
    title: string,
    link: string,
    type: "Twitter" | "Youtube"
}

function Card({type, link, title}: cardProps){
    return ( <div>
        <div className="p-4 bg-white rounded-md border-gray-200 max-w-76 border min-h-48 min-w-72">
            <div className="flex justify-between">
                <div className="flex items-center text-md">
                    <div className="text-gray-500 pr-2">
                        <ShareIcon/>
                    </div>
                    {title}
                </div>
                <div className="flex items-center">
                    <div className="pr-2 text-gray-500">
                        <a href={link} target="_blank">
                            <ShareIcon/>
                        </a>
                    </div>
                    <div className="text-gray-500">
                        <ShareIcon/>
                    </div>
                </div>
            </div>
            
            <div className="pt-4">
                {type === "Twitter" && <blockquote className="twitter-tweet"><a href={link.replace("x.com", "twitter.com")}></a></blockquote>} 
                {type === "Youtube" && <iframe width="240" height="105" src="https://www.youtube.com/embed/Kv_1wzPXUu0?si=w8hf0IsrGgJTOiYi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> }
            </div>
        </div>
    </div>
    )
}

export {
    Card
}