// Define la estructura del objeto usuario
const user = {
  id: Number,
  name: String,
  phoneNumber: String,
  password: String,
  profileImageUrl: String,
  flag: Boolean,
  info: String,
  lastOnline: Date
};

// Define la estructura del objeto mensaje
const message = {
  idUser1: Number,
  idUser2: Number,
  conversation: [
    {
      sendBy: Number,
      date: Date,
      hour: String,
      message: String,
      flag: Boolean
    }
  ]
};

// Crea el servidor con json-server
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router({ users: [user], messages: [message] });
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
