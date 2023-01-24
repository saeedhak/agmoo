import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link , useParams } from "react-router-dom";
import {
    IonContent,
    IonPage,
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
} from "@ionic/react";

// Import Swiper styles
import "swiper/css";
const ProductListing: React.FC = () => {
    // my const variable start
    const paramsValue:any = useParams();
    const baseImgUrl = "https://agmoo.com/";
    const baseUrl = "https://agmoo.com/agmoo_api/";
    const endPoint = `index.php?endPoint=`;
    // my const variable end 
    // use start variable start
    const [isOpen, setIsOpen] = useState(false);
    const [productListingData, setProductListingData] = useState<any>();
    const [moduleListingData, setModuleListingData] = useState<any>();
    const [breadcrumb, setBreadcrumb] = useState<any>();
    const [modalProduct, setModalProduct] = useState<any>();
    const [activeId, setActiveId] = useState<any>();
    // use start variable end

    // useEffect start
    useEffect(()=>{
        setActiveId(paramsValue.id);
        getModuleData(paramsValue.modelName);
        getListingProductData(paramsValue.modelName, paramsValue.id );
    },[]);
    // useEffect End 
    // my function start
        // get params data behalf of params module start
            const getModuleData = (moduleName:any)=>{
                let THIS_END_POINT = "";
                if(paramsValue.modelName === "brand"){
                    THIS_END_POINT = `${baseUrl}${endPoint}${moduleName}`;
                }else{
                    THIS_END_POINT = `${baseUrl}${endPoint}${moduleName}&catWithSubCat=Yes`;
                }
                    fetch(THIS_END_POINT)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        if(paramsValue.modelName === "brand"){

                            setBreadcrumb(data.sendData.filter( (e:any) => e.id === paramsValue.id ));
                        }else{

                            setBreadcrumb(data.sendData[0].category.filter( (e:any) => e.id === paramsValue.id ));
                        }
                        return setModuleListingData(data.sendData);
                    })
            }
        // get params data behalf of params module end 
        // get product listing data behalf of brand and categories start
            const getListingProductData = (moduleName:any, moduleNameId:any )=>{
                    setActiveId(moduleNameId);
                    if(paramsValue.modelName === "brand"){

                        moduleListingData && setBreadcrumb(moduleListingData.filter( (e:any) => e.id === moduleNameId ));
                    }else{

                        moduleListingData && setBreadcrumb(moduleListingData[0].category.filter( (e:any) => e.id === moduleNameId ));
                    }
                    fetch(`${baseUrl}${endPoint}${moduleName}&moduleId=${moduleNameId}`)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        return setProductListingData(data.sendData);
                    })

            }
        // get product listing data behalf of brand and categories start
        const getModalData = (endpointVal:any)=>{
            fetch(baseUrl+endpointVal)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            return setModalProduct(data.sendData[0]);
          })
        };
        // get modal data behalf of product id end 
    // my function end 

    // test area start
    // console.log(productListingData);
    // console.log(breadcrumb);
    console.log(moduleListingData);
    // test area end 
    return (
        <IonPage>
            <Header />
            <IonContent fullscreen>
                <div className="container bg-white pt-3">
                    {paramsValue.modelName === "brand"?
                        <div className="row">
                        <div className="col-12 ps-2">
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={4}
                                className="my__headSubTitle"
                            >
                                {moduleListingData?.map((data:any, index:any) => {
                    
                            return(
                                <SwiperSlide className={`w-auto fw-bold pb-1 ${data.id === activeId?'my__CAT_ACTIVE':''}`} key={index} onClick={()=>{getListingProductData("brand",data.id)}}>
                                {data.brands_title}
                            </SwiperSlide>     
                            )
                        })}
                            </Swiper>
                        </div>
                    </div>
                    :
                    <>
                    <div className="row">
                        <div className="col-12 ps-2">
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={4}
                                className="my__headSubTitle"
                            >
                                {moduleListingData && moduleListingData[0].category?.map((data:any, index:any) => {
                            return(
                                <SwiperSlide className={`w-auto fw-bold pb-1 ${data.id === activeId?'my__CAT_ACTIVE':''}`} key={index} onClick={()=>{getListingProductData("category",data.id)}}>
                                {data.cat_title}
                            </SwiperSlide>     
                            )
                        })}
                            </Swiper>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 ps-2">
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={4}
                                className="my__headSubTitle pt-2 pb-2"
                            >
                                {moduleListingData && moduleListingData[0].subCategory?.map((data:any, index:any) => {
                                    if(data.cat_id === activeId){
                                        
                                        return(
                                            <SwiperSlide className={`w-auto shadow fw-bold ps-3 pe-3 pt-1 pb-1 rounded-pill ${index === 1?'my__SUB_CAT_ACTIVE':''}`} key={index} onClick={()=>{}}>
                                                {/* getListingProductData("category",data.id) */}
                                            {data.subcat_title}
                                        </SwiperSlide>     
                                        )
                                    }else{return("")}
                        })}
                            </Swiper>
                        </div>
                    </div>
                    </>
                    }
                    {/* sub cat  */}
                </div>
                {/* now breadcrumb start */}
                <div className="container bg-light">
                    <div className="row">
                        <div className="col-12">
                            <h6
                                className="text-dark"
                                style={{ fontSize: "0.9rem", fontWeight: "400" }}
                            >
                                {breadcrumb && breadcrumb[0] && paramsValue.modelName === "brand" && breadcrumb[0].brands_title}
                                {breadcrumb && breadcrumb[0] && paramsValue.modelName === "category" && breadcrumb[0].cat_title}
                            </h6>
                        </div>
                    </div>
                </div>
                {/* product view  */}
                <div className="container bg-white pt-4 pb-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="row gy-4">
                                {productListingData?.map((data:any, index:any)=>{
                                    return(
                                        
                                <div className="col-4" style={{ position: "relative" }} key={index}>
                                <div className="card rounded-5 my__BOX_RADIUS_10">
                                    <div className="card-body">
                                        <img
                                            src={`${baseImgUrl}${data.large_img}`}
                                            alt={data.pro_title}
                                        />
                                    </div>
                                </div>
                                <h6
                                    className="my__COLOR mb-2 mt-2"
                                    style={{ fontSize: "0.8rem", fontWeight: "400" }}
                                >
                                    {`Rs. ${data.actual_price}`}
                                </h6>
                                <p
                                    className="text-dark"
                                    style={{
                                        fontSize: "0.7rem",
                                        fontWeight: "600",
                                        lineHeight: "15px",
                                    }}
                                >
                                    {data.pro_title}
                                </p>
                                <span className="my__PRODUCT_BADGE" onClick={() => {getModalData(`index.php?endPoint=product&prdId=${data.id}`); setIsOpen(true)}}>+</span>
                            </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <>
                    {modalProduct?
                    <IonModal isOpen={isOpen}>
                        <IonHeader>
                            <IonToolbar>
                                <IonTitle>{modalProduct.pro_title}</IonTitle>
                                <IonButtons slot="end">
                                    <IonButton onClick={() => setIsOpen(false)}>X</IonButton>
                                </IonButtons>
                            </IonToolbar>
                        </IonHeader>
                        <IonContent className="ion-padding">
                            <div className="w-100 text-center">
                                <img className="w-50" src={`${baseImgUrl}${modalProduct.large_img}`} alt="img" />
                            </div>
                            <h6 className="pt-2" style={{ fontSize: "0.8rem", fontWeight: "600" }}>{modalProduct.pro_title}</h6>
                            <h6 className="my__COLOR mb-2 mt-2" style={{ fontSize: "0.8rem", fontWeight: "500" }}>
                                {`Rs. ${modalProduct.actual_price}`}
                            </h6>
                            <h6 className="mb-1" style={{ fontSize: "0.8rem", fontWeight: "600" }}>Pack Size</h6>
                            <span className="badge rounded-pill my__BG me-2" style={{ fontSize: "0.7rem", fontWeight: "500" }}>Long Size</span>
                            <span className="badge rounded-pill my__BG" style={{ fontSize: "0.7rem", fontWeight: "500" }}>Small Size</span>
                            <h6 className="mb-2 mt-4" style={{ fontSize: "0.8rem", fontWeight: "600" }}>Product Details</h6>
                            <h6 className="text-secondary mt-0" style={{ fontSize: "0.8rem", fontWeight: "400", lineHeight: "20px" }}>{modalProduct.pshort_des}</h6>
                            <div className="container pb-5">
                                <div className="row">
                                    <div className="col-12">
                                        <h6>Similar Items</h6>
                                    </div >
                                    <div className="col-12">
                                        <div className="row">
                                        <Swiper
                                            spaceBetween={10}
                                            slidesPerView={3}
                                            //   onSlideChange={() => console.log('slide change')}
                                            //   onSwiper={(swiper) => console.log(swiper)}
                                            className="my__headSubTitle pt-3 pb-2 pe-2"
                                        >
                                            {productListingData?.map((data:any, index:any)=>{
                                        return(
                                            <SwiperSlide key={index}>
                                            <div className="col-4 w-100" style={{ position: "relative" }}>
                                    <div className="card rounded-5 my__BOX_RADIUS_10">
                                        <div className="card-body">
                                            <img
                                                src={`${baseImgUrl}${data.large_img}`}
                                                alt={data.pro_title}
                                            />
                                        </div>
                                    </div>
                                    <h6
                                        className="my__COLOR mb-2 mt-2"
                                        style={{ fontSize: "0.8rem", fontWeight: "400" }}
                                    >
                                        {`Rs. ${data.actual_price}`}
                                    </h6>
                                    <p
                                        className="text-dark"
                                        style={{
                                            fontSize: "0.7rem",
                                            fontWeight: "600",
                                            lineHeight: "15px",
                                        }}
                                    >
                                        {data.pro_title}
                                    </p>
                                    <span className="my__PRODUCT_SLIDER_BADGE" onClick={() =>{getModalData(`index.php?endPoint=product&prdId=${data.id}`); setIsOpen(true);}}>+</span>
                                </div>
                                                            </SwiperSlide>
                                        )
                                })}
                                        </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container pt-3 pb-2 fixed-bottom bg-white">
                                <div className="row g-3">
                                    <div className="col-5 shadow badge rounded-pill pe-0 ps-0 pt-0 pb-0">
                                        <div className="row g-0">
                                            <div className="col-4 ps-0">
                                            <span className="badge my__ROUNDED_PILL_LEFT shadow my__COLOR w-100 pt-3 pb-3" style={{fontSize:"1rem"}}>-</span>
                                            </div>
                                            <div className="col-4">
                                                <span className="badge rounded-5 my__BG w-100 pt-3 pb-3" style={{fontSize:"1rem"}}>1</span>
                                            </div>
                                            <div className="col-4 pe-0">
                                            <span className="badge my__ROUNDED_PILL_RIGHT shadow my__COLOR w-100 pt-3 pb-3" style={{fontSize:"1rem"}}>+</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-7">
                                        <span className="badge rounded-pill my__BG w-100 shadow pt-3 pb-3" style={{ fontSize: "0.8rem", fontWeight: "500" }}>Add To Cart</span>
                                    </div>
                                </div>
                            </div>
                        </IonContent>
                    </IonModal>
                    :
                    ""}
                </>
            </IonContent>
        </IonPage >
    );
};

export default ProductListing;
