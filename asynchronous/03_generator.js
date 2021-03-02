// todo: fakeRequest
function* idMaker() {
  let index = 0
  while (true) {
    yield index++
  }
}

const __main = function () {
  const gen = idMaker()
  console.log(gen)
  console.log(gen.next())
  console.log(gen.next())
  console.log(gen.next())
}

__main()
