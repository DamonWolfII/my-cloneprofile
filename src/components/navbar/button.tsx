import Link from 'next/link'

export default function Button(){
    return(
        <div className="flex  ">
            <Link href='' className="px-8 py-3 font-bold  text-white text-base hover:bg-blue-500 focus:ring-4 rounded-full focus:ring-blue-300 bg-blue-600 shadow hover:shadow-2xl">Download CV</Link>
        </div>
    )
}

