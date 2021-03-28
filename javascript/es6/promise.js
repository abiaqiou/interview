const sleep = (second) => {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, second * 1000)
  })
  return p
}
const testSleep = async () => {
  console.log('before sleep')
  await sleep(1)
  console.log('after sleep')
}

const getAll = async (urls) => {
  let ps = urls.map((url) => fetch(url))
  let result = await Promise.all(ps).then((res) =>
    Promise.all(res.map((r) => r.json()))
  )

  // 常见错误用法
  // let result = await Promise.all(ps).then((res) => res.map((r) => r.json()))
  return result
}
const testAll = async () => {
  console.log('before all')
  let urls = [5, 4, 3, 2, 1].map(
    (n) => `https://jsonplaceholder.typicode.com/todos/${n}`
  )
  let all = await getAll(urls)
  console.log('getAll result:', all)
  console.log('after all')
}

const getRace = async (urls) => {
  let ps = urls.map((url) => fetch(url))
  let result = await Promise.race(ps).then((res) => res.json())
  return result
}
const testRace = async () => {
  console.log('before race')
  let urls = [5, 4, 3, 2, 1].map(
    (n) => `https://jsonplaceholder.typicode.com/todos/${n}`
  )
  let race = await getRace(urls)
  console.log('getRace result:', race)
  console.log('after race')
}

const __main = () => {
  // testSleep()
  // testAll()
  testRace()
}

__main()
