import axios from "axios";
import { JSDOM } from "jsdom";
import express from "express";
import { dateToDateTabString } from "./DateConversion";

const app = express();
const port = 8080; // default port to listen

const mensaURL =
    "https://www.swfr.de/essen-trinken/speiseplaene/mensa-furtwangen/";

app.get("/", async (req, res) => {
    res.send(await getSingleDayContent());
});

// Routes

app.get("/for_weekday", async (req, res) => {
    // TODO
    if (!req.query.day) {
        res.status(400).send('Missing parameter "day".');
    }
    console.log("Getting meals for weekday " + req.query.day);
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);

    initializeServer();
});

async function getSingleDayContent() {
    const dateTabString = dateToDateTabString(new Date());

    if (dateTabString) {
        return axios
            .get(mensaURL)
            .then((response: any) => {
                const dom = new JSDOM(response.data);
                return (
                    dom?.window?.document?.getElementById(dateTabString)
                        ?.textContent ?? null
                );
            })
            .catch((err: Error) => {
                console.error(err);
            });
    }
}

function initializeServer() {}
