import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Newsitem from "./components/Newsitem";
import PropTypes from "prop-types";
import Spinner from "./components/Spinner";
import React, { Component } from "react";  
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default class App extends Component {
 static defaultProps = {
    country: "in",
    pagesize: 5,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };
        render(){
    return (
      <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route  exact  path={`/`} element={<News  pagesize={4} country="in" category="General" />} />
          <Route  exact path={`/bussiness`} element={<News  pagesize={4} country="in" category="Bussiness" />} />
          <Route exact  path={`/entertainment`} element={<News pagesize={4} country="in" category="Entertainment " />} />
          <Route exact path={`/health`} element={<News  pagesize={4} country="in" category="Health" />} />
          <Route exact path={`/science`} element={<News  pagesize={4} country="in" category="Science" />} />
          <Route exact path={`/sports`} element={<News  pagesize={4} country="in" category="Sports"/>} />
          <Route exact path={`/technology`} element={<News  pagesize={4} country="in" category="Technology"/>} />
          <Route exact path={`/topstory`} element={<News  pagesize={4} country="in" category="Topstory"/>} />
        </Routes>
        <Newsitem />
        </BrowserRouter>
      </div>
    );
  }
}
