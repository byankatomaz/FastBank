import classNames from "classnames";

type Props = {
    type?: 'button' | 'submit' | 'reset';
    variant?: 'default' | 'primary' | 'light' | 'dark' | 'grayPri';
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

// FUnção dos botões da pagina
export function Button({ type='button', children, className, variant, onClick } : Props){
    let bgColor = 'text-white'
    if (variant === 'dark') bgColor = 'bg-primaryDark hover:bg-primary transition-all text-white px-6 py-2 leading-5 text-white transition-colors duration-200 transform focus:outline-none focus:bg-gray-600'

    if (variant === 'primary') bgColor = 'bg-primary hover:bg-primaryLight transition-all text-white px-6 py-2 leading-5 text-white transition-colors duration-200 transform focus:outline-none focus:bg-gray-600'
    
    if (variant === 'grayPri') bgColor = 'bg-grayPri hover:bg-grayLight transition-all text-white px-6 py-2 leading-5 text-white transition-colors duration-200 transform focus:outline-none focus:bg-gray-600'

    return(
        <button type={type} onClick={onClick} className={classNames('px-8 font-medium flex justify-center items-center', bgColor, className)}>
            {children}
        </button>
    )
}


