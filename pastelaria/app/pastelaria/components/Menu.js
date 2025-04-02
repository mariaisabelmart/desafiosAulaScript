import ItemMenu from "@/app/pastelaria/components/ItemMenu";
import styles from "@/app/pastelaria/css/style.module.css";

export default function Menu() {
    const itens = [
        { nome: "Carne", preco: "R$ 10,00", estoque: 5 },
        { nome: "Pizza", preco: "R$ 10,00", estoque: 0 },
        { nome: "Carne", preco: "R$ 10,00", estoque: 3 },
        { nome: "Pizza", preco: "R$ 10,00", estoque: 0 },
        { nome: "Carne", preco: "R$ 10,00", estoque: 2 },
        { nome: "Pizza", preco: "R$ 10,00", estoque: 0 },
        { nome: "Carne", preco: "R$ 10,00", estoque: 1 },
        { nome: "Pizza", preco: "R$ 10,00", estoque: 0 }
    ];

    return (
        <div className={styles.menuContainer}>
            {itens.map((item, index) => (
                <ItemMenu key={index} nome={item.nome} preco={item.preco} estoque={item.estoque} />
            ))}
        </div>
    );
}
