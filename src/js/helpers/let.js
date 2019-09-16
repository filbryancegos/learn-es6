export const letModulus = () => {
    var results = [];

    var array = 'bryanegos';

    for (let i = 0; i < array.length; i++) {
        results.push(function() {
            return i % 2 === 0? 'even': 'odd';
        })
    }

    results.forEach(function(result) {
        console.log(result());
    })

    var messages = ['Hi there','How are you', 'Im doing fine'];

    for (let i = 0; i <= messages.length; i++) {
        setTimeout(function() {
            console.log(messages[i]);
        }, i * (Math.floor(Math.random() * 2500 + 1500)))
    }

}