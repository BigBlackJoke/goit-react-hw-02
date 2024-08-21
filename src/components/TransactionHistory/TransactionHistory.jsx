import s from "./TransactionHistory.module.css";

export default function TransactionHistory({ transaction: { type = 'unknown', amount = 0, currency = 'unknown' } }) {
    return (
        <tr className={s.t_row}>
            <td className={s.table_text}>{type}</td>
            <td className={s.table_text}>{amount}</td>
            <td className={s.table_text}>{currency}</td>
        </tr>
    )
}