function getUserName(users, id) { 
    let user = users.find( //leder efter bruger(user)
        function (user) {
            return user.id === id
        }
    )
    if (!user) return null //fandt ikke user
    return user.name //fandt user
}

function sayHello(users, id) {
    let output = "Hej!"
    const userName = getUserName(users, id) //telefonkø til getUserName

    if (userName !== null) { //tjekker om der er værdi fra getUserName
        output = "Hej, " + userName + "!"
    }
    return output
}


const users = [ //array
    {
        id: 1,
        name: "Albert"
    },
    {
        id: 2,
        name: "Anne-lise"
    },
    {
        id: 3,
        name: "Holger-preben"
    },
]

console.log(sayHello(users, 1)) //kalder funktion
console.log(sayHello(users, 5))
