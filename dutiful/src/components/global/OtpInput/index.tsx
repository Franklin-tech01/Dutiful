"use client";
import React, { useRef } from 'react';

interface OtpInputProps {
    length?: number;
    className?: string;
}

const OtpInput: React.FC<OtpInputProps> = ({ length = 4, className = '' }) => {
    const inputsRef = useRef<HTMLInputElement[]>([]);

    const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value.length > 1) return; // Prevent more than one character

        // Move to next input if a number is entered
        if (value.match(/[0-9]/)) {
            if (index < length - 1) {
                inputsRef.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Backspace' && index > 0 && !event.currentTarget.value) {
            // Move to previous input on Backspace if the current box is empty
            inputsRef.current[index - 1].focus();
        }
    };

    return (
        <div className={`flex space-x-6  ${className}`}>
            {Array.from({ length }).map((_, index) => (
                <input
                    key={index}
                    ref={(el) => {
                        if (el) inputsRef.current[index] = el; // Assign the input element to the ref
                    }}
                    type="text"
                    maxLength={1}
                    className="w-[75px] h-[75px] border bg-gray border-grey  rounded text-center text-2xl focus:outline-none focus:ring-2 focus:ring-purple"
                    onChange={(e) => handleInputChange(index, e)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    inputMode="numeric" // Ensures only numbers are entered on mobile devices
                    pattern="[0-9]*" // Allows only numeric input
                />
            ))}
        </div>
    );
};

export default OtpInput;
