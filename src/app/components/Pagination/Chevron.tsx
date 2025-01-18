import React from 'react';

interface ChevronProps {
    direction?: 'left' | 'right'; // Dirección del chevron
    size?: number; // Tamaño opcional del ícono
    color?: string; // Color opcional
}

const Chevron = ({ direction = 'right', size = 22, color = 'currentColor' }: ChevronProps) => {
    const rotation = direction === 'left' ? 'rotate(180deg)' : 'none';

    return (
        <svg
            width={`${size}px`}
            height={`${size}px`}
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
            fill={color}
            style={{ transform: rotation }}
        >
            <path
                fillRule="evenodd"
                d="M6.388 2.263a0.688 0.688 0 0 1 0.973 0l8.25 8.25a0.688 0.688 0 0 1 0 0.973l-8.25 8.25a0.688 0.688 0 0 1 -0.973 -0.973L14.153 11 6.388 3.237a0.688 0.688 0 0 1 0 -0.973"
            />
        </svg>
    );
};

export default Chevron;
