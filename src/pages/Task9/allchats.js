import { signOut } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { auth, db } from "./firebase/FireBase";
import styles from "./Task9.module.css";
import { collection, getDocs, query, where } from "firebase/firestore";

function AllChats() {
  const [chatRooms, setChatRooms] = useState([
    { id: "user1", title: "User1" },
    { id: "user2", title: "User2" },
    { id: "user3", title: "User3" },
    { id: "user4", title: "User4" },
    { id: "user5", title: "User5" },
    { id: "user6", title: "User6" },
  ]);
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [searchUser, setSearchUser] = useState("");
  console.log(user, "in user outside of function");
  const handleClick = async () => {
    const q = query(
      collection(db, "users"),
      where("username", "==", searchUser)
    );

    console.log(searchUser, "in search user");

    try {
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        console.log(doc.data(), "in Docccc");
        setUser(doc.data());
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={`${styles.mainDiv}`}>
      <div className={`${styles.headingDiv}`}>
        <Button
          variant="secondary"
          className={`${styles.backButton}`}
          onClick={() => {
            signOut(auth);
            navigate("/task9/");
          }}
        >
          LogOut
        </Button>
        Chat Box
      </div>
      <div className={`${styles.searchDiv}`}>
        <input
          type="text"
          placeholder="Search User"
          className={`${styles.inputField}`}
          value={searchUser}
          onChange={(e) => {
            setSearchUser(e.target.value);
          }}
        />
        <Button
          variant="primary"
          className={`${styles.searchBtn}`}
          onClick={() => {
            handleClick();
          }}
        >
          Search
        </Button>
      </div>
      <div className={`${styles.allChatDiv}`}>
        {user && (
          <div
            className={`${styles.chattingRoomsDiv}`}
            style={{ borderBottom: "1px solid black" }}
            onClick={() => {
              navigate("/task9/home");
            }}
          >
            {user.username}{" "}
          </div>
        )}

        {chatRooms &&
          chatRooms.map((data, index) => {
            return (
              <div
                className={`${styles.chattingRoomsDiv}`}
                key={index}
                onClick={() => {
                  navigate("/task9/home");
                }}
              >
                {index + 1}. {data.title}{" "}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default AllChats;
