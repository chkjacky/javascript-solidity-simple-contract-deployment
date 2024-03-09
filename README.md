## What is this project about?
This is a simple solidity smart contract project that used to demostrate the deployment of the contract on the testnet.

## Getting Started
First, install NodeJS (LTS with version 18 or above) and install required dependencies on the local environment:

```bash
npm install # Do not run npm audit fix
```

Then, create `.env` file at root directory and add variables to the file:

```bash
METAMASK_MNEMONIC="Your 12 mnemonic phrases"
# DO USE YOUR METAMASK DEVELOPMENT ACCOUNT!

INFURA_SEPOLIA_URL="Your Infura Sepolia URL"
```
Click [the section below](#registering-an-infura-account) to see more on registering an Infura Account.


Third, run the tests on your local machine:

```bash
# Run the test under the test folder
npm run test

# Ensure the test result is "3 passing"
```

Then, deploy the contract to the testnet:

```bash
# Run the command
node deploy.js

# Ensure the result is
# > first account (Your metamask account wallet hash)
# > deployed contract to <contract hash>
```

## Registering An Infura Account

__Register for a free Infura Account__
> Visit https://infura.io/register and register an account. 

__Create a New Key__
> After verification, you should currently be at https://infura.io/dashboard. Click the `CREATE NEW API KEY` button and enter your desired name for this API Key. 


> You will be redirected to the API Key page, you shall land on `All Endpoints` tab, scroll down to the page and ensure the Ethereum Network -> Sepolia is checked. Then, switch to `Active Endpoints` Tab at the top of the page.


__Copy the Sepolia URL__
> At `Active Endpoints` tab, scroll down and copy the entire Sepolia URL and paste it into the `.env` file.

