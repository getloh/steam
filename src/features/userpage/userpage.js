import React from 'react';
import {useDispatch, useSelector} from 'react-redux';



const Userpage = ({steamid, displayname, avatar, lastlogoff, realname, age, country, status}) => {
    const state = useSelector(state => state);              
    const dispatch = useDispatch();



  return (
    <div>
        <h2>User info</h2>
        <p>ID {steamid}</p>
        <p>displayname {displayname}</p>
        <img src={avatar} alt="avatar"/> 
    </div>
  );
}

export default Userpage;


// steamid={x.steamid}
// personaname={x.personaname}
// avatar={x.avatarfull}
// lastlogoff={x.lastlogoff}
// realname={x.realname}
// age={x.timecreated}
// country={x.countrycode}
// status={x.personastate}