export const questionText3 = [
	"Again a new trade blotter. This time, please use your mouse to click and select the 3rd row.",
	"Now tell me what account was used in this trade?"
];

export interface ExampleRow3 {
	id: string,
	tradeId: string,
	source: string,
	origination: string,
	market: string,
	matchingTradeId: string,
	matchTime: string,
	bookingStatus: string,
	clientAccountName: string,
	jpmDirection: string,
	notional: string,
	description: string,
	"level(decimal)": string,
	levelType: string,
}

export const exampleRows3 = [
	{
		id: "1",
		tradeId: "XSDB-101033",
		source: "SALES",
		origination: "SalesOMS",
		market: "Secondary",
		matchingTradeId: "DFGH-5374603",
		matchTime: "14:59",
		bookingStatus: "COMPLETE",
		clientAccountName: "SNAPSHOT INVESTORS",
		jpmDirection: "SELL",
		notional: "1000000",
		description: "AMZN 5.2 12/03/25",
		"level(decimal)": "105.779",
		levelType: "Price",
	},
	{
		id: "2",
		tradeId: "QPGJ-9641",
		source: "SALES",
		origination: "SalesOMS",
		market: "Secondary",
		matchingTradeId: "-",
		matchTime: "",
		bookingStatus: "PENDING",
		clientAccountName: "PEGASUS GLOBAL",
		jpmDirection: "BUY",
		notional: "22000000",
		description: "T 2.0 04/30/24",
		"level(decimal)": "97.84375",
		levelType: "Price",
	},
	{
		id: "3",
		tradeId: "QZWR-7379",
		source: "TRADING",
		origination: "SalesOMS",
		market: "Secondary",
		matchingTradeId: "-",
		matchTime: "",
		bookingStatus: "PENDING",
		clientAccountName: "JASMINE TRUST (TOP, US)",
		jpmDirection: "SELL",
		notional: "34000",
		description: "AAPL 4.65 02/23/46",
		"level(decimal)": "115.232",
		levelType: "Price",
	},
	{
		id: "4",
		tradeId: "NTOZ-6722",
		source: "SALES",
		origination: "SalesOMS",
		market: "Secondary",
		matchingTradeId: "-",
		matchTime: "",
		bookingStatus: "PENDING",
		clientAccountName: "THE FINER THINGS (TOP, US)",
		jpmDirection: "SELL",
		notional: "20000",
		description: "OXY 5.875 09/01/25",
		"level(decimal)": "103.625",
		levelType: "Price",
	},
	{
		id: "5",
		tradeId: "VQHK-91051",
		source: "SALES",
		origination: "SalesOMS",
		market: "Secondary",
		matchingTradeId: "-",
		matchTime: "",
		bookingStatus: "PENDING",
		clientAccountName: "LORDSHIP LANE HLDGS (TOP)",
		jpmDirection: "SELL",
		notional: "700000",
		description: "ROLLS 5.75 15Oct27 144A",
		"level(decimal)": "95.25",
		levelType: "Price",
	},
	{
		id: "6",
		tradeId: "JYRK-34110",
		source: "SALES",
		origination: "SalesOMS",
		market: "Secondary",
		matchingTradeId: "-",
		matchTime: "",
		bookingStatus: "PENDING",
		clientAccountName: "LORDSHIP LANE HLDGS (TOP)",
		jpmDirection: "BUY",
		notional: "500000",
		description: "BNP 4.375 12May26 144A",
		"level(decimal)": "101.5",
		levelType: "Price",
	},
	{
		id: "7",
		tradeId: "MFLP-9987",
		source: "TRADING",
		origination: "SalesOMS",
		market: "Secondary",
		matchingTradeId: "DFGH-4460948",
		matchTime: "14:32",
		bookingStatus: "COMPLETE",
		clientAccountName: "WALNUT & SONS",
		jpmDirection: "SELL",
		notional: "456000",
		description: "MSFT 4.25 02/06/47",
		"level(decimal)": "109.018",
		levelType: "Price",
	},
	{
		id: "8",
		tradeId: "SQBS-7475",
		source: "TRADING",
		origination: "SalesOMS",
		market: "Secondary",
		matchingTradeId: "DFGH-7010380",
		matchTime: "14:38",
		bookingStatus: "COMPLETE",
		clientAccountName: "SALAZAAR",
		jpmDirection: "BUY",
		notional: "35000",
		description: "HLT 4.875 01/15/30",
		"level(decimal)": "18",
		levelType: "Price",
	},
	{
		id: "9",
		tradeId: "WQYU-3631",
		source: "SALES",
		origination: "SalesOMS",
		market: "Secondary",
		matchingTradeId: "DFGH-6342062",
		matchTime: "14:13",
		bookingStatus: "COMPLETE",
		clientAccountName: "MAGNUM PETERSON LTD",
		jpmDirection: "BUY",
		notional: "57000",
		description: "HD 3.35 09/15/25",
		"level(decimal)": "100.562",
		levelType: "Price",
	},
	{
		id: "10",
		tradeId: "IXAO-78710",
		source: "SALES",
		origination: "SalesOMS",
		market: "Secondary",
		matchingTradeId: "DFGH-5498053",
		matchTime: "14:12",
		bookingStatus: "COMPLETE",
		clientAccountName: "LORDSHIP LANE HLDGS (TOP)",
		jpmDirection: "SELL",
		notional: "444000",
		description: "QCOM 4.3 05/20/47",
		"level(decimal)": "117.21",
		levelType: "Price",
	},
];