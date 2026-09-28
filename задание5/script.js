
var users = [
    {
      login: "roma",
      password: "111",
      name: "Ramadan"
    },
    {
      login: "suli",
      password: "222",
      name: "Sulaiman"
    },
    {
      login: "riki",
      password: "777",
      name: "Tariel"
    },
    {
      login: "miku",
      password: "555",
      name: "Mirlan"
    },
    {
      login: "tima",
      password: "000",
      name: "Timur"
    }
  ]
  
  var form = document.getElementById("loginForm")
  var message = document.getElementById("message")
  
 
  form.onsubmit = function(event) {
    event.preventDefault()
  
    var loginInput = document.getElementById("login").value
    var passwordInput = document.getElementById("password").value
  
    
    var foundUser = users.find(function(user) {
      return user.login === loginInput && user.password === passwordInput
    })
  
   
    if (foundUser) {
      message.className = "success"
      message.innerText = "Добро пожаловать " + foundUser.name
    } else {
      message.className = "error"
      message.innerText = "Неверный логин или пароль"
    }
  }
  
  
  function sumAll() {
    var total = 0
    for (var i = 0; i < arguments.length; i++) {
      total = total + arguments[i]
    }
    return total
  }
  
 
  console.log(sumAll(2, 5, 6, 7))
  console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))