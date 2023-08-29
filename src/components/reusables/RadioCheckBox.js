export const InputCheckbox = ({ topic }) => {
  return (
    <div className="relative flex gap-x-3">
      <div className="flex h-6 items-center">
        <input
          id={topic.identifier}
          name={topic.identifier}
          type="checkbox"
          className="h-4 w-4 rounded border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
          // required
        />
      </div>
      <div className="text-sm leading-6">
        <label htmlFor={topic.identifier} className="font-medium text-white">
          {topic.name}
        </label>
      </div>
    </div>
  );
};

export const InputRadio = ({ yesno }) => {
  return (
    <div className="relative flex gap-x-3">
      <div className="flex h-6 items-center">
        <input
          id={yesno.id}
          name={yesno.name}
          type="radio"
          className="h-4 w-4 border-white/10 bg-white/5 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-gray-900"
        />
      </div>
      <div className="text-sm leading-6">
        <label htmlFor={yesno.id} className="font-medium text-white">
          {yesno.identifier}
        </label>
      </div>
    </div>
  );
};

