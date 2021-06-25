import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  Redirect 
} from 'react-router-dom';

import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Home from './pages/home/home';
import Services from './pages/services/services';

const App = () =>  {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>

          <Route path="/about" exact>
            <About/>
          </Route>

          <Route path="/contact" exact>
            <Contact/>
          </Route>

          <Route path="/services" exact>
            <Services/>
          </Route>

          <Redirect to="/"  />
        </Switch>
      </main>

    </Router>
  );
}

export default App;
