import {
  IonContent,
  IonPage
} from "@ionic/react";
import Header from "../components/Header";
const Tab1: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <div className="container bg-light pt-4 my__PB_3 h-100">

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
                    <div className="pt-3 pb-3  w-100 badge my__BG text-wrap rounded-pill text-center">
                    Lets's go!
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="card shadow my__BOX_RADIUS">
                <div className="card-body pe-0">
                  <h5 className="card-title my__textLeft my__headTitle mb-1 mt-0">Brands</h5>
                  <p className="card-text my__headSubTitle mt-0">Kuch bhai, khai bhi, kabhi bhi</p>
                  <div className="row pt-4 g-0">
                    {/* <div className="col-2"></div> */}
                    <div className="col-12 float-right p-0">
                      <img src="../../assets/img/brand5.png" alt="Brand" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 pl-0">
              <div className="row">
                <div className="col-12 pb-2 ps-0 ">
                  <div className="card shadow my__BOX_RADIUS">
                    <div className="card-body pe-0 pb-2">
                      <div className="row g-0">
                        <div className="col-8">
                          <h5 className="card-title my__textLeft my__headTitle mb-1 mt-0">Category</h5>
                          <p className="card-text my__headSubTitle mt-0">Kuch bhai, khai bhi, kabhi bhi</p>
                        </div>
                        <div className="col-12 text-end">
                          <img className="w-50" src="../../assets/img/category.png" alt="Brand" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 ps-0">
                  <div className="card shadow my__BOX_RADIUS">
                    <div className="card-body pe-0 pb-0">
                      <div className="row g-0">
                        <div className="col-6">
                          <h5 className="card-title my__textLeft my__headTitle mb-1 mt-0">Product</h5>
                          <p className="card-text my__headSubTitle mt-0">Kuch bhai, khai bhi, kabhi bhi</p>
                        </div>
                        <div className="col-6 text-end mt-3">
                          <img className="w-100" src="../../assets/img/product.png" alt="Brand" />
                        </div>
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

export default Tab1;
