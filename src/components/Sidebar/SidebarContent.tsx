import { NavLink, Route } from "react-router-dom";
import { sidebar } from "routes/sidebar";
import { IoLogOutOutline } from "react-icons/io5";

export function SidebarContent() {
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <a className=" text-gray-900 dark:text-gray-200" href="/">
        <img src="asdas" alt="dashtar" width="135" className="pl-6" />
      </a>
      <ul className="mt-8">
        {sidebar.map((route) => (
          <li className="relative" key={route.name}>
            <NavLink
              to={route.path}
              className="px-6 py-4 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-green-700 dark:hover:text-gray-200"
            >
              <Route path={route.path}>
                <span
                  className="absolute inset-y-0 left-0 w-1 bg-green-500 rounded-tr-lg rounded-br-lg"
                  aria-hidden="true"
                />
              </Route>
              <route.icon className="w-5 h-5" aria-hidden="true" />
              <span className="ml-4">{route.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <span className="lg:fixed bottom-0 px-6 py-6 w-64 mx-auto relative mt-3 block">
        <button onClick={() => {}}>
          <span className="flex items-center">
            <IoLogOutOutline className="mr-3 text-lg" />
            <span className="text-sm">Sair</span>
          </span>
        </button>
      </span>
    </div>
  );
}
