# Coindex CLI

Command line interface written in Node.js to check cryptocurrency prices.

Register an API key at https://nomics.com

## Usage

```
npm install

npm link
```

## Commands

```
# Help & Commands
coindex -h

# Version
coindex -V

# API Key Commands
coindex key set
coindex key show
coindex key remove

# Crypto Check Commands
coindex check price, stats
```
# Check Specific Coins (default: BTN,ETH,XRP)
coindex check --coin=BTC,ETH,XRP

# Choose Currency (Default: USD)
coindex check --cur=USD
```