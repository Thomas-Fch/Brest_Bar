"use client";
import React from "react";
import { z } from "zod";
import { useOpenModal } from '../store/OpenModalStore';
import { useToast } from "../store/useToast";
import { Close } from "./modal/close";
import AutoForm, { AutoFormSubmit } from "./ui/auto-form";

const formSchema = z.object({
    subject: z.enum(["Une erreur d'information", "L'ajout d'un nouveau bar", "Une fermeture définitive"]).describe("Vous souhaitez signaler :"),
    name: z.string({
        required_error: "Un nom est requis.",
    }).min(3).describe("Nom du bar :"),
    address: z.string().describe("Adresse :"),
    message: z.string().optional().describe("Message :"),
});

export const MessageForm: React.FC = () => {

    const { isOpen, toggle } = useOpenModal();
    return (isOpen ?
        <div className="fixed top-0 flex size-full items-center justify-center bg-black/10" onClick={toggle}>
            <div className="relative flex flex-col items-center justify-around rounded-3xl bg-[#201F23] py-6 shadow-md shadow-black md:h-fit md:w-1/4 md:rounded-2xl" onClick={(e) => e.stopPropagation()}>
                <Close />
                <AutoForm formSchema={formSchema}
                    onSubmit={useToast}
                    fieldConfig={{
                        name: {
                            inputProps: {
                                placeholder: "Brest bar"
                            }
                        },
                        address: {
                            inputProps: {
                                placeholder: "2 Rue Frezier, 29200 Brest"
                            }
                        },
                        message: {
                            fieldType:
                                "textarea",

                        }
                    }}>
                    <p className="text-sm text-red-500">* champs obligatoires</p>
                    <AutoFormSubmit />
                </AutoForm>
            </div>
        </div> : null
    )
}