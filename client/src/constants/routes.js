export const LANDING = '/';
export const SIGN_UP = '/signup';
export const SIGN_IN = '/signin';
//the home page is a protected route, which users can only access if they have been authenticated, 
//implement the protection of the route using authorization mechanisms
export const HOME = '/home';
//On the account page is a protected route, a user can reset or change a password. It is secured by authorization as well, so it is only reachable for authenticated users. 
export const ACCOUNT = '/account';
//On the admin page is a protected route, a user authorized as admin will be able to manage this application's users. The admin page is protected on a more fine-grained level, 
//because it is only accessible for authenticated admin users
export const ADMIN = '/admin';
//the password forget component will be exposed on another non-protected page, a password forget page, as well. It is used for users who are not authenticated and forgot about their password.
export const PASSWORD_FORGET = '/pw-forget';