import { ButtonAddProperty } from "components/Button/ButtonAddProperty";
import { InputSearch } from "components/Input/InputSearch";
import { Logo } from "components/Logo";
import { HiOutlinePlusSm } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
export function App() {
  return (
    <div>
      <h1 className="text-4xl">Hello world</h1>

      <ButtonAddProperty>
        <HiOutlinePlusSm fontSize={25} />
        Add Propriedade
      </ButtonAddProperty>
      <Logo />
      <InputSearch placeholder="Pesquise PPD ID">
        <GoSearch fontSize={25} color="#3485F7" />
      </InputSearch>
    </div>
  );
}
