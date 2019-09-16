export const calc = (one,two) => {
    return one + two;
}

console.log(calc(10,10));

export const calc2 = (one,two) => {
    return one + two;
}

console.log((calc(10,30)));

export const calc3 = (one,two) => one + two;

console.log(calc3(10,5));

export const localStoragearrow = () => {
    localStorage.setItem('name', 'eking');

    const storage = {
        get: function(key, callback) {
            callback(localStorage.getItem(key));
        }
    }
    
    storage.get('name', (value) => console.log(value))
    
    
    var component = {
        data: {
            name : null
        },
        get: function() {
            storage.get('name',(value) => this.data.name = value)
        }
    }
    
    component.get()
    
    console.log(component);
}

