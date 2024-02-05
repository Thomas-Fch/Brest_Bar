import { Animation } from "@/components/Loader/Animation/Index";
import React from 'react';


export const Loader: React.FC = () => {
    return (
        <Animation>
            <h2>Chargement...</h2>
        </Animation>
    );
};