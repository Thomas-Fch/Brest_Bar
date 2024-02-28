
interface CheckboxProps {
    label: string;
    value: boolean;
    onChange: () => void;
}
export const Checkbox: React.FC<CheckboxProps> = ({ label, value, onChange }) => {

    return (
        <label className="flex cursor-pointer items-center gap-2 text-white">
            <input type="checkbox" checked={value} onChange={() => onChange()} className="size-4 cursor-pointer appearance-none rounded ring-2 ring-white checked:border-[3px] checked:border-[#2C2C2C] checked:bg-white" />
            {label}
        </label>
    );
};