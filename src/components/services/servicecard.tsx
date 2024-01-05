import { ReactNode } from "react";

interface CardProps{
    icon: ReactNode;
    title:string;
    description:string;
}

export default function ServiceCard({icon, title,description}:CardProps){
    return(
        <div className=" text-center items-center py-10 px-8 flex flex-col">
            <div className="  h-20 w-20 bg-blue-600 justify-center items-center rounded-full flex ">{icon}</div>
            <h3 className="mb-3 m-0 block font-bold text-2xl">{title}</h3>
            <p className="font-medium text-sm block text-gray-400">{description}</p>
        </div>
    )
}