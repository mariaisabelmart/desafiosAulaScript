// Componente para renderizar herói ou vilão

import React from "react";
import styles from "../css/style.module.css";

export default function Character({
                                      data,
                                      isHero,
                                      onAction,
                                      isHeroTurn,
                                      gameOver,
                                      canDefend,
                                      canFlee,
                                      canUseBandage,
                                  }) {
    const { name, life, bandages, escapes } = data;

    // Porcentagem da barra de vida
    const lifePercent = life;

    // Escolhe a imagem do personagem
    const imgSrc = isHero ? "/ellie.png" : "/cordyceps.png";

    // Valor de ataque e defesa do personagem
    const attack = isHero ? 10 : 15;
    const defense = isHero ? 10 : 5;

    return (
        //retornando os dados dos personagens: nome, imagem, barra de vida, ataque e defesa, botões de ação
        <div className={styles.character}>
            <h3>{name}</h3>
            <img
                src={imgSrc}
                alt={name}
                className={styles.characterImg}
                style={{ objectFit: "contain" }}
            />
            <div className={styles.lifeBar}>
                <div className={styles.lifeBarGreen} style={{ width: `${lifePercent}%` }}>
                    {life} HP
                </div>
            </div>

            <div className={styles.stats}>
                <p>⚔️ Ataque: {attack}</p>
                <p>🛡️ Defesa: {defense}</p>
            </div>

            {isHero && !gameOver && (
                <div className={styles.actions}>
                    <button disabled={!isHeroTurn} onClick={() => onAction("attack")}>
                        Atacar
                    </button>
                    <button
                        disabled={!isHeroTurn || !canDefend}
                        onClick={() => onAction("defense")}
                    >
                        Defender
                    </button>
                    <button
                        disabled={!canUseBandage}
                        onClick={() => onAction("useBandage")}
                    >
                        Bandagem
                    </button>
                    <button
                        disabled={!isHeroTurn || !canFlee || escapes >= 2}
                        onClick={() => onAction("flee")}
                    >
                        Fugir
                    </button>
                </div>
            )}
        </div>
    );
}
