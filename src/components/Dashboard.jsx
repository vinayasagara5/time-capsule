import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import CapsuleCard from "./CapsuleCard";
import './styles/Dashboard.css';


const Dashboard = () => {
  const [capsules, setCapsules] = useState([]);

  useEffect(() => {
    const fetchCapsules = async () => {
      const snapshot = await getDocs(collection(db, "timeCapsules"));
      setCapsules(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    fetchCapsules();
  }, []);

  return (
    <div className="dashboard">
      <h2>Your Time Capsules</h2>
      <div className="capsule-list">
        {capsules.map((capsule) => (
          <CapsuleCard key={capsule.id} capsule={capsule} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
