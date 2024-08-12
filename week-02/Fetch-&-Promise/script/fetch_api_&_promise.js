//* GET is default in fetch
// fetch('https://dummyjson.com/products')
// .then((res) => res.json())
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

// fetch('https://dummyjson.com/products/add', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       title: 'BMW Pencil',
//       category: 'Stationary'
//       /* other product data */
//     })
//   })
//   .then(res => res.json())
//   .then(console.log);

fetch('https://dummyjson.com/users')
.then((response) => {
    if(!response.ok){
        throw new Error('Network Error');
    }
    return response.json();
})
.then((usersData) => fetch(`https://dummyjson.com/posts/user/${usersData.users[0].id}`))
.then((response) => {
    if(!response.ok){
        throw new Error('Network Error');
    }
    return response.json();
})
.then((postsData) => fetch(`https://dummyjson.com/comments/post/${postsData.posts[0].id}`))
.then((response) => {
    if(!response.ok){
        throw new Error('Network Error');
    }
    return response.json();
})
.then((commentsData) => fetch(`https://dummyjson.com/users/${commentsData.comments[0].user.id}`))
.then((response) => {
    if(!response.ok){
        throw new Error('Network Error');
    }
    return response.json();
})
.then((userData) => console.log(userData))
.catch((err) => console.log(err))

// .then((firstUserData) => {
//     console.log('User ID:', firstUserData.id);
//     console.log('First Name:', firstUserData.firstName);
//     console.log('Last Name:', firstUserData.lastName);
//     console.log('Email:', firstUserData.email);
//     console.log('Phone:', firstUserData.phone);
//     console.log('Address:', firstUserData.address);
//     console.log('Company:', firstUserData.company);

//     if(firstUserData.address) {
//         console.log('Address:', firstUserData.address.address);
//         console.log('City:', firstUserData.address.city);
//         console.log('Postal Code:', firstUserData.address.postalCode);
//       }
// })

// function makeHttpRequest(method, url) {
//     const xhr = new XMLHttpRequest()
//     xhr.responseType = 'json'
  
//     const promise = new Promise((resolve, reject) => {
//       xhr.addEventListener('load', () => {
//         resolve(xhr.response)
//       })
//       xhr.addEventListener('error', () => {
//         reject('request failed')
//       })
//     })
  
//     xhr.open(method, url)
//     xhr.send()
  
//     return promise
//   }
  
//   // makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData) => {
//   //   makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postsData) => {
//   //     makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData) => {
//   //       makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (userData) => {
//   //         console.log(userData);
//   //       });
//   //     });
//   //   });
//   // })
  
//   makeHttpRequest('GET', 'https://dummyjson.com/users')
//     .then((usersData) => makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`))
//     .then((postsData) => makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`))
//     .then((commentsData) => makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`))
//     .then((userData) => console.log(userData))
//     .catch((err) => console.log(err))