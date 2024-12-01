interface ButtonProps {
    text: string;
    variant: "primary" | "secondary";
    onClick?: () => void
}

const variantStyle = {
    "primary": "bg-gradient-to-t from-[#2456dc] to-[#5091f2] text-white hover:to-[#4477C6] hover:from-[#1E47B2] hover:text-[#E1E2E4]",
    "secondary": "bg-white text-black hover:bg-[#E1E2E4]"  
}
const commonStyle = "px-4 py-[10px] text-xs rounded-md font-normal"

export const Button = ({text, variant, onClick}: ButtonProps) => {
    return <div>
        <button onClick={onClick} className={`${variantStyle[variant]} ${commonStyle}`}>{text}</button>
    </div>
}