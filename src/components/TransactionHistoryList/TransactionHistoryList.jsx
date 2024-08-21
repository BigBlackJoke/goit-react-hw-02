import s from "./TransactionHistoryList.module.css";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

export default function TransactionHistoryList({ transactions }) {
    return (
        <table className={s.container}>
  <thead>
    <tr className={s.t_head}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transactions.map(trans => (
                    <TransactionHistory key={trans.id} transaction={trans} />
                ))}
  </tbody>
</table>

    )
}