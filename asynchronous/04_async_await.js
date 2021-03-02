const fakeRequest = () => {
  const p = new Promise((resolve, reject) => {
    console.log('request start')
    setTimeout(() => {
      const data = 'data'
      resolve(data)
    }, 1000)
  })
  return p
}

const __main = async () => {
  const res = await fakeRequest()
  console.log(res)
}

__main()
