'use client';

import React from "react";
import gameManager from "./hooks/gameManager";
import Character from "./components/Character";
import styles from "./css/style.module.css";

export default function Home() {
    const {
        hero,
        villain,
        handleHeroAction,
        isHeroTurn,
        logs,
        gameOver,
        resetGame,
        canDefendHero,
        canFleeHero,
    } = gameManager();

    // Verificar se o herói ainda pode usar bandagem (só 3 vezes no jogo)
    const canUseBandage = isHeroTurn && hero.bandages < 3;

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Heróis X Vilões</h1>

            {/* Área onde os personagens são exibidos */}
            <div className={styles.battlefield}>
                {/* Componente do herói */}
                <Character
                    data={hero}
                    isHero
                    onAction={handleHeroAction}
                    isHeroTurn={isHeroTurn}
                    gameOver={gameOver}
                    canDefend={canDefendHero}
                    canFlee={canFleeHero}
                    canUseBandage={canUseBandage}
                />
                {/* Componente do vilão */}
                <Character data={villain} isHero={false} />
            </div>

            {/* Histórico (log das ações) */}
            <div className={styles.logBox}>
                <h2>Histórico</h2>
                <ul className={styles.logList}>
                    {logs.map((log, i) => (
                        <li key={i} className={i === 0 ? styles.latestLog : ""}>
                            {log}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Botão para reiniciar o jogo */}
            <button className={styles.resetBtn} onClick={resetGame}>
                Reiniciar Jogo
            </button>
        </main>
    );
}


