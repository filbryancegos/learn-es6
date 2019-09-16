
    const posts = [
        {title: 'post one', content:'the quick brown fox jump over the lazy dog one'},
        {title: 'post two', content:'the quick brown fox jump over the lazy dog two'},
        {title: 'post three', content:'the quick brown fox jump over the lazy dog three'}
      ]
      export const getPosts = () => {
        let html = ''
        setTimeout(() => {
          posts.forEach(el => {
            html += `
              <div>
                  <h1>${el.title}</h1>
                  <p>${el.content}</p>
              </div>
            `
          },1000);
          const div = document.createElement('div');
          div.classList.add('post-content-callback');
          div.innerHTML = html;
          document.querySelector('.container').appendChild(div);
        })
      }
      
      export const createPosts = (post,callback) => {
        setTimeout(() => {
          posts.push(post);
          callback();
        },2000)
      }

      
      
      
      
  