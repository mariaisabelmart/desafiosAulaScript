// Hook para gerenciar a lógica do jogo

import { useState, useEffect, useCallback } from "react";

export default function gameManager() {
    // Estados iniciais dos personagens
    const initialHero = { life: 100, name: "Ellie", bandages: 0, escapes: 0 };
    const initialVillain = { life: 100, name: "Cordyceps", spores: 0, escapes: 0 };

    // Outros estados do jogo
    const [hero, setHero] = useState(initialHero);
    const [villain, setVillain] = useState(initialVillain);
    const [isHeroTurn, setIsHeroTurn] = useState(true);
    const [canDefendHero, setCanDefendHero] = useState(false);
    const [canDefendVillain, setCanDefendVillain] = useState(false);
    const [canFleeHero, setCanFleeHero] = useState(false);
    const [canFleeVillain, setCanFleeVillain] = useState(false);
    const [logs, setLogs] = useState([]); // Histórico de ações
    const [gameOver, setGameOver] = useState(false); // Estado de fim de jogo

    // Guarda o último dano recebido de cada personagem (usado na defesa e fuga)
    const [lastDamage, setLastDamage] = useState({ hero: 0, villain: 0 });

    // Para saber quem fez a última ação (usado para permitir defesa e fuga)
    const [lastActionByHero, setLastActionByHero] = useState(false);
    const [lastActionByVillain, setLastActionByVillain] = useState(false);

    // Adiciona nova mensagem no log
    const addLog = useCallback((message) => {
        setLogs((prev) => [message, ...prev]);
    }, []);

    // Altera a vida do personagem (0 a 100)
    const modifyLife = useCallback((target, amount) => {
        const setter = target === "hero" ? setHero : setVillain;
        setter((prev) => {
            const newLife = Math.min(100, Math.max(0, prev.life + amount));
            return { ...prev, life: newLife };
        });
    }, []);

    // Ações do herói
    const heroActions = {
        attack: () => {
            if (!isHeroTurn || gameOver) return;
            const damage = 10;
            modifyLife("villain", -damage);
            setLastDamage((prev) => ({ ...prev, villain: damage, hero: 0 }));
            addLog("🗡️ Ellie atacou Cordyceps causando 10 de dano.");
            setCanDefendVillain(true); // vilão pode se defender
            setCanFleeVillain(true); // vilão pode fugir
            setCanFleeHero(false);
            setCanDefendHero(false);
            setIsHeroTurn(false); // passa o turno para o vilão
            setLastActionByHero(true);
            setLastActionByVillain(false);
        },
        defense: () => {
            if (!isHeroTurn || !canDefendHero || !lastActionByVillain || gameOver) return;
            modifyLife("hero", 10);
            addLog("🛡️ Ellie se defendeu do ataque do Cordyceps.");
            setCanDefendHero(false);
            setCanFleeHero(false);
            setLastDamage((prev) => ({ ...prev, hero: 0 }));
            setIsHeroTurn(false);
            setLastActionByHero(false);
            setLastActionByVillain(false);
        },
        useBandage: () => {
            if (!isHeroTurn || hero.bandages >= 3 || gameOver) return;
            setHero((prev) => ({ ...prev, bandages: prev.bandages + 1 }));
            modifyLife("hero", 15);
            addLog("🩹 Ellie usou uma bandagem e recuperou 15 de vida.");
            setCanFleeHero(false);
            setLastDamage((prev) => ({ ...prev, hero: 0 }));
            setIsHeroTurn(false);
            setLastActionByHero(false);
            setLastActionByVillain(false);
        },
        flee: () => {
            if (
                !isHeroTurn ||
                hero.escapes >= 2 ||
                gameOver ||
                !canFleeHero ||
                !lastActionByVillain
            )
                return;

            const damageToRecover = lastDamage.hero;
            if (damageToRecover > 0) {
                modifyLife("hero", damageToRecover);
                addLog("🏃 Ellie fugiu do ataque do Cordyceps.");
            } else {
                addLog("🏃 Ellie fugiu da batalha.");
            }

            setHero((prev) => ({ ...prev, escapes: prev.escapes + 1 }));
            setCanDefendHero(false);
            setCanFleeHero(false);
            setLastDamage((prev) => ({ ...prev, hero: 0 }));
            setIsHeroTurn(false);
            setLastActionByHero(false);
            setLastActionByVillain(false);
        },
    };

    // Turno automático do vilão
    const villainTurn = useCallback(() => {
        if (isHeroTurn || hero.life <= 0 || villain.life <= 0 || gameOver) return;

        // Ações possíveis do vilão
        const possibleActions = ["attack"];
        if (canDefendVillain) possibleActions.push("defense");
        if (villain.spores < 3) possibleActions.push("spores");
        if (villain.escapes < 2 && canFleeVillain) possibleActions.push("flee");

        // Escolhe ação aleatória
        const action =
            possibleActions[Math.floor(Math.random() * possibleActions.length)];

        switch (action) {
            case "attack": {
                const damage = 15;
                modifyLife("hero", -damage);
                setLastDamage((prev) => ({ ...prev, hero: damage, villain: 0 }));
                addLog("🧟 Cordyceps atacou Ellie causando 15 de dano.");
                setCanDefendHero(true);
                setCanFleeHero(true);
                setCanFleeVillain(false);
                setCanDefendVillain(false);
                setLastActionByVillain(true);
                setLastActionByHero(false);
                break;
            }
            case "defense":
                modifyLife("villain", 5);
                addLog("🛡️ Cordyceps se defendeu do ataque de Ellie.");
                setCanDefendVillain(false);
                setCanFleeVillain(false);
                setLastDamage((prev) => ({ ...prev, villain: 0 }));
                setLastActionByVillain(false);
                setLastActionByHero(false);
                break;
            case "spores":
                setVillain((prev) => ({ ...prev, spores: prev.spores + 1 }));
                modifyLife("villain", 15);
                addLog("🌫️ Cordyceps usou esporos e recuperou 15 de vida.");
                setCanFleeVillain(false);
                setLastDamage((prev) => ({ ...prev, villain: 0 }));
                setLastActionByVillain(false);
                setLastActionByHero(false);
                break;
            case "flee": {
                const damageToRecover = lastDamage.villain;
                if (damageToRecover > 0) {
                    modifyLife("villain", damageToRecover);
                    addLog("👣 Cordyceps fugiu do ataque de Ellie.");
                } else {
                    addLog("👣 Cordyceps fugiu da batalha.");
                }
                setVillain((prev) => ({ ...prev, escapes: prev.escapes + 1 }));
                setCanDefendVillain(false);
                setCanFleeVillain(false);
                setLastDamage((prev) => ({ ...prev, villain: 0 }));
                setLastActionByVillain(false);
                setLastActionByHero(false);
                break;
            }
        }
        // Turno volta para o herói
        setIsHeroTurn(true);
    }, [
        isHeroTurn,
        hero.life,
        villain.life,
        canDefendVillain,
        canFleeVillain,
        villain.spores,
        villain.escapes,
        modifyLife,
        addLog,
        lastDamage,
        gameOver,
    ]);

    // Ver se algum personagem morreu depois de uma ação
    useEffect(() => {
        if (hero.life <= 0) {
            addLog("💀 Cordyceps venceu a batalha!");
            setGameOver(true);
        } else if (villain.life <= 0) {
            addLog("🎉 Ellie venceu a batalha!");
            setGameOver(true);
        }
    }, [hero.life, villain.life, addLog]);

    // Aqui está determinado o tempo entre a ação do herói e o turno do vilão
    useEffect(() => {
        if (!isHeroTurn && !gameOver) {
            const timer = setTimeout(() => {
                villainTurn();
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isHeroTurn, villainTurn, gameOver]);

    // Função para reiniciar o jogo
    const resetGame = () => {
        setHero(initialHero);
        setVillain(initialVillain);
        setIsHeroTurn(true);
        setCanDefendHero(false);
        setCanDefendVillain(false);
        setCanFleeHero(false);
        setCanFleeVillain(false);
        setLogs([]);
        setGameOver(false);
        setLastDamage({ hero: 0, villain: 0 });
        setLastActionByHero(false);
        setLastActionByVillain(false);
    };

    // Executar ação do herói se for válida
    const handleHeroAction = (action) => {
        if (gameOver) return;

        if (heroActions[action]) {
            heroActions[action]();
        }
    };

    // Retorna os dados para o componente principal
    return {
        hero,
        villain,
        handleHeroAction,
        isHeroTurn,
        logs,
        gameOver,
        resetGame,
        canDefendHero,
        canFleeHero,
    };
}
