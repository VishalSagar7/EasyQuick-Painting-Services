
const InputField = ({
    type = "text",
    name,
    className,
    placeholder,
    value,
    onChange,
    onBlur,
    error,
    touched,
}) => {
    return (
        <div>
            {type === "textarea" ? (
                <textarea
                    name={name}
                    className={className}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    className={className}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            )}
            {error && touched && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
        </div>
    );
};

export default InputField;

