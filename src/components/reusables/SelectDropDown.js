const SelectDropDown = ({ options }) => {
  return (
    <div className="sm:col-span-2">
      <div>
        <select
          id={options[0].name}
          name={options[0].name}
          className={`block w-full rounded-md border-gray-50 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm ${options[2].color}`}
        >
          {options[1].filtered.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectDropDown;
