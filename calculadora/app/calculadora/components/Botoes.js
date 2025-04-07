import styles from "../css/style.module.css";

export default function Botoes({ valor, onClick, classeExtra }) {
    const isOperacao = ["+", "-", "*", "/", "="].includes(valor);

    return (
        <button
            className={`${styles.botao} ${isOperacao ? styles.operacao : ""} ${classeExtra}`}
            onClick={onClick}
        >
            {valor}
        </button>
    );
}

