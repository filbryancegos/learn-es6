export const constName = () => {
    const name = ['alex','dale'];
    name.push('bryan');
    console.log(name);
    
    const user = {
        authenticated: true,
        name: 'bryan'
    }
    
    user.age = 20;
    user.getAge = function() {
        return 'your age is' + ' ' + this.age;
    }

    console.log(user.getAge());

    user.authenticated = false;
    
    console.log(user);
}