import React, { useState, useEffect, useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import {
  IonContent,
  IonPage,
  useIonAlert,
  IonAccordion, 
  IonAccordionGroup,
  IonItem, 
  IonLabel,
  IonIcon,
  IonBadge 
} from "@ionic/react";
import { cartSharp,qrCodeSharp, locateSharp, cashSharp, logOutSharp } from 'ionicons/icons';
import Header from "../components/Header";

const Account: React.FC = () => {
  // const variable start
  const loginForm:any = useRef(null);
  const baseUrl = "https://agmoo.com/agmoo_api/";
  const endPoint = `index.php?endPoint=`;
  const history = useHistory();
  const [presentAlert] = useIonAlert();
    //use state variable start
    const [formResponse, setFormResponse] = useState<any>();
    const [getUserDetails, setUserDetails] = useState<any>();
    const [getUserOrderDetails, setUserOrderDetails] = useState<any>();
    const [userFormValue, setUserFormValue] = useState<any>();
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
            localStorage.setItem('userName', data.sendData[0].userName);
            localStorage.setItem('sessionID', data.sendData[0].userId);
            localStorage.setItem('userLogin', 'true');
            getUserDataAfterLogin(data.sendData[0].userId);
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
  // my logout fun start
  const myLogoutFun = ()=>{
    let getSessionId:any  = localStorage.getItem('sessionID');
    localStorage.setItem('userLogin','false');
    localStorage.setItem('userName','Login');
    localStorage.setItem('sessionID',getSessionId);
    history.push('/home');
  }
  // my logout fun end 
  // get user data after login start
    const getUserDataAfterLogin = (userId:any)=>{
      if(localStorage.getItem('userLogin') === "true"){
        fetch(`${baseUrl}${endPoint}userDataAfterLogin&sessionId=${userId}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setUserDetails(data.sendData[0].userDetails);
          setUserOrderDetails(data.sendData[0].userOrderDetails);
          // update state
          setUserFormValue({
            firstName: data.sendData[0].userDetails.first_name
              ? data.sendData[0].userDetails.first_name
              : "",
              lastName: data.sendData[0].userDetails.last_name
              ? data.sendData[0].userDetails.last_name
              : "",
              city: data.sendData[0].userDetails.bill_city
              ? data.sendData[0].userDetails.bill_city
              : "",
              zipCode: data.sendData[0].userDetails.bill_zipcode
              ? data.sendData[0].userDetails.bill_zipcode
              : "",
              contact: data.sendData[0].userDetails.mobile_phone
              ? data.sendData[0].userDetails.mobile_phone
              : "",
              address: data.sendData[0].userDetails.bill_address
              ? data.sendData[0].userDetails.bill_address
              : "", 
            password: data.sendData[0].userDetails.password_my
            ? data.sendData[0].userDetails.password_my
            : "",
          });
        });
      }
    }
  // get user data after login end 
  // update user details start
  const updateUserFormSubmit =(e:any)=>{
    let userSessionId:any = localStorage.getItem('sessionID');
    e.preventDefault();
    const myFormData = new FormData(e.target);
    myFormData.append("formData","objFormData");
    myFormData.append("userId",userSessionId);
    myFormData.append("endPoint","updateUserForm");
     const postRequestOption = {
      method: "POST",
      body:myFormData,
    };
    fetch(baseUrl, postRequestOption)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("hi",data.sendData);
        setUserDetails(data.sendData[0].userData);
      });
  }
  // update user details end
  // getUserUpdatedFormDetail start
  const getUserFormDetail = (e: any) => {
    console.log("this is my get user form detail function ");
    setUserFormValue({ ...userFormValue, [e.target.name]: e.target.value });
  };
  // getUserUpdatedFormDetail end
  // user detail form submit
  // my function end 

  // try area start
  // console.log(formResponse);
  // console.log(getUserDetails[0].bill_address);
  // console.log(getUserOrderDetails);
  // try area end 
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <div className="container bg-light pt-4 my__PB_3 h-100">
          {localStorage.getItem('userLogin') === "true"?
            <>
              <div className="row mb-3">
                <div className="col-12">
                <IonAccordionGroup>
                  <IonAccordion value="myOrders">
                    <IonItem slot="header" color="light">
                      <IonLabel>
                        <IonIcon className="icon my__BG p-1 rounded" icon={cartSharp} style={{fontSize:'1.5rem'}}></IonIcon>
                        <span className="text-dark text ms-2" style={{fontSize:'0.9rem',fontWeight:'600'}}>My orders</span>
                      </IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                      <div className="row">
                        {getUserOrderDetails?.map((data:any, index:any)=>{
                            return(
                              <>
                                <div className="col-12 p-2" key={index}>
                                  <div className="card p-3 shadow my__BOX_RADIUS">
                                    <div className="row">
                                      <div className="col-8">
                                        <h6 className="mb-0 mt-0" style={{fontSize:'0.7rem'}}>Order Number: <span className="my__COLOR">{data.ord_confirm_num}</span></h6>
                                        <h6 className="mb-0 mt-0" style={{fontSize:'0.7rem'}}>Order Amount: <span className="my__COLOR">{data.subtotal_amount}</span></h6>
                                      </div>
                                      <div className="col-4">
                                        <h6 className="mt-0 mb-0" style={{fontSize:'0.7rem'}}>Status</h6>
                                        <IonBadge slot="start">{data.order_status}</IonBadge>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>
                            )
                        })}
                      </div>
                    </div>
                  </IonAccordion>
                  <IonAccordion value="myDetails">
                    <IonItem slot="header" color="light">
                      <IonLabel>
                        <IonIcon className="icon my__BG p-1 rounded" icon={qrCodeSharp} style={{fontSize:'1.5rem'}}></IonIcon>
                        <span className="text-dark text ms-2" style={{fontSize:'0.9rem',fontWeight:'600'}}>My Details</span>
                      </IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                    <div className="row">
                  <div className="col-12">
                    <div className="card shadow my__BOX_RADIUS pt-3 pb-3">
                      <div className="card-body text-center">
                        <span className="card-title pt-2 pb-2 ps-4 pe-4 shadow-2 rounded-pill my__headTitle text-center my__BG">Update Details !</span>
                        <div className="row pt-4">
                          <div className="col-12">
                            <form ref={loginForm} onSubmit={updateUserFormSubmit}>
                            <div className="row g-0">
                                <div className="col-12">
                                  <div className="mb-3">
                                    <input type="text" className="form-control form-control-sm" name="firstName" id="user_city" placeholder="First Name" value={userFormValue &&
                                  userFormValue.firstName
                                    ? userFormValue.firstName
                                    : getUserDetails
                                    ? getUserDetails[0].first_name
                                    : ""} required onChange={getUserFormDetail}/>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="mb-3">
                                    <input type="text" className="form-control form-control-sm" name="lastName" id="lastName" placeholder="Last Name" value={  userFormValue &&
                                  userFormValue.lastName
                                    ? userFormValue.lastName
                                    : getUserDetails
                                    ? getUserDetails[0].last_name
                                    : ""} required onChange={getUserFormDetail}/>
                                  </div>
                                </div>
                              </div>
                              <div className="mb-3">
                                <input type="text" className="form-control form-control-sm" name="password" id="user_password" placeholder="Enter Your Password" value={ userFormValue &&
                                  userFormValue.password
                                    ? userFormValue.password
                                    : getUserDetails
                                    ? getUserDetails[0].password_my
                                    : ""} required onChange={getUserFormDetail}/>
                              </div>
                              <div className="mb-3">
                                <input type="text" className="form-control form-control-sm" name="contact" id="user_contact" value={ userFormValue &&
                                  userFormValue.contact
                                    ? userFormValue.contact
                                    : getUserDetails
                                    ? getUserDetails[0].mobile_phone
                                    : ""} placeholder="Enter Your Contact no" required onChange={getUserFormDetail}/>
                              </div>
                              <div className="row g-0">
                                <div className="col-12">
                                  <div className="mb-3">
                                    <input type="text" className="form-control form-control-sm" name="city" id="user_city" value={userFormValue &&
userFormValue.city
? userFormValue.city
: getUserDetails
? getUserDetails[0].bill_city
: ""} placeholder="City" required onChange={getUserFormDetail}/>
                                  </div>
                                </div>
                                <div className="col-12">
                                  <div className="mb-3">
                                    <input type="text" className="form-control form-control-sm" name="zipCode" id="user_zip_code" value={userFormValue &&
userFormValue.zipCode
? userFormValue.zipCode
: getUserDetails
? getUserDetails[0].bill_zipcode
: ""} placeholder="Postal/Zip code" required onChange={getUserFormDetail}/>
                                  </div>
                                </div>
                              </div>
                              <div className="mb-3">
                                {/* <input type="text" className="form-control form-control-sm" name="address" id="user_address" placeholder="Enter Your Address" required /> */}
                                <div className="form-floating">
                                  <textarea className="form-control" placeholder="Leave a comment here" name="address" id="floatingTextarea2" value={  userFormValue &&
userFormValue.address
? userFormValue.address
: getUserDetails
? getUserDetails[0].bill_address
: ""} style={{ height: 100 }} onChange={getUserFormDetail} />
                                  <label htmlFor="floatingTextarea2">Address</label>
                                </div>
                              </div>
                              <button type="submit" name="submit" className="w-100 text-center btn btn-sm my__BG rounded-pill">Update </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
                    </div>
                  </IonAccordion>
                  <IonAccordion value="address">
                    <IonItem slot="header" color="light">
                      <IonLabel>
                        <IonIcon className="icon my__BG p-1 rounded" icon={locateSharp} style={{fontSize:'1.5rem'}}></IonIcon>
                        <span className="text-dark text ms-2" style={{fontSize:'0.9rem',fontWeight:'600'}}>Save Address</span>
                      </IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                       <h6 className="card my__COLOR p-3 shadow my__BOX_RADIUS" style={{fontSize:'0.9rem',}}>{getUserDetails && getUserDetails[0].bill_address}</h6>
                    </div>
                  </IonAccordion>
                  <IonAccordion value="payment">
                    <IonItem slot="header" color="light">
                      <IonLabel>
                        <IonIcon className="icon my__BG p-1 rounded" icon={cashSharp} style={{fontSize:'1.5rem'}}></IonIcon>
                        <span className="text-dark text ms-2" style={{fontSize:'0.9rem',fontWeight:'600'}}>Payment Method</span>
                      </IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                       <h6 className="card shadow my__BOX_RADIUS p-3 my__COLOR" style={{fontSize:'0.9rem'}}> Cash On Delivery (COD)</h6>
                    </div>
                  </IonAccordion>
                  <IonAccordion value="logout" onClick={myLogoutFun}>
                    <IonItem slot="header" color="light">
                      <IonLabel>
                        <IonIcon className="icon my__BG p-1 rounded" icon={logOutSharp} style={{fontSize:'1.5rem'}}></IonIcon>
                        <span className="text-dark text ms-2" style={{fontSize:'0.9rem',fontWeight:'600'}}>Logout</span>
                      </IonLabel>
                    </IonItem>
                  </IonAccordion>
                </IonAccordionGroup>
                </div>
              </div>
            </>
          :
            <>
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
            </>
          }
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Account;
