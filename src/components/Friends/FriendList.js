import React from 'react'
import PropTypes from 'prop-types';
import FriendItem from "./FriendListItem"

const FriendList = ({ friends }) => (
 
        <ul>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <li key={id}>
                    <FriendItem
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline} />
                </li>
            ))}
    
        </ul>
    );

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
      PropTypes.shape({
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          isOnline: PropTypes.string.isRequired,          
          id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

// export default FriendList;