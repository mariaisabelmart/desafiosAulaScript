import styles from "./css/style.module.css";
import Tabuleiro from "./components/Tabuleiro";

export default function Page(){
    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>DAMA</h1>
            <Tabuleiro />
        </div>
    );
}