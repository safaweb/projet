import "./single.scss";
import Sidebar from "../../components/Sidebar/SidebarH";
import Navbar from "../../components/Navbar/NavbarH";
// import Chart from "../../AdminComponents/chart/chart/Chart";
// import List from "../../AdminComponents/chart/table/Table";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import React, { useEffect } from "react";
import { getclient } from "../../redux/Action/UserAction";

const Profile = () => {

 // const { Loading, users, error } = useSelector((state) => state.User_Select);
 // const dispatch = useDispatch()
 // let [Data, setData] = useState(users);
 // useEffect(() => {
 //  dispatch(getclient())
 // }, [])

 return (
  <div className="singleP">
   <div className="singlP">
   {/* <Sidebar /> */}
   </div>
   <div className="singleContainerP">
    <Navbar />
    <div className="topP">
     <div className="leftP">
      <div className="editButtonP">Edit</div>
      <h1 className="titleP">Information</h1>
      <div className="itemP">
       <img
        src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt=""
        className="itemImgP"
       />
       <div className="detailsP">
        <h1 className="itemTitleP"></h1>
        <div className="detailItemP">
         <span className="itemKeyP">Email:kk</span>
         <span className="itemValueP"></span>
        </div>
        <div className="detailItemP">
         <span className="itemKeyP">Phone:kk</span>
         <span className="itemValueP">kk</span>
        </div>
       </div>
      </div>
     </div>
     {/* <div className="right">
      <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
     </div> */}
    </div>
    <div className="bottomP">
     <h1 className="titleP">Last Transactions</h1>
     {/* <List /> */}
    </div>
   </div>
  </div>
 );
};

export default Profile;
