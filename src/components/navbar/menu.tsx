import Link from 'next/link'

export default function Menu(){
    return(
        <div className='py-0  w-full flex-1 justify-between'>
            <ul className='flex '>
                <li className="relative"><Link className="pl-4 inline-flex  text-base ml-8" href='#home'>Home</Link></li>
                <li className="relative"><Link className="pl-4 inline-flex  text-base ml-8" href='#about'>About</Link></li>
                <li className="relative"><Link className="pl-4 inline-flex  text-base ml-8" href='#services'>Services</Link></li>
                <li className="relative"><Link className="pl-4 inline-flex  text-base ml-8" href='#resume'>Resume</Link></li>
                <li className="relative"><Link className="pl-4 inline-flex  text-base ml-8" href='#contact'>Contact</Link></li>
            </ul>
        </div>
    )
}