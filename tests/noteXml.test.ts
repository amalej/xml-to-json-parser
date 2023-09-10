import { xmlToJson } from "../src/index";
import { noteXml } from "./xml";

describe("XML to JSON of 'noteXml'", () => {
  it("should properly convert 'noteXml' XML", () => {
    const json = xmlToJson(noteXml);
    expect(json["note"]["to"]).toBe("Tove");
    expect(json["note"]["from"]).toBe("Jani");
    expect(json["note"]["heading"]).toBe("Reminder");
    expect(json["note"]["body"]).toBe("Don't forget me this weekend!");
  });
});
