import "./css/Home.css";
import { NewRhyme } from "../components/NewRhyme";
import UserInfo from "../components/UserInfo";
import Post from "../components/Post";
import PP from"/img/pp3.jpg";
import PP2 from"/img/pp2.png";
import { getPostsbyuser } from "../services/PostService";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
var date = new Date();
date = date.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric'});
var datetime = new Date();
datetime = datetime.toLocaleDateString("es-MX",{ weekday:'long', day:'numeric', month:'long', year:'numeric', hour:'numeric', minute:'numeric' });


function Home() {
  const { user} = useAuth0();
  const [rhymes, setRhymes] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const postsdata = await getPostsbyuser(user.sub.substring(6));
      setRhymes(postsdata);
      console.log(postsdata);
    };
    fetchdata();
  }, []);

  return (
    <>
    <NewRhyme/>
    <Post edit="false">
      <UserInfo user_name="Sandra Eterna" time={datetime} profile_picture={PP2}></UserInfo>
    </Post>
    <Post edit="false">
      <UserInfo user_name="Francisca Sueño" time={date} profile_picture={PP}></UserInfo>
    </Post>
    </>
  )
}

export default Home