import React, { useState } from "react";
import Header from "../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
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
    const [isOpen, setIsOpen] = useState(false);
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
                                className="my__headSubTitle"
                            >
                                <SwiperSlide className="w-auto my__CAT_ACTIVE fw-bold pb-1">
                                    Data Cables
                                </SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold">
                                    Mobile Parts
                                </SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold">
                                    Laptop & Accessories
                                </SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold">Pouch</SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold">
                                    HnadFree & Speaker{" "}
                                </SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold">
                                    Charger & Adopter
                                </SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold">Mobile</SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold">Power Bank</SwiperSlide>
                                <SwiperSlide className="w-auto fw-boldedr, ">
                                    Usb & Card{" "}
                                </SwiperSlide>
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
                                className="my__headSubTitle pt-2 pb-2"
                            >
                                <SwiperSlide className="w-auto shadow my__SUB_CAT_ACTIVE fw-bold ps-3 pe-3 pt-1 pb-1 rounded-pill">
                                    Data Cables
                                </SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold pt-1 pb-1">
                                    Mobile Parts
                                </SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold pt-1 pb-1">
                                    Laptop & Accessories
                                </SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold pt-1 pb-1">
                                    Pouch
                                </SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold pt-1 pb-1">
                                    HnadFree & Speaker{" "}
                                </SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold pt-1 pb-1">
                                    Charger & Adopter
                                </SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold pt-1 pb-1">
                                    Mobile
                                </SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold pt-1 pb-1">
                                    Power Bank
                                </SwiperSlide>
                                <SwiperSlide className="w-auto fw-bold pt-1 pb-1">
                                    Usb & Card{" "}
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                {/* now breadcrumb start */}
                <div className="container bg-light">
                    <div className="row">
                        <div className="col-12">
                            <h6
                                className="text-dark"
                                style={{ fontSize: "0.9rem", fontWeight: "400" }}
                            >
                                Data Cables
                            </h6>
                        </div>
                    </div>
                </div>
                {/* product view  */}
                <div className="container bg-white pt-4 pb-2">
                    <div className="row">
                        <div className="col-12">
                            <div className="row gy-4">
                                <div className="col-4" style={{ position: "relative" }}>
                                    <div className="card rounded-5 my__BOX_RADIUS_10">
                                        <div className="card-body">
                                            <img
                                                src="../../assets/img/product1.png"
                                                alt="product_image"
                                            />
                                        </div>
                                    </div>
                                    <h6
                                        className="my__COLOR mb-2 mt-2"
                                        style={{ fontSize: "0.8rem", fontWeight: "400" }}
                                    >
                                        Rs. 1,695
                                    </h6>
                                    <p
                                        className="text-dark"
                                        style={{
                                            fontSize: "0.7rem",
                                            fontWeight: "600",
                                            lineHeight: "15px",
                                        }}
                                    >
                                        C-type Cable long Wire
                                    </p>
                                    <span className="my__PRODUCT_BADGE" onClick={() => setIsOpen(true)}>+</span>
                                </div>
                                <div className="col-4" style={{ position: "relative" }}>
                                    <div className="card rounded-5 my__BOX_RADIUS_10">
                                        <div className="card-body">
                                            <img
                                                src="../../assets/img/product1.png"
                                                alt="product_image"
                                            />
                                        </div>
                                    </div>
                                    <h6
                                        className="my__COLOR mb-2 mt-2"
                                        style={{ fontSize: "0.8rem", fontWeight: "400" }}
                                    >
                                        Rs. 1,695
                                    </h6>
                                    <p
                                        className="text-dark"
                                        style={{
                                            fontSize: "0.7rem",
                                            fontWeight: "600",
                                            lineHeight: "15px",
                                        }}
                                    >
                                        C-type Cable long Wire
                                    </p>
                                    <span className="my__PRODUCT_BADGE" onClick={() => setIsOpen(true)}>+</span>
                                </div>
                                <div className="col-4" style={{ position: "relative" }}>
                                    <div className="card rounded-5 my__BOX_RADIUS_10">
                                        <div className="card-body">
                                            <img
                                                src="../../assets/img/product1.png"
                                                alt="product_image"
                                            />
                                        </div>
                                    </div>
                                    <h6
                                        className="my__COLOR mb-2 mt-2"
                                        style={{ fontSize: "0.8rem", fontWeight: "400" }}
                                    >
                                        Rs. 1,695
                                    </h6>
                                    <p
                                        className="text-dark"
                                        style={{
                                            fontSize: "0.7rem",
                                            fontWeight: "600",
                                            lineHeight: "15px",
                                        }}
                                    >
                                        C-type Cable long Wire
                                    </p>
                                    <span className="my__PRODUCT_BADGE" onClick={() => setIsOpen(true)}>+</span>
                                </div>
                                <div className="col-4" style={{ position: "relative" }}>
                                    <div className="card rounded-5 my__BOX_RADIUS_10">
                                        <div className="card-body">
                                            <img
                                                src="../../assets/img/product1.png"
                                                alt="product_image"
                                            />
                                        </div>
                                    </div>
                                    <h6
                                        className="my__COLOR mb-2 mt-2"
                                        style={{ fontSize: "0.8rem", fontWeight: "400" }}
                                    >
                                        Rs. 1,695
                                    </h6>
                                    <p
                                        className="text-dark"
                                        style={{
                                            fontSize: "0.7rem",
                                            fontWeight: "600",
                                            lineHeight: "15px",
                                        }}
                                    >
                                        C-type Cable long Wire
                                    </p>
                                    <span className="my__PRODUCT_BADGE" onClick={() => setIsOpen(true)}>+</span>
                                </div>
                                <div className="col-4" style={{ position: "relative" }}>
                                    <div className="card rounded-5 my__BOX_RADIUS_10">
                                        <div className="card-body">
                                            <img
                                                src="../../assets/img/product1.png"
                                                alt="product_image"
                                            />
                                        </div>
                                    </div>
                                    <h6
                                        className="my__COLOR mb-2 mt-2"
                                        style={{ fontSize: "0.8rem", fontWeight: "400" }}
                                    >
                                        Rs. 1,695
                                    </h6>
                                    <p
                                        className="text-dark"
                                        style={{
                                            fontSize: "0.7rem",
                                            fontWeight: "600",
                                            lineHeight: "15px",
                                        }}
                                    >
                                        C-type Cable long Wire
                                    </p>
                                    <span className="my__PRODUCT_BADGE" onClick={() => setIsOpen(true)}>+</span>
                                </div>
                                <div className="col-4" style={{ position: "relative" }}>
                                    <div className="card rounded-5 my__BOX_RADIUS_10">
                                        <div className="card-body">
                                            <img
                                                src="../../assets/img/product1.png"
                                                alt="product_image"
                                            />
                                        </div>
                                    </div>
                                    <h6
                                        className="my__COLOR mb-2 mt-2"
                                        style={{ fontSize: "0.8rem", fontWeight: "400" }}
                                    >
                                        Rs. 1,695
                                    </h6>
                                    <p
                                        className="text-dark"
                                        style={{
                                            fontSize: "0.7rem",
                                            fontWeight: "600",
                                            lineHeight: "15px",
                                        }}
                                    >
                                        C-type Cable long Wire
                                    </p>
                                    <span className="my__PRODUCT_BADGE" onClick={() => setIsOpen(true)}>+</span>
                                </div>
                                <div className="col-4" style={{ position: "relative" }}>
                                    <div className="card rounded-5 my__BOX_RADIUS_10">
                                        <div className="card-body">
                                            <img
                                                src="../../assets/img/product1.png"
                                                alt="product_image"
                                            />
                                        </div>
                                    </div>
                                    <h6
                                        className="my__COLOR mb-2 mt-2"
                                        style={{ fontSize: "0.8rem", fontWeight: "400" }}
                                    >
                                        Rs. 1,695
                                    </h6>
                                    <p
                                        className="text-dark"
                                        style={{
                                            fontSize: "0.7rem",
                                            fontWeight: "600",
                                            lineHeight: "15px",
                                        }}
                                    >
                                        C-type Cable long Wire
                                    </p>
                                    <span className="my__PRODUCT_BADGE" onClick={() => setIsOpen(true)}>+</span>
                                </div>
                                <div className="col-4" style={{ position: "relative" }}>
                                    <div className="card rounded-5 my__BOX_RADIUS_10">
                                        <div className="card-body">
                                            <img
                                                src="../../assets/img/product1.png"
                                                alt="product_image"
                                            />
                                        </div>
                                    </div>
                                    <h6
                                        className="my__COLOR mb-2 mt-2"
                                        style={{ fontSize: "0.8rem", fontWeight: "400" }}
                                    >
                                        Rs. 1,695
                                    </h6>
                                    <p
                                        className="text-dark"
                                        style={{
                                            fontSize: "0.7rem",
                                            fontWeight: "600",
                                            lineHeight: "15px",
                                        }}
                                    >
                                        C-type Cable long Wire
                                    </p>
                                    <span className="my__PRODUCT_BADGE" onClick={() => setIsOpen(true)}>+</span>
                                </div>
                                <div className="col-4" style={{ position: "relative" }}>
                                    <div className="card rounded-5 my__BOX_RADIUS_10">
                                        <div className="card-body">
                                            <img
                                                src="../../assets/img/product1.png"
                                                alt="product_image"
                                            />
                                        </div>
                                    </div>
                                    <h6
                                        className="my__COLOR mb-2 mt-2"
                                        style={{ fontSize: "0.8rem", fontWeight: "400" }}
                                    >
                                        Rs. 1,695
                                    </h6>
                                    <p
                                        className="text-dark"
                                        style={{
                                            fontSize: "0.7rem",
                                            fontWeight: "600",
                                            lineHeight: "15px",
                                        }}
                                    >
                                        C-type Cable long Wire
                                    </p>
                                    <span className="my__PRODUCT_BADGE" onClick={() => setIsOpen(true)}>+</span>
                                </div>
                                <div className="col-4" style={{ position: "relative" }}>
                                    <div className="card rounded-5 my__BOX_RADIUS_10">
                                        <div className="card-body">
                                            <img
                                                src="../../assets/img/product1.png"
                                                alt="product_image"
                                            />
                                        </div>
                                    </div>
                                    <h6
                                        className="my__COLOR mb-2 mt-2"
                                        style={{ fontSize: "0.8rem", fontWeight: "400" }}
                                    >
                                        Rs. 1,695
                                    </h6>
                                    <p
                                        className="text-dark"
                                        style={{
                                            fontSize: "0.7rem",
                                            fontWeight: "600",
                                            lineHeight: "15px",
                                        }}
                                    >
                                        C-type Cable long Wire
                                    </p>
                                    <span className="my__PRODUCT_BADGE" onClick={() => setIsOpen(true)}>+</span>
                                </div>
                                <div className="col-4" style={{ position: "relative" }}>
                                    <div className="card rounded-5 my__BOX_RADIUS_10">
                                        <div className="card-body">
                                            <img
                                                src="../../assets/img/product1.png"
                                                alt="product_image"
                                            />
                                        </div>
                                    </div>
                                    <h6
                                        className="my__COLOR mb-2 mt-2"
                                        style={{ fontSize: "0.8rem", fontWeight: "400" }}
                                    >
                                        Rs. 1,695
                                    </h6>
                                    <p
                                        className="text-dark"
                                        style={{
                                            fontSize: "0.7rem",
                                            fontWeight: "600",
                                            lineHeight: "15px",
                                        }}
                                    >
                                        C-type Cable long Wire
                                    </p>
                                    <span className="my__PRODUCT_BADGE" onClick={() => setIsOpen(true)}>+</span>
                                </div>
                                <div className="col-4" style={{ position: "relative" }}>
                                    <div className="card rounded-5 my__BOX_RADIUS_10">
                                        <div className="card-body">
                                            <img
                                                src="../../assets/img/product1.png"
                                                alt="product_image"
                                            />
                                        </div>
                                    </div>
                                    <h6
                                        className="my__COLOR mb-2 mt-2"
                                        style={{ fontSize: "0.8rem", fontWeight: "400" }}
                                    >
                                        Rs. 1,695
                                    </h6>
                                    <p
                                        className="text-dark"
                                        style={{
                                            fontSize: "0.7rem",
                                            fontWeight: "600",
                                            lineHeight: "15px",
                                        }}
                                    >
                                        C-type Cable long Wire
                                    </p>
                                    <span className="my__PRODUCT_BADGE" onClick={() => setIsOpen(true)}>+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <>
                    <IonModal isOpen={isOpen}>
                        <IonHeader>
                            <IonToolbar>
                                <IonTitle>Data Cables</IonTitle>
                                <IonButtons slot="end">
                                    <IonButton onClick={() => setIsOpen(false)}>X</IonButton>
                                </IonButtons>
                            </IonToolbar>
                        </IonHeader>
                        <IonContent className="ion-padding">
                            <div className="w-100 text-center">
                                <img className="w-50" src="../../assets/img/product1.png" alt="img" />
                            </div>
                            <h6 className="pt-2" style={{ fontSize: "0.8rem", fontWeight: "600" }}>C-type Cable long Wire</h6>
                            <h6 className="my__COLOR mb-2 mt-2" style={{ fontSize: "0.8rem", fontWeight: "500" }}>
                                Rs. 1,695
                            </h6>
                            <h6 className="mb-1" style={{ fontSize: "0.8rem", fontWeight: "600" }}>Pack Size</h6>
                            <span className="badge rounded-pill my__BG me-2" style={{ fontSize: "0.7rem", fontWeight: "500" }}>Long Wire</span>
                            <span className="badge rounded-pill my__BG" style={{ fontSize: "0.7rem", fontWeight: "500" }}>Small Wire</span>
                            <h6 className="mb-2 mt-4" style={{ fontSize: "0.8rem", fontWeight: "600" }}>Product Details</h6>
                            <h6 className="text-secondary mt-0" style={{ fontSize: "0.8rem", fontWeight: "400", lineHeight: "20px" }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </h6>
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
                                            <SwiperSlide>
                                                <div className="col-4 w-100" style={{ position: "relative" }}>
                                                    <div className="card rounded-5 my__BOX_RADIUS_10">
                                                        <div className="card-body">
                                                            <img
                                                                src="../../assets/img/product1.png"
                                                                alt="product_image"
                                                            />
                                                        </div>
                                                    </div>
                                                    <h6
                                                        className="my__COLOR mb-2 mt-2"
                                                        style={{ fontSize: "0.8rem", fontWeight: "400" }}
                                                    >
                                                        Rs. 1,695
                                                    </h6>
                                                    <p
                                                        className="text-dark"
                                                        style={{
                                                            fontSize: "0.7rem",
                                                            fontWeight: "600",
                                                            lineHeight: "15px",
                                                        }}
                                                    >
                                                        C-type Cable long Wire
                                                    </p>
                                                    <span className="my__PRODUCT_SLIDER_BADGE" onClick={() => setIsOpen(true)}>+</span>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="col-4 w-100" style={{ position: "relative" }}>
                                                    <div className="card rounded-5 my__BOX_RADIUS_10">
                                                        <div className="card-body">
                                                            <img
                                                                src="../../assets/img/product1.png"
                                                                alt="product_image"
                                                            />
                                                        </div>
                                                    </div>
                                                    <h6
                                                        className="my__COLOR mb-2 mt-2"
                                                        style={{ fontSize: "0.8rem", fontWeight: "400" }}
                                                    >
                                                        Rs. 1,695
                                                    </h6>
                                                    <p
                                                        className="text-dark"
                                                        style={{
                                                            fontSize: "0.7rem",
                                                            fontWeight: "600",
                                                            lineHeight: "15px",
                                                        }}
                                                    >
                                                        C-type Cable long Wire
                                                    </p>
                                                    <span className="my__PRODUCT_SLIDER_BADGE" onClick={() => setIsOpen(true)}>+</span>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="col-4 w-100" style={{ position: "relative" }}>
                                                    <div className="card rounded-5 my__BOX_RADIUS_10">
                                                        <div className="card-body">
                                                            <img
                                                                src="../../assets/img/product1.png"
                                                                alt="product_image"
                                                            />
                                                        </div>
                                                    </div>
                                                    <h6
                                                        className="my__COLOR mb-2 mt-2"
                                                        style={{ fontSize: "0.8rem", fontWeight: "400" }}
                                                    >
                                                        Rs. 1,695
                                                    </h6>
                                                    <p
                                                        className="text-dark"
                                                        style={{
                                                            fontSize: "0.7rem",
                                                            fontWeight: "600",
                                                            lineHeight: "15px",
                                                        }}
                                                    >
                                                        C-type Cable long Wire
                                                    </p>
                                                    <span className="my__PRODUCT_SLIDER_BADGE" onClick={() => setIsOpen(true)}>+</span>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="col-4 w-100" style={{ position: "relative" }}>
                                                    <div className="card rounded-5 my__BOX_RADIUS_10">
                                                        <div className="card-body">
                                                            <img
                                                                src="../../assets/img/product1.png"
                                                                alt="product_image"
                                                            />
                                                        </div>
                                                    </div>
                                                    <h6
                                                        className="my__COLOR mb-2 mt-2"
                                                        style={{ fontSize: "0.8rem", fontWeight: "400" }}
                                                    >
                                                        Rs. 1,695
                                                    </h6>
                                                    <p
                                                        className="text-dark"
                                                        style={{
                                                            fontSize: "0.7rem",
                                                            fontWeight: "600",
                                                            lineHeight: "15px",
                                                        }}
                                                    >
                                                        C-type Cable long Wire
                                                    </p>
                                                    <span className="my__PRODUCT_SLIDER_BADGE" onClick={() => setIsOpen(true)}>+</span>
                                                </div>
                                            </SwiperSlide>
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
                </>
            </IonContent>
        </IonPage >
    );
};

export default ProductListing;
