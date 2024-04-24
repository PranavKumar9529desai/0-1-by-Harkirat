import {atom, selector} from 'recoil' ;
import axios from 'axios' ;

export const notificationAtomState = atom({
    key : "notificationAtomState" ,
    default : selector({
      key : 'allnotifiactions' ,
      get :  async()=>{
         const res  = await axios.get('https://sum-server.100xdevs.com/notifications');
          return res.data ;
      }
    }), 
});

export const FinalNotificationSelector = selector({
    key : "FinalNotificationSelector" ,
    get : ({get}) =>{
        const notificationState = get(notificationAtomState);
        return  notificationState.jobs + notificationState.messaging + notificationState.network + notificationState.notifications 

    }
});