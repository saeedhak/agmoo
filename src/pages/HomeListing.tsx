import {
    IonContent,
    IonPage
} from "@ionic/react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const HomeListing: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent fullscreen>
                <div className="container bg-light pt-4 my__PB_3">
                    <div className="row">
                        <div className="col-4 text-center">
                    <Link to="/product-listing" style={{ textDecoration: "none" }}>
                        <img className="border border-3 my__Border shadow p-2 rounded-circle w-100 h-75" src="../../assets/img/brand5.png" alt="Brand" style={{objectFit:"contain"}} />
                            <span className="my__headSubTitle"> Brands</span>
                    </Link>
                        </div>
                        <div className="col-4 text-center">
                    <Link to="/product-listing" style={{ textDecoration: "none" }}>
                        <img className="border border-3 my__Border shadow p-2 rounded-circle w-100 h-75" src="../../assets/img/category.png" alt="Brand" style={{objectFit:"contain"}} />
                            <span className="my__headSubTitle"> Categories</span>
                    </Link>
                        </div>
                        <div className="col-4 text-center">
                    <Link to="/product-listing" style={{ textDecoration: "none" }}>
                            <img className="border border-3 my__Border shadow p-2 rounded-circle w-100 h-75" src="../../assets/img/product.png" alt="Brand" style={{objectFit:"contain"}} />
                            <span className="my__headSubTitle"> Products</span>
                        </Link>
                        </div>
                    </div>

                    <div className="row pt-5">
                        <div className="col-12">
                            <div className="row g-3">
                                <div className="col-6">
                                <Link to="/product-listing" style={{ textDecoration: "none" }}>
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                                <p className=" pt-3 pb-2 fw-bolder text-dark" style={{fontSize:"13px",}}>Title Here</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100 h-00" src="../../assets/img/product1.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-6">
                                <Link to="/product-listing" style={{ textDecoration: "none" }}>
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                                <p className=" pt-3 pb-2 fw-bolder text-dark" style={{fontSize:"13px",}}>Title Here</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100 h-00" src="../../assets/img/product1.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-6">
                                <Link to="/product-listing" style={{ textDecoration: "none" }}>
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                                <p className=" pt-3 pb-2 fw-bolder text-dark" style={{fontSize:"13px",}}>Title Here</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100 h-00" src="../../assets/img/product1.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-6">
                                <Link to="/product-listing" style={{ textDecoration: "none" }}>
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                                <p className=" pt-3 pb-2 fw-bolder text-dark" style={{fontSize:"13px",}}>Title Here</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100 h-00" src="../../assets/img/product1.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-6">
                                <Link to="/product-listing" style={{ textDecoration: "none" }}>
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                                <p className=" pt-3 pb-2 fw-bolder text-dark" style={{fontSize:"13px",}}>Title Here</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100 h-00" src="../../assets/img/product1.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-6">
                                <Link to="/product-listing" style={{ textDecoration: "none" }}>
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                                <p className=" pt-3 pb-2 fw-bolder text-dark" style={{fontSize:"13px",}}>Title Here</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100 h-00" src="../../assets/img/product1.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-6">
                                <Link to="/product-listing" style={{ textDecoration: "none" }}>
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                                <p className=" pt-3 pb-2 fw-bolder text-dark" style={{fontSize:"13px",}}>Title Here</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100 h-00" src="../../assets/img/product1.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-6">
                                <Link to="/product-listing" style={{ textDecoration: "none" }}>
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                                <p className=" pt-3 pb-2 fw-bolder text-dark" style={{fontSize:"13px",}}>Title Here</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100 h-00" src="../../assets/img/product1.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-6">
                                <Link to="/product-listing" style={{ textDecoration: "none" }}>
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                                <p className=" pt-3 pb-2 fw-bolder text-dark" style={{fontSize:"13px",}}>Title Here</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100 h-00" src="../../assets/img/product1.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-6">
                                <Link to="/product-listing" style={{ textDecoration: "none" }}>
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                                <p className=" pt-3 pb-2 fw-bolder text-dark" style={{fontSize:"13px",}}>Title Here</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100 h-00" src="../../assets/img/product1.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-6">
                                <Link to="/product-listing" style={{ textDecoration: "none" }}>
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                                <p className=" pt-3 pb-2 fw-bolder text-dark" style={{fontSize:"13px",}}>Title Here</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100 h-00" src="../../assets/img/product1.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-6">
                                <Link to="/product-listing" style={{ textDecoration: "none" }}>
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                                <p className=" pt-3 pb-2 fw-bolder text-dark" style={{fontSize:"13px",}}>Title Here</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100 h-00" src="../../assets/img/product1.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-6">
                                <Link to="/product-listing" style={{ textDecoration: "none" }}>
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                                <p className=" pt-3 pb-2 fw-bolder text-dark" style={{fontSize:"13px",}}>Title Here</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100 h-00" src="../../assets/img/product1.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-6">
                                <Link to="/product-listing" style={{ textDecoration: "none" }}>
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                                <p className=" pt-3 pb-2 fw-bolder text-dark" style={{fontSize:"13px",}}>Title Here</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100 h-00" src="../../assets/img/product1.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-6">
                                <Link to="/product-listing" style={{ textDecoration: "none" }}>
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                                <p className=" pt-3 pb-2 fw-bolder text-dark" style={{fontSize:"13px",}}>Title Here</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100 h-00" src="../../assets/img/product1.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-6">
                                <Link to="/product-listing" style={{ textDecoration: "none" }}>
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                                <p className=" pt-3 pb-2 fw-bolder text-dark" style={{fontSize:"13px",}}>Title Here</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100 h-00" src="../../assets/img/product1.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-6">
                                <Link to="/product-listing" style={{ textDecoration: "none" }}>
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                                <p className=" pt-3 pb-2 fw-bolder text-dark" style={{fontSize:"13px",}}>Title Here</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100 h-00" src="../../assets/img/product1.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-6">
                                <Link to="/product-listing" style={{ textDecoration: "none" }}>
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                                <p className=" pt-3 pb-2 fw-bolder text-dark" style={{fontSize:"13px",}}>Title Here</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100 h-00" src="../../assets/img/product1.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-6">
                                <Link to="/product-listing" style={{ textDecoration: "none" }}>
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                                <p className=" pt-3 pb-2 fw-bolder text-dark" style={{fontSize:"13px",}}>Title Here</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100 h-00" src="../../assets/img/product1.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-6">
                                <Link to="/product-listing" style={{ textDecoration: "none" }}>
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                                <p className=" pt-3 pb-2 fw-bolder text-dark" style={{fontSize:"13px",}}>Title Here</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100 h-00" src="../../assets/img/product1.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default HomeListing;
