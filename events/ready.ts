import client from "../index";

const ready = async () => {
  console.log(`Logged in ${client.user?.tag}`);
};

export default ready;
