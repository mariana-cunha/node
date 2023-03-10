/* obter um usuário */ 
/*  obter telefone do usuário pelo id */
/*  obter endereço do usuário pelo id */

function getUser(callback){
    setTimeout(function() {
        return callback(null, {
            id: 1, 
            name: 'Mariana',
            date: new Date()
        })
    }, 1000)
}

function getTelephoneUser(idUser, callback){
    setTimeout(() => {
        return callback(null, {
            telephone: '988845050',
            ddd: 11
        })
    }, 2000)
}

function getAddressUser(idUser, callback){
    setTimeout(() => {
        return callback(null, {
            street: 'rua dos bobos',
            numberAddress: 0
        })
    }, 2000)
}


function resolveUser(error, user){
    console.log('usuário', user)
}

getUser(function resolveUser(error, user) {
    if(error){
        console.error("erro no usuário", error)
        return;
    }

    getTelephoneUser(user.id, function resolveUser(error1, telephone) {
        if(error1){
            console.error("erro no telefone", error1)
            return;
        }

        getAddressUser(user.id, function resolveUser(error2, address){
            if(error2){
                console.error("erro no address", error2)
                return;
            }

            console.log(`Nome: ${user.name},
            Endereço: ${address.street}, ${address.numberAddress}, 
            Telefone: (${telephone.ddd}) ${telephone.telephone}`
        )
        })

        
    })
})


// const user = getUser()
// const telephone = getTelephoneUser(user.id)
