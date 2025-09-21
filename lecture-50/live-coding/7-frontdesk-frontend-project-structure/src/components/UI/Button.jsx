export default function Button({ variant = "primary", className = "", text }) {
    const base = "inline-flex items-center justify-center rounded-lg text-sm px-3 py-2";
    
    const styles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-300 text-white hover:bg-gray-400",
        tertiary: "bg-green-400 text-white hover:bg-green-500"
    }

    const cls = `${base} ${styles[variant] || styles.primary} ${className}`;
    return <button className={cls}>{text}</button>;
}