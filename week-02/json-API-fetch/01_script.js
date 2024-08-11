// let userData;
const image = document.querySelector("img");
const button = document.querySelector("button");

//* XMLHttpRequest
// button.addEventListener("click", () =>{

//   const xhr = new XMLHttpRequest()

//   // console.log(xhr);

//   xhr.responseType = 'json';

//   // xhr.onload = () => {
//   //   // console.log(xhr.response)
//   //   // console.log(JSON.parse(xhr.response))
//   //   image.src = xhr.response.message
//   //   console.log(xhr)
//   // }

//   xhr.addEventListener('load', () => {
//     // console.log(xhr.response)
//     // console.log(JSON.parse(xhr.response))
//     image.src = xhr.response.message
//     console.log(xhr);
//   })

//   xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')
//   xhr.send()

// });

// button.addEventListener("click", () =>{

//   const xhr = new XMLHttpRequest()

//   // console.log(xhr);

//   // xhr.responseType = 'json';

//   // xhr.onload = () => {
//   //   // console.log(xhr.response)
//   //   // console.log(JSON.parse(xhr.response))
//   //   image.src = xhr.response.message
//   //   console.log(xhr)
//   // }

//   xhr.addEventListener('load', () => {
//     // console.log(xhr.response)
//     // console.log(JSON.parse(xhr.response))
//     image.src = xhr.response.message
//     console.log(xhr);
//   })

//   xhr.open('GET', 'http://httpbin.org/delay/3', false)
//   xhr.send()

// });

//* fetch
button.addEventListener("click", () =>
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      console.log("Got the data");
      console.log(json.message);
      // userData = json;
      image.src = json.message;
    })
);

//* fetch with delay
button.addEventListener("click", () =>
  fetch("http://httpbin.org/delay/3")
    .then((response) => response.json())
    .then((json) => {
      console.log("Got the data");
      console.log(json);
      // userData = json;
    })
);


//* fetch with setTimeout
// button.addEventListener("click", () => {
//   setTimeout(() => {
//     fetch("https://dog.ceo/api/breeds/image/random")
//       .then((response) => response.json())
//       .then((json) => {
//         console.log("Got the data");
//         console.log(json.message);
//         image.src = json.message;
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, 3000); //* 3 seconds delay before making the fetch request
// });


// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
