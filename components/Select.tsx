type TSelect = {
    disabled: boolean,
    className: string,
    props: unknown
}

const Select = ({ disabled, className, ...props }: TSelect) => (
    <select
        disabled={disabled}
        className={`${className} w-full md:w-2/3 p-2 text-sm font-sans tracking-wide bg-transparent border-b-[0.5px] border-slate-200 shadow-sm`}
        {...props}
    />
)

export default Select
