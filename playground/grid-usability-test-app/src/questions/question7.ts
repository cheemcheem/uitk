export const questionText7 = [
	"This time I want you to identify and update the content in the blotter.",
	"Now can you find the order row for user “Joe Johnson”?",
	"Can you navigate around and tell me which cells on this row are editable?",
	"Now edit the “Filled Amount” to “1,000,000” please?"
];

export interface ExampleRow7 {
	tradeId: string,
	tradeDate: string,
	bookingStatus: string,
	tradeAction: string,
	salespersonName: string,
	jpmDirection: string,
	instrument: string,
	issuer: string,
	notional: string,
	ccy: string,
	price: string,
	upfrontFee: string,
	cpn: string,
	counterparty: string,
	cptySpn: string,
	cv: string,
	clientContact: string,
	traderName: string,
}

export const exampleRows7 = [
	{
		tradeId: "SMFC-1789",
		tradeDate: "19 Aug 22",
		bookingStatus: "LIVE STATUS",
		tradeAction: "OPEN",
		salespersonName: "Nicholas Atherton",
		jpmDirection: "BUY",
		instrument: "VOD",
		issuer: "VODAFONE GROUP PUBLIC LIMITED COMPANY",
		notional: "31,800,000",
		ccy: "GBP",
		price: "100.9238",
		upfrontFee: "12,000",
		cpn: "1.75",
		counterparty: "CITIBANK NA",
		cptySpn: "1638716",
		cv: "1,800",
		clientContact: "Beulah Bates",
		traderName: "Izabelle Mcphee",
	},
	{
		tradeId: "IABF-3716",
		tradeDate: "19 Aug 22",
		bookingStatus: "LIVE STATUS",
		tradeAction: "OPEN",
		salespersonName: "Damian Hanson",
		jpmDirection: "BUY",
		instrument: "IBM",
		issuer: "INTERNATIONAL BUSINESS MACHINES CORPORATION",
		notional: "14,200,000",
		ccy: "USD",
		price: "102.0621",
		upfrontFee: "19,330",
		cpn: "3.625",
		counterparty: "ALLIANZ GLOBAL INVESTORS GMBH",
		cptySpn: "6172936",
		cv: "2,900",
		clientContact: "Jax May",
		traderName: "Ruairidh Lancaster",
	},
	{
		tradeId: "EOJR-610510",
		tradeDate: "19 Aug 22",
		bookingStatus: "LIVE STATUS",
		tradeAction: "CLEAR",
		salespersonName: "Halimah Hanna",
		jpmDirection: "SELL",
		instrument: "WMT",
		issuer: "WALMART INC.",
		notional: "14,500,000",
		ccy: "USD",
		price: "100.6563",
		upfrontFee: "16,670",
		cpn: "5.625",
		counterparty: "SANTANDER ASSET MGMT, S.A. SGIC",
		cptySpn: "3194643",
		cv: "2,500",
		clientContact: "Nolan Bradford",
		traderName: "Zoha Chung",
	},
	{
		tradeId: "ZPQC-1588",
		tradeDate: "19 Aug 22",
		bookingStatus: "LIVE STATUS",
		tradeAction: "BREAK PARENT",
		salespersonName: "Diego Bryan",
		jpmDirection: "BUY",
		instrument: "CSCO",
		issuer: "CISCO SYSTEMS, INC.",
		notional: "27,200,000",
		ccy: "USD",
		price: "97.0393",
		upfrontFee: "32,000",
		cpn: "3.625",
		counterparty: "GOLDMAN SACHS ASSET MGMT LP",
		cptySpn: "1234143",
		cv: "4,800",
		clientContact: "Nolan Bradford",
		traderName: "Zoha Chung",
	},
	{
		tradeId: "FDVJ-8324",
		tradeDate: "19 Aug 22",
		bookingStatus: "LIVE STATUS",
		tradeAction: "CANCELLED",
		salespersonName: "Jamil Major",
		jpmDirection: "SELL",
		instrument: "AAPL",
		issuer: "APPLE INC",
		notional: "1,290,000",
		ccy: "USD",
		price: "115.5164",
		upfrontFee: "4,000",
		cpn: "3.2",
		counterparty: "HENDERSON FUND MANAGEMENT LIMITED (AGT)",
		cptySpn: "5631452",
		cv: "600",
		clientContact: "Shaunie Kennedy",
		traderName: "Ayra Campos",
	},
	{
		tradeId: "OMCY-102510",
		tradeDate: "19 Aug 22",
		bookingStatus: "BROKEN",
		tradeAction: "-",
		salespersonName: "Melvin Oconnor",
		jpmDirection: "BUY",
		instrument: "COST",
		issuer: "COSTCO WHOLESALE CORPORATION",
		notional: "15,200,000",
		ccy: "USD",
		price: "103.3927",
		upfrontFee: "28,670",
		cpn: "3.625",
		counterparty: "BLACKROCK JAPAN CO LTD",
		cptySpn: "8962476",
		cv: "4,300",
		clientContact: "Conah Alfaro",
		traderName: "Dianne Lennon",
	},
	{
		tradeId: "UTUW-3448",
		tradeDate: "19 Aug 22",
		bookingStatus: "LIVE STATUS",
		tradeAction: "OPEN",
		salespersonName: "Michaela Hernandez",
		jpmDirection: "SELL",
		instrument: "T",
		issuer: "AT&T INC.",
		notional: "3,100,000",
		ccy: "USD",
		price: "102.769",
		upfrontFee: "25,330",
		cpn: "3.2",
		counterparty: "MANDALAY CORPORATE ENTERPRISES, LLC",
		cptySpn: "7984722",
		cv: "3,800",
		clientContact: "Gabriella Marks",
		traderName: "Ruairidh Lancaster",
	},
	{
		tradeId: "YNDM-1667",
		tradeDate: "19 Aug 22",
		bookingStatus: "LIVE STATUS",
		tradeAction: "OPEN",
		salespersonName: "Joe Johnson",
		jpmDirection: "SELL",
		instrument: "CVX",
		issuer: "CHEVRON CORPORATION",
		notional: "990,000",
		ccy: "USD",
		price: "100.9659",
		upfrontFee: "28,000",
		cpn: "2.8",
		counterparty: "LLOYDS BANK PLC-NEW YORK",
		cptySpn: "9125402",
		cv: "4,200",
		clientContact: "Millie-Mae Mercer",
		traderName: "Ayra Campos",
	},
	{
		tradeId: "YMTM-4252",
		tradeDate: "19 Aug 22",
		bookingStatus: "LIVE STATUS",
		tradeAction: "CLOSED",
		salespersonName: "Gruffydd Dickerson",
		jpmDirection: "SELL",
		instrument: "XOM",
		issuer: "EXXON MOBILE CORPORATION",
		notional: "41,700,000",
		ccy: "USD",
		price: "100.1665",
		upfrontFee: "13,330",
		cpn: "3.625",
		counterparty: "CHINA WEALTH INVESTMENT I LIMITED",
		cptySpn: "7371732",
		cv: "2,000",
		clientContact: "Gabriella Marks",
		traderName: "Zoha Chung",
	},
	{
		tradeId: "KESS-3728",
		tradeDate: "19 Aug 22",
		bookingStatus: "LIVE STATUS",
		tradeAction: "CLOSED",
		salespersonName: "Aria Mcneill",
		jpmDirection: "SELL",
		instrument: "MSFT",
		issuer: "Microsoft Corporation",
		notional: "29,800,000",
		ccy: "USD",
		price: "99.8033",
		upfrontFee: "10,670",
		cpn: "2.3",
		counterparty: "MORGAN STANLEY INVESTMENT MGMT INC",
		cptySpn: "2903717",
		cv: "1,600",
		clientContact: "Caelan Brook",
		traderName: "Dianne Lennon",
	},
];