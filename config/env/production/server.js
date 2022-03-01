module.exports = ({ env }) => ({
  url: env("MY_HEROKU_URL", "https://list-orders.herokuapp.com/"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
});
