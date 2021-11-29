const FaucetContract = artifacts.require('FaucetContract');

module.exports = function (deployer) {
  deployer.deploy(FaucetContract);
};
