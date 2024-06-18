export default function CustomInput({label, placeholder,value, onChange, type, name}) {
    return (
        <div className="w-full grid gap-2">
            <p>{label}</p>
            <input type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                required className="border w-full border-[#E8E8E8] pt-2 pb-2 pl-3 pr-3" placeholder={placeholder} />
        </div>
    );
}