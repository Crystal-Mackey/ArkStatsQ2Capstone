import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Links from "../navigation/Links";
import "./Profile.css";

const Profile = ({ onFormSubmit }) => {
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const [enabled, setEnabled] = useState(false);
  const [tribeName, SetTribeName] = useState("");

  const onChangePicture = (event) => {
    if (event.target.files[0]) {
      console.log("picture: ", event.target.files);
      setPicture(event.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  useEffect(() => {
    if (tribeName.length === 0) {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
  }, [tribeName]);

  return (
    <>
      <Links />
      <Link to="/user/settings">Settings</Link>
      <form className="File Submit">
        <div className="image upload">
          <h3 className="avatar">Avatar</h3>

          <img className="profilePic" src={imgData} alt="" height="180px" width="180px" />
          <input
            className="imagesUpload"
            type="file"
            accept=".jpg, .jpeg, .pdf, .png, .svg"
            onChange={onChangePicture}
          />
          <button className="uploadSubmit" type="submit">
            Upload
          </button>
          <div className="previewProfilePic"></div>
        </div>
        <br />
        <h3 className="Tribe">Enter Tribe Name</h3>
        <div onSubmit={onFormSubmit}>
          <input type="text" value={tribeName} onChange={(event) => SetTribeName(event.target.value)} />
        </div>
        {enabled ? (
          <button className="submit" type="submit">
            Submit
          </button>
        ) : (
            <button className="tribeSubmit" disabled type="submit">
              Submit
            </button>
          )}
      </form>
    </>
  );
};
export default Profile;
