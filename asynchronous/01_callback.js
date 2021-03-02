const fakeRequest = (callback) => {
  console.log('request start')
  setTimeout(() => {
    const data = 'data'
    callback(data)
  }, 1000)
}

const __main = () => {
  fakeRequest(console.log)
}

__main()
