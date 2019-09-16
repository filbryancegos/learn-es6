export const shorthand = () => {
    const name = 'bryan';

    const person = {
      name,
      sound() {
        return 'Meow'
      }
    }
    
    const sounds = {
      meow() {
        return 'meow';
      },
      hiss() {
        return 'his';
      }
    }
    
    const names = "Mabel";
    
    const mabel = {names,sounds}
    
    console.log(mabel)
    
    console.log(person)
}
