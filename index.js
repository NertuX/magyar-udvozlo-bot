const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");
const welcome = require("./welcome")

client.on("ready", () => {
  console.log(client.user.username + " Elindult!");

  welcome(client);
});

client.login(config.token);
