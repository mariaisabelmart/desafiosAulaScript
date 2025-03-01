import styles from "../css/style.module.css"
import Casas from "./Casas"

export default function Tabuleiro() {
    const tamanho = 8;
    const tabuleiro = [];

    for (let linha = 0; linha < tamanho; linha++) {
        const linhaCasas = [];
        for (let coluna = 0; coluna < tamanho; coluna++) {
            const cor = (linha + coluna) % 2 === 0 ? "casaBranca" : "casaPreta";
            const peca =
                (linha < 3 && cor === "casaPreta") ? "pecaPreta" :
                    (linha > 4 && cor === "casaPreta") ? "pecaBranca" : null;
            linhaCasas.push(<Casas key={`${linha}-${coluna}`} cor={cor} peca={peca}></Casas>);
        }
        tabuleiro.push(<div key={linha} className={styles.linhas}>{linhaCasas}</div>);
    }

    return <div className={styles.tabuleiro}>{tabuleiro}</div>;
}