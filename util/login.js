export default function checkUser(username, password) {
    if (username === account.username && password === account.password) {
        return true;
    }
    return false;
}

const account = {
    id: 1,
    username: "admin",
    password: "admin",
}