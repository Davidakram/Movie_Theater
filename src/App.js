import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './Pages/NavBar';
import Fetching from './Pages/Home';
import SingleProduct from './Pages/Show';
import NotFound from './Pages/NotFound';
import Favourites from './Pages/FavouritePage';
import SignIn from './Pages/Signin';
import SignUp from './Pages/Signup';
import { useState } from 'react';
import { LanguageContext } from './context/langContext';

function App() {
  const[contextLang,setContextLang]=useState("EN")
  return (
    <div className="App">
      <LanguageContext.Provider value={{contextLang,setContextLang}} >
      <BrowserRouter>
      <NavBar />
      <Switch>
      <Route exact path={"/"} component={Fetching} />
      <Route exact path={"/show/:id"} component={SingleProduct} />
      <Route exact path={"/favourites"} component={Favourites} />
      <Route exact path={"/signin"} component={SignIn} />
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"*"} component={NotFound} />
      </Switch>
      </BrowserRouter>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
