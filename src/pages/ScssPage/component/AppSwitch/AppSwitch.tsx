import * as React from 'react';
import './AppSwitch.scss';

type InputProps = {
    variant?: 'round' | 'square';
} & React.ComponentProps<'input'>;

export default function AppSwitch({ variant = 'square', ...props }: InputProps) {
    return (
        <label className="switch">
            <input type="checkbox" {...props} />
            <span className={`slider ${variant}`}></span>
        </label>
    );
}
