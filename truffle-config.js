var HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = 'test test test test test test test test test test test junk';

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
        return new HDWalletProvider(
          mnemonic,
          'https://ropsten.infura.io/v3/5432059639464b2e9387e0c72857cfa3'
        );
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
