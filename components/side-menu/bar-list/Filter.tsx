import useCheckboxSort from "@/store/useCheckboxSort";
import { useVisibleStore } from "@/store/useVisibleStore";
import { Checkbox } from "./buttons/Checkbox";


export const Filter: React.FC = ({

}) => {

    const { isFilterVisible } = useVisibleStore();
    const { checkedBox, handleOptionClick } = useCheckboxSort();
    return (isFilterVisible ?
        <div className=" absolute bottom-[-140px] right-[-20px] flex w-32 flex-col gap-2  rounded-sm border-2 border-[#9747FF] bg-[#2C2C2C] p-4 shadow-lg">
            <Checkbox label="Note ↓"
                value={checkedBox === "rating"}
                onChange={() => handleOptionClick("rating")} />
            <Checkbox label="A - Z"
                value={checkedBox === "nameAZ"}
                onChange={() => handleOptionClick("nameAZ")} />
            <Checkbox label="Z - A"
                value={checkedBox === "nameZA"}
                onChange={() => handleOptionClick("nameZA")} />
            <div className=" absolute left-[50%] top-[-17px] size-4 -translate-x-1/2 translate-y-1/2 rotate-45 border-l-2 border-t-2 border-[#9747FF] bg-[#2C2C2C]"></div>
        </div > : null
    );
};