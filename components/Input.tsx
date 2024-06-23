type TInput = {
    disabled: boolean,
    className: string,
    props: unknown
}

const Input = ({ disabled, className, ...props }: TInput) => (
    <input
        disabled={disabled}
        className={`${className} px-2 py-1 rounded-sm shadow-sm border-b-[0.5px] border-slate-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:border-0 text-sm`}
        {...props}
    />
)

export default Input
