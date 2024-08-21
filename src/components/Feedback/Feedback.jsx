export default function Feedback({ good = 0, neutral = 0, bad = 0 }) {
    let total = good + neutral + bad;
    return (
        <div>
            <p>Good: { good }</p>
            <p>Neutral: { neutral }</p>
            <p>Bad: { bad }</p>
            <p>Total: { total }</p>
            <p>Positive: { Math.round(good * 100 / total)}%</p>
        </div>
    )
}