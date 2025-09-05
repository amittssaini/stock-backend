const Stock = require("../services/stock.service");
const stockIntance = new Stock();
const companyData = require("../data/companyNames")
const getSingleStock = async(req,res)=>{
    try {
       
      
       const result = await Promise.all(
        companyData.map(async(stock)=>{
         let yahooData =    await stockIntance.getStockDataYahoo(stock.symbolYahoo);
          let googleData=  await stockIntance.getStockDataGoogle(stock.symbolGoogle);
          console.log("yahoo data ",yahooData);
          console.log("google data ",googleData)
            return({
                ...yahooData,peRatio:googleData.peRatio || yahooData.peRatio,
                             earnings:googleData.earnings || yahooData.earnings,
                              "purchasePrice":stock.purchasePrice,"investment":stock.investment,
                              "qty":stock.qty,"category":stock.category
            })
        })
       )
        res.send(result)
    } catch (error) {
        
    }
}

const getStock=async(req,res)=>{
    try{
        const result = await stockIntance.getPERatioAndEarnings()
        res.send(result);
    }
     catch (error) {
        
    }
}
module.exports ={getStock,getSingleStock}