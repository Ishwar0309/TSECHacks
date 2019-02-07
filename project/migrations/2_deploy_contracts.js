var demo = artifacts.require("./demo.sol");
const hospital1 = '0x43D38b1E6c037B522DCbf3b21C3fec3d7E1028cE';
module.exports = function(deployer) {
  deployer.deploy(demo,hospital1 , 123);
};