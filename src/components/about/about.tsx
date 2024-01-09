import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Linkedin } from 'lucide-react';

export default function About(){
    return(
        <div id='about' className="container  mx-auto px-4 py-20  ">
            <div className="flex col-2">
                <div className="w-1/2 px-4 mb-0">
                    <span className="text-lg font-bold mb-3 text-blue-600">
                        ABOUT ME
                    </span>
                    <h2 className="text-5xl font-bold pr-0 mb-5 m-0 block w-[470px]">Better design, better experience</h2>
                    <p className="font-medium text-base max-w-[570px] m-0 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ligula, malesuada vel convallis in, tincidunt ut mi Vestibulum sit amet.</p>
                </div>
                <div className="w-1/2 px-4 mb-0">
                    <h3 className="font-semibold text-3xl mb-6 m-0">Connect With Me</h3>
                    <p className="font-medium text-base max-w-[518px] m-0 text-gray-400 mb-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ligula, malesuada vel convallis in, tincidunt ut mi. Vestibulum sit amet urna placerat, tempor soloa demanium testi lor Aliq lorem vitae semper tempor.</p>
                    <div className="align-center gap-5 flex text-gray-400">
                        <div className='w-8 h-8 rounded-full border text-blue-700  border-gray-400 justify-center items-center flex'><Facebook /></div>
                        <div className='w-8 h-8 rounded-full border text-blue-500  border-gray-400 justify-center items-center flex'> <Twitter /></div>
                        <div className='w-8 h-8 rounded-full border text-red-700  border-gray-400 justify-center items-center flex'><Youtube /></div>
                        <div className='w-8 h-8 rounded-full border text-blue-600  border-gray-400 justify-center items-center flex'><Linkedin /></div>     
                    </div>
                </div>
            </div>
        </div>
    )
}
