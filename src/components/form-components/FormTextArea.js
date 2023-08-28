const FormTextArea = ({
  rows,
  name,
  placeholder,
  required = false,
  value,
  htmlForId,
  labelDisplayText,
  labelSpanClassName,
  labelClassName,
  textareaClassName,
  textareaDivWrapperClassName,
  className,
  onChange,
  explainInputText,
  explainInputClassname,
  ...restProps // Spread the remaining props
}) => {
  const labelContent = (
    <>
      {labelDisplayText}
      {required && labelDisplayText && (
        <span className={labelSpanClassName}>*</span>
      )}
    </>
  );

  return (
    <div className={className}>
      {/* Label */}
      <label htmlFor={htmlForId} className={labelClassName}>
        {labelContent}
      </label>
      <p className={explainInputClassname}>{explainInputText}</p>
      {/* Textarea */}
      <div className={textareaDivWrapperClassName}>
        <textarea
          rows={rows}
          name={name}
          id={htmlForId}
          value={value}
          className={textareaClassName}
          required={required}
          placeholder={placeholder}
          onChange={onChange}
          {...restProps}
        />
      </div>
    </div>
  );
};

export default FormTextArea;
