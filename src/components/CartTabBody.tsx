import React, {useContext} from 'react'
import NoteContext from '../context/MyContext';
import {
    IonIcon,
    IonLabel,
  } from '@ionic/react';
  
import { cartOutline} from 'ionicons/icons';
const CartTabBody = () => {
    const useContextState = useContext(NoteContext);
  return (
    <>
        <IonIcon icon={cartOutline} />
            <IonLabel>Cart</IonLabel>
            {useContextState.stateCartQTY && useContextState.stateCartQTY === "0"?"":<span className='my__CART_VALUE'>{useContextState.stateCartQTY}</span> }
    </>
  )
}

export default CartTabBody