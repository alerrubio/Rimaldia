import "./css/ForumDetail.css";
import ForumBanner from "../components/ForumBanner";
import PP from"/img/pp3.jpg";
import Post from "../components/Post";
import UserInfo from "../components/UserInfo";
import { NewRhyme } from "../components/NewRhyme";
import { useParams } from "react-router-dom";
import { longDate } from "../utils/dateFormatter";
import { getForum } from '../services/ForumService';
import React, { useState, useEffect } from "react";
import Logo from "/img/logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import { editForum } from '../services/ForumService';

var datedb;
var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });

function ForumDetail(props) {
  const { user } = useAuth0();
  const {forum_name, about, members_no} = props;
  const [forum, setForum] = useState({});
  const {id} = useParams();
  var usersCount = 0;

  const addUserToForum = async () => {
    const forumEdit = {
      user_id: user.sub.substring(6)
    }
    const response = editForum(id, forumEdit);
    console.log(response);
  }

  useEffect(() => {
    const fetchdata = async () => {
      const res = await getForum(id);
      setForum(res.data);
      console.log(res.data);
      res.data.users.forEach(element => {
        usersCount = usersCount + 1;
      });
    };
    fetchdata();
  }, []);

  return (
    <>
      <div className="profile-page-content d-flex flex-column align-items-center">
        <ForumBanner forum_name={forum.name} 
                      about={forum.description}
                      addUser={addUserToForum}/>
        <div className="posts-content col-12 d-flex flex-column justify-content-center">
          <NewRhyme post_to={`en ${forum.name}`}/>
          <Post>
            <UserInfo user_name={props.username} 
                      time={date} 
                      profile_picture={PP}></UserInfo>
          </Post>
          <Post>
            <UserInfo user_name={props.username} 
                      time={date} 
                      profile_picture={PP}></UserInfo>
          </Post>
          <Post>
            <UserInfo user_name={props.username} 
                      time={date} 
                      profile_picture={PP}></UserInfo>
          </Post>
        </div>
      </div>
    </>
  )
}

export default ForumDetail