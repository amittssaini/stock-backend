// // Portfolio list (12 companies across sectors)
// module.exports = [
//   // IT
//   { symbol: "INFY.NS", sector: "IT" },
//   { symbol: "TCS.NS", sector: "IT" },

//   // Banking
//   { symbol: "HDFCBANK.NS", sector: "Banking" },
//   { symbol: "ICICIBANK.NS", sector: "Banking" },
//   { symbol: "SBIN.NS", sector: "Banking" },

//   // Energy
//   { symbol: "RELIANCE.NS", sector: "Energy" },
//   { symbol: "ONGC.NS", sector: "Energy" },

//   // Technology (US)
//   { symbol: "AAPL", sector: "Technology" },
//   { symbol: "MSFT", sector: "Technology" },
//   { symbol: "TSLA", sector: "Automobile" },

//   // Consumer Sector
//   { symbol: "DMART.NS", sector: "Consumer" },     // Avenue Supermarts (DMart)
//   { symbol: "PIDILITIND.NS", sector: "Consumer" } // Pidilite Industries
// ];


const portfolio = [
  {
    name: "HDFC Bank Ltd",
    symbolGoogle: "HDFCBANK:NSE",
    symbolYahoo: "HDB",
    category: "Finance",
    purchasePrice: 1490,
    qty: 50,
    investment: 74500,
  },
  {
    name: "ICICI Bank Ltd",
    symbolGoogle: "ICICIBANK:NSE",
    symbolYahoo: "IBN",
    category: "Finance",
    purchasePrice: 780,
    qty: 84,
    investment: 65520,
  },
  {
    name: "State Bank of India",
    symbolGoogle: "SBIN:NSE",
    symbolYahoo: "SBIN.NS",
    category: "Finance",
    purchasePrice: 520,
    qty: 100,
    investment: 52000,
  },
  {
    name: "Infosys Ltd",
    symbolGoogle: "INFY:NSE",
    symbolYahoo: "INFY",
    category: "IT",
    purchasePrice: 1400,
    qty: 40,
    investment: 56000,
  },
  {
    name: "Tata Consultancy Services",
    symbolGoogle: "TCS:NSE",
    symbolYahoo: "TCS.NS",
    category: "IT",
    purchasePrice: 3200,
    qty: 15,
    investment: 48000,
  },
  {
    name: "Wipro Ltd",
    symbolGoogle: "WIPRO:NSE",
    symbolYahoo: "WIPRO.NS",
    category: "IT",
    purchasePrice: 250,
    qty: 100,
    investment: 25000,
  },
  {
    name: "NTPC Ltd",
    symbolGoogle: "NTPC:NSE",
    symbolYahoo: "NTPC.NS",
    category: "Power",
    purchasePrice: 300,
    qty: 80,
    investment: 24000,
  },
  {
    name: "Power Grid Corporation",
    symbolGoogle: "POWERGRID:NSE",
    symbolYahoo: "POWERGRID.NS",
    category: "Power",
    purchasePrice: 280,
    qty: 60,
    investment: 16800,
  },
  {
    name: "Tata Power",
    symbolGoogle: "TATAPOWER:NSE",
    symbolYahoo: "TATAPOWER.NS",
    category: "Power",
    purchasePrice: 350,
    qty: 70,
    investment: 24500,
  },
  {
    name: "Hindustan Unilever",
    symbolGoogle: "HINDUNILVR:NSE",
    symbolYahoo: "HINDUNILVR.NS",
    category: "Consumer",
    purchasePrice: 2400,
    qty: 20,
    investment: 48000,
  },
  {
    name: "ITC Ltd",
    symbolGoogle: "ITC:NSE",
    symbolYahoo: "ITC.NS",
    category: "Consumer/Paper",
    purchasePrice: 410,
    qty: 60,
    investment: 24600,
  },
  {
    name: "Nestle India",
    symbolGoogle: "NESTLEIND:NSE",
    symbolYahoo: "NESTLEIND.NS",
    category: "Consumer",
    purchasePrice: 1200,
    qty: 30,
    investment: 36000,
  },
  {
    name: "JK Paper Ltd",
    symbolGoogle: "JKPAPER:NSE",
    symbolYahoo: "JKPAPER.NS",
    category: "Paper",
    purchasePrice: 380,
    qty: 50,
    investment: 19000,
  },
  {
    name: "Reliance Industries Ltd",
    symbolGoogle: "RELIANCE:NSE",
    symbolYahoo: "RELIANCE.NS",
    category: "Other",
    purchasePrice: 2300,
    qty: 20,
    investment: 46000,
  },
  {
    name: "Adani Enterprises",
    symbolGoogle: "ADANIENT:NSE",
    symbolYahoo: "ADANIENT.NS",
    category: "Other",
    purchasePrice: 2000,
    qty: 15,
    investment: 30000,
  },
];

module.exports = portfolio;
