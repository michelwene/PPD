import { useSideBarContext } from "context/SidebarContext";
import { IoMenu } from "react-icons/io5";

export function Header() {
  const { toggleSidebar } = useSideBarContext();
  return (
    <>
      <header className={`z-40 py-4 bg-white shadow-sm bg-no-repeat bg-cover`}>
        <div className="container flex items-center xs:justify-center lg: justify-end h-full px-6 mx-auto text-gray-dark">
          <button
            className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none"
            onClick={toggleSidebar}
            type="button"
            aria-label="Menu"
          >
            <IoMenu className="w-6 h-6" aria-hidden={true} />
          </button>
        </div>
      </header>
    </>
  );
}
