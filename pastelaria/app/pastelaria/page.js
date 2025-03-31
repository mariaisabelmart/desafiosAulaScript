import Titulo from "@/app/pastelaria/components/Titulo";
import Menu from "@/app/pastelaria/components/Menu";
import styles from "@/app/pastelaria/css/style.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Titulo texto="Pastelaria do Seu Zé" />
            <Menu />
        </div>
    );
}