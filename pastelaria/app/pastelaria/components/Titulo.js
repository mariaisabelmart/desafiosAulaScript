import styles from "@/app/pastelaria/css/style.module.css";
import Image from "next/image";

export default function Titulo({ texto }) {
    return (
        <div className={styles.tituloContainer}>
            <h1 className={styles.titulo}>{texto}</h1>
            <Image src="/image/hamburguer.png" alt="Ícone" width={60} height={60} />
        </div>
    );
}
