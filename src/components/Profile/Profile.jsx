import s from "./Profile.module.css";

export default function Profile({
  name = 'Anonymous',
  tag = 'Anonymous',
  location = 'Unknown Location',
  image = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  stats = { followers: 0, views: 0, likes: 0 }
}) {
    return (
        <div className={s.container}>
  <div className={s.avatar_container}>
    <img className={s.avatar}
      src={image}
      alt="User avatar"
    />
    <p className={s.user_name}>{name}</p>
    <p className={s.user_tag}>@{tag}</p>
    <p className={s.user_location}>{location}</p>
  </div>

  <ul className={s.user_data}>
    <li className={s.user_data_li}>
      <span className={s.user_data_span}>Followers</span>
      <span className={s.user_data_span}>{stats.followers}</span>
    </li>
    <li className={s.user_data_li}>
      <span className={s.user_data_span}>Views</span>
      <span className={s.user_data_span}>{stats.views}</span>
    </li>
    <li className={s.user_data_li}>
      <span className={s.user_data_span}>Likes</span>
      <span className={s.user_data_span}>{stats.likes}</span>
    </li>
  </ul>
</div>

    )
};