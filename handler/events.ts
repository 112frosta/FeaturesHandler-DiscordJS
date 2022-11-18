import fs from "fs";
import client from "../index";

import colors from "colors";

const initializeEvents = async () => {
  const events = fs
    .readdirSync("./events")
    .filter((file) => file.endsWith(".ts"));

  for (const file of events) {
    const event = await import(`../events/${file}`);
    const eventName = file.split(".")[0];
    client.on(eventName, event.default);
  }

  console.log(
    colors.green.bold(
      `[HANDLER] ${events.length} ${
        events.length > 1 ? "events" : "event"
      } loaded`
    )
  );
};

export default initializeEvents;
