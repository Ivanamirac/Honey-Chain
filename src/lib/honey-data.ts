export type RiskLevel = "Low" | "Moderate" | "High";

export type BatchStatus =
  | "Verified"
  | "Processing"
  | "Quality Hold"
  | "Packaged"
  | "Distributed"
  | "Queued";

export interface HiveReading {
  id: string;
  hiveId: string;
  temperature: number;
  humidity: number;
  weightKg: number;
  activity: number;
  risk: RiskLevel;
  updatedAt: string;
}

export interface Hive {
  id: string;
  apiary: string;
  region: string;
  healthScore: number;
  temperature: number;
  humidity: number;
  weightKg: number;
  activity: number;
  risk: RiskLevel;
  lastUpdated: string;
  connected: boolean;
}

export interface TraceEvent {
  stage: string;
  status: "Verified" | "In Progress" | "Queued";
  timestamp: string;
  actor: string;
  description: string;
}

export interface HoneyBatch {
  id: string;
  productName: string;
  variety: string;
  beekeeper: string;
  apiary: string;
  hiveId: string;
  origin: string;
  harvestDate: string;
  quantityKg: number;
  qualityScore: number;
  qualityStatus: "Passed" | "Passed with review" | "In review";
  processingStatus: BatchStatus;
  packagingStatus: BatchStatus;
  distributionStatus: BatchStatus;
  verificationStatus: "Verified" | "Pending";
  ledgerHash: string;
  pricePerKg: number;
  exportReady: boolean;
  traceEvents: TraceEvent[];
}

export interface MarketItem {
  id: string;
  productName: string;
  origin: string;
  beekeeper: string;
  qualityScore: number;
  pricePerKg: number;
  buyerInterest: string;
  exportReady: boolean;
}

export interface AdminMetric {
  label: string;
  value: string;
  change: string;
}

export const hives: Hive[] = [
  {
    id: "HIVE-01",
    apiary: "Ananya Apiary",
    region: "Tamil Nadu",
    healthScore: 92,
    temperature: 31.8,
    humidity: 62,
    weightKg: 42.6,
    activity: 91,
    risk: "Low",
    lastUpdated: "2026-09-02T08:12:00Z",
    connected: true,
  },
  {
    id: "HIVE-02",
    apiary: "Ananya Apiary",
    region: "Tamil Nadu",
    healthScore: 74,
    temperature: 34.1,
    humidity: 71,
    weightKg: 39.4,
    activity: 76,
    risk: "Moderate",
    lastUpdated: "2026-09-02T07:42:00Z",
    connected: true,
  },
  {
    id: "HIVE-03",
    apiary: "Kovai Apiary",
    region: "Kerala",
    healthScore: 88,
    temperature: 30.9,
    humidity: 59,
    weightKg: 46.1,
    activity: 83,
    risk: "Low",
    lastUpdated: "2026-09-02T07:10:00Z",
    connected: false,
  },
];

export const batches: HoneyBatch[] = [
  {
    id: "HC-2026-00125",
    productName: "Forest Honey",
    variety: "Wild Forest",
    beekeeper: "Ananya Beekeepers",
    apiary: "Ananya Apiary",
    hiveId: "HIVE-01",
    origin: "Tamil Nadu",
    harvestDate: "2026-08-25",
    quantityKg: 84,
    qualityScore: 94,
    qualityStatus: "Passed",
    processingStatus: "Verified",
    packagingStatus: "Verified",
    distributionStatus: "Verified",
    verificationStatus: "Verified",
    ledgerHash: "0x7b9f2a1d863f52f0e64c6d77fbf2b4a99d55f1d5b8c2d9f4e2a0392470fba21",
    pricePerKg: 320,
    exportReady: true,
    traceEvents: [
      {
        stage: "Hive",
        status: "Verified",
        timestamp: "2026-08-25T06:30:00Z",
        actor: "Beekeeper",
        description: "Colony checked and full frame set inspected.",
      },
      {
        stage: "Harvest",
        status: "Verified",
        timestamp: "2026-08-25T10:10:00Z",
        actor: "Ananya Beekeepers",
        description: "Raw honey extracted with batch records logged.",
      },
      {
        stage: "Quality Testing",
        status: "Verified",
        timestamp: "2026-08-26T11:00:00Z",
        actor: "Honey Quality Laboratory",
        description: "Moisture and purity validated, 94/100 score assigned.",
      },
      {
        stage: "Processing",
        status: "Verified",
        timestamp: "2026-08-27T09:15:00Z",
        actor: "Processing Unit",
        description: "Filtered and packed in controlled conditions.",
      },
      {
        stage: "Packaging",
        status: "Verified",
        timestamp: "2026-08-27T15:45:00Z",
        actor: "Packaging Team",
        description: "Labelled and sealed for retail distribution.",
      },
      {
        stage: "Distribution",
        status: "Verified",
        timestamp: "2026-08-28T08:40:00Z",
        actor: "Distribution Partner",
        description: "Transferred to retail inventory with QR-linked batch records.",
      },
      {
        stage: "Consumer Verification",
        status: "Verified",
        timestamp: "2026-09-02T09:00:00Z",
        actor: "Consumer App",
        description: "Batch authentication checked and verified against ledger data.",
      },
    ],
  },
  {
    id: "HC-2026-00124",
    productName: "Mango Blossom Honey",
    variety: "Mango Blossom",
    beekeeper: "Ananya Beekeepers",
    apiary: "Ananya Apiary",
    hiveId: "HIVE-02",
    origin: "Tamil Nadu",
    harvestDate: "2026-08-18",
    quantityKg: 52,
    qualityScore: 92,
    qualityStatus: "Passed",
    processingStatus: "Verified",
    packagingStatus: "Verified",
    distributionStatus: "Verified",
    verificationStatus: "Verified",
    ledgerHash: "0x1caeb5fdcdd2a17bf17a7864af9a7a117d25d1f6ac9462c99c00a1ce9d48a5b7",
    pricePerKg: 290,
    exportReady: true,
    traceEvents: [
      {
        stage: "Hive",
        status: "Verified",
        timestamp: "2026-08-18T06:15:00Z",
        actor: "Beekeeper",
        description: "Hive health stable and nectar flow observed.",
      },
      {
        stage: "Harvest",
        status: "Verified",
        timestamp: "2026-08-18T09:45:00Z",
        actor: "Ananya Beekeepers",
        description: "Batch harvested and hygiene logs recorded.",
      },
      {
        stage: "Quality Testing",
        status: "Verified",
        timestamp: "2026-08-19T12:05:00Z",
        actor: "Honey Quality Laboratory",
        description: "Moisture and floral authenticity score above target.",
      },
      {
        stage: "Processing",
        status: "Verified",
        timestamp: "2026-08-20T10:18:00Z",
        actor: "Processing Unit",
        description: "Pasteurization and filtration performed.",
      },
      {
        stage: "Packaging",
        status: "Verified",
        timestamp: "2026-08-20T15:20:00Z",
        actor: "Packaging Team",
        description: "Retail-ready bottling completed.",
      },
      {
        stage: "Distribution",
        status: "Verified",
        timestamp: "2026-08-21T07:30:00Z",
        actor: "Distribution Partner",
        description: "Moved to retail warehouse inventory.",
      },
    ],
  },
  {
    id: "HC-2026-00123",
    productName: "Wildflower Honey",
    variety: "Wildflower",
    beekeeper: "Kovai Beekeepers",
    apiary: "Kovai Apiary",
    hiveId: "HIVE-03",
    origin: "Kerala",
    harvestDate: "2026-08-14",
    quantityKg: 67,
    qualityScore: 89,
    qualityStatus: "In review",
    processingStatus: "Processing",
    packagingStatus: "Queued",
    distributionStatus: "Queued",
    verificationStatus: "Pending",
    ledgerHash: "0x5b1cd24ef574b8d4c849a1f19712b413d6c9c985ae99ed89000d005d0d2e6b12",
    pricePerKg: 260,
    exportReady: false,
    traceEvents: [
      {
        stage: "Hive",
        status: "Verified",
        timestamp: "2026-08-14T07:00:00Z",
        actor: "Beekeeper",
        description: "Hive inspection completed with moderate risk flagged.",
      },
      {
        stage: "Harvest",
        status: "Verified",
        timestamp: "2026-08-14T10:40:00Z",
        actor: "Kovai Beekeepers",
        description: "Harvest recorded and batch ID assigned.",
      },
      {
        stage: "Quality Testing",
        status: "In Progress",
        timestamp: "2026-08-15T09:00:00Z",
        actor: "Honey Quality Laboratory",
        description: "Lab review is pending final documentation.",
      },
      {
        stage: "Processing",
        status: "Queued",
        timestamp: "2026-08-16T08:00:00Z",
        actor: "Processing Unit",
        description: "Awaiting eligible processing schedule.",
      },
    ],
  },
];

export const adminMetrics: AdminMetric[] = [
  { label: "Total Beekeepers", value: "146", change: "+12%" },
  { label: "Apiaries", value: "38", change: "+6%" },
  { label: "Hives", value: "618", change: "+14%" },
  { label: "Verified batches", value: "92%", change: "+7%" },
];

export const marketItems: MarketItem[] = [
  {
    id: "HC-2026-00125",
    productName: "Forest Honey",
    origin: "Tamil Nadu",
    beekeeper: "Ananya Beekeepers",
    qualityScore: 94,
    pricePerKg: 320,
    buyerInterest: "High",
    exportReady: true,
  },
  {
    id: "HC-2026-00124",
    productName: "Mango Blossom Honey",
    origin: "Tamil Nadu",
    beekeeper: "Ananya Beekeepers",
    qualityScore: 92,
    pricePerKg: 290,
    buyerInterest: "Medium",
    exportReady: true,
  },
  {
    id: "HC-2026-00123",
    productName: "Wildflower Honey",
    origin: "Kerala",
    beekeeper: "Kovai Beekeepers",
    qualityScore: 89,
    pricePerKg: 260,
    buyerInterest: "Growing",
    exportReady: false,
  },
];

export function getBatchById(batchId: string) {
  return batches.find((batch) => batch.id.toLowerCase() === batchId.toLowerCase());
}

export function getHiveById(hiveId: string) {
  return hives.find((hive) => hive.id.toLowerCase() === hiveId.toLowerCase());
}

export function getVerificationSummary(batchId: string) {
  const batch = getBatchById(batchId);

  if (!batch) {
    return {
      isValid: false,
      status: "Not found",
      message: "Failed to locate the requested honey batch record.",
    };
  }

  const isValid =
    batch.verificationStatus === "Verified" &&
    batch.traceEvents.some((event) => event.stage === "Consumer Verification");

  return {
    isValid,
    status: isValid ? "Verified" : "Pending",
    message: isValid
      ? "Batch identity and ledger hash match the recorded traceability history."
      : "This batch has not been fully authenticated in the local hash ledger prototype.",
  };
}
