import { ButtonAddProperty } from "components/ButtonAddProperty";
import { Logo } from "components/Logo";
import { HiOutlinePlusSm } from "react-icons/hi";

export function App() {
  return (
    <div>
      <h1 className="text-4xl">Hello world</h1>

      <ButtonAddProperty>
        <HiOutlinePlusSm fontSize={25} />
        Add Propriedade
      </ButtonAddProperty>
      <Logo />
    </div>
  );
}
