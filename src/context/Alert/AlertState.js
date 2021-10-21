import React, { useReducer } from "react";

import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

function AlertState(props) {
  const initialState = {
    alert: null,
  };

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // FROM SEARCH COMPONENT
  const showAlert = (alertMsg, alertType) => {
    dispatch({
      type: SET_ALERT,
      payload: { alertMsg, alertType },
    });
    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT,
      });
    }, 4000);
  };
  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        showAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
}

export default AlertState;
