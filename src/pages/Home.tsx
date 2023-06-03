import React, { useEffect, useState, useContext} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { App } from '@capacitor/app';
import {
  IonContent,
  IonPage,
  IonModal,
  useIonAlert,
  IonSlides,
  IonSlide,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
} from "@ionic/react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import NoteContext from "../context/MyContext";
const Tab1: React.FC = () => {
  const useContextState = useContext(NoteContext);
  // my global variable start
    const baseUrl = "https://agmoo.com/agmoo_api/";
    const baseImgUrl = "https://agmoo.com/";
    const [presentAlert] = useIonAlert();
    // for slider start
    const slideOpts = {
      initialSlide: 1,
      speed: 400
  };
  // for slider end 
// constant variable end
      // useState variable start
      const [HomeBanner, setHomeBanner] = useState<any>();
      const [FeatureProduct, setFeatureProduct] = useState<any>();
      const [BestSellerProduct, seBestSellerProduct] = useState<any>();
      const [NewArrivalProduct, setBestSellerProduct] = useState<any>();
      const [countCart, setCountCart] = useState<any>(1);
      const [modalProductQuantity, setModalProductQuantity] = useState<any>();
      const [modalProduct, setModalProduct] = useState<any>();
      const [getProductDataImg, setProductDataImg] = useState<any>();
      const [isOpen, setIsOpen] = useState(false);
      const [cartResponse, setCartResponse] = useState<any>();
      const [HomeListingData, setHomeListingData] = useState<any>();
      const [clickSectionState, setClickSectionState] = useState<any>();
      // useState variable end  
  // my global variable end  
  // my function start
    // useEffect start
    useEffect(()=>{
        getBanner();
        getFeatureProduct();
        getBestSellerProduct();
        getNewArrivalProduct();
    },[]);
  // useEffect end

  // modal function start
  // get modal data behalf of product id start
  const getModalData = (endpointVal:any,clickSection:any)=>{
    if(clickSection === 'featured'){
      setClickSectionState('featured');
      setHomeListingData(FeatureProduct);
    }else if(clickSection === 'newArrival'){
      setClickSectionState('newArrival');
      setHomeListingData(BestSellerProduct);
    }else if(clickSection === 'bestSeller'){
      setClickSectionState('bestSeller');
      setHomeListingData(NewArrivalProduct);
    }
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
  let END_POINT_VALUE = `${baseUrl}index.php?endPoint=addToCart&prdId=${productId}&sessionId=${sessionID}&cartQTY=${countCart}&action=insert`;
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
        })
  }
  return setCartResponse(data.sendData[0].cartResponse);
})
}
// my add to cart function end 
  // modal function end 
    // get all banners start
    const getBanner = ()=>{
      const endPoint = "index.php?endPoint=getAllBanner";
      fetch(baseUrl+endPoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return setHomeBanner(data.sendData);
    })
  };
    // get all banners end 

    // get all Feature product start
    const getFeatureProduct = ()=>{
      const endPoint = "index.php?endPoint=FeatureProduct";
      fetch(baseUrl+endPoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return setFeatureProduct(data.sendData);
    })
  };
    // get all Feature product end
    
    // get all best seller product start
    const getBestSellerProduct = ()=>{
      const endPoint = "index.php?endPoint=BestSellerProduct";
      fetch(baseUrl+endPoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return seBestSellerProduct(data.sendData);
    })
  };
    // get all best seller product end

    // get all new arrival product start
    const getNewArrivalProduct = ()=>{
      const endPoint = "index.php?endPoint=NewArrivalProduct";
      fetch(baseUrl+endPoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return setBestSellerProduct(data.sendData);
    })
  };
    // get all new arrival product end

    // hardware back button start
    App.addListener('backButton', () => {
      console.log('App opened with URL:');
      setIsOpen(false);
    })
// hardware back button end 
  // my function end 
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <div className="container bg-light pt-4 my__PB_3">
          {useContextState.userLoginStatus === "false" && 
          <div className="card shadow rounded-pill mb-3">
            <div className="card-body p-1">
              <div className="row g-0">
                <div className="col-2 mt-1 ps-1 pe-1">
                  <img src="https://ionicframework.com/docs/img/demos/avatar.svg" className="w-100 rounded-circle" alt="user" />
                </div>
                <div className="col-6">
                  <p className="card-title m-0 text-dark" style={{ fontSize: "0.8rem", fontWeight: "bolder",lineHeight: "20px" }}>sign up or log in</p>
                  <p className="card-text m-0" style={{ fontSize: "0.6rem", fontWeight: "500",lineHeight: "12px" }}>See for better result for our new & featured brand's product</p>
                </div>
                <div className="col-4 pe-1 mt-1">
                <Link to="/account" style={{ textDecoration: "none" }}>
                    <div className="pt-3 pb-3  w-100 badge my__BG text-wrap rounded-pill text-center">
                    Lets's go!
                    </div>
                    </Link>
                </div>
              </div>
            </div>
          </div>
          }
          <div className="row">
            <div className="col-6">
            <Link to="/listing/brand" style={{ textDecoration: "none" }}>
              <div className="card shadow my__BOX_RADIUS">
                <div className="card-body pe-0">
                  <h5 className="card-title my__textLeft my__headTitle mb-1 mt-0 text-dark">Brands</h5>
                  <p className="card-text my__headSubTitle mt-0">Kuch bhai, khai bhi,<br/> kabhi bhi</p>
                  <div className="row pt-4 g-0">
                    {/* <div className="col-2"></div> */}
                    <div className="col-12 float-right p-0">
                      <img className="w-100 h-100" src="../../assets/img/brand5.png" alt="Brand" />
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            </div>
            <div className="col-6 pl-0">
              <div className="row">
                <div className="col-12 pb-2 ps-0 ">
                <Link to="/listing/category" style={{ textDecoration: "none" }}>
                  <div className="card shadow my__BOX_RADIUS">
                    <div className="card-body pe-0 pb-2">
                      <div className="row g-0">
                        <div className="col-8">
                          <h5 className="card-title my__textLeft my__headTitle mb-1 mt-0">Category</h5>
                          <p className="card-text my__headSubTitle mt-0">Kuch bhai, khai bhi, kabhi bhi</p>
                        </div>
                        <div className="col-12 text-end">
                          <img className="w-50 h-100" src="../../assets/img/category.png" alt="Brand" />
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
                <div className="col-12 ps-0">
                <Link to="/listing/product" style={{ textDecoration: "none" }}>
                  <div className="card shadow my__BOX_RADIUS">
                    <div className="card-body pe-0 pb-0">
                      <div className="row g-0">
                        <div className="col-6">
                          <h5 className="card-title my__textLeft my__headTitle mb-1 mt-0">Product</h5>
                          <p className="card-text my__headSubTitle mt-0">Kuch bhai, khai bhi, kabhi bhi</p>
                        </div>
                        <div className="col-6 text-end mt-3">
                          <img className="w-100 h-100" src="../../assets/img/product.png" alt="Brand" />
                        </div>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* all banners start */}
          <div className="card shadow mt-3 mb-3 my__BOX_RADIUS_10">
            <div className="card-body p-2">
          <div className="row g-0">
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            className="my__headSubTitle"
          >
            {HomeBanner?.map((data:any, index:any)=>{
              return(
              <SwiperSlide key={index}>
                <div className="col-4 w-100">
                  <img className="img-responsive my__BOX_RADIUS_10" src={`${baseImgUrl}${data.large_img}`} alt={index} style={{height:'100px'}} />
                </div>
              </SwiperSlide>
              )
            })}


          </Swiper>
          </div>
          </div>
          </div>
          {/* all banners end  */}

          {/* feature product start */}
          <div className="card shadow mt-3 mb-3 my__BOX_RADIUS_10">
            <div className="card-body p-2">
              <h6 className="my__headTitle mt-2 mb-1">All Feature Product</h6>
              <h6 className="my__headSubTitle mb-4 mt-0">This is all my feature product slide it for best</h6>
          <div className="row g-0">
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            className="my__headSubTitle"
          >
            {FeatureProduct?.map((data:any, index:any)=>{
              return(
              <SwiperSlide key={index}>
                <div className="col-4 w-100 pt-2 pb-2" style={{ position: "relative" }}>
                    <div className="card rounded-5 my__BOX_RADIUS_10">
                        <div className="card-body">
                            <img className="w-100"
                                src={`${baseImgUrl}${data.large_img}`}
                                alt={data.pro_title}
                                onClick={() =>{getModalData(`index.php?endPoint=product&prdId=${data.id}`,'featured'); setIsOpen(true);}}
                            style={{height:'70px',objectFit: 'fill'}}/>
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
                    <span className="my__PRODUCT_SLIDER_BADGE" onClick={() =>{getModalData(`index.php?endPoint=product&prdId=${data.id}`,'featured'); setIsOpen(true);}} style={{top:0}}>+</span>
                </div>
              </SwiperSlide>
              )
            })}


          </Swiper>
          </div>
          </div>
          </div>
          {/* feature product end  */}

          {/* best seller product start */}
          <div className="card shadow mt-3 mb-3 my__BOX_RADIUS_10">
            <div className="card-body p-2">
              <h6 className="my__headTitle mt-2 mb-1">Best Seller Product</h6>
              <h6 className="my__headSubTitle mb-4 mt-0">This is all my feature product slide it for best</h6>
          <div className="row g-0">
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            className="my__headSubTitle"
          >
            {BestSellerProduct?.map((data:any, index:any)=>{
              return(
              <SwiperSlide key={index}>
                <div className="col-4 w-100 pt-2 pb-2" style={{ position: "relative" }}>
                    <div className="card rounded-5 my__BOX_RADIUS_10">
                        <div className="card-body">
                            <img className="w-100"
                                src={`${baseImgUrl}${data.large_img}`}
                                alt={data.pro_title}
                                onClick={() =>{getModalData(`index.php?endPoint=product&prdId=${data.id}`,'bestSeller'); setIsOpen(true);}}
                            style={{height:'70px',objectFit: 'fill'}}/>
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
                    <span className="my__PRODUCT_SLIDER_BADGE" onClick={() =>{getModalData(`index.php?endPoint=product&prdId=${data.id}`,'bestSeller'); setIsOpen(true);}} style={{top:0}}>+</span>
                </div>
              </SwiperSlide>
              )
            })}


          </Swiper>
          </div>
          </div>
          </div>
          {/* Best Seller product end  */}

          {/* new arrival product start */}
          <div className="card shadow mt-3 mb-3 my__BOX_RADIUS_10">
            <div className="card-body p-2">
              <h6 className="my__headTitle mt-2 mb-1">New Arrival Product</h6>
              <h6 className="my__headSubTitle mb-4 mt-0">This is all my feature product slide it for best</h6>
          <div className="row g-0">
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            className="my__headSubTitle"
          >
            {NewArrivalProduct?.map((data:any, index:any)=>{
              return(
              <SwiperSlide key={index}>
                <div className="col-4 w-100 pt-2 pb-2" style={{ position: "relative" }}>
                    <div className="card rounded-5 my__BOX_RADIUS_10">
                        <div className="card-body">
                            <img className="w-100"
                                src={`${baseImgUrl}${data.large_img}`}
                                alt={data.pro_title}
                                onClick={() =>{getModalData(`index.php?endPoint=product&prdId=${data.id}`,'newArrival'); setIsOpen(true);}}
                            style={{height:'70px',objectFit: 'fill'}}/>
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
                    <span className="my__PRODUCT_SLIDER_BADGE" onClick={() =>{getModalData(`index.php?endPoint=product&prdId=${data.id}`,'newArrival'); setIsOpen(true);}} style={{top:0}}>+</span>
                </div>
              </SwiperSlide>
              )
            })}


          </Swiper>
          </div>
          </div>
          </div>
          {/* new arrival product end  */}
        </div>
        {/* for product modal start */}
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
                            <h6 className="pt-2" style={{ fontSize: "0.8rem", fontWeight: "600" }}>{`${modalProduct.pro_title} ${modalProduct.market_retail_price && modalProduct.market_retail_price > 0 ? ', MRP: RS. '+modalProduct.market_retail_price : ''} `}</h6>
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
                                            {HomeListingData?.map((data:any, index:any)=>{
                                        return(
                                            <SwiperSlide key={index}>
                                            <div className="col-4 w-100" style={{ position: "relative" }}>
                                    <div className="card rounded-5 my__BOX_RADIUS_10">
                                        <div className="card-body">
                                            <img
                                                src={`${baseImgUrl}${data.large_img}`}
                                                alt={data.pro_title}
                                                onClick={() =>{getModalData(`index.php?endPoint=product&prdId=${data.id}`,clickSectionState); setIsOpen(true);}}
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
                                    <span className="my__PRODUCT_SLIDER_BADGE" onClick={() =>{getModalData(`index.php?endPoint=product&prdId=${data.id}`,clickSectionState); setIsOpen(true);}}>+</span>
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
        {/* for modal product end  */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
