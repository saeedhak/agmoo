import {
  IonContent,
  IonPage
} from "@ionic/react";
import Header from "../components/Header";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <div className="container bg-light pt-4 my__PB_3">
        <div className="row mb-3">
            <div className="col-12">
              <div className="card shadow my__BOX_RADIUS pt-2 pb-2">
                <div className="card-body text-center">
                  <span className="card-title pt-2 pb-2 ps-4 pe-4 shadow-2 rounded-pill my__headTitle text-center my__BG">Login Here !</span>
                  <div className="row pt-4">
                    <div className="col-12">
                      <form>
                        <div className="mb-3">
                          <input type="email" className="form-control form-control-sm" id="user_email" placeholder="Enter Your Email!" required />
                        </div>
                        <div className="mb-3">
                          <input type="password" className="form-control form-control-sm" id="user_password" placeholder="Enter Your Password" required />
                        </div>
                        <button className="w-100 text-center btn btn-sm my__BG rounded-pill">Login </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card shadow my__BOX_RADIUS pt-3 pb-3">
                <div className="card-body text-center">
                  <span className="card-title pt-2 pb-2 ps-4 pe-4 shadow-2 rounded-pill my__headTitle text-center my__BG">Register Here !</span>
                  <div className="row pt-4">
                    <div className="col-12">
                      <form>
                        <div className="mb-3">
                          <input type="email" className="form-control form-control-sm" id="user_email" placeholder="Enter Your Email!" required />
                        </div>
                        <div className="mb-3">
                          <input type="password" className="form-control form-control-sm" id="user_password" placeholder="Enter Your Password" required />
                        </div>
                        <div className="mb-3">
                          <input type="text" className="form-control form-control-sm" id="user_contact" placeholder="Enter Your Contact no" required />
                        </div>
                        <div className="row g-0">
                          <div className="col-8">
                            <div className="mb-3">
                              <input type="text" className="form-control form-control-sm" id="user_city" placeholder="City" required />
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="mb-3">
                              <input type="text" className="form-control form-control-sm" id="user_zip_code" placeholder="Postal/Zip code" required />
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <input type="text" className="form-control form-control-sm" id="user_address" placeholder="Enter Your Address" required />
                        </div>
                        <div className="mb-3">
                          <textarea className="form-control" id="user Message" rows={4} placeholder="Some Note" />
                        </div>
                        <button className="w-100 text-center btn btn-sm my__BG rounded-pill">Submit</button>
                      </form>
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

export default Tab2;
