import React from 'react';
import Sidebar from '../common/Sidebar';
import Header from '../profile/Header';
import { myInfo } from '../../data/myinfo';
import MyPost from './MyPost'; // Correct casing for the filename

export const Profile = () => {
  return (
    <div style={{ display: 'flex', gap: '5vw' }}>
      <Sidebar />
      <div>
      <Header myInfo={myInfo} />
      <MyPost post ={myInfo.posts}/>

      </div>
    </div>
  );
};

export default Profile;
