import UniversityProfile from "./UniversityProfile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex px-24 pt-20 bg-neutral-500/20 py-2 " >
          <UniversityProfile />
          <Suggestions />
      </div>
      <div className=" flex items-center w-full h-20 bg-blue-200" >
        <Footer />
      </div>
    </div>
  )
}

export default Homepage;