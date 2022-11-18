import { Client, GatewayIntentBits } from "discord.js";
import { token } from "./config.json";

import initializeEvents from "./handler/events";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

initializeEvents();

client.login(token);

export default client;
