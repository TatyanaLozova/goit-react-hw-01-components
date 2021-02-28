import React from 'react'
import PropTypes from 'prop-types'
import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
    <li className={s.item} >
        <span className={isOnline === true ? s.online : s.offline}></span>
        <img className="avatar" src={avatar} alt="" width="48" />
        <p className={s.name}>{name}</p>
    </li>
);

FriendListItem.propTypes = {
  friends: PropTypes.shape({
       avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          isOnline: PropTypes.bool.isRequired,          
          
    }),

};

export default FriendListItem;
