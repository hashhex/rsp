module.exports = ({ env }) => ({
  host: env('HOST'),
  port: env.int('PORT'),
  url: env('PUBLIC_URL'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    url: env('PUBLIC_ADMIN_URL'),
  },
});
