import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './Navbar';

const AboutPage = ()=>{

    return(
        <div>

            <Navbar/>

            <h1>
                About Page
            </h1>
        </div>
    );
};

export default AboutPage;
