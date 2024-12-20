const blStructures = {
  BL00: [
    { name: "BL00-REC-QUALIFIER", length: 4, start: 1, end: 4 },
    { name: "BRANCH-ID", length: 20, start: 5, end: 24 },
    { name: "BL-MESSAGE-ID", length: 20, start: 25, end: 44 },
    { name: "HOUSE-BL-RUNNING-NUMBER", length: 3, start: 45, end: 47 },
    { name: "HOUSE-BL-MESSAGE-ID", length: 20, start: 48, end: 67 },
    { name: "ETD-DATE", length: 8, start: 68, end: 75 },
    { name: "ETD-TIME", length: 4, start: 76, end: 79 },
    { name: "TIME-ZONE", length: 3, start: 80, end: 82 },
    { name: "ETA-DATE", length: 8, start: 83, end: 90 },
    { name: "ETA-TIME", length: 4, start: 91, end: 94 },
    { name: "CR-DATE", length: 8, start: 95, end: 102 },
    { name: "CR-TIME", length: 6, start: 103, end: 108 },
    { name: "MASTER-BL-USING-CODE", length: 1, start: 109, end: 109 },
    { name: "HOUSE-BL-USING-CODE", length: 1, start: 110, end: 110 },
    { name: "NATURE-OF-GOODS", length: 3, start: 111, end: 113 },
    { name: "CIS-REFERENCE-NUMBER", length: 20, start: 114, end: 133 },
    { name: "FINAL-DESTINATION-BRANCH", length: 10, start: 134, end: 143 },
    { name: "STATUS", length: 10, start: 144, end: 153 },
    { name: "CIS-PROJECT-ID", length: 10, start: 154, end: 163 },
    { name: "RECIPIENT-CIRCLE", length: 7, start: 164, end: 170 },
    { name: "PROD-DATE", length: 8, start: 171, end: 178 },
    { name: "LOAD-TYPE", length: 1, start: 179, end: 179 },
    { name: "DOMESTIC-INTER-TYPE", length: 1, start: 180, end: 180 },
    { name: "CONSIGNEE-TYPE", length: 1, start: 181, end: 181 },
    { name: "CONSIGNEE-TYPE-SPLITTED", length: 1, start: 182, end: 182 },
    { name: "CONSIGNEE-TYPE-HANDOVER", length: 3, start: 183, end: 185 },
    { name: "CONSIGNEE-TYPE-COLOADED", length: 1, start: 186, end: 186 },
  ],
  BL10: [
    { name: "BL10-REC-QUALIFIER", length: 4, start: 1, end: 4 },
    { name: "BGM-DOCUMENT-CODE", length: 3, start: 5, end: 7 },
    { name: "BGM-MESSAGE-ID", length: 35, start: 8, end: 42 },
    { name: "BGM-MESSAGE-FUNCTION", length: 3, start: 43, end: 45 },
    { name: "LOC-DOCUMENT-PLACE", length: 25, start: 46, end: 70 },
    { name: "DTM-DOCUMENT-DATE", length: 8, start: 71, end: 78 },
    { name: "DTM-DOCUMENT-DATE-FORMAT", length: 3, start: 79, end: 81 },
    { name: "BGM-DOC-NUMBER-OF-ORIGINALS", length: 2, start: 82, end: 83 },
    { name: "BGM-RFF-BL-NUMBER", length: 20, start: 84, end: 103 },
  ],
  BL20: [
    { name: "BL20-REC-QUALIFIER", length: 4, start: 1, end: 4 },
    { name: "RFF-REFERENCE-QUALIFIER", length: 3, start: 5, end: 7 },
    { name: "RFF-REFERENCE-NUMBER", length: 35, start: 8, end: 61 },
  ],
  BL30: [
    { name: "BL30-REC-QUALIFIER", length: 4, start: 1, end: 4 },
    { name: "TDT-TRANSPORT-STAGE-QUALIFIER", length: 3, start: 5, end: 7 },
    { name: "TDT-CONVEYANCE-REFERENCE", length: 17, start: 8, end: 24 },
    { name: "TDT-MODE-OF-TRANSPORT", length: 3, start: 25, end: 27 },
    { name: "TDT-TYPE-OF-TRANSPORT", length: 8, start: 28, end: 35 },
    { name: "TDT-CARRIER-ID", length: 17, start: 36, end: 52 },
    { name: "TDT-CARRIER-NAME", length: 35, start: 53, end: 87 },
    { name: "TDT-MEANS-OF-TRANSPORT-ID", length: 9, start: 88, end: 96 },
    { name: "TDT-MEANS-OF-TRANSPORT-CODE", length: 3, start: 97, end: 99 },
    { name: "TDT-TRANSPORT-ID-AGENCY-CODE", length: 3, start: 100, end: 102 },
    { name: "TDT-TRANSPORT-ID", length: 35, start: 103, end: 137 },
    { name: "TDT-SCH-CONTRACT", length: 1, start: 138, end: 138 },
  ],
  BL31: [
    { name: "BL31-REC-QUALIFIER", length: 4, start: 1, end: 4 },
    { name: "TDT-DTM-TRANSPORT-QUALIFIER", length: 3, start: 5, end: 7 },
    { name: "TDT-DTM-TRANSPORT-DATE", length: 8, start: 8, end: 15 },
    { name: "TDT-DTM-TRANSPORT-DATE-FORMAT", length: 3, start: 16, end: 18 },
  ],
  BL32: [
    { name: "BL32-REC-QUALIFIER", length: 4, start: 1, end: 4 },
    { name: "TDT-LOC-PLACE-QUALIFIER", length: 3, start: 5, end: 7 },
    { name: "TDT-LOC-PLACE-ID", length: 25, start: 8, end: 32 },
  ],
  BL40: [
    { name: "BL40-REC-QUALIFIER", length: 4, start: 1, end: 4 },
    { name: "NAD-ADDRESS-QUALIFIER", length: 3, start: 5, end: 7 },
    { name: "NAD-ADDRESS-ID", length: 17, start: 8, end: 24 },
    { name: "NAD-CODE-LIST", length: 3, start: 25, end: 27 },
    { name: "NAD-ADDRESS-STRUCTURE", length: 1, start: 28, end: 28 },
    { name: "NAD-NAME-AND-ADDRESS-LINE-1", length: 35, start: 29, end: 63 },
    { name: "NAD-NAME-AND-ADDRESS-LINE-2", length: 35, start: 64, end: 98 },
    { name: "NAD-NAME-AND-ADDRESS-LINE-3", length: 35, start: 99, end: 133 },
    { name: "NAD-NAME-AND-ADDRESS-LINE-4", length: 35, start: 134, end: 168 },
    { name: "NAD-NAME-AND-ADDRESS-LINE-5", length: 35, start: 169, end: 203 },
    { name: "FILLER", length: 21, start: 204, end: 224 },
    { name: "NAD-REF-REFERENCE-NUMBER", length: 35, start: 225, end: 259 },
    { name: "NAD-VAT-REGISTRATION-NUMBER", length: 35, start: 260, end: 294 },
    {
      name: "NAD-ADDRESS-IDENTIFICATION-NUMBER",
      length: 35,
      start: 295,
      end: 329,
    },
    { name: "NAD-CIS-REFERENCE-NUMBER", length: 35, start: 330, end: 364 },
  ],
  BL41: [
    { name: "BL41-REC-QUALIFIER", length: 4, start: 1, end: 4 },
    { name: "NAD-ADDRESS-QUALIFIER", length: 3, start: 5, end: 7 },
    { name: "NAD-ADDRESS-ID", length: 17, start: 8, end: 24 },
    { name: "NAD-CODE-LIST", length: 3, start: 25, end: 27 },
    { name: "NAD-ADDRESS-STRUCTURE", length: 1, start: 28, end: 28 },
    { name: "NAD-NAME-1", length: 35, start: 29, end: 63 },
    { name: "NAD-NAME-2", length: 35, start: 64, end: 98 },
    { name: "NAD-STREET-AND-NUMBER-1", length: 35, start: 99, end: 133 },
    { name: "NAD-STREET-AND-NUMBER-2", length: 35, start: 134, end: 168 },
    { name: "NAD-CITY-NAME", length: 35, start: 169, end: 203 },
    { name: "NAD-SUB-COUNTRY", length: 9, start: 204, end: 212 },
    { name: "NAD-POST-CODE", length: 9, start: 213, end: 221 },
    { name: "NAD-COUNTRY-CODE", length: 2, start: 222, end: 223 },
    { name: "NAD-REF-REFERENCE-NUMBER", length: 35, start: 224, end: 258 },
    { name: "NAD-VAT-REGISTRATION-NUMBER", length: 35, start: 269, end: 293 },
    {
      name: "NAD-ADDRESS-IDENTIFICATION-NUMBER",
      length: 35,
      start: 295,
      end: 329,
    },
    { name: "NAD-CIS-REFERENCE-NUMBER", length: 35, start: 330, end: 364 },
  ],
  BL42: [
    { name: "BL42-REC-QUALIFIER", length: 4, start: 1, end: 4 },
    { name: "NAD-COM-ADDRESS-ID", length: 3, start: 5, end: 7 },
    { name: "NAD-COM-CONTACT-FUNCTION", length: 3, start: 8, end: 10 },
    { name: "NAD-COM-CONTACT-DEPARTMENT", length: 17, start: 11, end: 27 },
    { name: "NAD-COM-CONTACT-EMPLOYEE", length: 35, start: 28, end: 62 },
    { name: "NAD-SCN-COMMUNICATION-ID", length: 3, start: 63, end: 65 },
    { name: "NAD-COM-CONTACT-EMPLOYEE", length: 25, start: 66, end: 90 },
    { name: "NAD-COM-CONTACT-EMPLOYEE", length: 25, start: 94, end: 118 },
    { name: "NAD-COM-CONTACT-EMPLOYEE", length: 25, start: 122, end: 146 },
  ],
  BL50: [
    { name: "BL50-REC-QUALIFIER", length: 4, start: 1, end: 4 },
    { name: "GID-ITEM-NUMBER", length: 3, start: 5, end: 7 },
    { name: "GID-NUMBER-OF-PACKAGES", length: 8, start: 8, end: 15 },
    { name: "GID-TYPE-OF-PACKAGES-CODE", length: 7, start: 16, end: 22 },
    { name: "GID-FTX-GOODS-DESCRIPTION-TEXT", length: 75, start: 23, end: 97 },
    {
      name: "GID-MEA-GOODS-MEASURE-WEIGHT-QUALIFIER",
      length: 3,
      start: 98,
      end: 100,
    },
    {
      name: "GID-MEA-GOODS-MEASURE-WEIGHT-UNIT",
      length: 3,
      start: 101,
      end: 103,
    },
    {
      name: "GID-MEA-GOODS-MEASURE-WEIGHT-VALUE",
      length: 18,
      start: 104,
      end: 121,
    },
    {
      name: "GID-MEA-GOODS-MEASURE-VOLUME-QUALIFIER",
      length: 3,
      start: 122,
      end: 124,
    },
    {
      name: "GID-MEA-GOODS-MEASURE-VOLUME-UNIT",
      length: 3,
      start: 125,
      end: 127,
    },
    {
      name: "GID-MEA-GOODS-MEASURE-VOLUME-VALUE",
      length: 18,
      start: 128,
      end: 145,
    },
    { name: "GID-PCI-MARKING-INSTRUCTIONS", length: 3, start: 146, end: 148 },
    { name: "GID-PCI-MARKS-AND-LABELS", length: 75, start: 149, end: 223 },
  ],
  BL51: [
    { name: "BL51-REC-QUALIFIER", length: 4, start: 1, end: 4 },
    { name: "GID-HAN-HANDLING-INSTRUCTION", length: 75, start: 5, end: 79 },
  ],
  BL52: [
    { name: "BL52-REC-QUALIFIER", length: 4, start: 1, end: 4 },
    { name: "GID-TMP-TEMPERATURE-SETTING", length: 3, start: 5, end: 7 },
    { name: "GID-TMP-TEMPERATURE-MEASURE-UNIT", length: 3, start: 8, end: 10 },
    { name: "GID-RNG-RANGE-MEASURE-UNIT", length: 3, start: 11, end: 13 },
    { name: "GID-RNG-RANGE-MINIMUM", length: 7, start: 14, end: 20 },
    { name: "GID-RNG-RANGE-MAXIMUM", length: 7, start: 21, end: 27 },
  ],

  BL53: [
    { name: "BL53-REC-QUALIFIER", length: 4, start: 1, end: 4 },
    { name: "GID-PIA-PRODUCT-ID-ITEM-NUMBER", length: 35, start: 5, end: 39 },
    {
      name: "GID-PIA-PRODUCT-ID-ITEM-NUMBER-TYPE",
      length: 3,
      start: 40,
      end: 42,
    },
    {
      name: "GID-PIA-PRODUCT-ID-CODE-QUALIFIER",
      length: 3,
      start: 43,
      end: 45,
    },
    {
      name: "GID-PIA-PRODUCT-ID-CODE-LIST-AGENCY",
      length: 3,
      start: 46,
      end: 48,
    },
  ],
  BL54: [
    { name: "BL54-REC-QUALIFIER", length: 4, start: 1, end: 4 },
    { name: "GID-DIM-DIMENSIONS-QUALIFIER", length: 3, start: 5, end: 7 },
    { name: "GID-DIM-DIMENSIONS-LENGTH", length: 7, start: 8, end: 14 },
    { name: "GID-DIM-DIMENSIONS-WIDTH", length: 7, start: 15, end: 21 },
    { name: "GID-DIM-DIMENSIONS-HEIGHT", length: 7, start: 22, end: 28 },
    {
      name: "GID-EQN-DIMENSIONS-NUMBER-OF-UNITS",
      length: 8,
      start: 29,
      end: 36,
    },
  ],

  BL55: [
    { name: "BL55-REC-QUALIFIER", length: 4, start: 1, end: 4 },
    { name: "GID-SGP-SPLIT-GOODS-EQUIPMENT-ID", length: 17, start: 5, end: 21 },
    {
      name: "GID-SGP-SPLIT-GOODS-NUMBER-OF-PACKAGES",
      length: 8,
      start: 22,
      end: 29,
    },
  ],
  BL57: [
    { name: "BL57-REC-QUALIFIER", length: 4, start: 1, end: 4 },
    {
      name: "GID-DGS-DANGEROUS-GOODS-REGULATIONS",
      length: 3,
      start: 5,
      end: 7,
    },
    {
      name: "GID-DGS-DANGEROUS-GOODS-HAZARD-CODE",
      length: 7,
      start: 8,
      end: 14,
    },
    {
      name: "GID-DGS-DANGEROUS-GOODS-HAZARD-PAGE",
      length: 7,
      start: 15,
      end: 21,
    },
    {
      name: "GID-DGS-DANGEROUS-GOODS-HAZARD-VERSION",
      length: 10,
      start: 22,
      end: 31,
    },
    {
      name: "GID-DGS-DANGEROUS-GOODS-UNDG-NUMBER",
      length: 4,
      start: 32,
      end: 35,
    },
    {
      name: "GID-DGS-DANGEROUS-GOODS-FLASHPOINT",
      length: 8,
      start: 36,
      end: 43,
    },
    {
      name: "GID-DGS-DANGEROUS-GOODS-SHIPMENT-FLASHPOINT",
      length: 3,
      start: 44,
      end: 46,
    },
    {
      name: "GID-DGS-DANGEROUS-GOODS-FLASH-QUALIFIER",
      length: 3,
      start: 47,
      end: 49,
    },
    {
      name: "GID-DGS-DANGEROUS-GOODS-PACKING-GROUP-CODE",
      length: 3,
      start: 50,
      end: 52,
    },
    {
      name: "GID-DGS-DANGEROUS-GOODS-EMS-NUMBER",
      length: 16,
      start: 53,
      end: 58,
    },
    {
      name: "GID-DGS-DANGEROUS-GOODS-MFAG-NUMBER",
      length: 4,
      start: 59,
      end: 62,
    },
    {
      name: "GID-DGS-DANGEROUS-GOODS-TREM-CARD-NUMBER",
      length: 10,
      start: 63,
      end: 72,
    },
    {
      name: "GID-DGS-DANGEROUS-GOODS-HAZAR-ID-NUMBER-UP",
      length: 4,
      start: 73,
      end: 76,
    },
    {
      name: "GID-DGS-DANGEROUS-GOODS-HAZAR-ID-NUMBER-LOW",
      length: 4,
      start: 77,
      end: 80,
    },
    {
      name: "GID-DGS-DANGEROUS-GOODS-LABEL-MAIN-RISK",
      length: 4,
      start: 81,
      end: 84,
    },
    {
      name: "GID-DGS-DANGEROUS-GOODS-LABEL-FURTHER1-RISK",
      length: 4,
      start: 85,
      end: 88,
    },
    {
      name: "GID-DGS-DANGEROUS-GOODS-LABEL-FURTHER2-RISK",
      length: 4,
      start: 89,
      end: 92,
    },
    {
      name: "GID-DGS-DANGEROUS-GOODS-PACKING-INSTRUCT-CODE",
      length: 3,
      start: 93,
      end: 95,
    },
    {
      name: "GID-DGS-DANGEROUS-GOODS-TRANSPORT-CATEGORY",
      length: 3,
      start: 96,
      end: 98,
    },
    {
      name: "GID-DGS-DANGEROUS-GOODS-TRANSPORT-PERMISSION",
      length: 3,
      start: 99,
      end: 101,
    },
  ],
  BL58: [
    { name: "BL58-REC-QUALIFIER", length: 4, start: 1, end: 4 },
    {
      name: "GID-DGS-FTX-DANGEROUS-GOODS-TEXT-QUAL",
      length: 3,
      start: 5,
      end: 7,
    },
    { name: "GID-DGS-FTX-DANGEROUS-GOODS-TEXT", length: 35, start: 8, end: 42 },
  ],
  BL59: [
    { name: "BL59-REC-QUALIFIER", length: 4, start: 1, end: 4 },
    { name: "GID-DGS-COM-CONTACT-FUNCTION", length: 3, start: 5, end: 7 },
    { name: "GID-DGS-COM-CONTACT-DEPARTMENT", length: 17, start: 8, end: 24 },
    { name: "GID-DGS-COM-CONTACT-EMPLOYEE", length: 35, start: 25, end: 59 },
    { name: "GID-DGS-CTA-COMMUNICATION-ID", length: 3, start: 60, end: 62 },
    {
      name: "GID-DGS-CTA-COMMUNICATION-NUMBER",
      length: 25,
      start: 63,
      end: 87,
    },
    {
      name: "GID-DGS-CTA-COMMUNICATION-NUMBER",
      length: 25,
      start: 91,
      end: 115,
    },
    {
      name: "GID-DGS-CTA-COMMUNICATION-NUMBER",
      length: 25,
      start: 119,
      end: 143,
    },
  ],
  BL60: [
    { name: "BL60-REC-QUALIFIER", length: 4, start: 1, end: 4 },
    { name: "GID-DGS-MEA-MEASURE-QUALIFIER", length: 3, start: 5, end: 7 },
    {
      name: "GID-DGS-MEA-MEASURE-DIMENSION-CODE",
      length: 3,
      start: 8,
      end: 10,
    },
    { name: "GID-DGS-MEA-MEASURE-UNIT", length: 3, start: 11, end: 13 },
    { name: "GID-DGS-MEA-MEASURE-VALUE", length: 18, start: 14, end: 31 },
    { name: "GID-DGS-EQN-NUMBER-OF-UNITS", length: 8, start: 32, end: 39 },
  ],
  BL61: [
    { name: "BL61-REC-QUALIFIER", length: 4, start: 1, end: 4 },
    {
      name: "GID-DGS-SGP-SPLIT-GOODS-EQUIPMENT-ID",
      length: 17,
      start: 5,
      end: 21,
    },
    {
      name: "GID-DGS-SGP-SPLIT-GOODS-NUMBER-OF-PACKAGES",
      length: 8,
      start: 22,
      end: 29,
    },
  ],
  BL70: [
    { name: "BL70-REC-QUALIFIER", length: 4, start: 1, end: 4 },
    { name: "CNT-TOTAL-NUMBER-PACKAGES", length: 5, start: 5, end: 9 },
    { name: "CNT-TOTAL-GROSS-WEIGHT", length: 18, start: 10, end: 27 },
    { name: "CNT-WEIGHT-MEASURE-QUALIFIER", length: 3, start: 28, end: 30 },
    { name: "CNT-TOTAL-CUBE", length: 18, start: 31, end: 48 },
    { name: "CNT-CUBE-MEASURE-QUALIFIER", length: 3, start: 49, end: 51 },
  ],
  BL75: [
    { name: "BL75-REC-QUALIFIER", length: 4, start: 1, end: 4 },
    { name: "EQD-EQUIPMENT-QUALIFIER", length: 3, start: 5, end: 7 },
    { name: "EQD-EQUIPMENT-ID-NUMBER", length: 17, start: 8, end: 24 },
    { name: "EQD-EQUIPMENT-SIZE-AND-TYPE-ID", length: 4, start: 25, end: 28 },
    {
      name: "EQD-EQUIPMENT-SIZE-AND-TYPE-TEXT",
      length: 15,
      start: 29,
      end: 43,
    },
    { name: "EQD-EQUIPMENT-SUPPLIER", length: 3, start: 44, end: 46 },
    { name: "EQD-EQUIPMENT-FULL-EMPTY", length: 3, start: 47, end: 49 },
    {
      name: "EQD-TMD-EQUIPMENT-MOVEMENT-TYPE-CODE",
      length: 3,
      start: 50,
      end: 52,
    },
    { name: "EQD-TMD-EQUIPMENT-MOVEMENT-TYPE", length: 15, start: 53, end: 67 },
    { name: "EQD-TMD-EQUIPMENT-MOVEMENT-PLAN", length: 10, start: 68, end: 77 },
    {
      name: "EQD-MEA-EQUIPMENT-MEASURE-QUALIFIER",
      length: 3,
      start: 78,
      end: 80,
    },
    {
      name: "EQD-MEA-EQUIPMENT-MEASURE-DIMENSION-CODE",
      length: 3,
      start: 81,
      end: 83,
    },
    { name: "EQD-MEA-EQUIPMENT-MEASURE-UNIT", length: 3, start: 84, end: 86 },
    {
      name: "EQD-MEA-EQUIPMENT-MEASURE-VALUE",
      length: 18,
      start: 87,
      end: 104,
    },
    {
      name: "EQD-MEA-EQUIPMENT-MEASURE-QUALIFIER",
      length: 3,
      start: 105,
      end: 107,
    },
    {
      name: "EQD-MEA-EQUIPMENT-MEASURE-DIMENSION-CODE",
      length: 3,
      start: 108,
      end: 110,
    },
    { name: "EQD-MEA-EQUIPMENT-MEASURE-UNIT", length: 3, start: 111, end: 113 },
    {
      name: "EQD-MEA-EQUIPMENT-MEASURE-VALUE",
      length: 18,
      start: 114,
      end: 131,
    },
    {
      name: "EQD-MEA-EQUIPMENT-PACKAGES-QUALIFIER",
      length: 3,
      start: 132,
      end: 134,
    },
    {
      name: "EQD-MEA-EQUIPMENT-PACKAGES-DIMENSION-CODE",
      length: 3,
      start: 135,
      end: 137,
    },
    {
      name: "EQD-MEA-EQUIPMENT-PACKAGES-UNIT",
      length: 3,
      start: 138,
      end: 140,
    },
    {
      name: "EQD-MEA-EQUIPMENT-PACKAGES-VALUE",
      length: 18,
      start: 141,
      end: 158,
    },
    { name: "EQD-SEL-EQUIPMENT-SEAL-NUMBER", length: 10, start: 159, end: 168 },
    { name: "EQD-SEL-EQUIPMENT-SEAL-ISSUER", length: 17, start: 169, end: 185 },
  ],
  BL77: [
    { name: "BL77-REC-QUALIFIER", length: 4, start: 1, end: 4 },
    { name: "EQD-NAD-ADDRESS-QUALIFIER", length: 3, start: 5, end: 7 },
    { name: "EQD-NAD-ADDRESS-ID", length: 17, start: 8, end: 24 },
    { name: "EQD-NAD-CODE-LIST", length: 3, start: 25, end: 27 },
    { name: "EQD-NAD-ADDRESS-STRUCTURE", length: 1, start: 28, end: 28 },
    { name: "EQD-NAD-NAME-AND-ADDRESS-LINE-1", length: 35, start: 29, end: 63 },
    { name: "EQD-NAD-NAME-AND-ADDRESS-LINE-2", length: 35, start: 64, end: 98 },
    {
      name: "EQD-NAD-NAME-AND-ADDRESS-LINE-3",
      length: 35,
      start: 99,
      end: 133,
    },
    {
      name: "EQD-NAD-NAME-AND-ADDRESS-LINE-4",
      length: 35,
      start: 134,
      end: 168,
    },
    {
      name: "EQD-NAD-NAME-AND-ADDRESS-LINE-5",
      length: 35,
      start: 169,
      end: 203,
    },
    { name: "FILLER", length: 12, start: 204, end: 215 },
    { name: "EQD-NAD-NAME-1", length: 35, start: 29, end: 63 },
    { name: "EQD-NAD-NAME-2", length: 35, start: 64, end: 98 },
    { name: "EQD-NAD-STREET-AND-NUMBER-1", length: 35, start: 99, end: 133 },
    { name: "EQD-NAD-STREET-AND-NUMBER-2", length: 35, start: 134, end: 168 },
    { name: "EQD-NAD-CITY", length: 35, start: 169, end: 203 },
    { name: "EQD-NAD-POSTCODE", length: 9, start: 204, end: 212 },
    { name: "EQD-NAD-COUNTRY-CODE", length: 3, start: 213, end: 215 },
  ],
  BL80: [
    { name: "BL80-REC-QUALIFIER", length: 4, start: 1, end: 4 },
    { name: "TOD-TERMS-OF-DELIVERY-CODE", length: 3, start: 5, end: 7 },
    { name: "TOD-TERMS-OF-DELIVERY-CODE-LIST", length: 3, start: 8, end: 10 },
    { name: "TOD-TERMS-OF-DELIVERY-TEXT-1", length: 70, start: 11, end: 80 },
    { name: "TOD-TERMS-OF-DELIVERY-TEXT-2", length: 70, start: 81, end: 150 },
    {
      name: "TOD-LOC-TERMS-OF-DELIVERY-PLACE",
      length: 25,
      start: 151,
      end: 175,
    },
  ],
  BL85: [
    { name: "BL85-REC-QUALIFIER", length: 4, start: 1, end: 4 },
    { name: "TCC-CHARGE-ID", length: 17, start: 5, end: 21 },
    { name: "TCC-CHARGE-TEXT", length: 26, start: 22, end: 47 },
    { name: "TCC-CHARGE-PREPAID-COLLECT", length: 3, start: 48, end: 50 },
    {
      name: "TCC-MOA-CHARGE-MONETARY-QUALIFIER",
      length: 3,
      start: 51,
      end: 53,
    },
    { name: "TCC-MOA-CHARGE-MONETARY-AMOUNT", length: 18, start: 54, end: 71 },
    { name: "TCC-MOA-CHARGE-MONETARY-CURRENCY", length: 3, start: 72, end: 74 },
  ],
  BL87: [
    { name: "BL87-REC-QUALIFIER", length: 4, start: 1, end: 4 },
    { name: "MOA-MONETARY-QUALIFIER", length: 3, start: 5, end: 7 },
    { name: "MOA-MONETARY-AMOUNT", length: 18, start: 8, end: 25 },
    { name: "MOA-MONETARY-CURRENCY", length: 3, start: 26, end: 28 },
  ],
  BL90: [
    { name: "BL90-REC-QUALIFIER", length: 4, start: 1, end: 4 },
    { name: "FTX-REMARKS-ID", length: 3, start: 5, end: 7 },
    { name: "FTX-REMARKS-TEXT", length: 75, start: 8, end: 82 },
  ],
};
