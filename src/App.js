
import React from "react"
import { BrowserRouter, Switch, Link, Route } from "react-router-dom"


import About from "./About.js"
import Home from "./Home.js"
import Footer from "./Footer.js"
import Report from "./Report.js"

function App() {
  return (
  <BrowserRouter>
      <div className="App">

        <Route path="/" component={Home} exact={true}/>
        <Route path="/about" component={About}  />
        <Route path="/reports/:scale" component={Report}  />

        {/* <Report scale="celsius" /> */}
        <Footer />
      </div>
  </BrowserRouter>
  );
}

export default App;
