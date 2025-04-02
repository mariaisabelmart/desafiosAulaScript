import styles from "@/app/pastelaria/css/style.module.css";
import If from "@/app/pastelaria/components/If";
import Image from "next/image";

export default function ItemMenu({ nome, preco, estoque }) {
    const riscado = estoque === 0;
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