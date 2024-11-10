import { Button, Card } from "antd";
import React from "react";
import {
  CloudDownloadOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

const DuesComponent = () => {
  // Define an array of card properties
  const cards = [
    { semester: "Semester 1", challanNo: "27084614", amount: 27500, dueDate: "March 25, 2024", isPaid: true },
    { semester: "Semester 2", challanNo: "27084615", amount: 28000, dueDate: "March 28, 2024", isPaid: false },
    // Add more cards as needed
  ];

  return (
    <div
      style={{
        backgroundColor: "white",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        border: "1px solid #ebebeb",
        margin: "5%",
        height: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "10%",
          borderBottom: "1px solid #ebebeb",
          lineHeight: "normal",
          alignContent: "center",
        }}
      >
        <h1>Fee Challans</h1>
      </div>
      <div
        className="challan-container"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "20px", // Allow flex items to wrap to the next line
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              flex: "1 0 50%", // Each card occupies 50% of the parent div
              width: "50%", // Each card occupies 50% of the parent div
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px", // Add some bottom margin between cards
            }}
          >
            <Card
              title={<h2>{card.semester}</h2>}
              bordered={false}
              style={{
                width: "80%",
                height: "15em",
                margin: "10px",
                boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                textAlign: "left",
                background: card.isPaid ? "#b7e1b7" : "#f0a3a3",
                transition: "background 0.3s",
                position: "relative",
                alignContent: "center",
              }}
              hoverable
              onMouseEnter={(e) => {
                e.currentTarget.style.background = card.isPaid
                  ? "#9fcf9f"
                  : "#d25050";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = card.isPaid
                  ? "#b7e1b7"
                  : "#f0a3a3";
              }}
            >
              {card.isPaid ? (
                <CheckCircleOutlined
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    fontSize: "24px",
                    color: "green",
                  }}
                />
              ) : (
                <CloseCircleOutlined
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    fontSize: "24px",
                    color: "red",
                  }}
                />
              )}
              <p>
                <b>Challan No:</b> {card.challanNo}
              </p>
              <p>
                <b>Amount:</b> {card.amount}
              </p>
              <p>
                <b>Due Date:</b> {card.dueDate}
              </p>
              <Button
                type="default"
                shape="circle"
                size="large"
                style={{ fontSize: "40px", marginTop: "10px" }}
                icon={<CloudDownloadOutlined />}
              ></Button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DuesComponent;
