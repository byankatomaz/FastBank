import classNames from "classnames";

type Props = {
    type?: 'button' | 'submit' | 'reset';
    variant?: 'default' | 'primary' | 'light' | 'dark';
    children: React.ReactNode;
    onClick?: () => void;
}

export function Button({ type='button', children, variant, onClick } : Props){
    let bgColor = 'text-white'
    if (variant === 'dark') bgColor = 'bg-primaryDark hover:bg-primary active:bg-primaryLight transition-all text-white px-6 py-2 leading-5 text-white transition-colors duration-200 transform rounded-md focus:outline-none focus:bg-gray-600'

    return(
        <button type={type} onClick={onClick} className={classNames('px-4 h-20 font-medium', bgColor)}>
            {children}
        </button>
    )
}


