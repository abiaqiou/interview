// entry point
const __main = () => {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log('data', data))
    .catch((e) => console.error(e))

  fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ a: 1 }),
  })
    .then((res) => res.json())
    .then((data) => console.log('data', data))
    .catch((e) => console.error(e))
}

__main()
