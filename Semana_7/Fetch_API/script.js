// fetch('https://regres.in/api/users/4575')
//   .then((res) => {
//     console.log(res);
//     if (res.ok) {
//       console.log('Requisição bem-sucedida');
//     }
//     else {
//         console.log('Erro na requisição');
//     }
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

fetch('https://regres.in/api/users/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Jorge',
    }),
})
.then((res) => res.json())
.then((data) => console.log(data))