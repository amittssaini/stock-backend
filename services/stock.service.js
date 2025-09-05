const yahooFinance = require('yahoo-finance2').default;
const axios = require("axios");
const cheerio = require("cheerio");

class Stock{
    
    async getStockDataYahoo(symbol){
        try {
            console.log("in the service function ");
            const data = await yahooFinance.quote(symbol);
          
          const companyData={   
                                name: data.shortName,
                                cmp: data.regularMarketPrice,
                                peRatio: data.trailingPE || null,
                                earnings: data.epsTrailingTwelveMonths || null,
                                currency: data.currency,
                                exchange: data.fullExchangeName,
                            }
                return companyData;

        } catch (error) {
            
        }
    }



  async getStockDataGoogle(symbol) {
    try {
      console.log("Fetching Google Finance data for:", symbol);

      const url = `https://www.google.com/finance/quote/${symbol}`;
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);

      let peRatio = null;
      let earnings = null;

      $("div.P6K39c").each((i, el) => {
        const label = $(el).find("div.mfs7Fc").text().trim();
        const value = $(el).find("div span").last().text().trim();

        if (label.includes("P/E")) peRatio = value;
        if (label.includes("EPS")) earnings = value;
      });

      return { symbol, peRatio, earnings };
    } catch (error) {
      console.error("Google Finance fetch error:", error.message);
      return { symbol, peRatio: null, earnings: null };
    }
  }






  async  getPERatioAndEarnings(symbol = "RELIANCE:NSE") {
   try {
    const url = `https://www.google.com/finance/quote/${symbol}`;
    const { data } = await axios.get(url);
    console.log(data);
    const $ = cheerio.load(data);

    let peRatio = null;
    let earnings = null;

      // Each row of stats is inside `div.P6K39c`
    $("div.P6K39c").each((i, el) => {
      const label = $(el).find("div.mfs7Fc").text().trim();
      const value = $(el).find("div span").first().text().trim();

      if (label.toLowerCase().includes("p/e")) {
        peRatio = value || "Not Found";
      }

      if (label.toLowerCase().includes("eps")) {
        earnings = value || "Not Found";
      }
    });
    console.log("peRAtio",peRatio)
    return {
      symbol,
      peRatio: peRatio || "Not Found",
      earnings: earnings || "Not Found",
    };
  }
    catch (err) {
    console.error("Error fetching data:", err.message);
    return { symbol, peRatio: "Error", earnings: "Error" };
  }
}
}

module.exports = Stock;