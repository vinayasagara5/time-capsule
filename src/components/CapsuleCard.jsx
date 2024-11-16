import React from "react";
import './styles/CapsuleCard.css';


const CapsuleCard = ({ capsule }) => (
  <div className="capsule-card">
    <p><strong>Message:</strong> {capsule.message}</p>
    <p><strong>To:</strong> {capsule.email}</p>
    <p><strong>Delivery Date:</strong> {capsule.date}</p>
  </div>
);

export default CapsuleCard;
