export function getUsernameInitialsLetters(username: string) {
    let initialLetters = username.split(' ');

    if(initialLetters.length >= 2) {
        return initialLetters[0][0].toUpperCase() + initialLetters[1][0].toUpperCase();
    } else {
        return username.substr(0, 2).toUpperCase();
    }
}