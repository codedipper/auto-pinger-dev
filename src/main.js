const PingerClient = require("./builds/PingerClient.js");

const p1 = new PingerClient("TOKEN", "PING CHANNEL 1 (ID)", "PING CHANNEL 2 (ID)", "INTERVAL (SECONDS)");
const p2 = new PingerClient("TOKEN", "PING CHANNEL 1 (ID)", "PING CHANNEL 2 (ID)", "INTERVAL (SECONDS)");