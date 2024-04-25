import { ChangeEvent } from "react";

const InputBox = ({
  label,
  placeholder,
  onChange,
  type,
}: {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string | "text";
}) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-bold  text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        type={type}
        onChange={onChange}
        id="first_name"
        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-[500px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default InputBox;
