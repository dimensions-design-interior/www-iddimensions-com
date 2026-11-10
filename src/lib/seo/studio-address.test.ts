import { test } from "node:test";
import assert from "node:assert/strict";
import { STUDIO_ADDRESS, BUSINESS_PHONE, BUSINESS_EMAIL, homeAndConstructionBusinessSchema } from "./site";

test("the only business location is the owner-confirmed Sushant Golf City studio", () => {
  assert.equal(STUDIO_ADDRESS, "Ground Floor, Shop No. 09, Skylark Plaza, Near Lulu Mall Road, Sushant Golf City, Lucknow - 226030");
  assert.deepEqual(homeAndConstructionBusinessSchema()["address"], {
    "@type": "PostalAddress",
    streetAddress: "Ground Floor, Shop No. 09, Skylark Plaza, Near Lulu Mall Road, Sushant Golf City",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    postalCode: "226030",
    addressCountry: "IN",
  });
  assert.equal(homeAndConstructionBusinessSchema()["name"], "Dimensions Designs Interior");
});

test("business phone uses the confirmed number", () => {
  assert.equal(BUSINESS_PHONE, "+91 9670001155");
  assert.equal(homeAndConstructionBusinessSchema()["telephone"], "+919670001155");
});

test("business email uses the confirmed enquiry inbox", () => {
  assert.equal(BUSINESS_EMAIL, "info@iddimensions.com");
  assert.equal(homeAndConstructionBusinessSchema()["email"], "info@iddimensions.com");
});