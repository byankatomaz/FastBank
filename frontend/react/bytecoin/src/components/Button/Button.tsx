import classNames from "classnames";

type Props = {
    type?: 'button' | 'submit' | 'reset';
    variant?: 'default' | 'primary' | 'light' | 'dark';
    children: React.ReactNode;
    onClick?: () => void;
}

export function Button({ type='button', children, variant, onClick } : Props){
    let bgColor = 'text-white'
    if (variant === 'dark') bgColor = 'bg-primaryDark hover:bg-primary active:bg-primaryLight transition-all text-white'

    return(
        <button type={type} onClick={onClick} className={classNames('px-4 h-20 font-medium', bgColor)}>
            {children}
        </button>
    )
}


