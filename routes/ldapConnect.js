var ldapjs = require('ldapjs');
var promise = require('bluebird')

let ldapOptions = {
    url: "ldap://10.248.24.164:389",
    connectTimeout: 3000,
    reconnect: true
}
var userid = '';
var password = ''
console.log(userid)
console.log(password)
authneticate(userid, password).then(function(res) {
    console.log(res)
}).catch(function(err) {
    console.log(err)
})

function authneticate(userId, password) {
    console.log(ldapOptions)
    return new promise(function(resolve, reject) {
        const ldapCon = ldapjs.createClient(ldapOptions);

        // console.log(ldapCon.bind())
        console.log('bind execution is done')
        console.log('cn=' + userId + ',' + 'CORP')
        ldapCon.bind('cn=' + userId + ',' + 'CORP', password, function(err, result) {
            if (err) {
                console.log(err)
                return reject(err)
            }
            console.log('bind execution is done2')
            ldapCon.unbind();
            return resolve(result)
        })
    })

}