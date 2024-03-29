const path = require("path");
const fs = require("fs");
const solc = require("solc");

require('dotenv').config()

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "utf8");


const input = {
  language: "Solidity",
  sources: {
    "Inbox.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

// console.log(JSON.parse(solc.compile(JSON.stringify(input))).contracts);

// Note: Old codes
// JSON.parse(solc.compile(source, 1).contracts[":Inbox"])
module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  "Inbox.sol"
].Inbox;

