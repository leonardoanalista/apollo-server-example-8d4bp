const DataLoader = require("dataloader");

const model = require("./models");

const createLoaders = () => {
  return {
    getMembership: new DataLoader(ids => {
      // console.info("DATA_LOADER - membership...", ids);
      return Promise.all([model.getMembership(ids[0])]);
    }),
    getMembers: new DataLoader(ids => {
      // console.info("DATA_LOADER - membersList...", ids);
      return Promise.all([model.getMembers(ids[0])]);
    })
  };
};

module.exports = createLoaders;
