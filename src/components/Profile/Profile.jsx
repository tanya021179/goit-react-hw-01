import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.image}>
        <img className={css.imgFoto} src={image} alt="User avatar" />
        <p className={css.imgName}>{name}</p>
        <p className={css.imgTag}>@{tag}</p>
        <p className={css.imgLocation}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.itemText}>Followers</span>
          <span className={css.itemStats}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.itemText}>Views</span>
          <span className={css.itemStats}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.itemText}>Likes</span>
          <span className={css.itemStats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
