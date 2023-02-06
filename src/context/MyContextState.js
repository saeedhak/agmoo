import react,{useState} from 'react';
import NoteContext from './MyContext';

const NoteState = (props)=>{
    
    // const state = {
    //     name: 'saeed',
    //     work: 'dev'
    // }
    // use state variable start
        const [stateCartQTY, setStateCartQTY] = useState("0");
        const [userLoginStatus, setUserLoginStatus] = useState(localStorage.getItem('userName') === 'Login'?"false":"true");
    // use state variable end 

    // my function start
        const updateCartQty = (val1)=>{
            setStateCartQTY(val1);
        }

        const updateUserLoginStatusFun = (val1)=>{
            setUserLoginStatus(val1);
        }

        // set user login start
    // if(!localStorage.getItem('userLogin')){
    //     localStorage.setItem('userLogin','false')
    //   }
      // set user login end
    // my function end 

    
    return(
        <NoteContext.Provider value={{stateCartQTY, updateCartQty, updateUserLoginStatusFun, userLoginStatus}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;