const ENDPOINT = 'https://ads-api.reddit.com/api/v2.0/conversions/events/';

const ecomEventMaps = [
  {
    src: ['product viewed', 'product list viewed'],
    dest: 'ViewContent',
  },
  {
    src: ['product added'],
    dest: 'AddToCart',
  },
  {
    src: ['Product Added to Wishlist'],
    dest: 'AddToWishlist',
  },
  {
    src: ['Order Completed'],
    dest: 'Purchase',
  },
  {
    src: ['products searched'],
    dest: 'Search',
  },
];

module.exports = {
  ENDPOINT,
  ecomEventMaps,
};
