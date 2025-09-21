export default function Input({ label, error, helper, className = "", ...props }) {
    return (
        <label>
            {label && <span>{label}</span>}
            <input className={`block w-full ${className}`} {...props} />
            {error ? (
                <span>{error}</span>
            ) : helper ? (
                <span>{helper}</span>
            ) : null}
        </label>
    )
};