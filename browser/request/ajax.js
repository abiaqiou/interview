const ajax = (url, method = 'GET', body = {}) => {
  const xhr = new XMLHttpRequest()
  xhr.open(method, url)
  xhr.setRequestHeader('content-type', 'application/json')
  xhr.onreadystatechange = () => {
    console.log('xhr', xhr)
    if (xhr.readyState === 4 && [200, 201].includes(xhr.status)) {
      console.log(xhr.responseText)
    }
  }
  xhr.send(JSON.stringify(body))
}

// entry point
const __main = () => {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  ajax(url)
  ajax(url, 'POST', { a: 1 })
}

__main()
