const resolveBtn = document.querySelector('#resolve-btn');
const rejectBtn = document.querySelector('#reject-btn');

const p = new Promise((resolve, reject) => {
    // resolve('Promise Resolved')
    resolveBtn.addEventListener('click', () => {
        resolve('Promise Resolved')
    });
    rejectBtn.addEventListener('click', () => {
        reject('Promise Rejected')
    });
})

// const p4 = p.then((data) => {
//     console.log(data)
//     return data;
// })

p.then((data) => {
    console.log(data)
    return 'Rana'
}).then((data) => {
    console.log(data)
    return 23
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})

// p.then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// }).finally(() => {
//     console.log('Finally Completed');
// })

// setTimeout(() => {
//     console.log('Hi (SetTimeout)');
// })

// console.log('Hi (Global)')

// const p1 = new Promise((resolve, reject) => {
//     resolve('Promise 1 Resolved')
//     // resolveBtn.addEventListener('click', () => {
//     //     resolve('Promise Resolved')
//     // });
//     // rejectBtn.addEventListener('click', () => {
//     //     reject('Promise Rejected')
//     // });
// })
// const p2 = new Promise((resolve, reject) => {
//     resolve('Promise 2 Resolved')
//     // resolveBtn.addEventListener('click', () => {
//     //     resolve('Promise Resolved')
//     // });
//     // rejectBtn.addEventListener('click', () => {
//     //     reject('Promise Rejected')
//     // });
// })
// const p3 = new Promise((resolve, reject) => {
//     resolve('Promise 3 Resolved')
//     // resolveBtn.addEventListener('click', () => {
//     //     resolve('Promise Resolved')
//     // });
//     // rejectBtn.addEventListener('click', () => {
//     //     reject('Promise Rejected')
//     // });
// })


// p1.then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// }).finally(() => {
//     console.log('Finally Completed');
// })

// p2.then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// }).finally(() => {
//     console.log('Finally Completed');
// })

// p3.then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// }).finally(() => {
//     console.log('Finally Completed');
// })

// p.then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// }).finally(() => {
//     console.log('Finally Completed');
// })