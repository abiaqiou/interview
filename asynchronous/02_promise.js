const fakeRequest = new Promise((resolve, reject) => {
  console.log('request start')
  setTimeout(() => {
    const data = 'data'
    resolve(data)
  }, 1000)
})

const __main = () => {
  fakeRequest.then((data) => console.log(data))
}

__main()
