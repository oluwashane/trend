const fs  = require('fs');
const path = require('path');
const users = require('./users .json');
const { faker } = require('@faker-js/faker')

function updateUser() {

  const data = users.map(({contact, ...user}) => {
    contact.email = faker.internet.email()
    contact.firstName = faker.name.firstName()
    contact.lastName = faker.name.lastName()
    return {contact, ...user};
  })

  const filePath = path.join(__dirname, 'users.json')
  fs.writeFileSync(filePath, JSON.stringify(data))
}

updateUser()