const Eris = require("eris");

class PingerClient extends Eris {
    constructor(token, pingch1, pingch2, interval){
        super();

        this.token = token;
        this.pingch1 = pingch1;
        this.pingch2 = pingch2;
        this.interval = parseInt(interval);

        if (!token){
            console.log("Argument order:\nnew PingerClient('TOKEN', 'PINGCHID1', 'PINGCHID2', 'INTERVAL');\nOh yeah, specify the interval in seconds.\n");
            throw new Error("You must specify a token!");
        }

        if (!pingch1){
            console.log("Argument order:\nnew PingerClient('TOKEN', 'PINGCHID1', 'PINGCHID2', 'INTERVAL');\nOh yeah, specify the interval in seconds.\n");
            throw new Error("You must specify the ID of the first ping channel.");
        }

        if (!pingch2){
            console.log("Argument order:\nnew PingerClient('TOKEN', 'PINGCHID1', 'PINGCHID2', 'INTERVAL');\nOh yeah, specify the interval in seconds.\n");
            throw new Error("You must specify the ID of the second ping channel.");
        }

        if (!interval){
            console.log("Argument order:\nnew PingerClient('TOKEN', 'PINGCHID1', 'PINGCHID2', 'INTERVAL');\nOh yeah, specify the interval in seconds.\n");
            throw new Error("You must specify an interval (in seconds).");
        }

        this.client = new Eris(token, { allowedMentions: {
            everyone: true
        } });

        this.client.once("ready", () => {
            console.log(this.client.user.username + " is up and running!");

            setInterval(() => {
                this.client.createMessage(pingch1, "@everyone");
                this.client.createMessage(pingch2, "@everyone");
            }, interval * 1000);
        });

        this.client.on("error", () => {
            console.error();
            this.client.connect();
        });

        this.client.connect();
    }
}

module.exports = PingerClient;
