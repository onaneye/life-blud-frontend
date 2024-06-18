export default function CustomCheckBox({label}) {
    return (
        <div className="flex gap-3 items-center">
            <input type="checkbox" />
            <p className="text-sm">{label}</p>
        </div>
    );
}