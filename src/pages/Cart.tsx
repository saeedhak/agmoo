import React, { useState, useEffect, useContext } from "react";
import {
  IonContent,
  IonIcon,
  IonPage,
  useIonAlert
} from "@ionic/react";
import Header from "../components/Header";
import { useHistory } from "react-router-dom";
import NoteContext from "../context/MyContext";
import { trashBinOutline} from 'ionicons/icons';
const Cart: React.FC = () => {
  // my variable start
    // const variable start
    const baseUrl = "https://agmoo.com/agmoo_api/";
    const endPoint = `index.php?endPoint=`;
    const history = useHistory();
    const [presentAlert] = useIonAlert();
    const baseImgUrl = "https://agmoo.com/";
    const useContextState = useContext(NoteContext);
    // const variable end
    // use state variable start
    const [cartData, setCartData] = useState<any>();
    // use state variable end

    // my function start
      // useEffect start
        useEffect(()=>{
          getCardData();
        },[useContextState.stateCartQTY])
      // useEffect end 
        // get card data start
    const getCardData = ()=>{
      let sessionID = localStorage.getItem('sessionID');
      fetch(`${baseUrl}${endPoint}cart&sessionId=${sessionID}&action=cardData`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
          useContextState.updateCartQty(data.sendData.length);
            return setCartData(data.sendData);
        })
    }
    // get card data end

    // start countCartFun => add or remove qty 
      const countCartFun = (actionPerform:any,cartId:any)=>{
        let sessionID = localStorage.getItem('sessionID');
        fetch(`${baseUrl}${endPoint}cart&sessionId=${sessionID}&action=${actionPerform}&cartId=${cartId}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            useContextState.updateCartQty(data.sendData.length);
            return setCartData(data.sendData);
        })
      }
      // check user login start
      const checkUserLoginFun = (userLoginVal:any)=>{
        if(userLoginVal === "true"){
          history.push("/checkout");
        }else if(userLoginVal === "false"){
          presentAlert({
            header: 'Login Required!',
            subHeader: 'Please Login To Continue',
            buttons: [
                {
                  text: 'Login',
                  role: 'conform',
                  handler: () => {
                    history.push("/account");
                  },
                }
              ],
          })
        }
      }
      // check user login end
    // my function end 
  // my variable end 

  // my try area start
  // console.log(cartData);
  // my try area end 
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <div className="container bg-white pt-3">
          <div className="row">
            {cartData?.map((data:any, index:any)=>{
              return(
                <div className="col-12 card border-0 border-bottom" key={index}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-2">
                        <img className="h-100 w-100" style={{objectFit:"cover"}} src={`${baseImgUrl}${data.large_img}`} alt={data.pro_title} />
                      </div>
                      <div className="col-7 ps-0 pe-0">
                        <p className="text-dark" style={{fontSize:"0.7rem", lineHeight:"15px", fontWeight:"500"}}>{data.pro_title}</p>
                        <span style={{color:"#FF653B", fontSize:"0.8rem", fontWeight:"500"}}> RS: {data.total_price}</span>
                      </div>
                      <div className="col-3 ps-0 pe-0">
                        <div className="row g-0 mt-2">
                            <div className="col-4 ps-0">
                              {data.qty && parseInt(data.qty) > 1 
                              ? <span className="badge my__ROUNDED_PILL_LEFT shadow my__COLOR w-100 pt-2 pb-2" style={{fontSize:"0.9rem"}} 
                              onClick={()=>{ countCartFun("remove",data.id)}}>-</span>
                              :<span className="badge my__ROUNDED_PILL_LEFT shadow my__COLOR w-100 pt-2 pb-2 text-center" style={{fontSize:"0.8rem"}} 
                              onClick={()=>{ countCartFun("delete",data.id)}}>  <IonIcon icon={trashBinOutline} /> </span>}
                            {/* <span className="badge my__ROUNDED_PILL_LEFT shadow my__COLOR w-100 pt-2 pb-2" style={{fontSize:"0.9rem"}} 
                            onClick={()=>{ if(parseInt(data.qty) > 1){
                              countCartFun("remove",data.id)
                            }}}>-</span> */}
                            </div>
                            <div className="col-4">
                                <span className="badge rounded-5 my__BG w-100 pt-2 pb-2" style={{fontSize:"0.9rem"}}>{data.qty}</span>
                            </div>
                            <div className="col-4 pe-0">
                            <span className="badge my__ROUNDED_PILL_RIGHT shadow my__COLOR w-100 pt-2 pb-2" style={{fontSize:"0.9rem"}} 
                            onClick={()=>{ if(parseInt(data.stock_qty) > parseInt(data.qty)){
                              countCartFun("add",data.id)
                            }}}>+</span>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          {cartData && <div className="row mt-4">
            <div className="col-10 mx-auto">
            <span className="badge rounded-pill my__BG w-100 shadow pt-3 pb-3" style={{ fontSize: "0.8rem", fontWeight: "500" }} onClick={()=>{
              checkUserLoginFun(useContextState.userLoginStatus)
            }}> Go To Checkout</span>
            </div>
          </div>}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Cart;
