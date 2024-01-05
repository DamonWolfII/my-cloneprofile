import Link from 'next/link'

export default function Button(){
    return(
        <div className="flex px">
            <Link href='' className="px-8 py-3 font-bold  text-white text-base hover:bg-blue-500  rounded-full  bg-blue-600 shadow hover:shadow-2xl">Download CV</Link>
        </div>
    )
}

