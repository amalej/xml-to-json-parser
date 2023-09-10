import { xmlToJson } from "../src/index";
import { plantCatalog } from "./xml";

describe("XML to JSON of 'plantCatalog'", () => {
  it("should properly get first 'PLANT' from 'plantCatalog' XML", () => {
    const json = xmlToJson(plantCatalog);
    expect(json["CATALOG"]["PLANT"].at(0).COMMON).toBe("Bloodroot");
    expect(json["CATALOG"]["PLANT"].at(0).BOTANICAL).toBe(
      "Sanguinaria canadensis"
    );
    expect(json["CATALOG"]["PLANT"].at(0).ZONE).toBe("4");
    expect(json["CATALOG"]["PLANT"].at(0).LIGHT).toBe("Mostly Shady");
    expect(json["CATALOG"]["PLANT"].at(0).PRICE).toBe("$2.44");
    expect(json["CATALOG"]["PLANT"].at(0).AVAILABILITY).toBe("031599");
  });

  it("should properly get 9th 'PLANT' from 'plantCatalog' XML", () => {
    const json = xmlToJson(plantCatalog);
    expect(json["CATALOG"]["PLANT"].at(8).COMMON).toBe("Jack-In-The-Pulpit");
    expect(json["CATALOG"]["PLANT"].at(8).BOTANICAL).toBe(
      "Arisaema triphyllum"
    );
    expect(json["CATALOG"]["PLANT"].at(8).ZONE).toBe("4");
    expect(json["CATALOG"]["PLANT"].at(8).LIGHT).toBe("Mostly Shady");
    expect(json["CATALOG"]["PLANT"].at(8).PRICE).toBe("$3.23");
    expect(json["CATALOG"]["PLANT"].at(8).AVAILABILITY).toBe("020199");
  });

  it("should properly get last 'PLANT' from 'plantCatalog' XML", () => {
    const json = xmlToJson(plantCatalog);
    expect(json["CATALOG"]["PLANT"].at(-1).COMMON).toBe("Cardinal Flower");
    expect(json["CATALOG"]["PLANT"].at(-1).BOTANICAL).toBe(
      "Lobelia cardinalis"
    );
    expect(json["CATALOG"]["PLANT"].at(-1).ZONE).toBe("2");
    expect(json["CATALOG"]["PLANT"].at(-1).LIGHT).toBe("Shade");
    expect(json["CATALOG"]["PLANT"].at(-1).PRICE).toBe("$3.02");
    expect(json["CATALOG"]["PLANT"].at(-1).AVAILABILITY).toBe("022299");
  });
});
