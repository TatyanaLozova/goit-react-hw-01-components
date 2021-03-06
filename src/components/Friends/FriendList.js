import React from 'react'
import PropTypes from 'prop-types';
import FriendListItem from "./FriendListItem"
import s from './FriendList.module.css';

const FriendList = ({ friends }) => (
 
        <ul className={s.list}>
            {friends.map(({ id, avatar, name, isOnline }) => (
               
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline} />
                
            ))}
    
        </ul>
    );

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
      PropTypes.shape({
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          isOnline: PropTypes.bool.isRequired,          
          id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;