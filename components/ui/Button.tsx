import {ReactElement} from 'react';
interface ButtonProps {
    children: React.ReactNode
    buttonClasses: string
}

export const Button = ({children, buttonClasses}:ButtonProps):ReactElement => {
    return(
        <button
                  type="button"
                  className={buttonClasses}
                >
                   <span>
                        {children}
                  </span>
                </button>
    )
}