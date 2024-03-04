import { BarApiData } from "@/lib/GetBarsApiData";
import { tags } from "@/utils/TagList";
import { getBarsType } from "@/utils/getBarsType";
import Image from "next/image";
import Shoes from "../../../public/images/Shoes.svg";
import Star from "../../../public/images/Star.svg";
import { ZoomOnMapButton } from "./buttons/ButtonZoom";

interface BarsCardProps {
    item: BarApiData;
    distance: number | null;
}

export const BarsCard: React.FC<BarsCardProps> = ({ item, distance
}) => {
    const { name, rating, address, status, location, category } = item;
    const { coordinates } = location;
    const barType = getBarsType(name);
    return (
        <div className='  mt-4 flex w-full flex-col justify-between gap-1 overflow-hidden rounded-2xl bg-[#2C2C2C] p-4'>

            <div className="flex flex-row items-center justify-between">

                <p className='font-bold text-purple-600'>{barType}</p>
                <ZoomOnMapButton coordinates={coordinates} />
            </div>
            <div className="flex gap-2">

                <h4 className=' font-bold text-white'>{name}</h4>
                {status === "OPERATIONAL" ?
                    <span
                        className="whitespace-nowrap rounded-full bg-green-500/40 px-2.5 py-0.5 text-sm text-green-500"
                    >
                        Ouvert
                    </span>
                    :
                    <span
                        className="whitespace-nowrap rounded-full bg-red-500/40 px-2.5 py-0.5 text-sm text-red-500"
                    >
                        Fermé
                    </span>
                }
            </div>
            {distance ?
                <div className=' flex flex-row gap-2 text-purple-500 '>
                    <Image
                        alt="chaussure"
                        src={Shoes}
                        style={{
                            width: '20px',
                            height: 'auto',
                        }}
                    />
                    <strong>
                        A {distance} KM
                    </strong>
                    <p className=' w-[7rem] truncate md:w-[17rem]'>
                        {address}
                    </p>
                </div>
                : <p className=' w-[7rem] truncate text-purple-500 md:w-[17rem]'>
                    {address}
                </p>
            }
            <div className='flex justify-between'>
                <div className=" flex gap-2">
                    {category?.map((i) => {
                        const ramdomIntFromInterval = Math.floor(Math.random() * (tags.length - 1 + 1))

                        return (<span key={i} className='whitespace-nowrap rounded-full bg-cyan-600/40 px-2.5 py-0.5 text-sm text-cyan-600'>{tags[ramdomIntFromInterval]}</span>)
                    }
                    )}
                </div>
                <div className=' flex flex-row gap-1'>
                    <Image
                        alt="etoile"
                        src={Star}
                        style={{
                            width: '20px',
                            height: 'auto',
                        }}
                    />
                    <p className="text-white">{rating}/5</p>
                </div>
            </div>
        </div>
    )
}