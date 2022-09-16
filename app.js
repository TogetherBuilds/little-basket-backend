const express = require('express');
const globalErrorHandler = require('./middleware/globalErrorHandler');
const catchAsyncError = require('./utils/catchAsyncError');
const CustomError = require('./utils/CustomError');

const app = express();

// Add your routes here

app.all('*', (req, res, next) => {
	res.json({ message: 'Invalid route (Pakkakelli aaduko)' });
});

app.use(globalErrorHandler);

app.listen(8080, () => {
	console.log('Server is running on port 8080');
});
