import { join } from "path";
import { parse } from "../src/index";
import { readFileSync } from "fs";

describe("[TESTS] Parsing Normal", () => {
  test("normal_1", () => {
    const report = parse(readFileSync(join(__dirname, "../samples", "normal_1.txt"), "utf-8"));
    const expectation = {
      scanInfo: {
        baseStrength: 40,
        rollStrengthBonus: 18,
        totalStrength: 58,
        defense: 41,

        isFailed: false,
        isFailedCritically: false,
        isDetected: false,
        isTianchao: false,
      },

      station: {
        hex: {
          x: 149,
          y: -206,
        },

        type: "normal",
        name: "TTTTT9",
        ownedBy: "Thibet",

        captureDefense: {
          current: 184,
          max: 184,
        },

        resources: {
          metal: 44131,
          gas: 36340,
          crystal: 15666,
        },

        labor: 1044,

        buildings: [
          { type: "Living Quarters", level: 10 },
          { type: "Metal Refinery", level: 10 },
          { type: "Gas Refinery", level: 10 },
          { type: "Crystal Refinery", level: 10 },
          { type: "Fleet Docks", level: 1 },
          { type: "Docking Bay", level: 1 },
          { type: "Military Barracks", level: 1 },
          { type: "Container Port", level: 1 },
          { type: "Docking Services", level: 7 },
          { type: "Station Hall", level: 1 },
          { type: "Frachead Assembly", level: 1 },
          { type: "Barricades", level: 6 },
          { type: "Internal Affairs", level: 1 },
          { type: "Relocation Bureau", level: 1 },
          { type: "Campaign Directorate", level: 6 },
        ],

        outposts: [
          {
            type: "Missile Battery",
            level: 5,
            status: "Operational",
          },
          { type: "Stargate", level: 5, status: "Operational" },
        ],

        fleets: [
          { type: "Corvettes", amount: 800 },
          { type: "Corvettes", amount: 800 },
          { type: "Corvettes", amount: 800 },
          { type: "Corvettes", amount: 800 },
          { type: "Patrol Ships", amount: 800 },
          { type: "Industrials", amount: 180 },
          { type: "Scouts", amount: 800 },
          { type: "Scouts", amount: 800 },
          { type: "Scouts", amount: 800 },
          { type: "Recons", amount: 187 },
        ],
      },
    };

    expect(report).toBe(expectation);
  });

  test("normal_2", () => {
    const report = parse(readFileSync(join(__dirname, "../samples", "normal_2.txt"), "utf-8"));
    const expectation = {
      scanInfo: {
        baseStrength: 70,
        rollStrengthBonus: 16,
        totalStrength: 86,
        defense: 60,

        isFailed: false,
        isFailedCritically: false,
        isDetected: false,
        isTianchao: false,
      },

      station: {
        hex: {
          x: -233,
          y: 29,
        },

        type: "normal",
        name: "Moxxu3",
        ownedBy: "Moxxu",

        captureDefense: {
          current: 196,
          max: 196,
        },

        resources: {
          metal: 72825,
          gas: 78506,
          crystal: 25324,
        },

        labor: 2134,

        buildings: [
          { type: "Living Quarters", level: 10 },
          { type: "Metal Refinery", level: 10 },
          { type: "Gas Refinery", level: 10 },
          { type: "Crystal Refinery", level: 10 },
          { type: "The Workshed", level: 1 },
          { type: "Helios Express", level: 1 },
          { type: "Zirachi Brothers", level: 1 },
          { type: "Gatos Fritos", level: 1 },
          { type: "Orbital Synfonica", level: 1 },
          { type: "Plasma Chamber", level: 10 },
          { type: "Search and Rescue HQ", level: 10 },
          { type: "Fleet Docks", level: 10 },
          { type: "Trailer Manufacturing", level: 10 },
          { type: "Warehouse", level: 10 },
          { type: "Docking Services", level: 10 },
          { type: "Frachead Assembly", level: 10 },
          { type: "Barricades", level: 9 },
          { type: "Internal Affairs", level: 9 },
          { type: "Navy Academy", level: 9 },
          { type: "Campaign Directorate", level: 1 },
          { type: "MIC Offices", level: 1 },
          { type: "Industrial Complex", level: 10 },
          { type: "Metal Refinery", level: 10 },
        ],

        outposts: [
          { type: "Capital Ship Assembly", level: 2, status: "Operational" },
          { type: "Mining Facility", level: 5, status: "Operational" },
          { type: "Missile Battery", level: 5, status: "Operational" },
          { type: "Fortress", level: 1, status: "Operational" },
          { type: "Mining Facility", level: 5, status: "Operational" },
        ],

        fleets: [
          { type: "Scouts", amount: 30 },
          { type: "Corvettes", amount: 501 },
          { type: "Patrol Ships", amount: 30 },
          { type: "Destroyers", amount: 381 },
          { type: "Destroyers", amount: 400 },
          { type: "Gunships", amount: 115 },
          { type: "Gunships", amount: 115 },
          { type: "Troop Carriers", amount: 2 },
        ],
      },
    };

    expect(report).toBe(expectation);
  });
});
