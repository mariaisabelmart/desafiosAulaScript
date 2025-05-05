'use client';

import estilos from '../css/style.module.css';

export function Circulo({ numero }) {
    return (
        <div className={estilos.circulo}>
            {numero !== null ? numero : ''}
        </div>
    );
}