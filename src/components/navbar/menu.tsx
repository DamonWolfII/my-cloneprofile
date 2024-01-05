import Link from 'next/link'

export default function Menu(){
    return(
        <div className='py-0  w-full flex-1 justify-between'>
            <ul className='flex px-8'>
                <li className="relative"><Link className="pl-4 inline-flex  text-base ml-8" href='#'>Home</Link></li>
                <li className="relative"><Link className="pl-4 inline-flex  text-base ml-8" href='#'>About</Link></li>
                <li className="relative"><Link className="pl-4 inline-flex  text-base ml-8" href='#'>Services</Link></li>
                <li className="relative"><Link className="pl-4 inline-flex  text-base ml-8" href='#'>Resume</Link></li>
                <li className="relative"><Link className="pl-4 inline-flex  text-base ml-8" href='#'>Contact</Link></li>
            </ul>
        </div>
    )
}