import { Redirect, Route } from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { personOutline, cartOutline, homeOutline } from 'ionicons/icons';
import Home from './pages/Home';
import Account from './pages/Account';
import Cart from './pages/Cart';
import HomeListing from './pages/HomeListing';
import ProductListing from './pages/ProductListing';
import Checkout from './pages/Checkout';
import NoteState from './context/MyContextState';
import NoteContext from "./context/MyContext";
import CartTabBody from "./components/CartTabBody";
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  // const variable start
  const useContextState = useContext(NoteContext);
  const [cartVal, setCartVal] = useState<any>();
  useEffect(()=>{
    setCartVal(localStorage.getItem('CartQty'));
  },[setCartVal])
  // my function start
      const S_ID = function () {
        // Math.random should be unique because of its seeding algorithm.
        // Convert it to base 36 (numbers + letters), and grab the first 9 characters
        // after the decimal.
        return( '_' + Math.random().toString(36).substr(2, 9));
      }
      // set user session id start
    if(!localStorage.getItem('sessionID')){
      localStorage.setItem('sessionID','S_ID'+S_ID());
      let getSessionId__ :any = localStorage.getItem('sessionID');
      localStorage.setItem('tempSessionID',getSessionId__);
    }
    // set user session id end

    // set user name start 
    if(!localStorage.getItem('userName')){
      localStorage.setItem('userName','Login')
    }
    // set user name end
  // my function end
  return(
    <NoteState>
    <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/account">
            <Account />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/listing/:listingName">
            <HomeListing />
          </Route>
          <Route exact path="/product-listing/:modelName/:id">
            <ProductListing />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/checkout">
            <Checkout/>
          </Route>
        </IonRouterOutlet>
        <IonTabBar className='shadow border rounded-pill' slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="account" href="/account">
            <IonIcon icon={personOutline} />
            <IonLabel>Account</IonLabel>
          </IonTabButton>
          <IonTabButton tab="cart" href="/cart">
            <CartTabBody/>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
  </NoteState>
  )
};

export default App;
