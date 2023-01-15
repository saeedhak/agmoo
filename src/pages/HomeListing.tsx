import {
    IonContent,
    IonPage
} from "@ionic/react";
import Header from "../components/Header";

const HomeListing: React.FC = () => {
    return (
        <IonPage>
            <Header />
            <IonContent fullscreen>
                <div className="container bg-light pt-4 my__PB_3 h-100">
                    <div className="row">
                        <div className="col-4 text-center">
                        <img className="border border-3 my__Border shadow p-1" src="../../assets/img/brand5.png" alt="Brand" style={{width: "100px",height: "80px",borderRadius: "50%",objectFit:"contain"}} />
                            <span className="my__headSubTitle"> Brands</span>
                        </div>
                        <div className="col-4 text-center">
                        <img className="border border-3 my__Border shadow p-1" src="../../assets/img/category.png" alt="Brand" style={{width: "100px",height: "80px",borderRadius: "50%",objectFit:"contain"}} />
                            <span className="my__headSubTitle"> Categories</span>
                        </div>
                        <div className="col-4 text-center">
                            <img className="border border-3 my__Border shadow p-1" src="../../assets/img/product.png" alt="Brand" style={{width: "100px",height: "80px",borderRadius: "50%",objectFit:"contain"}} />
                            <span className="my__headSubTitle"> Products</span>
                        </div>
                    </div>

                    <div className="row pt-5">
                        <div className="col-12">
                            <div className="row g-3">
                                <div className="col-6">
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                                <p className=" pt-2 pb-2 fw-bolder text-dark" style={{fontSize:"13px",}}>Title Here</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100 h-00" src="../../assets/img/product1.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                            <p className="mt-2 fw-bold text-dark" style={{fontSize:"12px",}}>Title Here</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100" src="../../assets/img/product2.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-2">
                        <div className="col-12">
                            <div className="row g-3">
                                <div className="col-6">
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                                <p className=" pt-2 pb-2 fw-bolder text-dark" style={{fontSize:"13px",}}>Title Here</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100 h-00" src="../../assets/img/product3.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                            <p className="mt-2 fw-bold text-dark" style={{fontSize:"12px",}}>Title Here</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100" src="../../assets/img/product4.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-2">
                        <div className="col-12">
                            <div className="row g-3">
                                <div className="col-6">
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                                <p className=" pt-2 pb-2 fw-bolder text-dark" style={{fontSize:"13px",}}>Title Here</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100 h-00" src="../../assets/img/product1.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                            <p className="mt-2 fw-bold text-dark" style={{fontSize:"12px",}}>Title Here</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100" src="../../assets/img/product2.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-2">
                        <div className="col-12">
                            <div className="row g-3">
                                <div className="col-6">
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                                <p className=" pt-2 pb-2 fw-bolder text-dark" style={{fontSize:"13px",}}>Title Here</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100 h-00" src="../../assets/img/product3.png" alt="img"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="card ps-2 my__BOX_RADIUS_10">
                                        <div className="row g-0">
                                            <div className="col-8">
                                            <p className="mt-2 fw-bold text-dark" style={{fontSize:"12px",}}>Title Here</p>
                                            </div>
                                            <div className="col-4">
                                                <img className="w-100" src="../../assets/img/product4.png" alt="img"/>
                                            </div>
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

export default HomeListing;
