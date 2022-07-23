import { FiHome } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiUserReceived2Line, RiChatUploadLine } from "react-icons/ri";
import { MdOutlineVisibility, MdOutlineSell } from "react-icons/md";

export const sidebar = [
  {
    path: "/propriedade",
    icon: FiHome,
    name: "Propriedade",
  },
  {
    path: "/assistencia",
    icon: IoMdNotificationsOutline,
    name: "Assistência",
  },
  {
    path: "/juros-recebidos",
    icon: RiUserReceived2Line,
    name: "Juros recebidos",
  },
  {
    path: "/interesses-enviados",
    icon: RiChatUploadLine,
    name: "Interesses enviados",
  },
  {
    path: "/visualizacoes-propriedades",
    icon: MdOutlineVisibility,
    name: "Visualizações propriedades",
  },
  {
    path: "/plano-tarifario",
    icon: MdOutlineSell,
    name: "Plano tarifário",
  },
];
