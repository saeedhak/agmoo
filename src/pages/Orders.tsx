import React, { useEffect, useState, useContext } from "react";
import {
    IonContent,
    IonPage,
    IonBadge,
    IonSearchbar
} from "@ionic/react";
import { Link } from "react-router-dom";
import { eyeSharp } from 'ionicons/icons';
import Header from "../components/Header";
const Orders = () => {
    // use global variable start
    const baseUrl = "https://agmoo.com/agmoo_api/";
    const endPoint = `index.php?endPoint=`;
    // useState variable start
    const [getUserOrderDetails, setUserOrderDetails] = useState<any>();
    const [searchInput, setSearchInput] = useState<any>();
    const [mainData, setMainData] = useState<any>();
    // useState variable end
    // use global variable end 
    // use effect start 
    useEffect(() => {
        getUserOrderData(localStorage.getItem('sessionID'));
    }, []);
    // use effect end
    // my function start 
    const getUserOrderData = (userId: any) => {
        // console.log("get user order data");
        fetch(`${baseUrl}${endPoint}userDataAfterLogin&sessionId=${userId}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // console.log(data.sendData[0].userOrderDetails);
                setUserOrderDetails(data.sendData[0].userOrderDetails);
                setMainData(data.sendData[0].userOrderDetails);
            })
    }
    //   for search filter start
    const searchItems = (searchValue: any) => {
        setSearchInput(searchValue)
        if (searchValue && searchValue !== '') {
            const filteredData = mainData.filter((item: any) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setUserOrderDetails(filteredData)
        }
        else {
            setUserOrderDetails(mainData);
        }
    }
    //   for search filter end 
    // my function end 
    return (
        <IonPage>
            <Header />
            <IonContent fullscreen>
                <div className="container bg-white pt-3">
                    {/* search filter start */}
                    <div className="row">
                        <div className="col-12">
                            <IonSearchbar className="my__BOX_RADIUS" placeholder="Search Order Number..." onIonChange={(ev: any) => searchItems(ev.target.value)}></IonSearchbar>
                        </div>
                    </div>
                    {/* search filter end  */}
                    <div className="row">
                        {getUserOrderDetails?.map((data: any, index: any) => {
                            return (
                                <div className="col-12 p-2" key={index}>
                                    <div className="card p-3 shadow my__BOX_RADIUS">
                                        <div className="row">
                                            <div className="col-6">
                                                <h6 className="mb-0 mt-0" style={{ fontSize: '0.7rem' }}>Order Number: <span className="my__COLOR">{data.ord_confirm_num}</span></h6>
                                                <h6 className="mb-0 mt-0" style={{ fontSize: '0.7rem' }}>Order Amount: <span className="my__COLOR">{data.subtotal_amount}</span></h6>
                                            </div>
                                            <div className="col-3">
                                                <h6 className="mt-0 mb-0" style={{ fontSize: '0.7rem' }}>Status</h6>
                                                <IonBadge slot="start">{data.order_status}</IonBadge>
                                            </div>
                                            <div className="col-3">
                                                <h6 className="mt-0 mb-0" style={{ fontSize: '0.7rem' }}>Order Items</h6>
                                                <Link to={`/my-order/${data.id}`} style={{ textDecoration: "none" }} >
                                                    <IonBadge slot="start">View Items</IonBadge>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Orders