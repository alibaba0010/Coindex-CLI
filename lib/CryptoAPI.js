import axios from "axios";
import { handleError } from "./apiErrorHandler.js";

class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://api.nomics.com/v1/currencies/ticker";
  }
  async getPrice(coin, currency) {
    try {
      // Formatter for currency
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency,
      });

      const response = await axios.get(
        `${this.baseUrl}?key=${this.apiKey}&ids=${coin}&convert=${currency}`
      );

      let output = "";
      //coin passed as the arg cointanes all information from the vurl api
      response.data.forEach((coin) => {
        output += `Coin: ${coin.symbol} (${
          coin.name
        }) | Price: ${formatter.format(coin.price)} | Rank: ${coin.rank}\n`;
      });

      return output;
    } catch (error) {
      handleError(error);
    }
  }
}

export default CryptoAPI;
