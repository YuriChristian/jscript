const funcs = []
for (var o = 0; o < 10; o++) {
    funcs.push(function() {
          console.log(o)
    })
  }
  funcs[2]() //10
  funcs[4]() //10

  ////////////////////
  console.log('')
  const func = []
for (let i = 0; i < 10; i++) {
    func.push(function() {
          console.log(i)
    })
  }
  func[2]() //2
  func[4]() //4