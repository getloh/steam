import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Userpage from './userpage';


function Usercontainer() {
    const state = useSelector(state => state);              
    const dispatch = useDispatch();



  return (
    <div>
        
        {state.api.apiUserData.map (x => 
                    <Userpage 
                        steamid={x.steamid}
                        displayname={x.personaname}
                        avatar={x.avatarfull}
                        lastlogoff={x.lastlogoff}
                        realname={x.realname}
                        age={x.timecreated}
                        country={x.countrycode}
                        status={x.personastate}
                    /> ) }

    </div>
  );
}

export default Usercontainer
