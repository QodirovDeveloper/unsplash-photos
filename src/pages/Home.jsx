import { FaArrowDown, FaHeart, FaPlus, FaRegHeart } from "react-icons/fa";
import { PiChartLineUpLight } from "react-icons/pi";

function Home() {
  return (
    <>
      <div className="container min-[775px]:pl-16 hidden pl-1 mt-40 sm:flex items-center mx-auto gap-5 max-[973px]:mt-50">
        <div className="flex items-center h-[300px] rounded-xl gap-1 border border-black/20 pl-3 ml-4 max-[1293px]:pr-3">
          <div className="flex flex-col gap-30  justify-between ">
            <p className="max-w-[225px] text-lg font-semibold">
              Unlock everything Unsplash+ has to offer. Cancel anytime.
            </p>
            <button className="btn btn-neutral">Upgrade to Unsplash+</button>
          </div>
          <figure>
            <img
              className="max-w-[400px] rounded-r-xl max-[1293px]:hidden"
              src="/hero.avif"
              alt="Album"
            />
          </figure>
        </div>

        <div className="w-[310px] border border-black/20 rounded-xl p-4 max-[1042px]:hidden space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Collections</h2>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              See all
            </a>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="/hero.avif"
              alt="Summer"
              className="w-10 h-10 rounded-md object-cover"
            />
            <div>
              <p className="font-medium">Summer</p>
              <p className="text-sm ">1,484 images</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="/hero.avif"
              alt="How its Made"
              className="w-10 h-10 rounded-md object-cover"
            />
            <div>
              <p className="font-medium">How its Made</p>
              <p className="text-sm ">45 images</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="/hero.avif"
              alt="Red, White and Blue"
              className="w-10 h-10 rounded-md object-cover"
            />
            <div>
              <p className="font-medium">Red, White and Blue</p>
              <p className="text-sm ">26 images</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="/hero.avif"
              alt="Summer Backgrounds"
              className="w-10 h-10 rounded-md object-cover"
            />
            <div>
              <p className="font-medium">Summer Backgrounds</p>
              <p className="text-sm ">70 images</p>
            </div>
          </div>
        </div>

        <div className="w-[310px] flex flex-col justify-between h-[300px] p-4 border-black/20 border rounded-xl space-y-4">
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-sm  border rounded-md">
              Education
            </span>
            <span className="px-3 py-1 text-sm  border rounded-md">
              Artificial Intelligence
            </span>
            <span className="px-3 py-1 text-sm  border rounded-md">
              Columbia University
            </span>
            <span className="px-3 py-1 text-sm  border rounded-md">
              Astronomy
            </span>
            <span className="px-3 py-1 text-sm  border rounded-md">
              Beach Party
            </span>
            <span className="px-3 py-1 text-sm  border rounded-md">
              Biscuits
            </span>
          </div>

          <div className="flex gap-1.5 pt-5 items-center text-sm  hover:text-blue-600 cursor-pointer">
            <div className="text-[22px]">
              <PiChartLineUpLight />
            </div>

            <a href="#" className="underline">
              See trending searches
            </a>
          </div>
        </div>
      </div>

      <div className="container min-[775px]:pl-16 min-sm:mt-10 mt-48 pl-1 pr-1 mx-auto grid min-[991px]:grid-cols-3 max-[991px]:grid-cols-2 max-[767px]:grid-cols-1 gap-8">
        <div className="relative group w-full overflow-hidden rounded-lg shadow-md">
          <img
            src="/hero.avif"
            alt="image"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-2">
              <button className="btn btn-active text-[16px]">
                <FaHeart />
              </button>
              <button className="btn btn-active text-[16px]">
                <FaPlus />
              </button>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="btn btn-active text-[16px]">
              <FaArrowDown />
            </button>
          </div>
          <div className="absolute bottom-2 left-2 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="avatar flex items-center gap-2">
              <div className="w-8 rounded-full">
                <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
              </div>
              <p className="text-lg font-bold ">Elena Sizontseva</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// sm	40rem (640px)	@media (width >= 40rem) { ... }
// md	48rem (768px)	@media (width >= 48rem) { ... }
// lg	64rem (1024px)	@media (width >= 64rem) { ... }
// xl	80rem (1280px)	@media (width >= 80rem) { ... }
// 2xl	96rem (1536px)	@media (width >= 96rem) { ... }

export default Home;
