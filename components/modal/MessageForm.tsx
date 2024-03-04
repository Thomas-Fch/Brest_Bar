"use client";
import React from "react";
import { z } from "zod";
import { useToast } from "../../store/useToast";
import { useVisibleStore } from '../../store/useVisibleStore';
import AutoForm, { AutoFormSubmit } from "../ui/auto-form";
import { Close } from "./Close";

const formSchema = z.object({
    subject: z.enum(["Une erreur d'information", "L'ajout d'un nouveau bar", "Une fermeture définitive"]).describe("Vous souhaitez signaler :"),
    name: z.string({
        required_error: "Un nom est requis.",
    }).min(3).describe("Nom du bar :"),
    address: z.string().describe("Adresse :"),
    message: z.string().optional().describe("Message :"),
});

export const MessageForm: React.FC = () => {

    const { isModalVisible, setIsModalVisible } = useVisibleStore();
    return (isModalVisible ?
        <div className="fixed top-0 z-50 flex size-full items-center justify-center bg-black/10" onClick={() => setIsModalVisible(!isModalVisible)}>
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