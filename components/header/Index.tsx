import { SearchBar } from "./searchBar";
import { Button } from "./Button";
import { Title } from "./Title";

export const Header: React.FC = () => {
    return (
        <nav className='fixed z-20 flex w-screen items-center justify-between bg-[#201F23] p-3 shadow-md'>
            <Title />
            <SearchBar />
            <Button />
        </nav>
    );
};