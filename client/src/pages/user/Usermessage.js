import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation";
import { messageAPI } from "../../services/api"; // Import messageAPI

export default function Usermessage() {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);

  useEffect(() => {
    messageAPI
      .viewMessage() // Use messageAPI here
      .then((response) => {
        console.log(response);
        const messageData = response.data.data;
        setData(messageData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navigation />
      <div
        className="border rounded p-2"
        style={{ margin: "auto", marginTop: "50px", width: "35%", height: "500px" }}
      >
        {data.map((item) => (
          <div
            className="border rounded p-2"
            style={{ height: "80px", display: "flex", alignItems: "center" }}
          >
            <div
              style={{
                borderRadius: "50%",
                height: "60px",
                width: "60px",
                backgroundColor: "grey",
              }}
            ></div>
            <div className="p-1">
              <h6>{item.businessname}</h6>
            </div>
            <div style={{ marginLeft: "auto " }}>
              <Link
                to={`/viewuserchat/${item.loginId}`}
                type="button"
                class="btn btn-outline-primary"
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
