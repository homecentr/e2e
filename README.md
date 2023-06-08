# End-to-end tests

## Creating test users
- Go to Azure AD portal
- Create a new user with a temporary password
- Use the username and password to sign into https://myaccount.microsoft.com in an incognito window
- Chnage user's password to a secure one
- In My Account portal go to Security info and `Add sign-in method` then select `Authenticator app`
- Select `I want to use a different authenticator app` and click next
- When presented with a QR code, click `Can't scan image?` button and copy the `Secret key`
- Generate the code using the code below
```javascript
import { authenticator } from 'otplib';

console.log(authenticator.generate('<SECRET>'))
```
