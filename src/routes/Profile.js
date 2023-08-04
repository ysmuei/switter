import { async } from "@firebase/util";
import { authService, dbService } from "fbase";
import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { updateProfile } from "@firebase/auth";

export default ({ refreshUser, userObj }) => {
  //const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName || "");

  const onLogOutClick = () => {
    authService.signOut();
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await updateProfile(userObj, { displayName: newDisplayName });
    };
    refreshUser();
  };
  
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Display name"
          value={newDisplayName}
        />
        <input type="submit" value="Update profile" />
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
