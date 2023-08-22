import React, {Component} from "react";
import {DataStateType} from "../dataState/dataState";
import {useParams} from "react-router-dom";
import {PageOne} from "./pages/PageOne";
import {Error404} from "./pages/Error404";


export const Page: React.FC<DataStateType> = (props) => {
    const params = useParams<"id">()

    const pageId: number = Number(params.id)
    console.log(pageId)

    return (<div>
        {pageId >= 0 && pageId < props.pages.length ?
            <div>
                <div>{props.pages[pageId].heading}</div>
                <div>{props.pages[pageId].about}</div>
            </div>
            : <Error404/>
            }
    </div>)
}

