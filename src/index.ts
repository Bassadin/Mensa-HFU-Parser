import axios from "axios";
import { JSDOM } from "jsdom";
import express from "express";

const app = express();
const port = 8080; // default port to listen

const mensaURL =
    "https://www.swfr.de/essen-trinken/speiseplaene/mensa-furtwangen/";

app.get("/", async (req, res) => {
    res.send(await getSingleDayContent());
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});

async function getSingleDayContent() {
    return axios
        .get(mensaURL)
        .then((response: any) => {
            const dom = new JSDOM(response.data);
            return dom?.window?.document?.getElementById("tab-tue")
                ?.textContent;
        })
        .catch((err: Error) => {
            console.error(err);
        });
}
