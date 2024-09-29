import React from 'react';

type ButtonProps = {
    text: string;
    className?: string;
};

const Button: React.FC<ButtonProps> = ({ text, className }) => {
    return (
        <button className={`px-4 py-2 rounded ${className}`}>
            {text}
        </button>
    );
};

export default Button;
