import Configstore from "configstore";

import { createRequire } from "module";
const require = createRequire(import.meta.url);

const pkg = require("../package.json");

class KeyManager {
  constructor() {
    this.conf = new Configstore(pkg.name);
  }

  setKey(key) {
    this.conf.set("key", key); // changed from apikey
    return key;
  }

  getKey() {
    // can pass prop in to get more info
    const key = this.conf.get("key");

    if (!key) {
      throw new Error("No API Key Found - Get an API key at https://nomics.com");
    }

    return key;
  }

  deleteKey() {
    const key = this.conf.get("key");

    if (!key) {
      throw new Error("No API Key Found - Get an API key at https://nomics.com");
    }

    this.conf.delete("key");

    return;
  }
}

export default KeyManager;
// might change apikey in cryptojs
