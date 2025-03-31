import ItemMenu from "@/app/pastelaria/components/ItemMenu";
import styles from "@/app/pastelaria/css/style.module.css";

export default function Menu() {
    const itens = [
        { nome: "Carne", preco: "R$ 10,00" },
        { nome: "Pizza", preco: "R$ 10,00" },
        { nome: "Carne", preco: "R$ 10,00" },
        { nome: "Pizza", preco: "R$ 10,00" },
        { nome: "Carne", preco: "R$ 10,00" },
        { nome: "Pizza", preco: "R$ 10,00" },
        { nome: "Carne", preco: "R$ 10,00" },
        { nome: "Pizza", preco: "R$ 10,00" }
    ];

    return (
        <div className={styles.menuContainer}>
            {itens.map((item, index) => (
                <ItemMenu key={index} nome={item.nome} preco={item.preco} />
            ))}
        </div>
    );
}