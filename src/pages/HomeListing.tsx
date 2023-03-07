import React, { useEffect, useState, useContext} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { App } from '@capacitor/app';
import {
    IonContent,
    IonPage,
    IonSkeletonText,
    IonModal,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonTitle,
    useIonAlert,
    IonSlides,
    IonSlide,
    IonSearchbar 
} from "@ionic/react";
import Header from "../components/Header";
import NoteContext from "../context/MyContext";
import { Link , useParams, useHistory } from "react-router-dom";
// import { title } from "process";

const HomeListing: React.FC = () => {
    // constant Variable start
    const paramsValue:any  = useParams();
    const [presentAlert] = useIonAlert();
    const history = useHistory();
    const baseImgUrl = "https://agmoo.com/";
    const baseUrl = "https://agmoo.com/agmoo_api/";
    const endPoint = `index.php?endPoint=${paramsValue.listingName}`;
    const useContextState = useContext(NoteContext);
        // for slider start
        const slideOpts = {
            initialSlide: 1,
            speed: 400
        };
        // for slider end 
    // constant variable end

    // use state start
    const [HomeListingData, setHomeListingData] = useState<any>();
    const [isOpen, setIsOpen] = useState(false);
    const [boxLoder, setBoxLoder] = useState<boolean>(false);
    const [modalProduct, setModalProduct] = useState<any>();
    const [cartResponse, setCartResponse] = useState<any>();
    const [countCart, setCountCart] = useState<any>(1);
    const [modalProductQuantity, setModalProductQuantity] = useState<any>();
    const [getProductDataImg, setProductDataImg] = useState<any>();
    const [mainData, setMainData] = useState<any>();
    const [searchInput, setSearchInput] = useState<any>();
    // use state end

    // useEffect start
    useEffect(()=>{
        getHomeListingData(endPoint);
    },[paramsValue]);
    // useEffect end

    // my function start
    const getHomeListingData = (endpointVal:any)=>{
        setBoxLoder(false);
        fetch(baseUrl+endpointVal)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBoxLoder(true);
        setMainData(data.sendData);
        return setHomeListingData(data.sendData);
      })
    };
    // get modal data behalf of product id start
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
    //   for search filter start
    const searchItems = (searchValue:any) => {
        setSearchInput(searchValue)
        if (searchValue && searchValue !== '') {
            const filteredData = mainData.filter((item:any) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setHomeListingData(filteredData)
        }
        else{
            setHomeListingData(mainData);
        }
    }
    //   for search filter end 
    // my function end 

    // my console start
        // console.log(HomeListingData);
    // my console end
    return (
        <IonPage>
            <Header />
            <IonContent fullscreen>
                <div className="container bg-light pt-4 my__PB_3">
                    <div className="row">
                        <div className="col-4 text-center">
                    <Link to="/listing/brand" style={{ textDecoration: "none" }} onClick={()=>{getHomeListingData(`index.php?endPoint=brand`)}}>
                        <img className={`border border-3 my__Border shadow p-2 rounded-circle w-100 h-75 ${paramsValue.listingName === "brand"?"my__border_checked":"my__Border"}`} src="../../assets/img/brand5.png" alt="Brand" style={{objectFit:"contain"}} />
                            <span className="my__headSubTitle my__COLOR"> Brands</span>
                    </Link>
                        </div>
                        <div className="col-4 text-center">
                    <Link to="/listing/category" style={{ textDecoration: "none" }} onClick={()=>{getHomeListingData(`index.php?endPoint=category`)}}>
                        <img className={`border border-3 my__Border shadow p-2 rounded-circle w-100 h-75 ${paramsValue.listingName === "category"?"my__border_checked":"my__Border"}`} src="../../assets/img/category.png" alt="Brand" style={{objectFit:"contain"}} />
                            <span className="my__headSubTitle my__COLOR"> Categories</span>
                    </Link>
                        </div>
                        <div className="col-4 text-center">
                    <Link to="/listing/product" style={{ textDecoration: "none" }} onClick={()=>{getHomeListingData(`index.php?endPoint=product`)}}>
                            <img className={`border border-3 my__Border shadow p-2 rounded-circle w-100 h-75 ${paramsValue.listingName === "product"?"my__border_checked":"my__Border"}`} src="../../assets/img/product.png" alt="Brand" style={{objectFit:"contain"}} />
                            <span className="my__headSubTitle my__COLOR"> Products</span>
                        </Link>
                        </div>
                    </div>
                    {/*  */}
                    <div className="row">
                        <div className="col-12">
                            <IonSearchbar className="my__BOX_RADIUS" placeholder="Search Here" onIonChange={(ev:any) => searchItems(ev.target.value)}></IonSearchbar>
                        </div>
                    </div>
                    {/*  */}
                    <div className="row pt-3">
                        <div className="col-12">
                            <div className="row g-3">
                                {boxLoder? HomeListingData?.map((data:any, index:any) => {
                                    let boxId = "";
                                    let boxUrl = "";
                                    let boxTitle = "";
                                    let boxImgPath = "";
                                    let boxProductPrice = "";
                                    if(paramsValue.listingName === 'brand'){
                                        boxUrl = "brand";
                                        boxTitle = data.brands_title;
                                        boxImgPath = `${baseImgUrl}${data.banner_img}`;
                                        boxId = data.id;
                                    }else if(paramsValue.listingName === 'category'){
                                        boxUrl = "category";
                                        boxTitle = data.cat_title;
                                        boxImgPath = `${baseImgUrl}${data.banner_img}`;
                                        boxId = data.id;
                                    }else if(paramsValue.listingName === 'product'){
                                        boxUrl = "product";
                                        boxTitle = data.pro_title;
                                        boxImgPath = `${baseImgUrl}${data.large_img}`;
                                        boxId = data.id;
                                        boxProductPrice = data.actual_price;
                                    }

                                    if(paramsValue.listingName === "product"){
                                        return(
                                            <div className="col-4" style={{ position: "relative" }} key={index}>
                                    <div className="card rounded-5 my__BOX_RADIUS_10">
                                        <div className="card-body">
                                            <img
                                                src={boxImgPath}
                                                alt={boxTitle}
                                                onClick={() =>{getModalData(`index.php?endPoint=product&prdId=${boxId}`); setIsOpen(true);}}
                                            />
                                        </div>
                                    </div>
                                    <h6
                                        className="my__COLOR mb-2 mt-2"
                                        style={{ fontSize: "0.8rem", fontWeight: "400" }}
                                    >
                                        {`Rs. ${boxProductPrice}`}
                                    </h6>
                                    <p
                                        className="text-dark"
                                        style={{
                                            fontSize: "0.7rem",
                                            fontWeight: "600",
                                            lineHeight: "15px",
                                        }}
                                    >
                                        {boxTitle}
                                    </p>
                                    <span className="my__PRODUCT_BADGE" onClick={() =>{getModalData(`index.php?endPoint=product&prdId=${boxId}`); setIsOpen(true);}}>+</span>
                                </div>
                                        )
                                    }else{
                                        return(
                                            <div className="col-6" key={index}>
                                    <Link to={`/product-listing/${boxUrl}/${boxId}`} style={{ textDecoration: "none" }}>
                                        <div className="card ps-2 my__BOX_RADIUS_10">
                                            <div className="row g-0">
                                                <div className="col-8">
                                                    <p className=" pt-3 pb-3 pe-2 fw-bold text-dark" style={{fontSize:"11px",}}>{boxTitle}</p>
                                                </div>
                                                <div className="col-4">
                                                    <img className="w-100 h-100" src={boxImgPath} alt={boxTitle}/>
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                    </div>
                                        )
                                    }
                                }):<div className="col-6">
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row">
                                            <div className="col-6">
                                            <IonSkeletonText animated={true}></IonSkeletonText>
                                            </div>
                                            <div className="col-6">
                                            <IonSkeletonText animated={true}></IonSkeletonText>
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                                {/* <div className="col-6">
                                <Link to="/product-listing" style={{ textDecoration: "none" }}>
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                                <p className=" pt-3 pb-2 fw-bolder text-dark" style={{fontSize:"13px",}}>title</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100 h-00" src="../../assets/img/product1.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div> */}
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
                                            {HomeListingData?.map((data:any, index:any)=>{
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
        </IonPage>
    );
};

export default HomeListing;
