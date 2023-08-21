import React from "react";
import {DataStateType} from "../dataState/dataState";
import {useParams} from "react-router-dom";


export const Page:React.FC<DataStateType> = () => {
    const params= useParams<"id">()

    return (
        <div>
            <div>Page</div>
            <div>{params.id}</div>
        </div>
    );
};

