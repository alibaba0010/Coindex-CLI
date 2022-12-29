import KeyManager from "../lib/keyManager.js";
import CryptoAPI from "../lib/CryptoAPI.js";
import { handleError } from "../lib/apiErrorHandler.js";

export const check = {
  async price(cmd) {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();

      // need original apiKey
      const api = new CryptoAPI(key);

      const priceData = await api.getPrice(cmd.coin, cmd.cur);

      console.log(priceData);
    } catch (error) {
      console.log(error.message);
    }
  },
};
