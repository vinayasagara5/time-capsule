import React, { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import './styles/TimeCapsuleForm.css';


const TimeCapsuleForm = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "timeCapsules"), {
        message,
        email,
        date,
        createdAt: new Date(),
      });
      alert("Time Capsule Created!");
    } catch (err) {
      console.error("Error creating capsule:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="capsule-form">
      <h2>Create Time Capsule</h2>
      <textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Recipient Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default TimeCapsuleForm;
