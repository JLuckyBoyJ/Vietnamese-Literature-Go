import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./Me.scss";
import Achievement from "./AchievementView";
import MeDataManager from "./MeDataManager";

export default function Me() {
  const dataManager = new MeDataManager();
  const [userAchivement, setUserAchivement] = useState({
    id: 0,
    user: {name: ""},
    achivements: [],
  });

  const handleGetAchivementSuccess = (userAchivements) => {
    setUserAchivement(userAchivements)
  };

  const handleGetAchivementFailure = (error) => {
    alert(error)
  };

  useEffect(() => {
    dataManager.getAchivement(
      handleGetAchivementSuccess,
      handleGetAchivementFailure
    )
  }, []);

  return (
    <div className="Me">
      <Header />
      <div className="Intro">
        <div className="avatar" />

        <div className="right">
          <h1>{userAchivement.user.displayName}</h1>
          <div><b>Email:</b> {userAchivement.user.email}</div>
          <div><b>Giới tính:</b> {userAchivement.user.gender == true ? "Nam" : "Nữ"}</div>
          <div><b>Ngày sinh:</b> {userAchivement.user.dateOfBirth}</div>
        </div>
      </div>

      <div className="main">
        <div className="left">
          <div className="item chosen-item">Thành tích</div>
        </div>
        <div className="right">
          <Achievement />
        </div>
      </div>
    </div>
  );
}
