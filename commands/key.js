import inquirer from "inquirer";
import KeyManager from "../lib/keyManager.js";
import { required } from "../utils/validator.js";
export const key = {
  async set() {
    const keyManager = new KeyManager();
    const input = await inquirer.prompt([
      {
        type: "input",
        name: "key",
        message: "Enter the generated API Key from https://nomics.com",
        validate: required,
      },
    ]);
    const key = keyManager.setKey(input.key);
    if (key) {
      console.log("API key Set");
    }
  },
  show() {
    try {
      const keyManager = new KeyManager();
      const key = keyManager.getKey();
      console.log("Current API Key: ", key);

      return key;
    } catch (error) {
      console.error(error.message);
    }
  },
  async remove() {
    try {
      const keyManager = new KeyManager();
      keyManager.deleteKey();
      console.log("API Key removed");
    } catch (error) {
      console.error(error.message);
    }
  },
};
