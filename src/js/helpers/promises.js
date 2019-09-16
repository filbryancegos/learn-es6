
    const postsone = [
        {title: 'post one', content:'the quick brown fox jump over the lazy dog one'},
        {title: 'post two', content:'the quick brown fox jump over the lazy dog two'},
        {title: 'post three', content:'the quick brown fox jump over the lazy dog three'}
      ]
      
      export const getPostsone = () => {
        let html = ''
        setTimeout(() => {
            postsone.forEach(el => {
            html += `
              <div>
                  <h1>${el.title}</h1>
                  <p>${el.content}</p>
              </div>
            `
          },1000);
          const div = document.createElement('div');
          div.classList.add('post-content-promises');
          div.innerHTML = html;
          document.querySelector('.container').appendChild(div);
        })
      }

      export const createPostone = (posts) => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                postsone.push(posts);
                let err = false;

                if (!err) {
                    resolve();
                } else {
                    reject("something went wrong")
                }
            },2000)
        })
    }

    
      

      

      
      
      
      
  