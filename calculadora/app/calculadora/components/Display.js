import styles from "../css/style.module.css";

export default function Display({ valorDisplay }) {
    return <div className={styles.display}>{valorDisplay}</div>;
}