module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e2062fd0692710679c245862fe5a8317'),
  },
});
