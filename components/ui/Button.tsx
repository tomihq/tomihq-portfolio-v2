'use client';

import {ReactElement} from 'react';
interface ButtonProps {
    children?: React.ReactNode
    buttonClasses?: string
    onClick?: any;
}

const Button = ({children, buttonClasses, onClick = null}:ButtonProps):ReactElement => {
    return(
        <button
                  type="button"
                  className={buttonClasses}
                  onClick={onClick}
                >
                   <span>
                        {children}
                  </span>
                </button>
    )
}

export default Button;