import React from 'react';
import S from './Site.module.css'
// import {PageOne} from "./pages/PageOne";
// import {PageTwo} from "./pages/PageTwo";
// import {PageThree} from "./pages/PageThree";
// import {Error404} from "./pages/Error404";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Page} from "./Page";
import {dataState} from "../dataState/dataState";


export const Site = () => {



    return (
        <div>
            <div className={S.header}><h1>HEADER</h1></div>
            <div className={S.body}>
                <div className={S.nav}>
                    <NavLink to={"/page/0"} className={({isActive})=>isActive?S.act:S.notAct}>Page One</NavLink> <br/>
                    <NavLink to={"/page/1"} className={({isActive})=>isActive?S.act:S.notAct}>Page Two</NavLink> <br/>
                    <NavLink to={"/page/2"} className={({isActive})=>isActive?S.act:S.notAct}>Page Three</NavLink> <br/>
                </div>
                <div className={S.content}>
                    <Routes>
                        {/*<Route path={"/"} element={<Navigate to={"/page1"}/>}/>*/}
                        <Route path={"/page/:id"} element={<Page pages={dataState.pages}/>}/>
                        {/*<Route path={"/page2"} element={<PageTwo/>}/>*/}
                        {/*<Route path={"/page3"} element={<PageThree/>}/>*/}
                        {/*<Route path={"/*"} element={<Error404/>}/>*/}
                    </Routes>
                </div>
            </div>
        </div>
    );
};

