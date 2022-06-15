import { Module } from '@nuxt/types';

/* eslint-disable unicorn/prefer-module */
const path = require('path');

const nuxtModule : Module = function algoliaModule(options) {

  this.extendBuild((config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['@vue-storefront/algolia-api$'] = require.resolve('@vue-storefront/algolia-api');
  });

  this.addPlugin({
    src: path.resolve(__dirname, './plugin.ts'),
    options,
  });
};

export default nuxtModule;
