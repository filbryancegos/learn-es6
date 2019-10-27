export const fetchUsers = async () => {
    //console.log("bryan")
    const res = await fetch
    ('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    let html = '';
    data.forEach(datas => {
        html += `
            <div>
                <ul>
                    <li>${datas.name}</li>
                    <li>${datas.email}</li>
                </ul>
            </div>
        `;
    })
    const div = document.createElement('div');
    div.classList.add('fetch-content');
    div.innerHTML = html;

    console.log(div.innerHTML);
    setTimeout(() => {
        document.querySelector('body').appendChild(div);
    },2100)
    
}
