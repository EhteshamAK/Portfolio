import React from 'react'
import '../css/Header.css';
import Project from '../pages/Project.jsx';
import Blog from '../pages/Blog';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from './../pages/Contact';
import Home from './../pages/Home'
const Header = () => {
    return (
        <Router>
            <div className="header">

                <div className="title">
                    <Link id="link" to="/" ><h1>EAK</h1> </Link >
                </div>
                <div className="menu">
                <Link id="link" to='/project'><p>PROJECTS</p> </Link >
                <Link id="link" to='/blog'><p>BLOG</p> </Link >
                <Link id="link" to='/contact'><p>CONTACT</p> </Link >

                </div>
            </div>
            {/* //switch declared  here  */}

            <Switch>
            <Route exact path="/project" component={Project} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/home" component={Home} />

            </Switch>


        </Router>
    )
}

export default Header
