import styles from "@/app/pastelaria/css/style.module.css";
import Image from "next/image";
import If from "@/app/pastelaria/components/If";

export default function ItemMenu({ nome, preco }) {
    const riscado = nome.includes("Pizza");
    const imagemSrc = "/image/pastel.jpeg";

    return (
        <div className={styles.itemMenu}>
            <If teste={riscado}>
                <p className={styles.riscado}>{nome}</p>
                <Image className={styles.grayscale} src={imagemSrc} alt={nome} width={80} height={80} />
            </If>
            <If teste={!riscado}>
                <p>{nome}</p>
                <Image src={imagemSrc} alt={nome} width={80} height={80} />
            </If>
            <p>{preco}</p>
        </div>
    );
}