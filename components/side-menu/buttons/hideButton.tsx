import Image from "next/image";
import Triangle from "../../../public/images/Triangle.svg";
import { useVisibleStore } from '../../../store/useVisibleStore';

export const HideButton: React.FC = () => {
    const { isSideVisible, setIsSideVisible } = useVisibleStore();
    return (
        <button className='absolute right-[-2rem] top-[50%] h-20 w-8 rounded-r-lg bg-[#201f23]' onClick={() => setIsSideVisible(!isSideVisible)}>
            <Image
                alt={Triangle}
                src={Triangle}
                style={{
                    width: '90%',
                    height: 'auto',
                    transform: `${isSideVisible ? "scale(1, 1)" : "scale(-1, -1)"}`,
                }}
            />
        </button>
    );
};