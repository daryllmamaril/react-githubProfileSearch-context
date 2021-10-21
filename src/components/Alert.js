import React, { useContext } from "react";
import AlertContext from "../context/Alert/alertContext";

const Alert = () => {
  const alertContextData = useContext(AlertContext);

  const { alert } = alertContextData;

  return (
    alert !== null && (
      <div className="search-box-container">
        <button
          className={`fluid ${alert.alertType} ui button`}
          style={{
            width: "45%",
            margin: "0 auto 0",
            fontSize: "1.2rem",
            fontWeight: "100",
            borderRadius: "30px",
          }}
        >
          {alert.alertMsg}
        </button>
      </div>
    )
  );
};

export default Alert;
