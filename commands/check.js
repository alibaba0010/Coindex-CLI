import KeyManager from "../lib/keyManager.js";
import CryptoAPI from "../lib/CryptoAPI.js";

export const check = {
  async price(cmd) {
    try {
      console.log(`${cmd.coin } with ${cmd.cur} `);
      const keyManager = new KeyManager();
      const key = keyManager.getKey();
    } catch (error) {
      console.error(error.message);
    }
  },
};
