//Actions alert.js
import uuid from 'uuid';


export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
    const id = uuid.v4();
    dispatch({
     type: 'Set_Alert',
     payload: {msg, alertType, id}
    })

   }