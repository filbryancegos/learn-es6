export const spread = () => {
    const register = (email, username, password) => {
        console.log('register', email, username, password)
    }
    const paylod = ['bryan@foliowebsites.com','bryan','password'];
    register(...paylod);

    
}