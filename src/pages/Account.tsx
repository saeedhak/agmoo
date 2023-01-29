import React, { useState, useEffect, useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import {
  IonContent,
  IonPage,
  useIonAlert
} from "@ionic/react";
import Header from "../components/Header";

const Account: React.FC = () => {
  // const variable start
  const loginForm:any = useRef(null);
  const baseUrl = "https://agmoo.com/agmoo_api/";
  const history = useHistory();
  const [presentAlert] = useIonAlert();
    //use state variable start
    const [formResponse, setFormResponse] = useState<any>();
    //use state variable end   
  // const variable end
  // my function start
  const loginFormSubmit = (e:any) => {
    let userSesssionId:any = localStorage.getItem('sessionID');
    e.preventDefault();
    // console.log("this is login form submit ");
    const myFormData = new FormData(e.target);
    myFormData.append("formData","objFormData");
    myFormData.append("endPoint","userLogin");
    myFormData.append("sessionId",userSesssionId);
     const postRequestOption = {
      method: "POST",
      body:myFormData,
    };
    fetch(baseUrl, postRequestOption)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFormResponse(data.sendData);
        if(data.sendData[0] === "invalid user...!!!" ){
            // setTimeout(() => {
            //     setFormResponse('');
            // },2000);
            presentAlert({
              header: 'Invalid User! ',
              subHeader: 'Plz insert correct details',
              buttons: ['OK'],
            })
        }else{
          let tempCartQTY:any = localStorage.getItem('CartQty');
            localStorage.setItem('userName', data.sendData[0]);
            localStorage.setItem('userLogin', 'true');
            loginForm.current.reset();
            if(parseInt(tempCartQTY) > 0){
                history.push('/cart');
            }else{
              history.push('/home');
            }
        }
      });
  }
  // registration start
  const regFormSubmit =(e:any)=>{
    
    e.preventDefault();
    const myFormData = new FormData(e.target);
    myFormData.append("formData","objFormData");
    myFormData.append("endPoint","userRegistration");
     const postRequestOption = {
      method: "POST",
      body:myFormData,
    };
    fetch(baseUrl, postRequestOption)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFormResponse(data.sendData);
        if(data.sendData[0] === "duplicate"){
          presentAlert({
            header: 'Email Already Use!',
            subHeader: 'Plz try another Email',
            buttons: ['OK'],
          })
        }else if(data.sendData[0] === "success"){
          loginForm.current.reset();
          presentAlert({
            header: 'Congratulation! Successfully Register',
            subHeader: 'Plz Login Account',
            buttons: ['OK'],
          })
        }else if(data.sendData[0] === "error"){
          presentAlert({
            header: 'Some Network Error',
            subHeader: 'Try Again Later',
            buttons: ['OK'],
          })
        }
      });
  }
  // registration end 
  // my function end 

  // try area start
  console.log(formResponse);
  // try area end 
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
                      <form ref={loginForm} onSubmit={loginFormSubmit}>
                        <div className="mb-3">
                          <input type="email" className="form-control form-control-sm" name="userEmail" id="user_email" placeholder="Enter Your Email!" required />
                        </div>
                        <div className="mb-3">
                          <input type="password" className="form-control form-control-sm" name="userPassword" id="user_password" placeholder="Enter Your Password" required />
                        </div>
                        <button type="submit" name="submit" className="w-100 text-center btn btn-sm my__BG rounded-pill">Login </button>
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
                      <form ref={loginForm} onSubmit={regFormSubmit}>
                      <div className="row g-0">
                          <div className="col-6">
                            <div className="mb-3">
                              <input type="text" className="form-control form-control-sm" name="firstName" id="user_city" placeholder="First Name" required />
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="mb-3">
                              <input type="text" className="form-control form-control-sm" name="lastName" id="user_zip_code" placeholder="Last Name" required />
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <input type="email" className="form-control form-control-sm" name="email" id="user_email" placeholder="Enter Your Email!" required />
                        </div>
                        <div className="mb-3">
                          <input type="password" className="form-control form-control-sm" name="password" id="user_password" placeholder="Enter Your Password" required />
                        </div>
                        <div className="mb-3">
                          <input type="text" className="form-control form-control-sm" name="contact" id="user_contact" placeholder="Enter Your Contact no" required />
                        </div>
                        <div className="row g-0">
                          <div className="col-8">
                            <div className="mb-3">
                              <input type="text" className="form-control form-control-sm" name="city" id="user_city" placeholder="City" required />
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="mb-3">
                              <input type="text" className="form-control form-control-sm" name="zipCode" id="user_zip_code" placeholder="Postal/Zip code" required />
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          {/* <input type="text" className="form-control form-control-sm" name="address" id="user_address" placeholder="Enter Your Address" required /> */}
                          <div className="form-floating">
                            <textarea className="form-control" placeholder="Leave a comment here" name="address" id="floatingTextarea2" style={{ height: 100 }} />
                            <label htmlFor="floatingTextarea2">Address</label>
                          </div>
                        </div>
                        <button type="submit" name="submit" className="w-100 text-center btn btn-sm my__BG rounded-pill">Submit</button>
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

export default Account;
