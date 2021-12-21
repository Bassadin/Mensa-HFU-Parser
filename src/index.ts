#!/usr/bin/env node

import got from 'got';
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const mensaURL = "https://www.swfr.de/essen-trinken/speiseplaene/mensa-furtwangen/";

got(mensaURL)
    .then((response: any) => {
        const dom = new JSDOM(response.body);
        console.log(dom?.window?.document?.querySelector("title")?.textContent);
    })
    .catch((err: Error) => {
        console.log(err);
    });
