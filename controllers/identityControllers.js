const catchAsyncError = require('../utils/catchAsyncError');
const CustomError = require('../utils/CustomError');

const identityControllers = {};

identityControllers.signup = catchAsyncError(async (req, res, next) => {
	throw new CustomError('Dobbey ikkadinunchi firstu', 401);
	res.json({ message: 'Signup route' });
});

module.exports = identityControllers;
