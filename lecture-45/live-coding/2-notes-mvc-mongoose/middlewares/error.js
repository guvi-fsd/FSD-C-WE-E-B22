export function notFound(req, res, _next) {
    res.status(404).json(
        { error: true, code: 404, message: `Not found: ${req.method} ${req.originalUrl}`}
    );
}

export function errorHandler(err, req, res, _next) {
    const status = err?.status|| 500 ;
    const message = err?.message || "Internal Server Error";
    console.error(`Error handler: `, err?.stack);
    res.status(status).json({ error: true, code: status, message });

}