import { program } from "commander";
import { check } from "../commands/check.js";

program
  .command("price")
  .description("Check price of coins")
  .option(
    "--coin <type>",
    "Add specific coin types in CSV format",
    "BTC,ETH,XRP"
  )
  .option("--cur <currency>", "Change the currency format", "USD")
  .action((cmd) => check.price(cmd));

program
  .command("stats")
  .description("Set API Key --Get key @ https://nomics.com");
//   .action(check.set);

program.parse(process.argv);
