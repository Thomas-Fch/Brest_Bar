import { Title } from "./Title";
import { Categories } from "./categories/Index";

export const SideMenu: React.FC = () => {
    return (
        <div className=' fixed z-10 h-screen w-[30%] overflow-y-scroll bg-[#201f23] pt-24 transition-transform duration-300 ease-in-out'>
            <Title />
            <Categories />        </div>
    );
};