import { DataGridProps } from "@jpmorganchase/uitk-grid";

export interface QuestionData {
  text: string[];
  gridProps: DataGridProps;
}

export interface BlotterRow1 {
  rfeId: string;
  bookingStatus?: "Booked";
  orderId: string;
  traderId: string;
  send: string;
  modified: string;
  clientName: string;
  symbol: string;
  name: string;
  side: "Buy" | "Sell";
  qty: number;
  exQty: number;
  remaining: number;
  cancelled?: number;
  price: number;
  exAvgPx?: number;
  orderStatus: "Live" | "Rejected" | "Cancelled" | "Completed";
  comments?: string;
  pos?: string;
}

export const questions: QuestionData[] = [
  {
    text: [
      "You are about to see a screen with a equity trade blotter. When you do, and without interacting with the blotter; Can you tell me what price was executed for the Tesla stock? We will be timing you.",
    ],
    gridProps: {
      columnDefinitions,
    },
  },
];
