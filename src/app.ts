import * as mqtt from "mqtt";

let client = mqtt.connect("wss://mbltest01.mqtt.iot.gz.baidubce.com:8884/mqtt", {
    username: "mbltest01/eight",
    password: "JWFcQYcFXxIbghm+8JEvqRfPf9fN7Ah3NeZupc6Zgqw="
});

client.on("connect", () => {
    console.log("connected...");

    client.on("message", (topic: String, message: Buffer) => {
        console.log(topic + ": " + message.toString())
    });
    client.subscribe("eight/#");
})
