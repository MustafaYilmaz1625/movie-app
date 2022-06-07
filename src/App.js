import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavbarComponet from "./components/Navbar/NavbarComponet";
import Popularity from "./pages/Popularity";
import Movies from "./pages/Movies";
import View from "./pages/View/View";
import View2 from "./pages/View2/View2";

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComponet />
      <Switch>
        <Route path="/" exact component={Movies} />
        <Route path="/popularity" component={Popularity} />
        <Route path="/view/:id" children={<View />} />
        <Route path="/view2/:id" children={<View2 />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
