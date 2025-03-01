import styles from "../css/style.module.css"
import Pecas from "./Pecas"

export default function Casas({cor, peca}) {
    return (
        <div className={`${styles.casas} ${styles[cor]}`}>
            {peca && <Pecas cor={peca}></Pecas>}
        </div>
    )
}