declare interface Report {
  isFailed: boolean;
  isDetected: boolean;
  isTianchao: boolean;

  baseStrength: number;
  rollStrengthBonus: number;
  totalStrength: number;
  defense: number;

  station: Station;
}

declare interface Station {
  hex: {
    x: number;
    y: number;
  };

  type: string;
  name: string;
  ownedBy: string;

  captureDefense: {
    current: number;
    max: number;
  };

  ressources: {
    metal: number;
    gas: number;
    crystal: number;
  };

  foundHiddenResources: boolean;
  hiddenRessources:
    | {
        metal: number;
        gas: number;
        crystal: number;
      }
    | undefined;

  labor: number;

  buildings: Building[];

  fleets: Fleet[];

  buildingConstructionQueue:
    | {
        progressPercentage: number;
        buildings: Building[];
      }
    | undefined;

  fleetConstructionQueue:
    | {
        progressPercentage: number;
        fleets: Fleet[];
      }
    | undefined;

  outposts: Outpost[];

  hangar: Fleet[];
}

declare interface Building {
  type: string;
  level: number;
}

declare interface Fleet {
  type: string;
  amount: number;
  owner: string;
  cards: Card[];
}

declare interface Card {
  id: number;
  name: string;
}

declare interface Outpost {
  type: string;
  level: number;
  status: string;
  isAugmented: boolean;
}
