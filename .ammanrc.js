const LOCALHOST = "http://localhost:8899";
const WSLOCALHOST = "ws://localhost:8900/";

module.exports = {
  validator: {
    killRunningValidators: true,
    programs: [
      { 
        label: 'Token Metadata Program',
        programId: "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s",
        deployPath: localDeployPath('mpl_token_metadata')
      },
      {
        label: '$RAIN redemption Program',
        programId: "tfre5zcihbycEcr1xo67saNvovdmXhQFXPM2obQqRjP",
        deployPath: localDeployPath('rain-redemption')
      },
    ],
    jsonRpcUrl: LOCALHOST,
    websocketUrl: WSLOCALHOST,
    commitment: 'singleGossip',
    ledgerDir: '.anchor/ledger',
    resetLedger: true,
    verifyFees: false,
    detached: true,//process.env.CI != null,
  },
  relay: {
    enabled: process.env.CI == null,
    killlRunningRelay: true,
  },
  storage: {
    enabled: process.env.CI == null,
    storageId: 'mock-storage',
    clearOnStart: true,
  },
}

function localDeployPath(program) {
  switch(program) {
    case 'mpl_token_metadata':
      return "../metaplex-program-library/token-metadata/target/deploy/mpl_token_metadata.so";
    case 'rain-redemption':
      return "target/deploy/redemption_v0.so";
    default:
      throw new Error(`Unknown program ${program}`);
  }
}