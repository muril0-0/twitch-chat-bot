const tmi = require("tmi.js");

const pass;
const channel;


const options = {
  options: {
    debug: true,
  },
  connection: {
    cluster: "aws",
    reconnect: true,
  },
  identity: {
    username: "BestChatBot",
    password: pass,
  },
  channels: [channel],
};

//Connect
const client = new tmi.client(options);
client.connect();

//Events
client.on("connected", (address, port) => {
  client.action(channel, "Ready to work!");
});

client.on("chat", (channel, user, message, self) => {
  if (message === "!salve") {
    client.action(channel, `Salve ${user["display-name"]}!`);
  }
});
