
import css from "../profile/Profile.module.css"
const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={css.profile}>
            <div>
                <img className={css.avatar}
                    src={image}
                    alt="User avatar"
                />
                <p className={css.name}>{name}</p>
                <p className={css.tag}>@p{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.stats}>
                <li>
                    <span className={css.statsparam}>Followers</span>
                    <span className={css.statsmarkings}>{stats.followers}</span>
                </li>
                <li>
                    <span className={css.statsparam}>Views</span>
                    <span  className={css.statsmarkings}>{stats.views}</span>
                </li>
                <li>
                    <span className={css.statsparam}>Likes</span>
                    <span  className={css.statsmarkings}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};
export default Profile;