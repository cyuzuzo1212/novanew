import React, { useState } from "react";
import "./addNew.css";
import { FaInfo } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { createList } from "./creatSlice";

export const AddNew = () => {
  const [listingTitle, setlistingTitle] = useState("");
  const [listingAddress, setlistingAddress] = useState("");
  const [listingImage, setlistingImage] = useState("");
  

  const dispatch = useDispatch();

  const handlePost = (e) => {
    const data = new FormData();
    data.append("title", listingTitle);
    data.append("desc", listingAddress);
    data.append("categories", "music");
    data.append("photo", listingImage);
    e.preventDefault();
    dispatch(createList(data));
  };
  return (
    <div>
      <h2 style={{ marginLeft: 80, color: "#144273" }}>Add Listing</h2>
      <div id="addnew-body">
        <div id="addnew-basic-info-title">
          <FaInfo
            style={{ color: "#3270FC", marginLeft: 20, marginRight: 10 }}
          />
          <span style={{ color: "#144273", fontSize: 14 }}>
            Basic Informations
          </span>
        </div>
        <div id="addnew-basic-info-mainbody">
          <div className="new-credentials-combo">
            <div className="credential-title">Listing Title</div>
            <div className="main-credential">
              <div className="credential-icon-input">
                <IoBriefcaseOutline />
              </div>
              <input
                type={"text"}
                placeholder="Name Of Your Province"
                className="credential-desc-input"
                onChange={(event) => {
                  setlistingTitle(event.target.value);
                }}
              />
            </div>

            <div className="main-credential">
              <div className="credential-icon-input">
                <IoBriefcaseOutline />
              </div>
              <input
                type={"text"}
                placeholder="Name Of District"
                className="credential-desc-input"
                onChange={(event) => {
                  setlistingTitle(event.target.value);
                }}
              />
            </div>

            <div className="main-credential">
              <div className="credential-icon-input">
                <IoBriefcaseOutline />
              </div>
              <input
                type={"text"}
                placeholder="Bath Number"
                className="credential-desc-input"
                onChange={(event) => {
                  setlistingTitle(event.target.value);
                }}
              />
            </div>


            <div className="main-credential">
              <div className="credential-icon-input">
                <IoBriefcaseOutline />
              </div>
              <input
                type={"text"}
                placeholder="Your Status"
                className="credential-desc-input"
                onChange={(event) => {
                  setlistingTitle(event.target.value);
                }}
              />
            </div>

          </div>

          <div className="new-credentials-combo">
            <div className="credential-title">Address</div>
            <div className="main-credential">
              <div className="credential-icon-input">
                <IoLocationSharp />
              </div>
              <input
                type={"text"}
                placeholder="Address"
                className="credential-desc-input"
                onChange={(event) => {
                  setlistingAddress(event.target.value);
                }}
              />
            </div>

            <div className="main-credential">
              <div className="credential-icon-input">
                <IoLocationSharp />
              </div>
              <input
                type={"text"}
                placeholder="Price of Estate"
                className="credential-desc-input"
                onChange={(event) => {
                  setlistingAddress(event.target.value);
                }}
              />
            </div>

            <div className="main-credential">
              <div className="credential-icon-input">
                <IoLocationSharp />
              </div>
              <input
                type={"text"}
                placeholder="Year Built in"
                className="credential-desc-input"
                onChange={(event) => {
                  setlistingAddress(event.target.value);
                }}
              />
            </div>

            <div className="main-credential">
              <div className="credential-icon-input">
                <IoLocationSharp />
              </div>
              <input
                type={"text"}
                placeholder="Your Description"
                className="credential-desc-input"
                onChange={(event) => {
                  setlistingAddress(event.target.value);
                }}
              />
            </div>


          </div>

          <div className="new-credentials-combo" id="option">
            <div className="credential-title">Listing Title</div>
            <div className="main-credential">
              <div className="credential-desc-option">
                <input
                  type={"file"}
                  onChange={(e) => {
                    setlistingImage(e.target.files[0]);
                  }}
                />
              </div>
            </div>

            <div className="main-credential">
              <div className="credential-icon-input">
                <IoLocationSharp />
              </div>
              <input
                type={"text"}
                placeholder="Beds Number"
                className="credential-desc-input"
                onChange={(event) => {
                  setlistingAddress(event.target.value);
                }}
              />
            </div>
            
            <div className="main-credential">
              <div className="credential-icon-input">
                <IoLocationSharp />
              </div>
              <input
                type={"text"}
                placeholder="Lot Size"
                className="credential-desc-input"
                onChange={(event) => {
                  setlistingAddress(event.target.value);
                }}
              />
            </div>


          </div>


          
        </div>
        <button id="submit-credentials-button" onClick={handlePost}>
          Create Listing
        </button>
      </div>
    </div>
  );
};
