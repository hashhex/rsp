'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

 const slugify = require('slugify');
 const option_slugify = {
   lower: true,
   remove: /[*+~.,()'"!:@?ьЁёъ=]/g,
 }

module.exports = {
    lifecycles: {
        async beforeCreate(data) {
          if (data.title) {
            data.slug = slugify(data.title, option_slugify);
          }
        },
        async beforeUpdate(params, data) {
          if (data.title) {
            data.slug = slugify(data.title, option_slugify);
          }
        },
    }
};