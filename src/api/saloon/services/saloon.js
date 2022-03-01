'use strict';

/**
 * saloon service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::saloon.saloon');
