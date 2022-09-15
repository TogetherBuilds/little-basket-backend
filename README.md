# Little Basket Backend

An online grocery shopping application

# Endpoints

## Identity

### SignUp `Open`

> `Description`
>
> > Creates an user account based on the details provided in the request body
>
> `Method`
>
> > **POST**
>
> `URL`
>
> ```
> /signup
> ```
>
> `body`
>
> ```
> {
>   "id": "User Id",
>   "name": "User Name",
>   "email": "User Email",
>   "password": "User Password",
>   "dateOfBirth": "dd-mm-yyyy",
>   "contactNumber": "User's mobile number"
> }
> ```

### Login `Open`

> `Description`
>
> > Provides an authToken by verifying the id and password of the user
>
> `Method`
>
> > **POST**
>
> `URL`
>
> ```
> /login
> ```
>
> `body`
>
> ```
> {
>   "id": "User Id",
>   "password": "User Password"
> }
> ```

### Reset Password `Open`

> `Description`
>
> > Sends a password reset link to the provided email in the request body
>
> `Method`
>
> > **POST**
>
> `URL`
>
> ```
> /password/reset
> ```
>
> `body`
>
> ```
> {
>   "email" : "name@example.com"
> }
> ```

### Update Password `Closed`

> `Description`
>
> > Updates the user password by verifying the old password of the user
>
> `Method`
>
> > **POST**
>
> `URL`
>
> ```
> /password/update
> ```
>
> `body`
>
> ```
> {
>   "oldPassword": "User's old password",
>   "newPassword": "User's new password"
> }
> ```

## User

### Fetch self profile `Closed`

> `Description`
>
> > Returns the profile of the user
>
> `Method`
>
> **GET**
>
> `URL`
>
> ```
> /user
> ```

### Fetch User details `Closed`

> `Description`
>
> > Returns the profile of any user with limited details
>
> `Method`
>
> **GET**
>
> `URL`
>
> ```
> /user/:userId
> ```
