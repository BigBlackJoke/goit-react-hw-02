import Profile from "../Profile/Profile";
import userData from "../../userData.json";
import FriendsList from "../FriendsList/FriendsList";
import friends from "../../friends.json";
import TransactionHistoryList from "../TransactionHistoryList/TransactionHistoryList";
import transactions from "../../TransactionHistory.json";


export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendsList friends={friends} />
      <TransactionHistoryList transactions = {transactions} />
    </>
  );
};
