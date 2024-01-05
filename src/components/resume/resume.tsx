export default function Resume(){
    return(
        <div className="container  mx-auto px-4 py-20">
            <div className=" flex flex-col items-center justify-center w-[600px] mx-auto pb-10">
                <span className="mb-2 block font-semibold text-lg text-blue-600/100 text-center">Education & Experience</span>
                <h2 className="mb-5 m-0 block text-center font-bold text-5xl">My Resume</h2>
                <p className="text-gray-400 text-center font-medium text-xl m-0 block  ">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
            </div>
            <div className="pt-12">
                <span className="left-1/2 w-[1px] h-full bg-blue-600 block t-0 absolute"></span>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-1/2 px-4">
                        <div className="text-right px-0 mr-5 pb-12 relative">
                            <span className=" left-auto w-4 h-4 bg-white border-4 border-blue-600 rounded-full top-10 absolute right-[-2.75rem]"></span>
                            <h3 className="font-bold text-xl mb-1 m-0 block pt-10">UI/UX Designer</h3>
                            <p className="font-bold text-base mb-3 m-0 text-gray-400">Google INC | New York</p>
                            <span className="font-bold text-xs py-2 px-4 rounded-full justify-center items-center">2011-2013</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}