import React, { useState } from 'react'
import "./style.css"
import Menu from '../menuApi.js'
import MenuCard from './MenuCard';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

const GetResource = () => {

const [menuData, setMenuData] = useState(Menu);

  return (
    <>
        <MenuCard dataBaby = {menuData}/>
    </>
  );
};

export default GetResource;