import ServiceCard from './servicecard'
import { UserSearch, FileStack, Users, FolderCog } from 'lucide-react';


export default function Services(){
    return(
        <div className="bg-gray-100">
            <div className="container  mx-auto px-4 py-20 ">
                <div className=" flex flex-col items-center justify-center w-[600px] mx-auto pb-10">
                    <span className="mb-2 block font-semibold text-lg text-blue-600/100 text-center">What I Offer?</span>
                    <h2 className="mb-5 m-0 block text-center font-bold text-5xl">My Services</h2>
                    <p className="text-gray-400 text-center font-medium text-xl m-0 block  ">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
                </div>
                <div className='flex gap-5 py-5'>
                    <div className='py-10 px-4 shadow-xl'>
                        <ServiceCard
                            icon= {<UserSearch className='text-white  w-14 h-14 '/>}
                            title='User Reasearch'
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.'
                        />
                    </div>
                    <div className='py-10 px-8 shadow-xl'>
                        <ServiceCard
                            icon={<FileStack className='text-white  w-14 h-14 '/>}
                            title='Visual Design'
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.'
                        />
                    </div>
                    <div className='py-10 px-8 shadow-xl'> 
                        <ServiceCard
                            icon={<Users className='text-white  w-14 h-14 '/>}
                            title='User Testing'
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.'
                        />
                    </div>
                    <div className='py-10 px-8 shadow-xl'>
                        <ServiceCard
                            icon={<FolderCog className='text-white  w-14 h-14 '/>}
                            title='Prototype'
                            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligulavel in.'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}