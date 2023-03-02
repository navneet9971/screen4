import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Firstpage from "./pages/Firstpage";
import Secondpage from './pages/Secondpage';
import Thirdpage from './pages/Thirdpage';

const App = () => {
  return (
    <Router>
      <Route>
        <Route exact path="/" component={Firstpage} />
        <Route exact path="/secondpage" component={Secondpage} />
        <Route exact path="/compliance/:id" component={Thirdpage} />
      </Route>
    </Router>
  );
};

export default App;
