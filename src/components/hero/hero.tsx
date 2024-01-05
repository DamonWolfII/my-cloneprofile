import Image from "next/image"
import heroimg from "@/asset/image/hero-image.png"
import Link from 'next/link'

export default function Hero(){
    return(
            <div className="flex col-2 pt-4">
                <div className="w-1/2 px-4 self-center">
                    <h1 className="text-blue-600/100 font-semibold text-base mb-3 ">Hey There 👋 I am 
                        <span className="mt-1 block font-bold text-stone-950/100 text-5xl">Daniel Jack</span>
                    </h1>
                    <h2 className="font-medium mb-5 text-gray-400 text-xl">Professional 
                        <span className="text-black">
                            &nbsp;Graphic Designer
                        </span>
                    </h2>
                    <div className="mb-11 font-semibold  text-gray-400 text-base">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p><p>Aenean interdum consequat convallis.</p>
                    </div>
                   <div className="flex item-center gap-4">
                        <Link href='' className="px-8 py-3 font-bold  text-white text-base hover:bg-blue-500  rounded-full bg-blue-600 shadow hover:shadow-2xl">Contact Me</Link>
                        <Link href='' className="px-8 py-3 font-bold  text-white text-base   rounded-full  bg-black shadow hover:shadow-2xl">Learn More</Link>
                    </div>
                </div>
                <div className="w-1/2 px-4 self-end">
                    <div className="mt-0 z-10 relative block">
                        <Image 
                        src={heroimg}
                        alt='Hero'
                        className="max-width-full mx-auto"
                        />
                    </div>
                </div>
            </div>
    )
}