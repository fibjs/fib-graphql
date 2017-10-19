var graphql = module.exports = require('graphql');
graphql.graphqlSync = require('util').sync(graphql.graphql, true);