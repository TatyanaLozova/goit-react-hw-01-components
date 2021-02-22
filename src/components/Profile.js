import React from 'react'
import PropTypes  from "prop-types"


const Profile = ({ name, tag, location, avatar, stats }) => (
 
    <div class="profile">
        <div class="description">
            <img
                src={avatar}
                alt="Аватар пользователя"
                class="avatar"
            />
            <p class="name">{name}</p>
            <p class="tag">{tag}</p>
            <p class="location">{location}</p>
        </div>

        <ul class="stats">
            <li>
                <span class="label">Followers</span>
                <span class="quantity">{stats.followers}</span>
            </li>
            <li>
                <span class="label">Views</span>
                <span class="quantity">{stats.vievs}</span>
            </li>
            <li>
                <span class="label">Likes</span>
                <span class="quantity">{stats.likes}</span>
            </li>
        </ul>
    </div>
);

Profile.PropTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.string.isRequired,
};


 export default Profile;