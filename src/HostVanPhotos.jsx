import React from "react";
import data from "./data";
import { Link, useParams, useOutletContext } from "react-router-dom";

export default function HostVanPhotos(){
    const { id } = useOutletContext();
    return (
        <>
        <img className="w-[200px] h-[200px] left-[28px] top-[250px] absolute rounded-[5px]" src={data[id-1].image} />
        </>
    )
}