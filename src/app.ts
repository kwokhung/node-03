import * as mqtt from "mqtt";

let client = mqtt.connect("wss://mbltest01.mqtt.iot.gz.baidubce.com:8884/mqtt", {
    username: "mbltest01/body",
    password: "grSMaiLF8hiOtbPJFgXZdadTDBBKAY6I1KSNIKr+MgI="
});

client.on("connect", (connack) => {
    console.log("on connect");
    console.log(JSON.stringify(connack));

    client.subscribe("body/#", (err, granted) => {
        console.log("subscribe");
        console.log(JSON.stringify(err));
        console.log(JSON.stringify(granted));

        if ((typeof err === "undefined" || err === null) && granted.some(value => value.topic === "body/#" && value.qos !== 128)) {
            client.on("message", (topic, message, packet) => {
                console.log("on message");
                console.log(JSON.stringify(topic));
                console.log(JSON.stringify(message));
                console.log(JSON.stringify(packet));

                console.log(topic + ": " + message.toString());
            });

            client.publish("eight/i.am", "body", (err) => {
                console.log("publish");
                console.log(JSON.stringify(err));
            });
        }
    });
})
