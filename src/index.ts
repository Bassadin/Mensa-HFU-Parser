import axios from "axios";
import { JSDOM } from "jsdom";

const mensaURL =
    "https://www.swfr.de/essen-trinken/speiseplaene/mensa-furtwangen/";

console.log("START");

axios
    .get(mensaURL)
    .then((response: any) => {
        const dom = new JSDOM(response.data);
        console.log(dom?.window?.document?.getElementById("tab-tue")?.textContent);
    })
    .catch((err: Error) => {
        console.log(err);
    });
