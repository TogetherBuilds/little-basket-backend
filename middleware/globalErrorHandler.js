const globalErrorHandler = (err, req, res, next) => {
	res.status(err.statusCode || 500).json({
		success: false,
		statusCode: err.statusCode,
		message: err.message,
	});
};

module.exports = globalErrorHandler;
