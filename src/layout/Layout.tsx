import { Sidebar } from "components/Sidebar";
import { SidebarContext } from "context/SidebarContext";
import { useContext } from "react";
import { Main } from "./Main";

export default function Layout() {
  const {} = useContext(SidebarContext);

  return (
    <div>
      <Sidebar />
      <div>
        <Main>asdasdasa</Main>
      </div>
    </div>
  );
}
