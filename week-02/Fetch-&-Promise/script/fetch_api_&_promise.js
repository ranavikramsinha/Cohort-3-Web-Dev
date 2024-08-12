

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
.then((firstUser) => fetch(`https://dummyjson.com/users/${firstUser.users[0].id}`))
.then((response) => {
    if(!response.ok){
        throw new Error('Network Error');
    }
    return response.json();
})
.then((firstUserData) => {
    console.log('User ID:', firstUserData.id);
    console.log('First Name:', firstUserData.firstName);
    console.log('Last Name:', firstUserData.lastName);
    console.log('Email:', firstUserData.email);
    console.log('Phone:', firstUserData.phone);
    console.log('Address:', firstUserData.address);
    console.log('Company:', firstUserData.company);

    if(firstUserData.address) {
        console.log('Address:', firstUserData.address.address);
        console.log('City:', firstUserData.address.city);
        console.log('Postal Code:', firstUserData.address.postalCode);
      }
})