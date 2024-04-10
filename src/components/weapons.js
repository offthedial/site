/**
 * Import weapons sourced from https://github.com/Sendouc/sendou.ink
 * Direct link to file: https://github.com/Sendouc/sendou.ink/blob/a1e1b5c1758942aefa60d3a0c6cce38004385683/locales/en/weapons.json
 * All non-main weapon keys are deleted
 */

const importedWeapons = {
  "MAIN_250": "Rapid Blaster Pro",
  "MAIN_251": "Rapid Blaster Pro Deco",
  "MAIN_230": "Clash Blaster",
  "MAIN_231": "Clash Blaster Neo",
  "MAIN_240": "Rapid Blaster",
  "MAIN_241": "Rapid Blaster Deco",
  "MAIN_220": "Range Blaster",
  "MAIN_210": "Blaster",
  "MAIN_211": "Custom Blaster",
  "MAIN_260": "S-BLAST '92",
  "MAIN_261": "S-BLAST '91",
  "MAIN_200": "Luna Blaster",
  "MAIN_201": "Luna Blaster Neo",
  "MAIN_205": "Order Blaster Replica",
  "MAIN_1120": "Painbrush",
  "MAIN_1121": "Painbrush Nouveau",
  "MAIN_1100": "Inkbrush",
  "MAIN_1101": "Inkbrush Nouveau",
  "MAIN_1110": "Octobrush",
  "MAIN_1111": "Octobrush Nouveau",
  "MAIN_1115": "Orderbrush Replica",
  "MAIN_2060": "Goo Tuber",
  "MAIN_2061": "Custom Goo Tuber",
  "MAIN_2050": "Bamboozler 14 Mk I",
  "MAIN_2040": "E-liter 4K Scope",
  "MAIN_2041": "Custom E-liter 4K Scope",
  "MAIN_2030": "E-liter 4K",
  "MAIN_2031": "Custom E-liter 4K",
  "MAIN_2020": "Splatterscope",
  "MAIN_2021": "Z+F Splatterscope",
  "MAIN_2010": "Splat Charger",
  "MAIN_2011": "Z+F Splat Charger",
  "MAIN_2015": "Order Charger Replica",
  "MAIN_2070": "Snipewriter 5H",
  "MAIN_2071": "Snipewriter 5B",
  "MAIN_2000": "Classic Squiffer",
  "MAIN_2001": "New Squiffer",
  "MAIN_5030": "Dualie Squelchers",
  "MAIN_5031": "Custom Dualie Squelchers",
  "MAIN_5020": "Glooga Dualies",
  "MAIN_5021": "Glooga Dualies Deco",
  "MAIN_5050": "Douser Dualies FF",
  "MAIN_5010": "Splat Dualies",
  "MAIN_5011": "Enperry Splat Dualies",
  "MAIN_5015": "Order Dualie Replicas",
  "MAIN_5000": "Dapple Dualies",
  "MAIN_5001": "Dapple Dualies Nouveau",
  "MAIN_5040": "Dark Tetra Dualies",
  "MAIN_5041": "Light Tetra Dualies",
  "MAIN_1000": "Carbon Roller",
  "MAIN_1001": "Carbon Roller Deco",
  "MAIN_1020": "Dynamo Roller",
  "MAIN_1021": "Gold Dynamo Roller",
  "MAIN_1030": "Flingza Roller",
  "MAIN_1031": "Foil Flingza Roller",
  "MAIN_1010": "Splat Roller",
  "MAIN_1011": "Krak-On Splat Roller",
  "MAIN_1015": "Order Roller Replica",
  "MAIN_1040": "Big Swig Roller",
  "MAIN_1041": "Big Swig Roller Express",
  "MAIN_8010": "Splatana Wiper",
  "MAIN_8011": "Splatana Wiper Deco",
  "MAIN_8000": "Splatana Stamper",
  "MAIN_8001": "Splatana Stamper Nouveau",
  "MAIN_8005": "Order Splatana Replica",
  "MAIN_6020": "Undercover Brella",
  "MAIN_6021": "Undercover Sorella Brella",
  "MAIN_6030": "Recycled Brella 24 Mk I",
  "MAIN_6000": "Splat Brella",
  "MAIN_6001": "Sorella Brella",
  "MAIN_6005": "Order Brella Replica",
  "MAIN_6010": "Tenta Brella",
  "MAIN_6011": "Tenta Sorella Brella",
  "MAIN_30": "Aerospray MG",
  "MAIN_31": "Aerospray RG",
  "MAIN_70": "Splattershot Pro",
  "MAIN_71": "Forge Splattershot Pro",
  "MAIN_10": "Splattershot Jr.",
  "MAIN_11": "Custom Splattershot Jr.",
  "MAIN_400": "Squeezer",
  "MAIN_401": "Foil Squeezer",
  "MAIN_50": ".52 Gal",
  "MAIN_51": ".52 Gal Deco",
  "MAIN_80": ".96 Gal",
  "MAIN_81": ".96 Gal Deco",
  "MAIN_90": "Jet Squelcher",
  "MAIN_91": "Custom Jet Squelcher",
  "MAIN_40": "Splattershot",
  "MAIN_41": "Tentatek Splattershot",
  "MAIN_45": "Hero Shot Replica",
  "MAIN_47": "Order Shot Replica",
  "MAIN_46": "Octo Shot Replica",
  "MAIN_20": "Splash-o-matic",
  "MAIN_21": "Neo Splash-o-matic",
  "MAIN_100": "Splattershot Nova",
  "MAIN_101": "Annaki Splattershot Nova",
  "MAIN_60": "N-ZAP '85",
  "MAIN_61": "N-ZAP '89",
  "MAIN_0": "Sploosh-o-matic",
  "MAIN_1": "Neo Sploosh-o-matic",
  "MAIN_310": "H-3 Nozzlenose",
  "MAIN_311": "H-3 Nozzlenose D",
  "MAIN_300": "L-3 Nozzlenose",
  "MAIN_301": "L-3 Nozzlenose D",
  "MAIN_3030": "Bloblobber",
  "MAIN_3031": "Bloblobber Deco",
  "MAIN_3010": "Tri-Slosher",
  "MAIN_3011": "Tri-Slosher Nouveau",
  "MAIN_3050": "Dread Wringer",
  "MAIN_3051": "Dread Wringer D",
  "MAIN_3020": "Sloshing Machine",
  "MAIN_3021": "Sloshing Machine Neo",
  "MAIN_3000": "Slosher",
  "MAIN_3001": "Slosher Deco",
  "MAIN_3005": "Order Slosher Replica",
  "MAIN_3040": "Explosher",
  "MAIN_3041": "Custom Explosher",
  "MAIN_4030": "Ballpoint Splatling",
  "MAIN_4031": "Ballpoint Splatling Nouveau",
  "MAIN_4050": "Heavy Edit Splatling",
  "MAIN_4020": "Hydra Splatling",
  "MAIN_4000": "Mini Splatling",
  "MAIN_4001": "Zink Mini Splatling",
  "MAIN_4040": "Nautilus 47",
  "MAIN_4041": "Nautilus 79",
  "MAIN_4010": "Heavy Splatling",
  "MAIN_4011": "Heavy Splatling Deco",
  "MAIN_4015": "Order Splatling Replica",
  "MAIN_7010": "Tri-Stringer",
  "MAIN_7011": "Inkline Tri-Stringer",
  "MAIN_7015": "Order Stringer Replica",
  "MAIN_7020": "REEF-LUX 450",
  "MAIN_7021": "REEF-LUX 450 Deco",
}

const weapons = Object.entries(importedWeapons).map(([key, value]) => ({
  id: key.substring(5),
  name: value,
}))

export default weapons
