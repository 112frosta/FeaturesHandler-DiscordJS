import { Client, GatewayIntentBits } from "discord.js";
import { token } from "./config.json";

import log from "./console.log";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.on("ready", () => {
  console.log(client.user?.tag);
  log();
});

client.login(token);
