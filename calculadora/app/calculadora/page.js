"use client";
import { useState } from "react";
import styles from "./css/style.module.css";
import Botoes from "./components/Botoes";
import Display from "./components/Display";

export default function Home() {
    const [display, setDisplay] = useState("");

    const handleButtonClick = (valor) => {
        if (valor === "C") {
            setDisplay("");
        } else if (valor === "⌫") {
            setDisplay(display.slice(0, -1));
        } else if (valor === "=") {
            try {
                setDisplay(eval(display).toString());
            } catch {
                setDisplay("Erro");
            }
        } else {
            setDisplay(display + valor);
        }
    };

    return (
        <div className={styles.calculadoraContainer}>
            <h1>CALCULADORA</h1>
            <div className={styles.calculadoraBox}>
                <div className={styles.calculadoraContent}>
                    <Display valorDisplay={display} />
                    <div className={styles.botoesContainer}>
                        {/* C ocupa duas colunas */}
                        <Botoes valor="C" onClick={() => handleButtonClick("C")} classeExtra={styles.botaoC} />
                        {/* Apagar ocupa o espaço do botão vazio */}
                        <Botoes valor="⌫" onClick={() => handleButtonClick("⌫")} classeExtra={styles.operacao} />
                        <Botoes valor="/" onClick={() => handleButtonClick("/")} classeExtra={styles.operacao} />

                        {/* Linha 2 */}
                        <Botoes valor="7" onClick={() => handleButtonClick("7")} />
                        <Botoes valor="8" onClick={() => handleButtonClick("8")} />
                        <Botoes valor="9" onClick={() => handleButtonClick("9")} />
                        <Botoes valor="*" onClick={() => handleButtonClick("*")} classeExtra={styles.operacao} />

                        {/* Linha 3 */}
                        <Botoes valor="4" onClick={() => handleButtonClick("4")} />
                        <Botoes valor="5" onClick={() => handleButtonClick("5")} />
                        <Botoes valor="6" onClick={() => handleButtonClick("6")} />
                        <Botoes valor="-" onClick={() => handleButtonClick("-")} classeExtra={styles.operacao} />

                        {/* Linha 4 */}
                        <Botoes valor="1" onClick={() => handleButtonClick("1")} />
                        <Botoes valor="2" onClick={() => handleButtonClick("2")} />
                        <Botoes valor="3" onClick={() => handleButtonClick("3")} />
                        <Botoes valor="+" onClick={() => handleButtonClick("+")} classeExtra={styles.operacao} />

                        {/* Linha 5 */}
                        <Botoes valor="." onClick={() => handleButtonClick(".")} />
                        <Botoes valor="0" onClick={() => handleButtonClick("0")} />
                        <Botoes valor="=" onClick={() => handleButtonClick("=")} classeExtra={styles.botaoIgual} />
                    </div>
                </div>
            </div>
        </div>
    );
}