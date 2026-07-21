// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export const GAME_DATE = "2026-07-21";

export const levels = [
  {
    id: 1,
    day: "DAY 1",
    name: "ID Required",
    briefing: `CHECKPOINT DIRECTIVE — EFFECTIVE IMMEDIATELY

All travelers must present a valid government-issued
photo ID before proceeding through security.

Accepted documents:
  • State Identification Card
  • Driver License
  • Passport

No ID — no entry.`,
    starterPolicy: `package tsa

default allow = false

# Level 1: Traveler must present a government-issued photo ID.
allow if {
    some doc in input.documents
    doc.document_type in {"State Identification Card", "Driver License", "Passport"}
}`,
    travelers: [
      {
        name: "Jane Doe",
        shouldPass: true,
        input: {
          today: GAME_DATE,
          documents: [
            {
              document_type: "State Identification Card",
              issuing_state: "California",
              name: { last: "DOE", first: "JANE" },
              expiration_date: "2028-05-15",
              real_id_compliant: true
            }
          ],
          bags: []
        }
      },
      {
        name: "Marcus Webb",
        shouldPass: true,
        input: {
          today: GAME_DATE,
          documents: [
            {
              document_type: "Passport",
              issuing_country: "USA",
              name: { last: "WEBB", first: "MARCUS" },
              expiration_date: "2029-11-03",
              real_id_compliant: true
            }
          ],
          bags: []
        }
      },
      {
        name: "Priya Sharma",
        shouldPass: false,
        input: {
          today: GAME_DATE,
          documents: [],
          bags: []
        }
      }
    ]
  },

  {
    id: 2,
    day: "DAY 2",
    name: "Expiration Check",
    briefing: `UPDATED DIRECTIVE

In addition to a valid photo ID, the document
must not be expired.

Verify the expiration_date field on each ID.
Expired documents are grounds for denial.

Today's date: ${GAME_DATE}`,
    starterPolicy: `package tsa

default allow = false

valid_id_types := {"State Identification Card", "Driver License", "Passport"}

# Level 2: ID must exist and must not be expired.
allow if {
    some doc in input.documents
    doc.document_type in valid_id_types
    doc.expiration_date >= input.today
}`,
    travelers: [
      {
        name: "Chen Wei",
        shouldPass: true,
        input: {
          today: GAME_DATE,
          documents: [
            {
              document_type: "Driver License",
              issuing_state: "Texas",
              name: { last: "WEI", first: "CHEN" },
              expiration_date: "2027-08-20",
              real_id_compliant: true
            }
          ],
          bags: []
        }
      },
      {
        name: "Olga Petrov",
        shouldPass: false,
        input: {
          today: GAME_DATE,
          documents: [
            {
              document_type: "State Identification Card",
              issuing_state: "New York",
              name: { last: "PETROV", first: "OLGA" },
              expiration_date: "2024-03-01",
              real_id_compliant: true
            }
          ],
          bags: []
        }
      },
      {
        name: "Derek Flint",
        shouldPass: true,
        input: {
          today: GAME_DATE,
          documents: [
            {
              document_type: "Passport",
              issuing_country: "USA",
              name: { last: "FLINT", first: "DEREK" },
              expiration_date: "2030-06-30",
              real_id_compliant: true
            }
          ],
          bags: []
        }
      }
    ]
  },

  {
    id: 3,
    day: "DAY 3",
    name: "REAL ID Enforcement",
    briefing: `REAL ID ACT — NOW IN EFFECT

Standard state IDs are no longer accepted unless
they are REAL ID compliant (gold star marking).

Accepted for domestic air travel:
  • REAL ID compliant Driver License / State ID
    (real_id_compliant: true)
  • US Passport (always qualifies)

Non-compliant IDs are grounds for denial.`,
    starterPolicy: `package tsa

default allow = false

valid_id_types := {"State Identification Card", "Driver License", "Passport"}

real_id_or_passport(doc) if doc.document_type == "Passport"
real_id_or_passport(doc) if doc.real_id_compliant == true

# Level 3: ID must be valid, non-expired, and REAL ID compliant or a Passport.
allow if {
    some doc in input.documents
    doc.document_type in valid_id_types
    doc.expiration_date >= input.today
    real_id_or_passport(doc)
}`,
    travelers: [
      {
        name: "Sara Nkosi",
        shouldPass: true,
        input: {
          today: GAME_DATE,
          documents: [
            {
              document_type: "Driver License",
              issuing_state: "Georgia",
              name: { last: "NKOSI", first: "SARA" },
              expiration_date: "2028-01-15",
              real_id_compliant: true
            }
          ],
          bags: []
        }
      },
      {
        name: "Tom Gunderson",
        shouldPass: false,
        input: {
          today: GAME_DATE,
          documents: [
            {
              document_type: "State Identification Card",
              issuing_state: "Missouri",
              name: { last: "GUNDERSON", first: "TOM" },
              expiration_date: "2027-09-10",
              real_id_compliant: false
            }
          ],
          bags: []
        }
      },
      {
        name: "Aisha Malik",
        shouldPass: true,
        input: {
          today: GAME_DATE,
          documents: [
            {
              document_type: "Passport",
              issuing_country: "USA",
              name: { last: "MALIK", first: "AISHA" },
              expiration_date: "2031-04-22",
              real_id_compliant: true
            }
          ],
          bags: []
        }
      }
    ]
  },

  {
    id: 4,
    day: "DAY 4",
    name: "Boarding Pass Required",
    briefing: `NEW CHECKPOINT REQUIREMENT

Travelers must present a boarding pass in addition
to their ID. The boarding pass is required to enter
the secure area.

CRITICAL: The name on the boarding pass must EXACTLY
match the name on the presented ID document.

Mismatches — even minor ones — are grounds for denial.`,
    starterPolicy: `package tsa

default allow = false

valid_id_types := {"State Identification Card", "Driver License", "Passport"}

real_id_or_passport(doc) if doc.document_type == "Passport"
real_id_or_passport(doc) if doc.real_id_compliant == true

id_doc := doc if {
    some doc in input.documents
    doc.document_type in valid_id_types
    doc.expiration_date >= input.today
    real_id_or_passport(doc)
}

boarding_pass := doc if {
    some doc in input.documents
    doc.document_type == "Boarding Pass"
}

# Level 4: Must have a boarding pass; name must match ID exactly.
allow if {
    id := id_doc
    bp := boarding_pass
    bp.passenger_name.last == id.name.last
    bp.passenger_name.first == id.name.first
}`,
    travelers: [
      {
        name: "Luis Vargas",
        shouldPass: true,
        input: {
          today: GAME_DATE,
          documents: [
            {
              document_type: "Driver License",
              issuing_state: "Florida",
              name: { last: "VARGAS", first: "LUIS" },
              expiration_date: "2029-02-28",
              real_id_compliant: true
            },
            {
              document_type: "Boarding Pass",
              airline: "Delta",
              flight_number: "DL447",
              passenger_name: { last: "VARGAS", first: "LUIS" },
              flight_date: "2026-07-21",
              origin: "MIA",
              destination: "LAX"
            }
          ],
          bags: []
        }
      },
      {
        name: "Fiona Carr",
        shouldPass: false,
        input: {
          today: GAME_DATE,
          documents: [
            {
              document_type: "Passport",
              issuing_country: "USA",
              name: { last: "CARR", first: "FIONA" },
              expiration_date: "2028-07-19",
              real_id_compliant: true
            },
            {
              document_type: "Boarding Pass",
              airline: "United",
              flight_number: "UA112",
              passenger_name: { last: "CARR", first: "FIONNA" },
              flight_date: "2026-07-21",
              origin: "ORD",
              destination: "SFO"
            }
          ],
          bags: []
        }
      },
      {
        name: "Raj Patel",
        shouldPass: false,
        input: {
          today: GAME_DATE,
          documents: [
            {
              document_type: "State Identification Card",
              issuing_state: "Illinois",
              name: { last: "PATEL", first: "RAJ" },
              expiration_date: "2027-12-01",
              real_id_compliant: true
            }
          ],
          bags: []
        }
      }
    ]
  },

  {
    id: 5,
    day: "DAY 5",
    name: "Flight Date Verification",
    briefing: `UPDATED SCREENING PROTOCOL

Boarding passes must be for TODAY'S date only.

Travelers presenting passes for future or past
flights must be denied entry — they are at the
wrong checkpoint window.

Today's date: ${GAME_DATE}`,
    starterPolicy: `package tsa

default allow = false

valid_id_types := {"State Identification Card", "Driver License", "Passport"}

real_id_or_passport(doc) if doc.document_type == "Passport"
real_id_or_passport(doc) if doc.real_id_compliant == true

id_doc := doc if {
    some doc in input.documents
    doc.document_type in valid_id_types
    doc.expiration_date >= input.today
    real_id_or_passport(doc)
}

boarding_pass := doc if {
    some doc in input.documents
    doc.document_type == "Boarding Pass"
}

# Level 5: Boarding pass must be for today's flight.
allow if {
    id := id_doc
    bp := boarding_pass
    bp.passenger_name.last == id.name.last
    bp.passenger_name.first == id.name.first
    bp.flight_date == input.today
}`,
    travelers: [
      {
        name: "Naomi Torres",
        shouldPass: true,
        input: {
          today: GAME_DATE,
          documents: [
            {
              document_type: "Driver License",
              issuing_state: "Nevada",
              name: { last: "TORRES", first: "NAOMI" },
              expiration_date: "2030-03-14",
              real_id_compliant: true
            },
            {
              document_type: "Boarding Pass",
              airline: "Southwest",
              flight_number: "WN893",
              passenger_name: { last: "TORRES", first: "NAOMI" },
              flight_date: "2026-07-21",
              origin: "LAS",
              destination: "DEN"
            }
          ],
          bags: []
        }
      },
      {
        name: "Karl Fischer",
        shouldPass: false,
        input: {
          today: GAME_DATE,
          documents: [
            {
              document_type: "Passport",
              issuing_country: "USA",
              name: { last: "FISCHER", first: "KARL" },
              expiration_date: "2028-09-05",
              real_id_compliant: true
            },
            {
              document_type: "Boarding Pass",
              airline: "American",
              flight_number: "AA304",
              passenger_name: { last: "FISCHER", first: "KARL" },
              flight_date: "2026-07-22",
              origin: "DFW",
              destination: "BOS"
            }
          ],
          bags: []
        }
      },
      {
        name: "Mei Lin",
        shouldPass: false,
        input: {
          today: GAME_DATE,
          documents: [
            {
              document_type: "State Identification Card",
              issuing_state: "Washington",
              name: { last: "LIN", first: "MEI" },
              expiration_date: "2026-11-30",
              real_id_compliant: true
            },
            {
              document_type: "Boarding Pass",
              airline: "Alaska",
              flight_number: "AS217",
              passenger_name: { last: "LIN", first: "MEI" },
              flight_date: "2026-07-20",
              origin: "SEA",
              destination: "SAN"
            }
          ],
          bags: []
        }
      }
    ]
  },

  {
    id: 6,
    day: "DAY 6",
    name: "Carry-on Limits",
    briefing: `BAGGAGE ENFORCEMENT — NOW IN EFFECT

Each traveler is permitted:
  • 1 carry-on bag (maximum)
  • 1 personal item (maximum)

Bags exceeding these limits must be checked at the
counter. Travelers with excess carry-on bags cannot
proceed through security.

Inspect the bags array carefully.`,
    starterPolicy: `package tsa

default allow = false

valid_id_types := {"State Identification Card", "Driver License", "Passport"}

real_id_or_passport(doc) if doc.document_type == "Passport"
real_id_or_passport(doc) if doc.real_id_compliant == true

id_doc := doc if {
    some doc in input.documents
    doc.document_type in valid_id_types
    doc.expiration_date >= input.today
    real_id_or_passport(doc)
}

boarding_pass := doc if {
    some doc in input.documents
    doc.document_type == "Boarding Pass"
}

# Level 6: Max 1 carry-on bag and 1 personal item.
allow if {
    id := id_doc
    bp := boarding_pass
    bp.passenger_name.last == id.name.last
    bp.passenger_name.first == id.name.first
    bp.flight_date == input.today
    count([b | some b in input.bags; b.type == "carry-on"]) <= 1
    count([b | some b in input.bags; b.type == "personal item"]) <= 1
}`,
    travelers: [
      {
        name: "Sam Okafor",
        shouldPass: true,
        input: {
          today: GAME_DATE,
          documents: [
            {
              document_type: "Driver License",
              issuing_state: "Ohio",
              name: { last: "OKAFOR", first: "SAM" },
              expiration_date: "2029-07-04",
              real_id_compliant: true
            },
            {
              document_type: "Boarding Pass",
              airline: "Delta",
              flight_number: "DL889",
              passenger_name: { last: "OKAFOR", first: "SAM" },
              flight_date: "2026-07-21",
              origin: "CLE",
              destination: "ATL"
            }
          ],
          bags: [
            { type: "carry-on", description: "rolling suitcase", contents: [] },
            { type: "personal item", description: "laptop bag", contents: [] }
          ]
        }
      },
      {
        name: "Diane Rousseau",
        shouldPass: false,
        input: {
          today: GAME_DATE,
          documents: [
            {
              document_type: "Passport",
              issuing_country: "USA",
              name: { last: "ROUSSEAU", first: "DIANE" },
              expiration_date: "2027-10-17",
              real_id_compliant: true
            },
            {
              document_type: "Boarding Pass",
              airline: "Delta",
              flight_number: "DL006",
              passenger_name: { last: "ROUSSEAU", first: "DIANE" },
              flight_date: "2026-07-21",
              origin: "JFK",
              destination: "CDG"
            }
          ],
          bags: [
            { type: "carry-on", description: "hard-shell suitcase", contents: [] },
            { type: "carry-on", description: "duffel bag", contents: [] },
            { type: "personal item", description: "purse", contents: [] }
          ]
        }
      },
      {
        name: "Ben Kaur",
        shouldPass: true,
        input: {
          today: GAME_DATE,
          documents: [
            {
              document_type: "State Identification Card",
              issuing_state: "Minnesota",
              name: { last: "KAUR", first: "BEN" },
              expiration_date: "2028-04-12",
              real_id_compliant: true
            },
            {
              document_type: "Boarding Pass",
              airline: "United",
              flight_number: "UA541",
              passenger_name: { last: "KAUR", first: "BEN" },
              flight_date: "2026-07-21",
              origin: "MSP",
              destination: "ORD"
            }
          ],
          bags: [
            { type: "personal item", description: "backpack", contents: [] }
          ]
        }
      }
    ]
  },

  {
    id: 7,
    day: "DAY 7",
    name: "Prohibited Items & Liquid Limits",
    briefing: `ITEM SCREENING DIRECTIVE

The following are NOT permitted in carry-on bags:

  • Any item marked prohibited: true
    (weapons, sharp objects, etc.)
  • Liquid containers exceeding 3.4 fl oz (100ml)

Inspect the contents array inside each bag.
A single violation is grounds for full denial.`,
    starterPolicy: `package tsa

default allow = false

valid_id_types := {"State Identification Card", "Driver License", "Passport"}

real_id_or_passport(doc) if doc.document_type == "Passport"
real_id_or_passport(doc) if doc.real_id_compliant == true

id_doc := doc if {
    some doc in input.documents
    doc.document_type in valid_id_types
    doc.expiration_date >= input.today
    real_id_or_passport(doc)
}

boarding_pass := doc if {
    some doc in input.documents
    doc.document_type == "Boarding Pass"
}

item_allowed(item) if {
    not item.prohibited
    item.item_type != "liquid"
}

item_allowed(item) if {
    not item.prohibited
    item.item_type == "liquid"
    item.volume_fl_oz <= 3.4
}

# Level 7: No prohibited items; no liquids over 3.4 fl oz.
allow if {
    id := id_doc
    bp := boarding_pass
    bp.passenger_name.last == id.name.last
    bp.passenger_name.first == id.name.first
    bp.flight_date == input.today
    count([b | some b in input.bags; b.type == "carry-on"]) <= 1
    count([b | some b in input.bags; b.type == "personal item"]) <= 1
    every bag in input.bags {
        every item in bag.contents {
            item_allowed(item)
        }
    }
}`,
    travelers: [
      {
        name: "Grace Huang",
        shouldPass: true,
        input: {
          today: GAME_DATE,
          documents: [
            {
              document_type: "Driver License",
              issuing_state: "Michigan",
              name: { last: "HUANG", first: "GRACE" },
              expiration_date: "2029-05-20",
              real_id_compliant: true
            },
            {
              document_type: "Boarding Pass",
              airline: "Spirit",
              flight_number: "NK714",
              passenger_name: { last: "HUANG", first: "GRACE" },
              flight_date: "2026-07-21",
              origin: "DTW",
              destination: "MCO"
            }
          ],
          bags: [
            {
              type: "carry-on",
              description: "backpack",
              contents: [
                { item_type: "liquid", description: "hand sanitizer", volume_fl_oz: 2.0, prohibited: false },
                { item_type: "liquid", description: "travel shampoo", volume_fl_oz: 3.0, prohibited: false },
                { item_type: "other", description: "book", prohibited: false }
              ]
            }
          ]
        }
      },
      {
        name: "Ethan Blake",
        shouldPass: false,
        input: {
          today: GAME_DATE,
          documents: [
            {
              document_type: "Passport",
              issuing_country: "USA",
              name: { last: "BLAKE", first: "ETHAN" },
              expiration_date: "2027-02-14",
              real_id_compliant: true
            },
            {
              document_type: "Boarding Pass",
              airline: "JetBlue",
              flight_number: "B6223",
              passenger_name: { last: "BLAKE", first: "ETHAN" },
              flight_date: "2026-07-21",
              origin: "BOS",
              destination: "FLL"
            }
          ],
          bags: [
            {
              type: "carry-on",
              description: "duffel bag",
              contents: [
                { item_type: "liquid", description: "water bottle", volume_fl_oz: 16.9, prohibited: false },
                { item_type: "other", description: "headphones", prohibited: false }
              ]
            }
          ]
        }
      },
      {
        name: "Mia Johansson",
        shouldPass: false,
        input: {
          today: GAME_DATE,
          documents: [
            {
              document_type: "State Identification Card",
              issuing_state: "Colorado",
              name: { last: "JOHANSSON", first: "MIA" },
              expiration_date: "2028-08-30",
              real_id_compliant: true
            },
            {
              document_type: "Boarding Pass",
              airline: "Frontier",
              flight_number: "F9108",
              passenger_name: { last: "JOHANSSON", first: "MIA" },
              flight_date: "2026-07-21",
              origin: "DEN",
              destination: "PHX"
            }
          ],
          bags: [
            {
              type: "personal item",
              description: "purse",
              contents: [
                { item_type: "other", description: "pocket knife", prohibited: true },
                { item_type: "liquid", description: "perfume", volume_fl_oz: 1.0, prohibited: false }
              ]
            }
          ]
        }
      }
    ]
  },

  {
    id: 8,
    day: "DAY 8",
    name: "3-1-1 Liquids Rule",
    briefing: `FULL 3-1-1 ENFORCEMENT — ACTIVE

The complete TSA liquids rule is now in effect:

  3  →  Each container must be 3.4 fl oz or less
  1  →  All containers fit in ONE quart-sized bag
  1  →  One quart bag per traveler

Count ALL liquid containers across ALL bags.
Maximum 10 liquid containers total per traveler.

Exceeding the limit is grounds for denial.`,
    starterPolicy: `package tsa

default allow = false

valid_id_types := {"State Identification Card", "Driver License", "Passport"}

real_id_or_passport(doc) if doc.document_type == "Passport"
real_id_or_passport(doc) if doc.real_id_compliant == true

id_doc := doc if {
    some doc in input.documents
    doc.document_type in valid_id_types
    doc.expiration_date >= input.today
    real_id_or_passport(doc)
}

boarding_pass := doc if {
    some doc in input.documents
    doc.document_type == "Boarding Pass"
}

item_allowed(item) if {
    not item.prohibited
    item.item_type != "liquid"
}

item_allowed(item) if {
    not item.prohibited
    item.item_type == "liquid"
    item.volume_fl_oz <= 3.4
}

all_liquids := [item |
    some bag in input.bags
    some item in bag.contents
    item.item_type == "liquid"
]

# Level 8: Full 3-1-1 — all liquids ≤ 3.4 fl oz AND max 10 containers total.
allow if {
    id := id_doc
    bp := boarding_pass
    bp.passenger_name.last == id.name.last
    bp.passenger_name.first == id.name.first
    bp.flight_date == input.today
    count([b | some b in input.bags; b.type == "carry-on"]) <= 1
    count([b | some b in input.bags; b.type == "personal item"]) <= 1
    every bag in input.bags {
        every item in bag.contents {
            item_allowed(item)
        }
    }
    count(all_liquids) <= 10
}`,
    travelers: [
      {
        name: "Chloe Bennett",
        shouldPass: true,
        input: {
          today: GAME_DATE,
          documents: [
            {
              document_type: "Driver License",
              issuing_state: "Tennessee",
              name: { last: "BENNETT", first: "CHLOE" },
              expiration_date: "2027-12-25",
              real_id_compliant: true
            },
            {
              document_type: "Boarding Pass",
              airline: "American",
              flight_number: "AA511",
              passenger_name: { last: "BENNETT", first: "CHLOE" },
              flight_date: "2026-07-21",
              origin: "BNA",
              destination: "DFW"
            }
          ],
          bags: [
            {
              type: "carry-on",
              description: "roller bag",
              contents: [
                { item_type: "liquid", description: "shampoo", volume_fl_oz: 3.0, prohibited: false },
                { item_type: "liquid", description: "conditioner", volume_fl_oz: 3.0, prohibited: false },
                { item_type: "liquid", description: "face wash", volume_fl_oz: 2.5, prohibited: false },
                { item_type: "other", description: "laptop", prohibited: false }
              ]
            }
          ]
        }
      },
      {
        name: "Victor Reyes",
        shouldPass: false,
        input: {
          today: GAME_DATE,
          documents: [
            {
              document_type: "Passport",
              issuing_country: "USA",
              name: { last: "REYES", first: "VICTOR" },
              expiration_date: "2029-03-08",
              real_id_compliant: true
            },
            {
              document_type: "Boarding Pass",
              airline: "Delta",
              flight_number: "DL226",
              passenger_name: { last: "REYES", first: "VICTOR" },
              flight_date: "2026-07-21",
              origin: "LAX",
              destination: "JFK"
            }
          ],
          bags: [
            {
              type: "carry-on",
              description: "backpack",
              contents: [
                { item_type: "liquid", description: "shampoo", volume_fl_oz: 3.4, prohibited: false },
                { item_type: "liquid", description: "conditioner", volume_fl_oz: 3.4, prohibited: false },
                { item_type: "liquid", description: "body wash", volume_fl_oz: 3.4, prohibited: false },
                { item_type: "liquid", description: "face wash", volume_fl_oz: 3.0, prohibited: false },
                { item_type: "liquid", description: "toner", volume_fl_oz: 2.5, prohibited: false },
                { item_type: "liquid", description: "serum", volume_fl_oz: 1.0, prohibited: false },
                { item_type: "liquid", description: "sunscreen", volume_fl_oz: 3.0, prohibited: false },
                { item_type: "liquid", description: "hand lotion", volume_fl_oz: 3.0, prohibited: false },
                { item_type: "liquid", description: "lip gloss", volume_fl_oz: 0.5, prohibited: false },
                { item_type: "liquid", description: "contact solution", volume_fl_oz: 2.0, prohibited: false },
                { item_type: "liquid", description: "eye drops", volume_fl_oz: 0.5, prohibited: false }
              ]
            }
          ]
        }
      },
      {
        name: "Yuki Tanaka",
        shouldPass: true,
        input: {
          today: GAME_DATE,
          documents: [
            {
              document_type: "State Identification Card",
              issuing_state: "Oregon",
              name: { last: "TANAKA", first: "YUKI" },
              expiration_date: "2028-06-18",
              real_id_compliant: true
            },
            {
              document_type: "Boarding Pass",
              airline: "Alaska",
              flight_number: "AS402",
              passenger_name: { last: "TANAKA", first: "YUKI" },
              flight_date: "2026-07-21",
              origin: "PDX",
              destination: "HNL"
            }
          ],
          bags: [
            {
              type: "carry-on",
              description: "suitcase",
              contents: [
                { item_type: "liquid", description: "sunscreen", volume_fl_oz: 3.0, prohibited: false },
                { item_type: "liquid", description: "insect repellent", volume_fl_oz: 2.0, prohibited: false },
                { item_type: "other", description: "camera", prohibited: false }
              ]
            }
          ]
        }
      }
    ]
  }
];
