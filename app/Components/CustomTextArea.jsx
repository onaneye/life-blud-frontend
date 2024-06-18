export default function CustomTextArea({label, placeholder}) {
    return (
        <div className="w-full grid gap-2">
            <p>{label}</p>
            <textarea className="border h-36 w-full border-[#B2A7A5] pt-3 pb-3 pl-3 pr-3" placeholder={placeholder} />
        </div>
    );
}