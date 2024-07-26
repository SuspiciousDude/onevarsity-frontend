import { useState } from "react";
import UserProfile from "./UserProfile";

const UniversityProfile = () => {
    const [buttonId, setButtonId] = useState(1);

    const handleClick = (buttonID) => {
        setButtonId(buttonID);
    }
    

  return (
    <div className="w-2/3 flex flex-col font-inter">
        <div className="shadow-gray-500/50 shadow-sm w-full bg-white rounded-lg" >
            <div className="university-profile w-full flex ">
                <div className="group cover-img relative " >
                    <img src="src/assets/Cover.png" alt="" className="w-full" />
                    <button className="duration-300 invisible group-hover:visible group-hover:ease-in group-hover:scale-110 flex items-center justify-center font-bold btn btn-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 text-white px-4  " >
                        <span className="m-1 p-2" >
                            <img src="src/assets/Edit.png" alt="" className="h-5" />
                        </span>
                        <span className="font-inter" >
                            Edit Cover
                        </span>
                    </button>
                </div>
            </div>
            <div className="university-details w-full h-32 p-4 px-7 flex items-start justify-center gap-2 relative ">
                <div className="university-photo -translate-y-16 w-1/5 ">
                    <img src="src/assets/University.png" alt="" className="h-36 w-36" />
                </div>
                <div className="university-info font-inter w-3/5 ">
                    <div className="university-name">
                        <div className="text-2xl font-bold " >
                            College/University Name
                        </div>
                        <div className="flex items-center" >
                            <span><img src="src/assets/Location.png" alt="" className="inline w-6 " /></span>
                            <span>Delhi, India</span>
                        </div>
                        <div>
                            <span>28k followers</span>
                            <span> • </span>
                            <span>8k likes</span>
                        </div>
                    </div>
                </div>
                <div className="profile-buttons flex flex-col w-1/5 gap-2 ">
                    <button className="rounded-full w-full p-1 justify-center items-center font-bold bg-blue-600 text-white flex h-2/7 " >
                        <span>
                            <img src="src/assets/Edit.png" alt="" className="w-1/2" />
                        </span>
                        <span className="font-inter" >
                            Edit Profile
                        </span>
                    </button>
                    <button className="border-2 w-full p-1 border-blue-600 rounded-full text-blue-600 font-bold flex items-center justify-center" >
                        View Dashboard
                    </button>
                </div>
            </div>
        </div>
        <div className="container flex w-full py-1 my-1 gap-2 " >
            <button className={`btn my-4 font-inter px-4 py-2 border-2 border-transparent rounded-full ${buttonId === 1 ? 'bg-white border-2 border-slate-950/50' : ""} `} onClick={() => setButtonId(1)}>
                Home
            </button>
            <button className={`btn my-4 font-inter px-4 py-2 border-2 border-transparent rounded-full ${buttonId === 2 ? 'bg-white border-2 border-slate-950/50' : ""} `} onClick={() => setButtonId(2)} >
                About
            </button>
            <button className={`btn my-4 font-inter px-4 py-2 border-2 border-transparent rounded-full ${buttonId === 3 ? 'bg-white border-2 border-slate-950/50' : ""} `} onClick={() => setButtonId(3)} >
                Posts
            </button>
            <button className={`btn my-4 font-inter px-4 py-2 border-2 border-transparent rounded-full ${buttonId === 4 ? 'bg-white border-2 border-slate-950/50' : ""} `} onClick={() => setButtonId(4)} >
                Courses
            </button>
            <button className={`btn my-4 font-inter px-4 py-2 border-2 border-transparent rounded-full ${buttonId === 5 ? 'bg-white border-2 border-slate-950/50' : ""} `} onClick={() => setButtonId(5)} >
                People
            </button>
        </div>
        <div className="about w-full my-2 bg-white rounded-lg">
            <div className="p-4">
                <div className="m-2 mb-4" >
                    <span className="font-bold text-2xl" >About</span>
                </div>
                <div >
                    <span>
                    🌟 Exciting Announcement! 🌟 We thrilled to share that OneVarsity will be delivering a guest lecture at the prestigious University of Kashmir on ESG (Environmental, Social, and Governance) reporting! ESG reporting is a vital tool for companies to transparently communicate their sustainability efforts and performance across environmental, social, and governance dimensions. Join us as we explore the significance of ESG reporting and its role in driving positive change in the corporate landscape. 
                    </span>
                </div>
                <div className="border-t-2   flex items-center justify-center mt-5 h-10 hover:cursor-pointer" >
                    <span className="text-slate-600 font-bold" >View More</span>
                </div>
            </div>
        </div>
        <div className="posts w-full container flex flex-col bg-white rounded-lg my-2 ">
            <div className="flex flex-col p-4">
                <div className="flex justify-between">
                    <p className="font-bold text-2xl" >Posts</p>
                    <button className="btn font-inter px-4 py-2 border-2 rounded-full border-blue-600 text-blue-600 font-bold" >+ Create Post</button>
                </div>
                <div className="flex flex-col">
                    <div className="buttons flex gap-2">
                        <button className="btn font-inter px-3 py-1 border-2 rounded-full border-slate-400 text-slate-600 font-bold" >Feed</button>
                        <button className="btn font-inter px-3 py-1 border-2 rounded-full border-slate-400 text-slate-600 font-bold" >Jobs</button>
                    </div>
                    <div className="flex flex-col rounded-lg border-2 mt-4">
                        <div className=" flex gap-2 p-2">
                            <div className="w-1/12" >
                                <img src="src/assets/University.png" alt="" />
                            </div>
                            <div>
                                <p className="text-slate-600 font-bold" >College/University Name</p>
                                <p>Location</p>
                                <p>3h ago</p>
                            </div>
                        </div>
                        <div className="p-2">
                            <p>🌟 Exciting Announcement! 🌟 We thrilled to share that OneVarsity will be delivering a guest lecture at the prestigious University of Kashmir on ESG (Environmental, Social, and Governance) reporting! ESG reporting is a vital tool for companies to transparently communicate their sustainability efforts and performance across environmental, social, and governance dimensions. Join us as we explore the significance of ESG reporting and its role in driving positive change in the corporate landscape. </p>
                        </div>
                        <div className="text-right px-3 " >
                            <p>...see more</p> 
                        </div> 
                        <div className="flex px-2 justify-between m-1">
                            <div className="">
                                <img src="src/assets/Like.png" alt="" className="inline" />
                                <span className="text-zinc-900" > 53</span>
                            </div>
                            <div className="">
                                <span className="text-zinc-900" >5 comments</span>
                            </div>
                        </div>
                        <hr className="border w-11/12 mx-10" />
                        <div className="flex justify-between items-end gap-4 p-4 w-4/6">
                            <div className="flex gap-1 items-center justify-center hover:cursor-pointer">
                                <img src="src/assets/LikeOutline.png" alt="" className="inline w-7 " />
                                <span>Like</span>
                            </div>
                            <div className="flex gap-1 items-center justify-center hover:cursor-pointer">
                                <img src="src/assets/CommentOutline.png" alt="" className="inline w-7 " />
                                <span>Comment</span>
                            </div>
                            <div className="flex gap-1 items-center justify-center hover:cursor-pointer">
                                <img src="src/assets/ShareOutline.png" alt="" className="inline w-7 " />
                                <span>Share</span>
                            </div>
                            <div className="flex gap-1 items-center justify-center hover:cursor-pointer">
                                <img src="src/assets/SaveOutline.png" alt="" className="inline w-7 " />
                                <span>Save</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t-2 flex items-center justify-center mt-5 mx-5 mb-2 h-10 hover:cursor-pointer" >
                <span className="text-slate-600 font-bold" >View More</span>
            </div>
        </div>
        <div className="flex flex-col my-2 bg-white w-3/3 p-4 pb-1 rounded-lg font-inter ">
            <div className="">
                <div className="mb-2">
                    <span className="text-black font-bold text-xl " >Associated Members</span>
                </div>
                <div className="flex gap-2">
                    <UserProfile></UserProfile>
                    <UserProfile></UserProfile>
                    <UserProfile></UserProfile>
                    <UserProfile></UserProfile>

                </div>
            </div>
            <div className="border-t-2 flex items-center justify-center mt-5 mx-1 h-12 hover:cursor-pointer " >
                <span className="text-slate-600 font-bold" >View More</span>
            </div>
        </div>
    </div>
  )
}

export default UniversityProfile;