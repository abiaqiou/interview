const sleep = (second) => {
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, second * 1000)
  })
  return p
}

const __main = async () => {
  console.log('before sleep')
  await sleep(1)
  console.log('after sleep')
}

__main()
