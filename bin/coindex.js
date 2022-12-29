#!/usr/bin/env node

import { program } from "commander";
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const pkg = require("../package.json");

program
  .version(pkg.name)
  .command("key", "Manage API Key --https://nomics.com")
  .parse(process.argv);
