const UserBanner = () => {
    return (
      <>
        <div className="flex w-full mx-4 mb-2">
          <div className="w-1/4 p-2">
            <img src="src/assets/User.png" alt="" className="" />
          </div>
          <div className="w-full flex flex-col justify-center p-3">
            <div className="text-gray-900">
              <span className="text-md font-semibold">Page Name</span>
            </div>
            <div >
              <span className="text-sm">Delhi, India</span>
              <span className="text-sm"> • </span>
              <span className="text-sm">28k followers</span>
            </div>
          </div>
        </div>
        <div className="w-11/12 mx-4 flex items-center justify-center border border-black opacity-40"></div>
      </>
    );
  };
  
  export default UserBanner;
  