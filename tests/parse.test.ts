import { join } from "path";
import { parse } from "../src/index";
import { readFileSync } from "fs";

describe("[TESTS] Parsing", () => {
  test("normal_1", () => {
    const report = parse(readFileSync(join(__dirname, "../samples", "normal_1.txt"), "utf-8"));

    expect(report).toBe({
      failed: false,
      detected: false,
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
        ressources: {
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
        hiddenRessources: {
          metal: 0,
          gas: 0,
          crystal: 0,
        },
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
        hangar: [],
      },
      scan: {
        baseStrength: 40,
        rollStrengthBonus: 18,
        totalStrength: 58,
        defense: 41,
        undetected: true,
      },
    });
  });
});
