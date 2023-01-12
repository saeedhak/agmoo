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
        <div className="container bg-light pt-4 my__PB_3">
          <div className="row">
            <div className="col-6">
              <div className="card shadow border-2 my__Border">
                <div className="card-body">
                  <h5 className="card-title my__textLeft my__headTitle mb-1 mt-0">Brands</h5>
                  <p className="card-text my__headSubTitle mt-0">Kuch bhai, khai bhi, kabhi bhi</p>
                  <div className="row pt-4">
                    <div className="col-12">
                      <div className="col-12 mb-2">
                        <div className="card pt-1 pb-1 shadow text-center rounded-pill my__headSubTitle my__BG my__Border">
                          Iphone
                        </div>
                      </div>
                      <div className="col-12 mb-2">
                        <div className="card pt-1 pb-1 shadow text-center rounded-pill my__headSubTitle my__BG my__Border">
                          Samsung
                        </div>
                      </div>
                      <div className="col-12 mb-2">
                        <div className="card pt-1 pb-1 shadow text-center rounded-pill my__headSubTitle my__BG my__Border">
                          Audionic
                        </div>
                      </div>
                      <div className="col-12 mb-2">
                        <div className="card pt-1 pb-1 shadow text-center rounded-pill my__headSubTitle my__BG my__Border">
                          Audionic
                        </div>
                      </div>
                      <div className="col-12 mb-2">
                        <div className="card pt-1 pb-1 shadow text-center rounded-pill my__headSubTitle my__BG my__Border">
                          Audionic
                        </div>
                      </div>
                      <div className="col-12 mb-2">
                        <div className="card pt-1 pb-1 shadow text-center rounded-pill my__headSubTitle my__BG my__Border">
                          Audionic
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-3">
                    <div className="col-12">
                      <p className="text-center my__headSubTitle my__Border my__COLOR">See All</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 pl-0">
              <div className="row">
                <div className="col-12 pb-2 ps-0">
                  <div className="card shadow border-2 my__Border">
                    <div className="card-body">
                      <h5 className="card-title my__textLeft my__headTitle mb-1 mt-0">Category</h5>
                      <p className="card-text my__headSubTitle mt-0">Kuch bhai, khai bhi, kabhi bhi</p>
                      <div className="row pt-4">
                        <div className="col-12">
                          <div className="col-12 mb-2">
                            <div className="card pt-1 pb-1 shadow text-center rounded-pill my__headSubTitle my__BG my__Border">
                              Iphone
                            </div>
                          </div>
                          {/* <div className="col-12 mb-2">
                            <div className="card pt-1 pb-1 shadow text-center rounded-pill my__headSubTitle my__BG my__Border">
                              Samsung
                            </div>
                          </div> */}
                          
                        </div>
                      </div>
                      <div className="row pt-1">
                        <div className="col-12">
                          <p className="text-center my__headSubTitle my__Border my__COLOR">See All</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 ps-0">
                  <div className="card shadow border-2 my__Border">
                    <div className="card-body">
                      <h5 className="card-title my__textLeft my__headTitle mb-1 mt-0">Product</h5>
                      <p className="card-text my__headSubTitle mt-0">Kuch bhai, khai bhi, kabhi bhi</p>
                      <div className="row pt-4">
                        <div className="col-12">
                          <div className="col-12 mb-2">
                            <div className="card pt-1 pb-1 shadow text-center rounded-pill my__headSubTitle my__BG my__Border">
                              Iphone
                            </div>
                          </div>
                          {/* <div className="col-12 mb-2">
                            <div className="card pt-1 pb-1 shadow text-center rounded-pill my__headSubTitle my__BG my__Border">
                              Samsung
                            </div>
                          </div> */}
                          
                        </div>
                      </div>
                      <div className="row pt-1">
                        <div className="col-12">
                          <p className="text-center my__headSubTitle my__Border my__COLOR">See All</p>
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
