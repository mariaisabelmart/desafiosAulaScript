import styles from "../css/style.module.css"

export default function Pecas ({cor}) {
    return (
        <div className={`${styles.pecas} ${styles[cor]}`}></div>
    )
}