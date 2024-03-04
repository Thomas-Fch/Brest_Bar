import { useVisibleStore } from "@/store/useVisibleStore";
import { Title } from "./Title";
import { BarList } from "./bar-list/Index";
import { HideButton } from "./buttons/hideButton";
import { Categories } from "./categories/Index";

export const SideMenu: React.FC = () => {
    const { isSideVisible } = useVisibleStore();
    return (
        <div className={`${isSideVisible ? "left-[-31rem]" : "left-0"} fixed z-10 max-h-screen w-[32rem]  bg-[#201f23] pt-20 duration-700  ease-in-out  `} >
            <Title />
            <Categories />
            <HideButton />
            <BarList />
        </div >
    );
};