import React, { useState, useEffect,useContext } from "react";
import Header from "../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link , useParams, useHistory   } from "react-router-dom";
import { App } from '@capacitor/app';
import {
    IonContent,
    IonPage,
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    useIonAlert,
    IonSlides,
    IonSlide 
} from "@ionic/react";

// Import Swiper styles
import "swiper/css";
import NoteContext from "../context/MyContext";

const ProductListing: React.FC = () => {
    // my const variable start
    const paramsValue:any = useParams();
    const [presentAlert] = useIonAlert();
    const history = useHistory();
    const baseImgUrl = "https://agmoo.com/";
    const baseUrl = "https://agmoo.com/agmoo_api/";
    const endPoint = `index.php?endPoint=`;
    const useContextState = useContext(NoteContext);
        // for slider start
        const slideOpts = {
            initialSlide: 1,
            speed: 400
        };
        // for slider end 
    // my const variable end 
    // use start variable start
    const [isOpen, setIsOpen] = useState(false);
    const [productListingData, setProductListingData] = useState<any>();
    const [moduleListingData, setModuleListingData] = useState<any>();
    const [breadcrumb, setBreadcrumb] = useState<any>();
    const [modalProduct, setModalProduct] = useState<any>();
    const [activeId, setActiveId] = useState<any>();
    const [selectCatId, setSelectCatId] = useState<any>();
    const [subCatActiveId, setSubCatActiveId] = useState<any>();
    const [countCart, setCountCart] = useState<any>(1);
    const [cartResponse, setCartResponse] = useState<any>();
    const [modalProductQuantity, setModalProductQuantity] = useState<any>();
    const [getProductDataImg, setProductDataImg] = useState<any>();

    // use start variable end

    // useEffect start
    useEffect(()=>{
        setIsOpen(false);
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
                let THIS_END_POINT = "";
                    if(moduleName === "brand"){
                        setActiveId(moduleNameId);
                        THIS_END_POINT = `${baseUrl}${endPoint}${moduleName}&moduleId=${moduleNameId}` ;
                        moduleListingData && setBreadcrumb(moduleListingData.filter( (e:any) => e.id === moduleNameId ));
                    }else if(moduleName === "category"){
                        setActiveId(moduleNameId);
                        THIS_END_POINT = `${baseUrl}${endPoint}${moduleName}&moduleId=${moduleNameId}` ;
                        moduleListingData && setBreadcrumb(moduleListingData[0].category.filter( (e:any) => e.id === moduleNameId ));
                    }else if(moduleName === "subCategory"){
                        THIS_END_POINT = `${baseUrl}${endPoint}category&moduleSubCatId=${moduleNameId}` ;
                        moduleListingData && setBreadcrumb(moduleListingData[0].subCategory.filter( (e:any) => e.id === moduleNameId ));
                    }
                    // console.log(THIS_END_POINT);
                    // return false;
                    fetch(THIS_END_POINT)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        return setProductListingData(data.sendData);
                    })

            }
        // get product listing data behalf of brand and categories start
        const getModalData = (endpointVal:any)=>{
            setCountCart(1);
            fetch(baseUrl+endpointVal)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setModalProductQuantity(data.sendData[0].stock_qty)
            getModalDataProductImg(`${endpointVal}&prdImg=Yes`)
            return setModalProduct(data.sendData[0]);
          })
        };
        // get modal data behalf of product id end
        // get modal data product images behalf of product id start
        const getModalDataProductImg = (endpointVal:any)=>{
            setCountCart(1);
            fetch(baseUrl+endpointVal)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            return setProductDataImg(data.sendData);
          })
        };
        
        // get modal data product images behalf of product id end 
        // my count cart value function start
        const countCartFun = (actionPerform:any)=>{
            if(actionPerform === "add" && modalProductQuantity > countCart){
                setCountCart(countCart+1);
            }else if(actionPerform === "remove"){
                if(countCart > 1){
                    setCountCart(countCart-1);
                }
            }
        }
        // my count cart value function start
        // my add to cart function start
        const addToCart = (productId:any)=>{
            let sessionID = localStorage.getItem('sessionID');
            let END_POINT_VALUE = `${baseUrl}${endPoint}addToCart&prdId=${productId}&sessionId=${sessionID}&cartQTY=${countCart}&action=insert`;
            fetch(END_POINT_VALUE)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            if(data.sendData[0].cartResponse === "addQty"){
                setCountCart(countCart+1);
                presentAlert({
                    subHeader: 'Product Already Add In Cart !! Now Quantity Increase ',
                    buttons: ['OK'],
                  })
            }else if(data.sendData[0].cartResponse === "insertProductInCart"){
                useContextState.updateCartQty(parseInt(useContextState.stateCartQTY)+1);
                presentAlert({
                    header: 'Product Successfully Add To Cart',
                    buttons: [
                        {
                          text: 'Go To Cart',
                          role: 'conform',
                          handler: () => {
                            history.push("/cart");
                            setIsOpen(false);
                          },
                        },
                        {
                          text: 'Go To Home',
                          role: 'confirm',
                          handler: () => {
                            history.push("/home");
                            setIsOpen(false);
                          },
                        },
                        {
                          text: 'Stay this Page',
                          role: 'cancel',
                          handler: () => {
                            setIsOpen(false);
                          },
                        },
                      ],
                  })
            }
            return setCartResponse(data.sendData[0].cartResponse);
          })
        }
        // my add to cart function end 
        // hardware back button start
            App.addListener('backButton', () => {
                console.log('App opened with URL:');
                setIsOpen(false);
              })
        // hardware back button end 
    // my function end 

    // test area start
    // console.log(productListingData);
    // console.log(breadcrumb);
    // console.log(moduleListingData);
    // console.log(cartResponse);
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
                                <SwiperSlide className={`w-auto fw-bold pb-1 ${data.id === activeId?'my__CAT_ACTIVE':''}`} key={index} onClick={()=>{getListingProductData("category",data.id);setSelectCatId(data.id)}}>
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
                                    if(data.cat_id === selectCatId){
                                        
                                        return(
                                            <SwiperSlide className={`w-auto shadow fw-bold ps-3 pe-3 pt-1 pb-1 rounded-pill ${data.id === subCatActiveId?'my__SUB_CAT_ACTIVE':''}`} key={index} onClick={()=>{getListingProductData("subCategory",data.id);setSubCatActiveId(data.id)}}>
                                                {/* getListingProductData("category",data.id) */}
                                            {data.subcat_title}
                                            </SwiperSlide>     
                                        )
                                    }else{
                                        return("")
                                    }
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
                                {breadcrumb && breadcrumb[0] && paramsValue.modelName === "category" && breadcrumb[0].subcat_title}
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
                                            onClick={() => {getModalData(`index.php?endPoint=product&prdId=${data.id}`); setIsOpen(true)}}
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
                            {getProductDataImg && getProductDataImg.length > 1 
                            ? 
                                <IonSlides pager={true} options={slideOpts}>
                                    {
                                        getProductDataImg.map((imgData:any,index:any)=>{
                                            return(
                                                    <IonSlide key={index}>
                                                        <img className="img-responsive" src={`${baseImgUrl}${imgData.large_img}`} alt={index} /> 
                                                    </IonSlide>
                                            )
                                        })
                                    }
                                </IonSlides>
                            : 
                                <img className="w-50" src={`${baseImgUrl}${modalProduct.large_img}`} alt="img" /> 
                            }
                            </div>
                            <h6 className="pt-2" style={{ fontSize: "0.8rem", fontWeight: "600" }}>{modalProduct.pro_title}</h6>
                            <h6 className="my__COLOR mb-2 mt-2" style={{ fontSize: "0.8rem", fontWeight: "500" }}>
                                {`Rs. ${modalProduct.actual_price}`}
                            </h6>
                            {/* <h6 className="mb-1" style={{ fontSize: "0.8rem", fontWeight: "600" }}>Pack Size</h6> */}
                            {/* <span className="badge rounded-pill my__BG me-2" style={{ fontSize: "0.7rem", fontWeight: "500" }}>Long Size</span> */}
                            {/* <span className="badge rounded-pill my__BG" style={{ fontSize: "0.7rem", fontWeight: "500" }}>Small Size</span><br/> */}
                            <span className="badge rounded-5 my__BG pt-2 pb-2 ps-4 pe-4 mt-2" style={{ fontSize: "0.9rem", fontWeight: "400" }}>Quantity : {modalProduct.stock_qty}</span>
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
                                                onClick={() =>{getModalData(`index.php?endPoint=product&prdId=${data.id}`); setIsOpen(true);}}
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
                                            <span className="badge my__ROUNDED_PILL_LEFT shadow my__COLOR w-100 pt-3 pb-3" style={{fontSize:"1rem"}} onClick={()=>{countCartFun("remove")}}>-</span>
                                            </div>
                                            <div className="col-4">
                                                <span className="badge rounded-5 my__BG w-100 pt-3 pb-3" style={{fontSize:"1rem"}}>{countCart}</span>
                                            </div>
                                            <div className="col-4 pe-0">
                                            <span className="badge my__ROUNDED_PILL_RIGHT shadow my__COLOR w-100 pt-3 pb-3" style={{fontSize:"1rem"}} onClick={()=>{countCartFun("add")}}>+</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-7">
                                        <span className="badge rounded-pill my__BG w-100 shadow pt-3 pb-3" style={{ fontSize: "0.8rem", fontWeight: "500" }} onClick={()=>{addToCart(modalProduct.id)}}>Add To Cart</span>
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
