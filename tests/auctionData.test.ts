import { xmlToJson } from "../dist/index";
import { auctionData } from "./xml";

describe("XML to JSON of 'auctionData'", () => {
  it("should properly get first 'listing' from 'auctionData' XML", () => {
    const json = xmlToJson(auctionData);
    expect(json["root"]["listing"].at(0).seller_info.seller_name).toBe(
      "537_sb_3 "
    );
    expect(json["root"]["listing"].at(0).seller_info.seller_rating).toBe(" 0");
    expect(json["root"]["listing"].at(0).payment_types).toBe(
      "Visa, Mastercard, , , , 0, Discover, American Express "
    );
    expect(json["root"]["listing"].at(0).shipping_info).toBe(
      "siteonly, Buyer Pays Shipping Costs "
    );
    expect(json["root"]["listing"].at(0).buyer_protection_info).toBe(" ");
    expect(json["root"]["listing"].at(0).auction_info.current_bid).toBe(
      " $839.93"
    );
    expect(json["root"]["listing"].at(0).auction_info.time_left).toBe(
      " 1 Day, 6 Hrs"
    );
    expect(json["root"]["listing"].at(0).auction_info.current_bid).toBe(
      " $839.93"
    );
  });

  it("should get 9 listings when parsing 'auctionData' XML", () => {
    const json = xmlToJson(auctionData);
    expect(json["root"]["listing"].length).toBe(9);
  });
});
