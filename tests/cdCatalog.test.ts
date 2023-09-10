import { xmlToJson } from "../src/index";
import { cdCatalog } from "./xml";

describe("XML to JSON of 'cdCatalog'", () => {
  it("should properly get first 'CD' from 'cdCatalog' XML", () => {
    const json = xmlToJson(cdCatalog);
    expect(json["CATALOG"]["CD"].at(0).TITLE).toBe("Empire Burlesque");
    expect(json["CATALOG"]["CD"].at(0).ARTIST).toBe("Bob Dylan");
    expect(json["CATALOG"]["CD"].at(0).COUNTRY).toBe("USA");
    expect(json["CATALOG"]["CD"].at(0).COMPANY).toBe("Columbia");
    expect(json["CATALOG"]["CD"].at(0).PRICE).toBe("10.90");
    expect(json["CATALOG"]["CD"].at(0).YEAR).toBe("1985");
  });

  it("should properly get 9th 'CD' from 'cdCatalog' XML", () => {
    const json = xmlToJson(cdCatalog);
    expect(json["CATALOG"]["CD"].at(8).TITLE).toBe("Romanza");
    expect(json["CATALOG"]["CD"].at(8).ARTIST).toBe("Andrea Bocelli");
    expect(json["CATALOG"]["CD"].at(8).COUNTRY).toBe("EU");
    expect(json["CATALOG"]["CD"].at(8).COMPANY).toBe("Polydor");
    expect(json["CATALOG"]["CD"].at(8).PRICE).toBe("10.80");
    expect(json["CATALOG"]["CD"].at(8).YEAR).toBe("1996");
  });

  it("should properly get last 'CD' from 'cdCatalog' XML", () => {
    const json = xmlToJson(cdCatalog);
    expect(json["CATALOG"]["CD"].at(-1).TITLE).toBe("Unchain my heart");
    expect(json["CATALOG"]["CD"].at(-1).ARTIST).toBe("Joe Cocker");
    expect(json["CATALOG"]["CD"].at(-1).COUNTRY).toBe("USA");
    expect(json["CATALOG"]["CD"].at(-1).COMPANY).toBe("EMI");
    expect(json["CATALOG"]["CD"].at(-1).PRICE).toBe("8.20");
    expect(json["CATALOG"]["CD"].at(-1).YEAR).toBe("1987");
  });
});
