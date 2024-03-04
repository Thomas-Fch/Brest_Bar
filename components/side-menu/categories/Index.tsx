import { Card } from "./Card";


export const Categories: React.FC = () => {
    return (
        <section className=' border-y-2 border-zinc-700 px-7 py-4'>
            <h3 className='font-bold text-white'>Vous êtes plutôt ?</h3>
            <Card />
        </section>
    );
};