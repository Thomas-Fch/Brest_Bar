
export const Title: React.FC = () => {
    return (
        <h1 className="px-7 pb-5 text-3xl font-bold  text-white">
            Trouver le bar qu’il vous faut,
            <span style={{
                backgroundImage: 'linear-gradient(90deg, rgba(193, 16, 199, 1) 0%, rgba(181, 107, 247, 1) 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
            }}> selon votre humeur.</span>
        </h1>
    );
};