import { program } from "commander";
import { key } from "../commands/key.js";

program
  .command("set")
  .description("Set API Key --Get key @ https://nomics.com")
  .action(key.set);

program
  .command("show")
  .description("Show API Key --Get key @ https://nomics.com")
  .action(key.show);

program
  .command("remove")
  .description("Remove API Key --Get key @ https://nomics.com")
  .action(key.remove);

program.parse(process.argv);
