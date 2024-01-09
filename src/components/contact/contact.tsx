export default function Contact(){
    return(
        <div id="contact" className="bg-gray-100">
            <div className=" container  mx-auto px-4  py-32">
                <div className="block ">
                    <div className="flex flex-wrap -mx-4">
                        <div className="px-4 w-full">
                            <div className="text-center mb-12 mx-auto max-w-xl">
                                <span className="font-semibold text-lg block mb-2 text-blue-500">Contact With Me</span>
                                <h2 className="text-5xl font-bold mb-5">Have an Project in Mind?</h2>
                                <p className="font-medium text-lg block m-0 text-gray-400">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="justify-center flex -mx-4">
                    <div className="px-4 w-9/12">
                        <form>
                            <div className="flex  flex-wrap">
                                <div className="w-1/2 px-4">
                                    <div className="mb-6">
                                        <input type="text" placeholder="Enter your name" className="bg-gray-200 w-full px-8 py-4 font-medium text-base"/>
                                    </div>
                                </div>
                                <div className="w-1/2 px-4">
                                    <div className="mb-6">
                                        <input type="text" placeholder="Company (Optional)" className="bg-gray-200 px-8 w-full py-4 font-medium text-base"/>
                                    </div>
                                </div>
                                <div className="w-1/2 px-4">
                                    <div className="mb-6">
                                        <input type="text" placeholder="Enter your email" className="bg-gray-200 w-full px-8 py-4 font-medium text-base"/>
                                    </div>
                                </div>
                                <div className="w-1/2 px-4">
                                    <div className="mb-6">
                                        <input type="text" placeholder="Phone number" className="bg-gray-200 px-8 w-full py-4 font-medium text-base"/>
                                    </div>
                                </div>
                                <div className="w-full px-4">
                                    <div className="mb-6">
                                        <textarea placeholder="Tell me about your project" className="w-full py-4 px-8 bg-gray-200 font-medium text-base" rows={4}/>
                                    </div>
                                </div>
                                <div className="px-4 w-full">
                                    <div className="text-center pt-4">
                                        <button className="font-semibold px-9 py-4 bg-blue-500 rounded-full justify-center items-center text-white">Contact Me</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}