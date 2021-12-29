import axios from "axios";
import { JSDOM } from "jsdom";
import express from "express";
import { dateToDateTabString } from "./DateConversion";

const app = express();
const port = 8080; // default port to listen

const mensaURL =
    "https://www.swfr.de/essen-trinken/speiseplaene/mensa-furtwangen/";

app.get("/", async (req, res) => {
    const dayString = dateToDateTabString(new Date());
    if (dayString) {
        return res.send(await getSingleDayContent(dayString));
    } else {
        return res
            .status(500)
            .send("Something went wrong while getting the date.");
    }
});

// Routes

app.get("/for_weekday", async (req, res) => {
    // TODO
    if (!req.query.day) {
        return res.status(400).send('Missing parameter "day".');
    }
    return res.send(await getSingleDayContent("tab-" + <string>req.query.day));
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);

    initializeServer();
});

async function getSingleDayContent(dayString: string) {
    console.log("Getting meals for weekday " + dayString);
    if (dayString) {
        return axios
            .get(mensaURL)
            .then((response: any) => {
                const dom = new JSDOM(response.data);
                return (
                    dom?.window?.document?.getElementById(dayString)
                        ?.textContent ?? null
                );
            })
            .catch((err: Error) => {
                console.error(err);
            });
    }
}

function initializeServer() {}
