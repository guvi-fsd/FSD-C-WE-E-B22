export default function Card({ title, action, children }) {
    return (
        <section className="border">
            {(title && action) && (
                <div>
                    <h2>{title}</h2>
                    {action}
                </div>
            )}
            <div>{children}</div>
        </section>
    );
}