// Un callback es una función que se ejecuta a través de otra función
// Los callbacks no son asíncronos

/* const getUser = (id, cb) => {
  const user = {
    name: "Miguel",
    id,
  };

  if (id === 2) cb("User not exist");
  else cb(null, user);
};

getUser(1, (error, user) => {
  if (error) return console.log(error);
  console.log(`User name is ${user.name}`);
}); */

const users = [
  {
    id: 1,
    name: "Dorian",
  },
  {
    id: 2,
    name: "Laura",
  },
  {
    id: 3,
    name: "Carlos",
  },
];

const emails = [{
  id:1,
  email: 'dorian@gmail.com'
},
{
  id: 2,
  email: 'laura@gmail.com'
}]

const getUser = (id, cb) => {
  const user = users.find(user => user.id === id)
  if(!user) cb(`Not exist a user with id ${id}`)
  else cb(null, user)
}

const getEmail = (user,cb) => {
  const email = emails.find(email => email.id === user.id)
  if (!email) cb(`${user.name} hasn't email`)
  else cb(null, {
    id: user.id,
    name: user.name,
    email: email.email
  })
}

getUser(3,(error, user) => {
  if(error) return console.log(error);
  getEmail(user, (error, response) => {
    if(error) return console.log(error);
    console.log(response);
  })
})