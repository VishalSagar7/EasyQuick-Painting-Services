// src/components/Drawer.jsx
import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {Link} from 'react-router-dom'

export default function RightDrawer({ open, toggleDrawer }) {


    return (
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
            <div className="h-full text-[#8a0136] px-8 py-4 uppercase font-semibold flex flex-col gap-4">
                <Link to="/" className="link-underline text-xl">Home</Link>
                <Link to="/aboutus" className="link-underline text-xl">About us</Link>
                <Link to="/ourservices" className="link-underline text-xl">Our services</Link>
                <Link to="/ourwork" className="link-underline text-xl">Our Work</Link>
                <Link to="/contactus" className="link-underline text-xl">Contact us</Link>
            </div>
        </Drawer>
    );
}
