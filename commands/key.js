import inquirer from "inquirer";
import KeyManager  from "../lib/keyManager.js";

export const key = {
  set() {
    const keyManager = new KeyManager();
    

  },
  show() {
    console.log("From show!!!");
  },
  remove() {
    console.log("In remove");
    console.log("From remove!!!");
  },
};
