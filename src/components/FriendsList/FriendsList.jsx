import s from "./FriendsList.module.css";
import FriendListItem from "../FriendsCard/FriendsCard";

export default function FriendsList({ friends }) {
    return (
            <ul className={s.container}>
                {friends.map(item => {
                    return (
                        <li key={item.id} className={s.container_li}>
                            <FriendListItem friend={item} />
                        </li>
                    );
                })}
            </ul>
    );
}