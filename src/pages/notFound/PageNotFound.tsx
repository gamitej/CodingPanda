import ExploreNavbar from "../explore/common/navbar";
import notFound from "@/assests/images/not-found.png";

const PageNotFound = () => {
  /**
   * TSX
   */
  return (
    <div>
      <ExploreNavbar />
      <div className="h-[calc(100vh-4rem)] w-full flex justify-center items-center dark:bg-dark-light font-poppins">
        <div className="-mt-14 flex flex-col justify-center items-center bg-light-dim border dark:bg-gray-200 rounded-md px-8 py-6">
          <img src={notFound} alt="" className="w-64 h-64" />
          <p className="text-[1.2rem] font-normal text-slate-600">
            Sorry, but we can't find the page you are looking for...
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
