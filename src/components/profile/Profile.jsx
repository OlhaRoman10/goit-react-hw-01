
import css from "../profile/Profile.module.css"
export const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div>
            <div className={css.profile}>
                <img className={css.avatar}
                    src={image}
                    alt="User avatar"
                />
                <p>{name}</p>
                <p>@p{tag}</p>
                <p>{location}</p>
            </div>

            <ul className={css.stats}>
                <li>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li>
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};
    