declare interface Report {
  scanInfo: {
    baseStrength: number;
    rollStrengthBonus: number;
    totalStrength: number;
    defense: number;

    isFailed: boolean;
    isFailedCritically: boolean;
    isDetected: boolean;
    isTianchao: boolean;
  };

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

  hiddenRessources?: {
    metal: number;
    gas: number;
    crystal: number;
  };

  labor: number;

  buildings: Building[];

  fleets: Fleet[];

  buildingConstructionQueue?: {
    progressPercentage: number;
    buildings: Building[];
  };

  fleetConstructionQueue?: {
    progressPercentage: number;
    fleets: Fleet[];
  };

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
