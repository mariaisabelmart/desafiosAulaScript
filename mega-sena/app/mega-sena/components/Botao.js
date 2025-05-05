'use client';

import { useState } from 'react';
import estilos from '../css/style.module.css';

export function Botao({ aoClicar }) {
    const [carregando, setCarregando] = useState(false);

    const lidarClique = () => {
        setCarregando(true);
        setTimeout(() => {
            aoClicar();
            setCarregando(false);
        }, 300);
    };

    return (
        <button className={estilos.botao} onClick={lidarClique}>
            {carregando ? 'Gerando...' : 'Gerar'}
        </button>
    );
}