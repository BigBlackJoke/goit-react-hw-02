import s from "./FriendsCard.module.css";

export default function FriendListItem({ friend: {
    name = 'Anonymous',
    avatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
    isOnline = false,
}}) {
    return (
        <div className={s.container}>
            <img className={s.avatar} src={avatar} alt="Avatar" width="80" />
            <p className={s.friend_name}>{name}</p>
            <p className={`${s.status} ${!isOnline ? s.status_offline : s.status_online}`}>{!isOnline ? 'Offline' : 'Online'}</p>
        </div>
    )
}