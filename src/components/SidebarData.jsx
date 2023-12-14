import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiOutlineHome />,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <AiIcons.AiTwotoneExperiment />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <AiIcons.AiFillBug />,
        cName: 'nav-text'
    },
    {
        title: 'About This Website',
        path: '/aboutThisWebsite',
        icon: <AiIcons.AiFillNotification />,
        cName: 'nav-text'
    }
   
]