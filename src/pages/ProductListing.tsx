import {
    IonContent,
    IonPage
} from "@ionic/react";
import Header from "../components/Header";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
const ProductListing: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent fullscreen>
                <div className="container bg-white pt-3">
                    <div className="row">
                        <div className="col-12 ps-2">
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={4}
                                //   onSlideChange={() => console.log('slide change')}
                                //   onSwiper={(swiper) => console.log(swiper)}
                                className="my__headSubTitle">
                                <SwiperSlide className="w-auto my__CAT_ACTIVE fw-bold pb-1">Data Cables</SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold">Mobile Parts</SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold">Laptop & Accessories</SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold">Pouch</SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold">HnadFree & Speaker </SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold">Charger & Adopter</SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold">Mobile</SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold">Power Bank</SwiperSlide>
                                <SwiperSlide className="w-auto fw-boldedr, ">Usb & Card </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    {/* sub cat  */}
                    <div className="row">
                        <div className="col-12 ps-1 pt-2">
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={4}
                                //   onSlideChange={() => console.log('slide change')}
                                //   onSwiper={(swiper) => console.log(swiper)}
                                className="my__headSubTitle pt-2 pb-2">
                                <SwiperSlide className="w-auto shadow my__SUB_CAT_ACTIVE fw-bold ps-3 pe-3 pt-1 pb-1 rounded-pill">Data Cables</SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold pt-1 pb-1">Mobile Parts</SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold pt-1 pb-1">Laptop & Accessories</SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold pt-1 pb-1">Pouch</SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold pt-1 pb-1">HnadFree & Speaker </SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold pt-1 pb-1">Charger & Adopter</SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold pt-1 pb-1">Mobile</SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold pt-1 pb-1">Power Bank</SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold pt-1 pb-1">Usb & Card </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                {/* now breadcrumb start */}
                <div className="container bg-light">
                    <div className="row">
                        <div className="col-12">
                            <h6 className="text-dark" style={{ fontSize: "0.9rem", fontWeight: "400" }}>Data Cables</h6>
                        </div>
                    </div>
                </div>
                {/* product view  */}
                <div className="container bg-white pt-4 pb-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-4" style={{position:"relative"}}>
                                    <div className="card rounded-5 my__BOX_RADIUS_10">
                                        <div className="card-body">
                                            <img src="../../assets/img/product1.png" alt="product_image" />
                                        </div>
                                    </div>
                                    <h6 className="my__COLOR mb-2 mt-2" style={{fontSize:"0.8rem",fontWeight:"400"}}>Rs. 1,695</h6>
                                    <p className="text-dark" style={{fontSize:"0.7rem",fontWeight:"600",lineHeight:"15px"}}>C-type Cable long Wire</p>
                                    <span className="my__PRODUCT_BADGE">+</span>
                                </div>
                                <div className="col-4" style={{position:"relative"}}>
                                    <div className="card rounded-5 my__BOX_RADIUS_10">
                                        <div className="card-body">
                                            <img src="../../assets/img/product2.png" alt="product_image" />
                                        </div>
                                    </div>
                                    <h6 className="my__COLOR mb-2 mt-2" style={{fontSize:"0.8rem",fontWeight:"400"}}>Rs. 1,695</h6>
                                    <p className="text-dark" style={{fontSize:"0.7rem",fontWeight:"600",lineHeight:"15px"}}>C-type Cable long Wire</p>
                                    <span className="my__PRODUCT_BADGE">+</span>
                                </div>
                                <div className="col-4" style={{position:"relative"}}>
                                    <div className="card rounded-5 my__BOX_RADIUS_10">
                                        <div className="card-body">
                                            <img src="../../assets/img/product3.png" alt="product_image" />
                                        </div>
                                    </div>
                                    <h6 className="my__COLOR mb-2 mt-2" style={{fontSize:"0.8rem",fontWeight:"400"}}>Rs. 1,695</h6>
                                    <p className="text-dark" style={{fontSize:"0.7rem",fontWeight:"600",lineHeight:"15px"}}>C-type Cable long Wire</p>
                                    <span className="my__PRODUCT_BADGE">+</span>
                                </div>
                                <div className="col-4 mt-3" style={{position:"relative"}}>
                                    <div className="card rounded-5 my__BOX_RADIUS_10">
                                        <div className="card-body">
                                            <img src="../../assets/img/product3.png" alt="product_image" />
                                        </div>
                                    </div>
                                    <h6 className="my__COLOR mb-2 mt-2" style={{fontSize:"0.8rem",fontWeight:"400"}}>Rs. 1,695</h6>
                                    <p className="text-dark" style={{fontSize:"0.7rem",fontWeight:"600",lineHeight:"15px"}}>C-type Cable long Wire</p>
                                    <span className="my__PRODUCT_BADGE">+</span>
                                </div>
                                <div className="col-4 mt-3" style={{position:"relative"}}>
                                    <div className="card rounded-5 my__BOX_RADIUS_10">
                                        <div className="card-body">
                                            <img src="../../assets/img/product2.png" alt="product_image" />
                                        </div>
                                    </div>
                                    <h6 className="my__COLOR mb-2 mt-2" style={{fontSize:"0.8rem",fontWeight:"400"}}>Rs. 1,695</h6>
                                    <p className="text-dark" style={{fontSize:"0.7rem",fontWeight:"600",lineHeight:"15px"}}>C-type Cable long Wire</p>
                                    <span className="my__PRODUCT_BADGE">+</span>
                                </div>
                                <div className="col-4 mt-3" style={{position:"relative"}}>
                                    <div className="card rounded-5 my__BOX_RADIUS_10">
                                        <div className="card-body">
                                            <img src="../../assets/img/product1.png" alt="product_image" />
                                        </div>
                                    </div>
                                    <h6 className="my__COLOR mb-2 mt-2" style={{fontSize:"0.8rem",fontWeight:"400"}}>Rs. 1,695</h6>
                                    <p className="text-dark" style={{fontSize:"0.7rem",fontWeight:"600",lineHeight:"15px"}}>C-type Cable long Wire</p>
                                    <span className="my__PRODUCT_BADGE">+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default ProductListing;
