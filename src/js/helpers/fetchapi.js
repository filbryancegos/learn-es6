const [get] = [document.querySelector('#getText')];

console.log(get);

export const fetchapi = (e) => {
   fetch('..//../src/db.sample.text')
   .then((res) => {
        return res.text()
   })
   .then(data => {
       console.log(data)
   })
}

get.addEventListener('click', fetchapi);