export class SignUpInfo {
    username: string;
    userRole: string;
    password: string;

    constructor(username: string, password: string, userRole: string) {
        this.username = username;
        this.password = password;
        this.userRole = userRole;
    }
}
