const Footer = () => {
  return (
    <div className="flex items-center justify-between w-11/12 m-10 p-5 ">
        <div className="h-full">
            <img src="src/assets/LogoBanner.png" alt="" className="w-48" />
        </div>
        <div className="">
            <p>OneVarsity © 2024 All rights reserved</p>
        </div>
        <div className="flex flex-row gap-3 w-48">
            <div className=" border border-black w-fit rounded-full">
                <img src="src/assets/FacebookIcon.png" alt="" className="p-1" />
            </div>
            <div className=" border border-black w-fit rounded-full">
                <img src="src/assets/TwitterIcon.png" alt="" className="p-1" />
            </div>
            <div className=" border border-black w-fit rounded-full">
                <img src="src/assets/LinkedinIcon.png" alt="" className="p-1" />
            </div>
            <div className=" border border-black w-fit rounded-full">
                <img src="src/assets/InstagramIcon.png" alt="" className="p-1" />
            </div>
            
            
        </div>
    </div>
  )
}

export default Footer