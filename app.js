const { exec } = require("child_process");
const knex = require("knex")(require("./knexfile"));
const cron = require('node-cron');

require('dotenv').config();

const runSpeedTest = () => {
    return new Promise(resolve => {
        exec("speedtest -f json", (error, stdout, stderr) => {
            if (error) {
                console.log("Fehler beim Aufrufen des Speedtests!");
                resolve(false);
                return;
            }
            if (stderr) {
                console.log("Fehler beim Aufrufen des Speedtests!");
                resolve(false);
                return;
            }
            resolve(stdout);
        });
    });
}

const main = async () =>  {
    const result = await runSpeedTest();
    if (result != false) {
        const json = JSON.parse(result);

        await knex("results").insert({
            latency: json.ping.latency,
            jitter: json.ping.jitter,
            download: json.download.bandwidth,
            upload: json.upload.bandwidth,
            packetLoss: json.packetLoss,
            host: json.server.name
        });

	return;

    }
};

cron.schedule(process.env.INTERVAL, async () => {
  await main();
});
