import { dateToDateTabString } from "./DateConversion";
import { expect } from "chai";

describe("dateToDateTabString()", () => {
    it("tab-mon", () => {
        const result = dateToDateTabString(new Date("December 20, 2021"));
        expect(result).to.equal("tab-mon");
    });
    it("tab-mon 2", () => {
        const result = dateToDateTabString(new Date("July 5, 2021"));
        expect(result).to.equal("tab-mon");
    });
    it("tab-tue", () => {
        const result = dateToDateTabString(new Date("December 21, 2021"));
        expect(result).to.equal("tab-tue");
    });
    it("tab-wed", () => {
        const result = dateToDateTabString(new Date("December 22, 2021"));
        expect(result).to.equal("tab-wed");
    });
    it("tab-thu", () => {
        const result = dateToDateTabString(new Date("December 23, 2021"));
        expect(result).to.equal("tab-thu");
    });
    it("tab-fri", () => {
        const result = dateToDateTabString(new Date("December 24, 2021"));
        expect(result).to.equal("tab-fri");
    });
    it("invalid, Saturday", () => {
        const result = dateToDateTabString(new Date("December 25, 2021"));
        expect(result).to.equal(null);
    });
    it("invalid, Sunday", () => {
        const result = dateToDateTabString(new Date("December 26, 2021"));
        expect(result).to.equal(null);
    });
});
