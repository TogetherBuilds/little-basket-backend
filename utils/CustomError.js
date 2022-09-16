class CustomError extends Error {
	constructor(message, statusCode) {
		super();
		this.name = 'CustomError';
		this.message = message || 'Something went wrong';
		this.statusCode = statusCode || 500;
	}
}

module.exports = CustomError;
