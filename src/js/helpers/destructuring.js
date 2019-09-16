export const destructuring = () => {
    const api = {
        register(payload) {
            console.log(payload);
        }
    }
    const register = ({email,username,password}) => {
        api.register({email,username,password})
    }

    const component = {
        data: {
            email: 'bryan@foliowebsites.com',
            username: 'bryan egos',
            password: 'password'
        }
    }

    register(component.data);
}

