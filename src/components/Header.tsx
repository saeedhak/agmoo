import React from "react";
import { useLocation } from 'react-router-dom';
import {
    IonButtons,
    IonHeader,
    IonBackButton,
    IonLabel,
    IonToolbar,
    IonChip,
    IonAvatar,
    IonCardSubtitle
} from "@ionic/react";
export const Header: React.FC = () => {
    const location = useLocation();
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <div className="container">
                        <div className="row">
                            {/* for back screen start */}
                            {location.pathname !== "/home"
                                ? <>
                                    <div className="col-2 p-0">
                                        <IonHeader>
                                            <IonToolbar>
                                                <IonButtons slot="start">
                                                    <IonBackButton color="primary" defaultHref='/' icon={undefined} style={{ fontSize: "1.4rem" }} />
                                                </IonButtons>
                                            </IonToolbar>
                                        </IonHeader>
                                    </div>
                                    <div className="col-6">
                                        <IonCardSubtitle color="primary" style={{ marginTop: "9px", fontSize: "1.3rem", fontWeight: "bolder" }}>AGMOO</IonCardSubtitle>
                                        <IonCardSubtitle color="primary" style={{ lineHeight: "0px", fontWeight: "300" }}>Store</IonCardSubtitle>
                                    </div>
                                    <div className="col-4 p-0">
                                        <IonChip color="primary" style={{ marginTop: "12px" }}>
                                            <IonAvatar>
                                                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                                            </IonAvatar>
                                            <IonLabel style={{ fontSize: '.8rem' }}>{localStorage.getItem('userName')}</IonLabel>
                                        </IonChip>
                                    </div>
                                </>
                                : <>
                                    <div className="col-8 align-left">
                                        <IonCardSubtitle color="primary" style={{ marginTop: "9px", fontSize: "1.3rem", fontWeight: "bolder",textAlign:"left" }}>AGMOO</IonCardSubtitle>
                                        <IonCardSubtitle color="primary" style={{ lineHeight: "0px", fontWeight: "300", textAlign:"left" }}>Store</IonCardSubtitle>
                                    </div>
                                    <div className="col-4 p-0">
                                        <IonChip color="primary" style={{ marginTop: "12px" }}>
                                            <IonAvatar>
                                                <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                                            </IonAvatar>
                                            <IonLabel style={{ fontSize: '.8rem' }}>{localStorage.getItem('userName')}</IonLabel>
                                        </IonChip>
                                    </div>
                                </>}
                        </div>
                    </div>
                </IonToolbar>
            </IonHeader>
        </>
    );
};
export default Header;