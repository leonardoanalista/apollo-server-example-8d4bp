const _ = require('lodash');

const isPresentInQuery = _.includes;

const warmUpCache = ({ context, query }) => {
  if (isPresentInQuery(query, 'members {')) {
    console.info('>>> warming up cache for: ', context.membershipId);
    context.loaders.getMembers.load(context.membershipId);
  }
};

module.exports = warmUpCache;
