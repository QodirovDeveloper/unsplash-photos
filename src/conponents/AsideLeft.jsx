import { FaPenNib, FaRegFileAlt, FaRegUserCircle } from "react-icons/fa";
import { GoBell, GoDownload } from "react-icons/go";
import { LiaPenNibSolid } from "react-icons/lia";
import { LuTabletSmartphone } from "react-icons/lu";
import {
  MdGroups,
  MdOutlineFolderCopy,
  MdOutlineHomeWork,
  MdOutlineImage,
  MdTranslate,
} from "react-icons/md";
import { SlMenu } from "react-icons/sl";
import ThemeMode from "./ThemeMode";

function AsideLeft() {
  return (
    <>
      <div className="max-[973px]:hidden fixed top-0 bottom-0 left-0 py-5 border border-black/20 px-2.5 flex flex-col items-center justify-between">
        <div className="flex flex-col gap-5 items-center">
          <img src="/public/img/unsplashLogo.svg" width={"24px"} alt="" />

          <div
            className="tooltip tooltip-right hover:tooltip-open"
            data-tip="Photos"
          >
            <button className="btn btn-square text-2xl">
              <MdOutlineImage />
            </button>
          </div>
          <div
            className="tooltip tooltip-right hover:tooltip-open"
            data-tip="Illustrations"
          >
            <button className=" text-2xl">
              <LiaPenNibSolid />
            </button>
          </div>
          <div className="w-7 border my-2 border-black/20"></div>
          <div
            className="tooltip tooltip-right hover:tooltip-open"
            data-tip="Collections"
          >
            <button className=" text-2xl">
              <MdOutlineFolderCopy />
            </button>
          </div>
          <div
            className="tooltip tooltip-right hover:tooltip-open"
            data-tip="Download History"
          >
            <button className=" text-2xl">
              <GoDownload />
            </button>
          </div>
        </div>
        {/* <div className="flex flex-col gap-5 items-center">
          <div
            className="tooltip tooltip-right hover:tooltip-open"
            data-tip="Notifications"
          >
            <button className=" text-2xl">
              <GoBell />
            </button>
          </div>
          <div
            className="tooltip tooltip-right hover:tooltip-open"
            data-tip="Profile"
          >
            <button className=" text-2xl">
              <FaRegUserCircle />
            </button>
          </div>
          <div
            className="tooltip tooltip-right hover:tooltip-open"
            data-tip="Menu"
          >
            <button className=" text-2xl">
              <SlMenu />
            </button>
          </div>
        </div> */}
        <div className="flex flex-col items-center justify-center gap-5">
        <ThemeMode />
          <div className="dropdown dropdown-right  dropdown-end mb-1">
            <div tabIndex={0} role="button">
              <div
                className="tooltip tooltip-right hover:tooltip-open"
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
              <div role="tablist" className="tabs *:m-1 tabs-border">
                <a role="tab">Highlights</a>
                <a role="tab">Activity</a>
                <p className="p-10">
                  Activity associated with your account will appear here.
                </p>
              </div>
            </ul>
          </div>

          <div className="dropdown dropdown-right  dropdown-end mb-1">
            <div tabIndex={0} role="button">
              <div
                className="tooltip tooltip-right hover:tooltip-open"
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
                <button className="btn btn-outline m-1">Submit an image</button>
                <button className="btn btn-ghost">Logout @hasanboydevvv</button>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-right  dropdown-end mb-1">
            <div tabIndex={0} role="button">
              <div
                className="tooltip tooltip-right hover:tooltip-open"
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
        </div>
      </div>
    </>
  );
}

export default AsideLeft;
