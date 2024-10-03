import React from 'react';

interface InputProps {
    label: string;
    type?: string;
    className?: string;
}

const Input: React.FC<InputProps> = ({ label, type = 'text', className = '' }) => {
    return (
        <div className={`flex flex-col mb-4 ${className}`}>
            <label className="text-sm font-semibold text-[#603F8B] w-[486px] mb-2">{label}</label>
            <input
                type={type}
                className="w-full px-4 py-2 border bg-gray border-grey rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
        </div>
    );
};

export default Input;
