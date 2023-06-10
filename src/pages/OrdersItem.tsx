import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
    IonContent,
    IonPage,
    IonSearchbar
} from "@ionic/react";
import Header from "../components/Header";

const OrdersItem = () => {
    // global variable start
    const paramsValue: any = useParams();
    const baseUrl = "https://agmoo.com/agmoo_api/";
    const endPoint = `index.php?endPoint=`;
    const baseImgUrl = "https://agmoo.com/";
    // useState start
    const [getOrderDetailsItemData, setOrderDetailsItemData] = useState<any>();
    const [searchInput, setSearchInput] = useState<any>();
    const [mainData, setMainData] = useState<any>();
    // useState end 
    // global variable end 
    // useEffect start
    useEffect(() => {
        getOrderDetailsItem(paramsValue.orderNum);
    }, []);
    // useEffect end
    // my function start 
    // get order detail item data start
    const getOrderDetailsItem = (orderId: any) => {
        fetch(`${baseUrl}${endPoint}orderDetailsItem&orderId=${orderId}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                // console.log(data.sendData[0].userOrderDetailsItem);
                setOrderDetailsItemData(data.sendData[0].userOrderDetailsItem);
                setMainData(data.sendData[0].userOrderDetailsItem);
            });
        // }
    }
    // get order detail item data end
    //   for search filter start
    const searchItems = (searchValue: any) => {
        setSearchInput(searchValue)
        if (searchValue && searchValue !== '') {
            const filteredData = mainData.filter((item: any) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setOrderDetailsItemData(filteredData)
        }
        else {
            setOrderDetailsItemData(mainData);
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
                            <IonSearchbar className="my__BOX_RADIUS" placeholder="Search Product Title ..." onIonChange={(ev: any) => searchItems(ev.target.value)}></IonSearchbar>
                        </div>
                    </div>
                    {/* search filter end  */}
                    <div className="row">
                        {
                            getOrderDetailsItemData?.map((data: any, index: any) => {
                                return (
                                    <div className="col-12 p-2" key={index}>
                                        <div className="card p-3 shadow my__BOX_RADIUS">
                                            <div className="row">
                                                <div className="col-3">
                                                    <img className="h-100 w-100" style={{ objectFit: "cover" }} src={`${baseImgUrl}${data.large_img}`} alt={data.pro_title} />
                                                </div>
                                                <div className="col-9 py-2">
                                                    <h6 className="mb-0 mt-0" style={{ fontSize: '0.7rem' }}>Product Title: 
                                                        <span className="my__COLOR ms-1">{data.pro_title}</span></h6>
                                                    <h6 className="mb-0 mt-0" style={{ fontSize: '0.7rem' }}>Product Amount: 
                                                        <span className="my__COLOR ms-1">RS: {data.total_price}</span></h6>
                                                    <h6 className="mb-0 mt-0" style={{ fontSize: '0.7rem' }}>Product Qty: 
                                                        <span className="my__COLOR ms-1">{data.prod_qty} Item</span></h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default OrdersItem