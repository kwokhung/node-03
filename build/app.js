"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mqtt = require("mqtt");
var client = mqtt.connect("wss://mbltest01.mqtt.iot.gz.baidubce.com:8884/mqtt", {
    username: "mbltest01/eight",
    password: "JWFcQYcFXxIbghm+8JEvqRfPf9fN7Ah3NeZupc6Zgqw="
});
client.on("connect", function () {
    console.log("connected");
    client.on("message", function (topic, message) {
        console.log(topic + ": " + message.toString());
    });
    client.subscribe("eight/#");
});
