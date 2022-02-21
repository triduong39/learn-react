import * as React from 'react';
import './AppSwitch.scss';

type InputProps = {
    variant?: 'round' | 'square';
    color?: 'blue' | 'red' | 'purple';
} & React.ComponentProps<'input'>;

export default function AppSwitch({ variant = 'square', color = 'blue', ...props }: InputProps) {
    return (
        <label className={`switch swh-${color}`}>
            <input type="checkbox" {...props} />
            <span className={`slider ${variant}`}></span>
        </label>
    );
}
