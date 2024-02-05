import React from 'react';

export interface Animation {
    children: React.ReactNode;
}

export const Animation: React.FC<Animation> = ({ children }) => {
    return (
        <div className='flex size-16 animate-ping items-center justify-center rounded-full bg-violet-500 text-sm font-light'>
            {children}
        </div>
    );
};