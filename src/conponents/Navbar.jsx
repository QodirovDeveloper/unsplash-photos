import { Link } from "react-router-dom";
import ThemeMode from "./ThemeMode";
import {
  FaAngleDown,
  FaRegFileAlt,
  FaRegUserCircle,
  FaUserCircle,
} from "react-icons/fa";
import Search from "./Search";
import { GoBell } from "react-icons/go";
import { SlMenu } from "react-icons/sl";
import { MdGroups, MdOutlineHomeWork, MdTranslate } from "react-icons/md";
import { LuTabletSmartphone } from "react-icons/lu";

function Navbar() {
  return (
    <>
      <div className="fixed top-0 min-[973px]:left-[75px] left-0 right-0 backdrop-blur">
        <div className="min-[973px]:hidden pt-4 px-7 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <img
              src="/public/img/unsplashLogo.svg"
              width={"24px"}
              alt="unsplashLogo"
            />
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center p-2 gap-1 cursor-pointer"
              >
                <div>Photos</div>
                <FaAngleDown />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 shadow-2xl border border-black/30 rounded-box z-1 w-52 p-2 "
              >
                <li>
                  <a>Photos</a>
                </li>
                <li>
                  <a>Illustrations</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center gap-7">
            <div className="dropdown dropdown-end pb-1">
              <div tabIndex={0} role="button">
                <div
                  className="tooltip tooltip-bottom hover:tooltip-open"
                  data-tip="Notifications"
                >
                  <button className=" text-2xl">
                    <GoBell />
                  </button>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-62 h-50 p-2 shadow-2xl border border-black/30"
              >
                <div role="tablist" className="tabs *:p-1 tabs-border">
                  <a role="tab">Highlights</a>
                  <a role="tab">Activity</a>
                  <p className="p-10">
                    Activity associated with your account will appear here.
                  </p>
                </div>
              </ul>
            </div>

            <div className="dropdown dropdown-end pb-1">
              <div tabIndex={0} role="button">
                <div
                  className="tooltip tooltip-bottom hover:tooltip-open"
                  data-tip="Profile"
                >
                  <button className=" text-2xl">
                    <FaRegUserCircle />
                  </button>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-62 h-[340px]  shadow-2xl border border-black/30"
              >
                <li>
                  <div className="card-body items-center  border-b text-center">
                    <p className="text-2xl">
                      <FaRegUserCircle />
                    </p>
                    <h1>Hasanboy Qodirov</h1>
                    <p>View profile</p>
                  </div>
                  <a>Stats</a>
                  <a>Download history</a>
                  <a>Account settings</a>
                </li>
                <li>
                  <button className="btn btn-outline p-1">
                    Submit an image
                  </button>
                  <button className="btn btn-ghost">
                    Logout @hasanboydevvv
                  </button>
                </li>
              </ul>
            </div>

            <div className="dropdown dropdown-end pb-1">
              <div tabIndex={0} role="button">
                <div
                  className="tooltip tooltip-bottom hover:tooltip-open"
                  data-tip="Menu"
                >
                  <SlMenu />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content text-lg menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-2xl border border-black/30"
              >
                <li>
                  <a>
                    <MdOutlineHomeWork /> Company
                  </a>
                </li>

                <li>
                  <a>
                    <LuTabletSmartphone /> Product
                  </a>
                </li>
                <li>
                  <a>
                    <MdGroups /> Community
                  </a>
                </li>
                <li>
                  <a>
                    <FaRegFileAlt /> Legan
                  </a>
                </li>
                <li>
                  <a>
                    <MdTranslate /> English
                  </a>
                </li>
              </ul>
            </div>
            <ThemeMode />
          </div>
        </div>
        <div className="py-3 px-6 flex items-center gap-6">
          <Search />
          <button className="btn cursor-pointer max-[973px]:hidden">
            Get Unsplash+
          </button>
          <button className="btn btn-outline max-[973px]:hidden">
            Submit an image
          </button>
          <div className="flex items-center gap-6"></div>
        </div>

        <div className="w-full overflow-x-auto whitespace-nowrap py-2 px-4 bg-base-100 shadow-md">
          <div className="inline-flex sm:gap-4 h-[1px]">
            <button className="btn btn-sm btn-ghost">Featured</button>
            <button className="btn btn-sm btn-ghost">Wallpapers</button>
            <button className="btn btn-sm btn-ghost">Nature</button>
            <button className="btn btn-sm btn-ghost">3D Renders</button>
            <button className="btn btn-sm btn-ghost">Textures</button>
            <button className="btn btn-sm btn-ghost">Travel</button>
            <button className="btn btn-sm btn-ghost">Film</button>
            <button className="btn btn-sm btn-ghost">People</button>
            <button className="btn btn-sm btn-ghost">
              Architecture & Interiors
            </button>
            <button className="btn btn-sm btn-ghost">Street Photography</button>
            <button className="btn btn-sm btn-ghost">Experimental</button>
          </div>
        </div>
      </div>
    </>
  );
}
// sm	 40rem (640px)	@media (width >= 40rem) { ... }
// md	 48rem (768px)	@media (width >= 48rem) { ... }
// lg	 64rem (1024px)	@media (width >= 64rem) { ... }
// xl	 80rem (1280px)	@media (width >= 80rem) { ... }
// 2xl 96rem (1536px)	@media (width >= 96rem) { ... }

export default Navbar;
