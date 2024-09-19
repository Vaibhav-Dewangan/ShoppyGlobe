import React from "react";
import NavTab from "./NavTab";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'


function Header(){
    return(
        <>
         <div className="header-container  bg-slate-950 shadow-lg h-20 lg:h-24 sm:h-20 p-6 sm:p-10 lg:pr-20 lg:pl-20 lg:mb-5 flex align-middle items-center justify-between">
            <div className="title">
            <span className="title text-white font-bold sm:text-xl lg:text-2xl flex flex-row items-center gap-2"><FontAwesomeIcon className="pr-1" icon={faBagShopping} /> Shoppy Globe</span>
            </div>
            <div className="NavTabs-1 max-sm:hidden "><NavTab /></div>
        </div>
        <div className="NavTabs-2 sm:hidden "><NavTab /></div>
        </> 
    )
};

export default Header;