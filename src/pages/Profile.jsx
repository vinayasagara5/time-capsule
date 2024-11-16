import React from "react";
import TimeCapsuleForm from "../components/TimeCapsuleForm";
import Dashboard from "../components/Dashboard";
import './styles/Profile.css';



const Profile = () => (
  <div className="profile-page">
    <h1>Your Profile</h1>
    <TimeCapsuleForm />
    <Dashboard />
  </div>
);

export default Profile;
