let e;let t=null;function i(){return(null===t||0===t.byteLength)&&(t=new Uint8Array(e.memory.buffer)),t}function n(e,t){return e>>>=0,i().subarray(e/1,e/1+t)}function a(t,i){try{return t.apply(this,i)}catch(n){let t,i=(t=e.__externref_table_alloc(),e.__wbindgen_export_2.set(t,n),t);e.__wbindgen_exn_store(i)}}let o="u">typeof TextDecoder?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};function s(e,t){return e>>>=0,o.decode(i().subarray(e,e+t))}"u">typeof TextDecoder&&o.decode();let r=0,d="u">typeof TextEncoder?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},l="function"==typeof d.encodeInto?function(e,t){return d.encodeInto(e,t)}:function(e,t){let i=d.encode(e);return t.set(i),{read:e.length,written:i.length}};function _(e,t,n){if(void 0===n){let n=d.encode(e),a=t(n.length,1)>>>0;return i().subarray(a,a+n.length).set(n),r=n.length,a}let a=e.length,o=t(a,1)>>>0,s=i(),_=0;for(;_<a;_++){let t=e.charCodeAt(_);if(t>127)break;s[o+_]=t}if(_!==a){0!==_&&(e=e.slice(_)),o=n(o,a,a=_+3*e.length,1)>>>0;let t=l(e,i().subarray(o+_,o+a));_+=t.written,o=n(o,a,_,1)>>>0}return r=_,o}function p(t){let i=e.__wbindgen_export_2.get(t);return e.__externref_table_dealloc(t),i}let c=null;function u(t,i){t>>>=0;let n=((null===c||!0===c.buffer.detached||void 0===c.buffer.detached&&c.buffer!==e.memory.buffer)&&(c=new DataView(e.memory.buffer)),c),a=[];for(let o=t;o<t+4*i;o+=4)a.push(e.__wbindgen_export_2.get(n.getUint32(o,!0)));return e.__externref_drop_slice(t,i),a}let m="u"<typeof FinalizationRegistry?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>e.__wbg_engine_free(t>>>0,1));class g{__destroy_into_raw(){let e=this.__wbg_ptr;return this.__wbg_ptr=0,m.unregister(this),e}free(){let t=this.__destroy_into_raw();e.__wbg_engine_free(t,0)}constructor(){let t=e.engine_new();return this.__wbg_ptr=t>>>0,m.register(this,this.__wbg_ptr,this),this}setRegoV0(t){e.engine_setRegoV0(this.__wbg_ptr,t)}addPolicy(t,i){let n,a;try{let l=_(t,e.__wbindgen_malloc,e.__wbindgen_realloc),c=r,u=_(i,e.__wbindgen_malloc,e.__wbindgen_realloc),m=r,g=e.engine_addPolicy(this.__wbg_ptr,l,c,u,m);var o=g[0],d=g[1];if(g[3])throw o=0,d=0,p(g[2]);return n=o,a=d,s(o,d)}finally{e.__wbindgen_free(n,a,1)}}addDataJson(t){let i=_(t,e.__wbindgen_malloc,e.__wbindgen_realloc),n=r,a=e.engine_addDataJson(this.__wbg_ptr,i,n);if(a[1])throw p(a[0])}getPackages(){let t=e.engine_getPackages(this.__wbg_ptr);if(t[3])throw p(t[2]);var i=u(t[0],t[1]).slice();return e.__wbindgen_free(t[0],4*t[1],4),i}getPolicies(){let t,i;try{let o=e.engine_getPolicies(this.__wbg_ptr);var n=o[0],a=o[1];if(o[3])throw n=0,a=0,p(o[2]);return t=n,i=a,s(n,a)}finally{e.__wbindgen_free(t,i,1)}}clearData(){let t=e.engine_clearData(this.__wbg_ptr);if(t[1])throw p(t[0])}setInputJson(t){let i=_(t,e.__wbindgen_malloc,e.__wbindgen_realloc),n=r,a=e.engine_setInputJson(this.__wbg_ptr,i,n);if(a[1])throw p(a[0])}evalQuery(t){let i,n;try{let d=_(t,e.__wbindgen_malloc,e.__wbindgen_realloc),l=r,c=e.engine_evalQuery(this.__wbg_ptr,d,l);var a=c[0],o=c[1];if(c[3])throw a=0,o=0,p(c[2]);return i=a,n=o,s(a,o)}finally{e.__wbindgen_free(i,n,1)}}evalRule(t){let i,n;try{let d=_(t,e.__wbindgen_malloc,e.__wbindgen_realloc),l=r,c=e.engine_evalRule(this.__wbg_ptr,d,l);var a=c[0],o=c[1];if(c[3])throw a=0,o=0,p(c[2]);return i=a,n=o,s(a,o)}finally{e.__wbindgen_free(i,n,1)}}setGatherPrints(t){e.engine_setGatherPrints(this.__wbg_ptr,t)}takePrints(){let t=e.engine_takePrints(this.__wbg_ptr);if(t[3])throw p(t[2]);var i=u(t[0],t[1]).slice();return e.__wbindgen_free(t[0],4*t[1],4),i}setEnableCoverage(t){e.engine_setEnableCoverage(this.__wbg_ptr,t)}getCoverageReport(){let t,i;try{let o=e.engine_getCoverageReport(this.__wbg_ptr);var n=o[0],a=o[1];if(o[3])throw n=0,a=0,p(o[2]);return t=n,i=a,s(n,a)}finally{e.__wbindgen_free(t,i,1)}}clearCoverageData(){e.engine_clearCoverageData(this.__wbg_ptr)}getCoverageReportPretty(){let t,i;try{let o=e.engine_getCoverageReportPretty(this.__wbg_ptr);var n=o[0],a=o[1];if(o[3])throw n=0,a=0,p(o[2]);return t=n,i=a,s(n,a)}finally{e.__wbindgen_free(t,i,1)}}getAstAsJson(){let t,i;try{let o=e.engine_getAstAsJson(this.__wbg_ptr);var n=o[0],a=o[1];if(o[3])throw n=0,a=0,p(o[2]);return t=n,i=a,s(n,a)}finally{e.__wbindgen_free(t,i,1)}}}async function f(e,t){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,t)}catch(t){if("application/wasm"!=e.headers.get("Content-Type"))console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t);else throw t}let i=await e.arrayBuffer();return await WebAssembly.instantiate(i,t)}{let i=await WebAssembly.instantiate(e,t);return i instanceof WebAssembly.Instance?{instance:i,module:e}:i}}var y={};async function b(i){let o;if(void 0!==e)return e;void 0!==i&&(Object.getPrototypeOf(i)===Object.prototype?{module_or_path:i}=i:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),void 0===i&&(i=new URL(y));let r=((o={}).wbg={},o.wbg.__wbg_getRandomValues_3c9c0d586e575a16=function(){return a(function(e,t){globalThis.crypto.getRandomValues(n(e,t))},arguments)},o.wbg.__wbg_getRandomValues_e14bd3de0db61032=function(){return a(function(e,t){globalThis.crypto.getRandomValues(n(e,t))},arguments)},o.wbg.__wbg_getTime_46267b1c24877e30=function(e){return e.getTime()},o.wbg.__wbg_getTimezoneOffset_6b5752021c499c47=function(e){return e.getTimezoneOffset()},o.wbg.__wbg_new0_f788a2397c7ca929=function(){return new Date},o.wbg.__wbg_new_31a97dac4f10fab7=function(e){return new Date(e)},o.wbg.__wbindgen_init_externref_table=function(){let t=e.__wbindgen_export_2,i=t.grow(4);t.set(0,void 0),t.set(i+0,void 0),t.set(i+1,null),t.set(i+2,!0),t.set(i+3,!1)},o.wbg.__wbindgen_number_new=function(e){return e},o.wbg.__wbindgen_string_new=function(e,t){return s(e,t)},o.wbg.__wbindgen_throw=function(e,t){throw Error(s(e,t))},o);("string"==typeof i||"function"==typeof Request&&i instanceof Request||"function"==typeof URL&&i instanceof URL)&&(i=fetch(i));let{instance:d,module:l}=await f(await i,r);return e=d.exports,b.__wbindgen_wasm_module=l,c=null,t=null,e.__wbindgen_start(),e}y=import.meta.resolve("l4lkU");let h="2026-07-21",w=[{id:1,day:"DAY 1",name:"ID Required",briefing:`CHECKPOINT DIRECTIVE \u{2014} EFFECTIVE IMMEDIATELY

All travelers must present a valid government-issued
photo ID before proceeding through security.

Accepted documents:
  \u{2022} State Identification Card
  \u{2022} Driver License
  \u{2022} Passport

No ID \u{2014} no entry.`,starterPolicy:`package tsa

default allow = false

# Level 1: Traveler must present a government-issued photo ID.
allow if {
    some doc in input.documents
    doc.document_type in {"State Identification Card", "Driver License", "Passport"}
}`,travelers:[{name:"Jane Doe",shouldPass:!0,input:{today:h,documents:[{document_type:"State Identification Card",issuing_state:"California",name:{last:"DOE",first:"JANE"},expiration_date:"2028-05-15",real_id_compliant:!0}],bags:[]}},{name:"Marcus Webb",shouldPass:!0,input:{today:h,documents:[{document_type:"Passport",issuing_country:"USA",name:{last:"WEBB",first:"MARCUS"},expiration_date:"2029-11-03",real_id_compliant:!0}],bags:[]}},{name:"Priya Sharma",shouldPass:!1,input:{today:h,documents:[],bags:[]}}]},{id:2,day:"DAY 2",name:"Expiration Check",briefing:`UPDATED DIRECTIVE

In addition to a valid photo ID, the document
must not be expired.

Verify the expiration_date field on each ID.
Expired documents are grounds for denial.

Today's date: ${h}`,starterPolicy:`package tsa

default allow = false

valid_id_types := {"State Identification Card", "Driver License", "Passport"}

# Level 2: ID must exist and must not be expired.
allow if {
    some doc in input.documents
    doc.document_type in valid_id_types
    doc.expiration_date >= input.today
}`,travelers:[{name:"Chen Wei",shouldPass:!0,input:{today:h,documents:[{document_type:"Driver License",issuing_state:"Texas",name:{last:"WEI",first:"CHEN"},expiration_date:"2027-08-20",real_id_compliant:!0}],bags:[]}},{name:"Olga Petrov",shouldPass:!1,input:{today:h,documents:[{document_type:"State Identification Card",issuing_state:"New York",name:{last:"PETROV",first:"OLGA"},expiration_date:"2024-03-01",real_id_compliant:!0}],bags:[]}},{name:"Derek Flint",shouldPass:!0,input:{today:h,documents:[{document_type:"Passport",issuing_country:"USA",name:{last:"FLINT",first:"DEREK"},expiration_date:"2030-06-30",real_id_compliant:!0}],bags:[]}}]},{id:3,day:"DAY 3",name:"REAL ID Enforcement",briefing:`REAL ID ACT \u{2014} NOW IN EFFECT

Standard state IDs are no longer accepted unless
they are REAL ID compliant (gold star marking).

Accepted for domestic air travel:
  \u{2022} REAL ID compliant Driver License / State ID
    (real_id_compliant: true)
  \u{2022} US Passport (always qualifies)

Non-compliant IDs are grounds for denial.`,starterPolicy:`package tsa

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
}`,travelers:[{name:"Sara Nkosi",shouldPass:!0,input:{today:h,documents:[{document_type:"Driver License",issuing_state:"Georgia",name:{last:"NKOSI",first:"SARA"},expiration_date:"2028-01-15",real_id_compliant:!0}],bags:[]}},{name:"Tom Gunderson",shouldPass:!1,input:{today:h,documents:[{document_type:"State Identification Card",issuing_state:"Missouri",name:{last:"GUNDERSON",first:"TOM"},expiration_date:"2027-09-10",real_id_compliant:!1}],bags:[]}},{name:"Aisha Malik",shouldPass:!0,input:{today:h,documents:[{document_type:"Passport",issuing_country:"USA",name:{last:"MALIK",first:"AISHA"},expiration_date:"2031-04-22",real_id_compliant:!0}],bags:[]}}]},{id:4,day:"DAY 4",name:"Boarding Pass Required",briefing:`NEW CHECKPOINT REQUIREMENT

Travelers must present a boarding pass in addition
to their ID. The boarding pass is required to enter
the secure area.

CRITICAL: The name on the boarding pass must EXACTLY
match the name on the presented ID document.

Mismatches \u{2014} even minor ones \u{2014} are grounds for denial.`,starterPolicy:`package tsa

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
}`,travelers:[{name:"Luis Vargas",shouldPass:!0,input:{today:h,documents:[{document_type:"Driver License",issuing_state:"Florida",name:{last:"VARGAS",first:"LUIS"},expiration_date:"2029-02-28",real_id_compliant:!0},{document_type:"Boarding Pass",airline:"Delta",flight_number:"DL447",passenger_name:{last:"VARGAS",first:"LUIS"},flight_date:"2026-07-21",origin:"MIA",destination:"LAX"}],bags:[]}},{name:"Fiona Carr",shouldPass:!1,input:{today:h,documents:[{document_type:"Passport",issuing_country:"USA",name:{last:"CARR",first:"FIONA"},expiration_date:"2028-07-19",real_id_compliant:!0},{document_type:"Boarding Pass",airline:"United",flight_number:"UA112",passenger_name:{last:"CARR",first:"FIONNA"},flight_date:"2026-07-21",origin:"ORD",destination:"SFO"}],bags:[]}},{name:"Raj Patel",shouldPass:!1,input:{today:h,documents:[{document_type:"State Identification Card",issuing_state:"Illinois",name:{last:"PATEL",first:"RAJ"},expiration_date:"2027-12-01",real_id_compliant:!0}],bags:[]}}]},{id:5,day:"DAY 5",name:"Flight Date Verification",briefing:`UPDATED SCREENING PROTOCOL

Boarding passes must be for TODAY'S date only.

Travelers presenting passes for future or past
flights must be denied entry \u{2014} they are at the
wrong checkpoint window.

Today's date: ${h}`,starterPolicy:`package tsa

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
}`,travelers:[{name:"Naomi Torres",shouldPass:!0,input:{today:h,documents:[{document_type:"Driver License",issuing_state:"Nevada",name:{last:"TORRES",first:"NAOMI"},expiration_date:"2030-03-14",real_id_compliant:!0},{document_type:"Boarding Pass",airline:"Southwest",flight_number:"WN893",passenger_name:{last:"TORRES",first:"NAOMI"},flight_date:"2026-07-21",origin:"LAS",destination:"DEN"}],bags:[]}},{name:"Karl Fischer",shouldPass:!1,input:{today:h,documents:[{document_type:"Passport",issuing_country:"USA",name:{last:"FISCHER",first:"KARL"},expiration_date:"2028-09-05",real_id_compliant:!0},{document_type:"Boarding Pass",airline:"American",flight_number:"AA304",passenger_name:{last:"FISCHER",first:"KARL"},flight_date:"2026-07-22",origin:"DFW",destination:"BOS"}],bags:[]}},{name:"Mei Lin",shouldPass:!1,input:{today:h,documents:[{document_type:"State Identification Card",issuing_state:"Washington",name:{last:"LIN",first:"MEI"},expiration_date:"2026-11-30",real_id_compliant:!0},{document_type:"Boarding Pass",airline:"Alaska",flight_number:"AS217",passenger_name:{last:"LIN",first:"MEI"},flight_date:"2026-07-20",origin:"SEA",destination:"SAN"}],bags:[]}}]},{id:6,day:"DAY 6",name:"Carry-on Limits",briefing:`BAGGAGE ENFORCEMENT \u{2014} NOW IN EFFECT

Each traveler is permitted:
  \u{2022} 1 carry-on bag (maximum)
  \u{2022} 1 personal item (maximum)

Bags exceeding these limits must be checked at the
counter. Travelers with excess carry-on bags cannot
proceed through security.

Inspect the bags array carefully.`,starterPolicy:`package tsa

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
}`,travelers:[{name:"Sam Okafor",shouldPass:!0,input:{today:h,documents:[{document_type:"Driver License",issuing_state:"Ohio",name:{last:"OKAFOR",first:"SAM"},expiration_date:"2029-07-04",real_id_compliant:!0},{document_type:"Boarding Pass",airline:"Delta",flight_number:"DL889",passenger_name:{last:"OKAFOR",first:"SAM"},flight_date:"2026-07-21",origin:"CLE",destination:"ATL"}],bags:[{type:"carry-on",description:"rolling suitcase",contents:[]},{type:"personal item",description:"laptop bag",contents:[]}]}},{name:"Diane Rousseau",shouldPass:!1,input:{today:h,documents:[{document_type:"Passport",issuing_country:"USA",name:{last:"ROUSSEAU",first:"DIANE"},expiration_date:"2027-10-17",real_id_compliant:!0},{document_type:"Boarding Pass",airline:"Delta",flight_number:"DL006",passenger_name:{last:"ROUSSEAU",first:"DIANE"},flight_date:"2026-07-21",origin:"JFK",destination:"CDG"}],bags:[{type:"carry-on",description:"hard-shell suitcase",contents:[]},{type:"carry-on",description:"duffel bag",contents:[]},{type:"personal item",description:"purse",contents:[]}]}},{name:"Ben Kaur",shouldPass:!0,input:{today:h,documents:[{document_type:"State Identification Card",issuing_state:"Minnesota",name:{last:"KAUR",first:"BEN"},expiration_date:"2028-04-12",real_id_compliant:!0},{document_type:"Boarding Pass",airline:"United",flight_number:"UA541",passenger_name:{last:"KAUR",first:"BEN"},flight_date:"2026-07-21",origin:"MSP",destination:"ORD"}],bags:[{type:"personal item",description:"backpack",contents:[]}]}}]},{id:7,day:"DAY 7",name:"Prohibited Items & Liquid Limits",briefing:`ITEM SCREENING DIRECTIVE

The following are NOT permitted in carry-on bags:

  \u{2022} Any item marked prohibited: true
    (weapons, sharp objects, etc.)
  \u{2022} Liquid containers exceeding 3.4 fl oz (100ml)

Inspect the contents array inside each bag.
A single violation is grounds for full denial.`,starterPolicy:`package tsa

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
}`,travelers:[{name:"Grace Huang",shouldPass:!0,input:{today:h,documents:[{document_type:"Driver License",issuing_state:"Michigan",name:{last:"HUANG",first:"GRACE"},expiration_date:"2029-05-20",real_id_compliant:!0},{document_type:"Boarding Pass",airline:"Spirit",flight_number:"NK714",passenger_name:{last:"HUANG",first:"GRACE"},flight_date:"2026-07-21",origin:"DTW",destination:"MCO"}],bags:[{type:"carry-on",description:"backpack",contents:[{item_type:"liquid",description:"hand sanitizer",volume_fl_oz:2,prohibited:!1},{item_type:"liquid",description:"travel shampoo",volume_fl_oz:3,prohibited:!1},{item_type:"other",description:"book",prohibited:!1}]}]}},{name:"Ethan Blake",shouldPass:!1,input:{today:h,documents:[{document_type:"Passport",issuing_country:"USA",name:{last:"BLAKE",first:"ETHAN"},expiration_date:"2027-02-14",real_id_compliant:!0},{document_type:"Boarding Pass",airline:"JetBlue",flight_number:"B6223",passenger_name:{last:"BLAKE",first:"ETHAN"},flight_date:"2026-07-21",origin:"BOS",destination:"FLL"}],bags:[{type:"carry-on",description:"duffel bag",contents:[{item_type:"liquid",description:"water bottle",volume_fl_oz:16.9,prohibited:!1},{item_type:"other",description:"headphones",prohibited:!1}]}]}},{name:"Mia Johansson",shouldPass:!1,input:{today:h,documents:[{document_type:"State Identification Card",issuing_state:"Colorado",name:{last:"JOHANSSON",first:"MIA"},expiration_date:"2028-08-30",real_id_compliant:!0},{document_type:"Boarding Pass",airline:"Frontier",flight_number:"F9108",passenger_name:{last:"JOHANSSON",first:"MIA"},flight_date:"2026-07-21",origin:"DEN",destination:"PHX"}],bags:[{type:"personal item",description:"purse",contents:[{item_type:"other",description:"pocket knife",prohibited:!0},{item_type:"liquid",description:"perfume",volume_fl_oz:1,prohibited:!1}]}]}}]},{id:8,day:"DAY 8",name:"3-1-1 Liquids Rule",briefing:`FULL 3-1-1 ENFORCEMENT \u{2014} ACTIVE

The complete TSA liquids rule is now in effect:

  3  \u{2192}  Each container must be 3.4 fl oz or less
  1  \u{2192}  All containers fit in ONE quart-sized bag
  1  \u{2192}  One quart bag per traveler

Count ALL liquid containers across ALL bags.
Maximum 10 liquid containers total per traveler.

Exceeding the limit is grounds for denial.`,starterPolicy:`package tsa

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

# Level 8: Full 3-1-1 \u{2014} all liquids \u{2264} 3.4 fl oz AND max 10 containers total.
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
}`,travelers:[{name:"Chloe Bennett",shouldPass:!0,input:{today:h,documents:[{document_type:"Driver License",issuing_state:"Tennessee",name:{last:"BENNETT",first:"CHLOE"},expiration_date:"2027-12-25",real_id_compliant:!0},{document_type:"Boarding Pass",airline:"American",flight_number:"AA511",passenger_name:{last:"BENNETT",first:"CHLOE"},flight_date:"2026-07-21",origin:"BNA",destination:"DFW"}],bags:[{type:"carry-on",description:"roller bag",contents:[{item_type:"liquid",description:"shampoo",volume_fl_oz:3,prohibited:!1},{item_type:"liquid",description:"conditioner",volume_fl_oz:3,prohibited:!1},{item_type:"liquid",description:"face wash",volume_fl_oz:2.5,prohibited:!1},{item_type:"other",description:"laptop",prohibited:!1}]}]}},{name:"Victor Reyes",shouldPass:!1,input:{today:h,documents:[{document_type:"Passport",issuing_country:"USA",name:{last:"REYES",first:"VICTOR"},expiration_date:"2029-03-08",real_id_compliant:!0},{document_type:"Boarding Pass",airline:"Delta",flight_number:"DL226",passenger_name:{last:"REYES",first:"VICTOR"},flight_date:"2026-07-21",origin:"LAX",destination:"JFK"}],bags:[{type:"carry-on",description:"backpack",contents:[{item_type:"liquid",description:"shampoo",volume_fl_oz:3.4,prohibited:!1},{item_type:"liquid",description:"conditioner",volume_fl_oz:3.4,prohibited:!1},{item_type:"liquid",description:"body wash",volume_fl_oz:3.4,prohibited:!1},{item_type:"liquid",description:"face wash",volume_fl_oz:3,prohibited:!1},{item_type:"liquid",description:"toner",volume_fl_oz:2.5,prohibited:!1},{item_type:"liquid",description:"serum",volume_fl_oz:1,prohibited:!1},{item_type:"liquid",description:"sunscreen",volume_fl_oz:3,prohibited:!1},{item_type:"liquid",description:"hand lotion",volume_fl_oz:3,prohibited:!1},{item_type:"liquid",description:"lip gloss",volume_fl_oz:.5,prohibited:!1},{item_type:"liquid",description:"contact solution",volume_fl_oz:2,prohibited:!1},{item_type:"liquid",description:"eye drops",volume_fl_oz:.5,prohibited:!1}]}]}},{name:"Yuki Tanaka",shouldPass:!0,input:{today:h,documents:[{document_type:"State Identification Card",issuing_state:"Oregon",name:{last:"TANAKA",first:"YUKI"},expiration_date:"2028-06-18",real_id_compliant:!0},{document_type:"Boarding Pass",airline:"Alaska",flight_number:"AS402",passenger_name:{last:"TANAKA",first:"YUKI"},flight_date:"2026-07-21",origin:"PDX",destination:"HNL"}],bags:[{type:"carry-on",description:"suitcase",contents:[{item_type:"liquid",description:"sunscreen",volume_fl_oz:3,prohibited:!1},{item_type:"liquid",description:"insect repellent",volume_fl_oz:2,prohibited:!1},{item_type:"other",description:"camera",prohibited:!1}]}]}}]}],v=0,A=0,E=0,P=0,I=w[0].starterPolicy,D=!1,C=document.getElementById("rego-policy"),x=document.getElementById("json-input"),S=document.getElementById("evaluation-output"),L=document.getElementById("evaluate-button"),R=document.getElementById("next-button"),N=document.getElementById("level-day"),T=document.getElementById("level-title"),O=document.getElementById("briefing-text"),B=document.getElementById("traveler-name"),k=document.getElementById("traveler-progress"),q=document.getElementById("stamp-overlay"),U=document.getElementById("score-display");function F(){return w[v].travelers[A]}function M(){let e=w[v];N.textContent=e.day,T.textContent=e.name.toUpperCase(),O.textContent=e.briefing,C.value=I=e.starterPolicy,A=0,z()}function z(){let e=w[v],t=F();B.textContent=t.name,k.textContent=`Traveler ${A+1} / ${e.travelers.length}`,x.value=JSON.stringify(t.input,null,2),S.textContent="",q.style.display="none",L.disabled=!1,R.style.display="none"}C.onkeydown=function(e){if(9===e.keyCode){e.preventDefault();let t=this.selectionStart,i=this.selectionEnd;this.value=this.value.substring(0,t)+"	"+this.value.substring(i),this.selectionStart=this.selectionEnd=t+1}},C.addEventListener("input",e=>{I=e.target.value}),L.addEventListener("click",function(){if(!D)return;let e=F(),t=!1,i=new g;try{i.addPolicy("tsa_policy.rego",I),i.setInputJson(JSON.stringify(e.input));let n=i.evalRule("data.tsa.allow");t=JSON.parse(n)}catch(e){S.textContent="Policy error:\n"+e.toString();return}let n=t===e.shouldPass;P++,n&&E++,q.textContent=t?"APPROVED":"DENIED",q.className="stamp "+(t?"stamp-approved":"stamp-denied"),q.style.display="flex",S.textContent=t?"✓ APPROVED":"✗ DENIED",S.className=t?"result-approved":"result-denied",U.textContent=`Score: ${E} / ${P}`,L.disabled=!0,R.style.display="block";let a=A===w[v].travelers.length-1,o=v===w.length-1;R.textContent=a&&o?"Finish":"Next →"}),R.addEventListener("click",function(){let e=w[v];A<e.travelers.length-1?(A++,z()):v<w.length-1?(v++,M()):(S.textContent=`All 8 levels complete!
Final score: ${E} / ${P}`,S.className="",R.style.display="none")}),(async function(){await b(),D=!0,M()})().catch(e=>console.error(e));