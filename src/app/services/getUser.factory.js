export default function getUser() {
    return JSON.parse(localStorage.getItem('loginedUser')) || {registered: false};
}