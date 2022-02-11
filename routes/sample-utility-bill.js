var express = require("express");
var router = express.Router();

const data = {
  ServiceAccount: [
    {
      Type: "UtilityAccount",
      ID: [
        {
          body: "000000000",
          Field: "SERVICE_NUMBER",
        },
        {
          body: "111111111",
          Field: "CLIENT_NUMBER",
        },
      ],
      AmountDue: "$56.13",
      AccountNumber: "000000000-111111111-22",
      Attribute: [
        {
          body: "$59.08",
          AttributeGroup: "AMOUNT_DUE",
          Key: "AMOUNT_DUE",
        },
        {
          body: "$56.13",
          AttributeGroup: "AMOUNT_DUE_PRIOR_DUEDATE",
          Key: "AMOUNT_DUE_PRIOR_DUEDATE",
        },
        {
          body: "2022-02-28",
          AttributeGroup: "BILL_DUE_DATE",
          Key: "BILL_DUE_DATE",
        },
        {
          body: "2022-02-03",
          AttributeGroup: "BILL_DATE",
          Key: "BILL_DATE",
        },
        {
          body: "N",
          AttributeGroup: "EPOST_ENROL",
          Key: "EPOST_ENROL",
        },
        {
          body: "N",
          AttributeGroup: "AGENT",
          Key: "AGENT",
        },
        {
          body: "N/A",
          AttributeGroup: "PAYMENT_PROGRAM",
          Key: "PAYMENT_PROGRAM",
        },
        {
          body: "-$130.24",
          AttributeGroup: "LAST_PAYMENT",
          Key: "LAST_PAYMENT",
        },
        {
          body: "2021-10-07",
          AttributeGroup: "LAST_PAYMENT_DATE",
          Key: "LAST_PAYMENT_DATE",
        },
        {
          body: "Tri-Annually",
          AttributeGroup: "BILLING_FREQUENCY",
          Key: "BILLING_FREQUENCY",
        },
        {
          body: "-$2.95",
          AttributeGroup: "EARLY_PAYMENT_DISCOUNT",
          Key: "EARLY_PAYMENT_DISCOUNT",
        },
        {
          body: "-$2.95",
          AttributeGroup: "EARLY_DISCOUNT",
          Key: "EARLY_DISCOUNT",
        },
        {
          body: "2022-02-11 13:07",
          AttributeGroup: "AS_AT_DATE",
          Key: "AS_AT_DATE",
        },
        {
          body: "$56.13",
          AttributeGroup: "TOTAL_AMOUNT_DUE",
          Key: "TOTAL_AMOUNT_DUE",
        },
        {
          body: "2021-09-23",
          AttributeGroup: "LAST_BILL_DATE",
          Key: "LAST_BILL_DATE",
        },
        {
          body: "$130.24",
          AttributeGroup: "LAST_BILL_AMOUNT",
          Key: "LAST_BILL_AMOUNT",
        },
      ],
      AccountServiceLocations: {
        Address: [
          {
            CountryCode: "CAN",
            PostalMunicipality: "TORONTO",
            ProvinceABBRV: "ON",
            StreetName: "STREET_NAME",
            StreetTypeABBRV: "ST",
            StreetDirectionABBRV: "E",
            UnitDesignator: " ",
            UnitNumber: "     ",
            Number: "1111 ",
          },
        ],
      },
      AccountParty: [
        {
          Address: [
            {
              CountryCode: "CAN",
              PostalMunicipality: "TORONTO",
              ProvinceABBRV: "ON",
              StreetName: "STREET NAME",
              StreetTypeABBRV: "ST",
              StreetDirectionABBRV: "E",
              UnitDesignator: " ",
              UnitNumber: "     ",
              Number: "1111 ",
            },
          ],
          Party: {
            PersonalName: {
              FirstName: null,
              LastName: null,
            },
            BusinessName: "Business Name",
          },
          ClientID: [
            {
              body: "000000000",
              Type: "SERVICE_NUMBER",
            },
          ],
        },
      ],
    },
  ],
};

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(data);
});

module.exports = router;
