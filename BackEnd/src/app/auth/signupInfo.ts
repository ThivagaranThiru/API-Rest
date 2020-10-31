export class SignUpInfo {
    username: string;
    password: string;
    userRole: string;

    constructor(username: string, password: string, role: string) {
        this.username = username;
        this.password = password;
        this.userRole = role;
    }
}
