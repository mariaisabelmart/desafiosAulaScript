'use client';

import { useState } from 'react';
import { Botao } from './components/Botao';
import { Circulo } from './components/Circulo';
import estilos from './css/style.module.css';

export default function MegaSena() {
    const [numeros, setNumeros] = useState(Array(6).fill(null));

    const gerarNumeros = () => {
        const gerados = [];
        while (gerados.length < 6) {
            const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
            if (!gerados.includes(numeroAleatorio)) {
                gerados.push(numeroAleatorio);
            }
        }
        setNumeros(gerados.sort((a, b) => a - b));
    };

    return (
        <div className={estilos.container}>
            <div className={estilos.containerCirculos}>
                {numeros.map((numero, indice) => (
                    <Circulo key={indice} numero={numero} />
                ))}
            </div>
            <Botao aoClicar={gerarNumeros} />
        </div>
    );
}