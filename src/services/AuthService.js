
export const AuthService = {
    isAuthenticated: false,
    authenticate(cb) {
        this.authenticate = true;
        setTimeout(cb, 100);
    },
    logout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};
