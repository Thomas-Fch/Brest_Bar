import React from 'react';
import { toast } from 'sonner';

export const useToast: React.FC = () => {
    return toast.success('Votre demande a été envoyée avec succès !')
}