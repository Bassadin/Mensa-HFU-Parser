import { dateToDateTabString } from "../src/DateConversion";
import { expect } from "chai";

describe("Test date to tab string conversion monday", () => {
    it("should return tab-mon", () => {
        const result = dateToDateTabString(new Date("December 20, 2021"));
        expect(result).to.equal("tab-mon");
    });
});
