
import Logo from "../assets/Images/logo-text.png"

const footer = () => {
  return (
 
    <footer>

        <div className="border-y border-gray-200 my-15">
            
            <div className="container mx-auto px-4 py-4 grid grid-cols-1 md:grid-cols-12 my-15">

                {/* Left side logo and social media */}

                <div className="col-span-1 md:col-span-4 text-center md:text-left">

                    <div className="space-y-3">
                        
                        <img src={Logo}alt="Dev Stack Logo"className="mx-auto md:mx-0"/>
                        <p className="mt-2">Curated tools, technologies, and resources for developers building modern software.</p>

                        <ul className="flex justify-center md:justify-start gap-4 mt-2">
                            <li className="text-[#475569] hover:text-[#D91B7E]">
                                <a href="">GitHub</a>
                            </li>

                            <li className="text-[#475569] hover:text-[#D91B7E]">
                                <a href="">Twitter</a>
                            </li>

                            <li className="text-[#475569] hover:text-[#D91B7E]">
                                <a href="">LinkedIn</a>
                            </li>
                        </ul>

                    </div>

                </div>
                
                {/* Right side and icons*/}
                <div className="col-span-1 md:col-span-8 flex justify-between md:gap-8">

                    {/* Product */}
                    <div>
                        <p className='font-semibold'>PRODUCT</p>
                        <ul className="space-y-3">
                            <li className='text-[#475569] hover:text-[#D91B7E]'>
                                <a href="">Home</a>
                            </li>
                            <li className='text-[#475569] hover:text-[#D91B7E]'>
                                <a href="">Technologies</a>
                            </li>
                            <li className='text-[#475569] hover:text-[#D91B7E]'>
                                <a href="">Projects</a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <p className='font-semibold'>COMPANY</p>
                        <ul className="space-y-3">
                            <li className='text-[#475569] hover:text-[#D91B7E]'>
                                <a href="">About</a>
                                </li>
                            <li className='text-[#475569] hover:text-[#D91B7E]'>
                                <a href="">Contact</a>
                                </li>
                            <li className='text-[#475569] hover:text-[#D91B7E]'>
                                <a href="">Careers</a>
                                </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <p className='font-semibold'>LEGAL</p>
                        <ul className="space-y-3">
                            <li className='text-[#475569] hover:text-[#D91B7E]'>
                                <a href="">Privacy Policy</a>
                            </li>
                            <li className='text-[#475569] hover:text-[#D91B7E]'>
                                <a href="">Terms of Service</a>
                            </li>
                        </ul>
                    </div>
                </div>    

            </div>

        </div >

        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center md:justify-between gap-3">
            
            <p className="text-[#94A3B8] text-center md:text-left"> © 2026 Dev Stack. All rights reserved.</p>

            <ul className="flex justify-center md:justify-end gap-4">
                <li className="text-[#94A3B8] hover:text-[#D91B7E]">
                    <a href="">Privacy</a>
                </li>
                <li className="text-[#94A3B8] hover:text-[#D91B7E]">
                    <a href="">Terms</a>
                </li>
            </ul>

        </div>

    </footer>
  )
}

export default footer
