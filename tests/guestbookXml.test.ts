import { xmlToJson } from "../src/index";
import { guestbookXml } from "./xml";

describe("XML to JSON of 'guestbookXml'", () => {
  it("should properly get first 'guest' from 'guestbookXml' XML", () => {
    const json = xmlToJson(guestbookXml);
    expect(json["guestbook"]["guest"].at(0).fname).toBe("Terje");
    expect(json["guestbook"]["guest"].at(0).lname).toBe("Beck");
  });

  it("should properly get last 'guest' from 'guestbookXml' XML", () => {
    const json = xmlToJson(guestbookXml);
    expect(json["guestbook"]["guest"].at(-1).fname).toBe("Hege");
    expect(json["guestbook"]["guest"].at(-1).lname).toBe("Refsnes");
  });
});
