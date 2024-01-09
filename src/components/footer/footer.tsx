import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Linkedin } from 'lucide-react';

export default function Footer(){
    return(
        <footer className="pb-12  z-10 relative block bg-slate-900 pt-24">
            <div className="container z-10 mx-auto px-4 py-15">
                <div className="flex  -mx-4">
                    <div className="w-2/6 px-4 block">
                        <div className="mb-10">
                            <h2 className="font-bold text-5xl mb-9 m-0 text-white">Let's Talk!</h2>
                            <h3 className="font-bold text-2xl mb-2 m-0 text-gray-400">Contact Info</h3>
                            <p className="font-medium text-base mb-1 m-0 text-gray-400">closerpage@email.com</p>
                            <p className="font-medium text-base mb-1 m-0 text-gray-400">12 Hilton St, Manchester M1 1Jf</p>
                            <p className="font-medium text-base mb-1 m-0 text-gray-400">+44 012 34 5678</p>
                        </div>
                    </div>
                    <div className="w-2/6 px-4 block">
                        <div className="mb-10 text-gray-400">
                            <h3 className="font-semibold text-lg mb-9 m-0 text-white">What I Do?</h3>
                            <ul>
                                <li>The Studio</li>
                                <li>Sponsoring</li>
                                <li>Newsletter</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-2/6 px-4 block">
                    <div className="mb-10 text-gray-400">
                            <h3 className="font-semibold text-lg mb-9 m-0 text-white">News</h3>
                            <ul>
                                <li>Hot Stuff</li>
                                <li>Perfect Place</li>
                                <li>Vintage</li>
                                <li>Products</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-2/6 px-4 block">
                    <div className="mb-10 text-gray-400">
                            <h3 className="font-semibold text-lg mb-9 m-0 text-white">Quick Links</h3>
                            <ul>
                                <li>Style</li>
                                <li>Health</li>
                                <li>Relationship</li>
                                <li>Legal & Privacy</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-10 pt-12 border-t-2 border-gray-400 z-10">
                    <div className="justify-center items-center flex mb-5 gap-5">
                        <div className='w-8 h-8 rounded-full  text-blue-700  bg-gray-400 justify-center items-center flex'><Facebook /></div>
                        <div className='w-8 h-8 rounded-full  text-blue-500  bg-gray-400 justify-center items-center flex'> <Twitter /></div>
                        <div className='w-8 h-8 rounded-full  text-red-700  bg-gray-400 justify-center items-center flex'><Youtube /></div>
                        <div className='w-8 h-8 rounded-full  text-blue-600  bg-gray-400 justify-center items-center flex'><Linkedin /></div>
                    </div>
                    <p className='z-10 text-gray-400 text-center font-medium text-base m-0'>All rights reserved by &#169; Portfolio creative 2024 </p>
                </div>
            </div>
            <div className='bottom-0 left-0 absolute '>
                <span className='hidden'>Shape</span>
                <svg width={200} height={200} viewBox='0 0 143 138' fill='none'>
                    <circle cx={25} cy={118} r={115} className='fill-blue-900' />
                    <circle cx={25} cy={118} r={80} className='fill-slate-900' />
                </svg>
            </div>
        </footer>
    )
}