import React, { useEffect, useState,useContext } from "react";
import { useHistory  } from "react-router-dom";
import {
  IonContent,
  IonPage,
  IonIcon,
  IonTextarea,
  useIonAlert 
} from "@ionic/react";
import { locationOutline} from 'ionicons/icons';
import NoteContext from "../context/MyContext";
import Header from "../components/Header";

const Checkout: React.FC = () => {
    // my variable start
        // my const variable start
        const baseUrl = "https://agmoo.com/agmoo_api/";
        const endPoint = `index.php?endPoint=`;
        const [presentAlert] = useIonAlert();
        const history = useHistory();
        const useContextState = useContext(NoteContext);
        // my const variable end 

        // use state variable start
        const [getAddress, setAddress] = useState<any>();
        const [getCartTotalPrice, setCartTotalPrice] = useState<any>();
        // use state variable end 
    // my variable end 
    // my function start
    // useEffect function start
        useEffect(()=>{
            getCheckoutData();  
        },[])
    // useEffect function end 
    // get checkout data function start
    const getCheckoutData = ()=>{
        let sessionID = localStorage.getItem('sessionID');
        fetch(`${baseUrl}${endPoint}checkout&sessionId=${sessionID}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data.sendData[0]);
                setAddress(data.sendData[0].address[0]);
                setCartTotalPrice(data.sendData[0].cartSubtotal[0]);
            })
    }
    // get checkout data function end
    // order submit function start
    const orderSubmitFun = ()=>{
        let sessionID = localStorage.getItem('sessionID');
        fetch(`${baseUrl}${endPoint}orderSubmit&sessionId=${sessionID}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // console.log(data.sendData[0]);
                if(data.sendData[0].response === "done"){
                    useContextState.updateCartQty("0");
                    presentAlert({
                        header: 'Your Order Successfully submit ',
                        subHeader:`Order Number is ${data.sendData[0].orderId}`,
                        buttons: [
                            {
                              text: 'Go To Home',
                              role: 'conform',
                              handler: () => {
                                history.push("/home");
                              },
                            }
                          ],
                      })
                }
            })
    }
    // order submit function end
    // my function end 
  
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <div className="container bg-light pt-4 my__PB_3">
            <div className="row">
                <div className="col-11 mx-auto card shadow rounded-5">
                    <div className="row">
                        <div className="col-12 p-3">
                            <div className="row">
                                <div className="col-2">
                                    <IonIcon className="my__COLOR mt-1" icon={locationOutline} style={{fontSize:'2rem'}}/>
                                </div>
                                <div className="col-10">
                                    <p className="text-dark" style={{fontSize:'0.9rem'}}>{getAddress}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 pt-3">
                    <div className="row border-0 border-top border-bottom pt-2 pb-2">
                            <div className="col-12">
                                <div className="row pt-2 pb-2">
                                    <div className="col-6 text-left">
                                        <p style={{fontSize:'0.8rem', fontWeight:'400'}}>Subtotal</p>
                                    </div>
                                    <div className="col-6 text-end">
                                        <p style={{fontSize:'0.8rem', fontWeight:'500'}}>Rs. {getCartTotalPrice}</p>
                                    </div>
                                </div>
                                <div className="row pb-2">
                                    <div className="col-6 text-left">
                                        <p style={{fontSize:'0.8rem', fontWeight:'400'}}>Deliver Fee</p>
                                    </div>
                                    <div className="col-6 text-end">
                                        <p style={{fontSize:'0.8rem', fontWeight:'500'}}>Rs. 0</p>
                                    </div>
                                </div>
                                <div className="row pb-2">
                                    <div className="col-6 text-left">
                                        <p style={{fontSize:'0.8rem', fontWeight:'400'}}>Discount</p>
                                    </div>
                                    <div className="col-6 text-end">
                                        <p style={{fontSize:'0.8rem', fontWeight:'500'}}>Rs. 0</p>
                                    </div>
                                </div>
                                <div className="row pb-2">
                                    <div className="col-6 text-left">
                                        <p style={{fontSize:'0.8rem', fontWeight:'400'}}>Service Fee</p>
                                    </div>
                                    <div className="col-6 text-end">
                                        <p style={{fontSize:'0.8rem', fontWeight:'500'}}>Rs. 0</p>
                                    </div>
                                </div>
                                <div className="row pb-2">
                                    <div className="col-6 text-left">
                                        <p style={{fontSize:'0.8rem', fontWeight:'400'}}>Sales Tax</p>
                                    </div>
                                    <div className="col-6 text-end">
                                        <p style={{fontSize:'0.8rem', fontWeight:'500'}}>Rs. 0</p>
                                    </div>
                                </div>
                                <div className="row pb-2">
                                    <div className="col-6 text-left">
                                        <p style={{fontSize:'0.8rem', fontWeight:'400'}}>GST Tax</p>
                                    </div>
                                    <div className="col-6 text-end">
                                        <p style={{fontSize:'0.8rem', fontWeight:'500'}}>Rs. 0</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <h6 style={{fontSize:'0.9rem'}}>Total Amount (incl.GST)</h6>
                        </div>
                        <div className="col-4 text-end">
                            <h6 className="my__COLOR" style={{fontWeight:'600'}}>Rs. {getCartTotalPrice}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="row pt-2 pb-2">
                                <div className="col-6 text-left">
                                    <p style={{fontSize:'0.8rem', fontWeight:'400'}}>Payment Method</p>
                                </div>
                                <div className="col-6 text-end">
                                    <p style={{fontSize:'0.8rem', fontWeight:'500'}}>COD (cash on delivery)</p>
                                </div>
                            </div>
                            <div className="row pt-2 pb-0">
                                <div className="col-6 text-left">
                                    <p style={{fontSize:'0.8rem', fontWeight:'400'}}>Delivery Instruction</p>
                                </div>
                                <div className="col-12 p-4 pt-2">
                                    <div className="row">
                                        <div className="col-12 card">
                                            <div className="">
                                                <IonTextarea
                                                placeholder="eg: please call, Don't ring the doorbell"
                                                clearOnEdit={true}
                                                ></IonTextarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 fixed-bottom bg-white pb-2 pt-2">
                            <div className="row">
                                <div className="col-6 mx-auto badge rounded-pill my__BG shadow pt-2 pb-2">
                                    <h6 className="mt-0 mb-0" style={{ fontSize: "0.8rem", fontWeight: "400",letterSpacing:'2px' }} onClick={orderSubmitFun}>Order Submit</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Checkout;
