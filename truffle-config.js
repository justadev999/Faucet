var HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = process.env.METAMASK_MNEMONIC;

module.exports = {
  contracts_build_directory: './public/contracts',
  networks: {
    development: {
      host: '127.0.0.1', // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: '*', // Any network (default: none)
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider(mnemonic, process.env.INFURA_API_KEY);
      },
      network_id: 3,
      gas: 4000000, //make sure this gas allocation isn't over 4M, which is the max
    },
  },
  mocha: {},
  compilers: {
    solc: {
      version: '0.8.4', // Fetch exact version from solc-bin (default: truffle's version)
    },
  },
};
