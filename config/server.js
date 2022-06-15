module.exports = ({ env }) => ({
  proxy: true,
  url: env("MY_HEROKU_URL"),
  app: {
    keys: env.array(
      "rR+H7inckBN7cVr3cXM9Gg==,eNmi21neJDAD8lsEObMLQg==,RY/ZjJJNUujydumQDMbcIQ==,oSRX3F89h/JHaCI/LbmyJw=="
    ),
  },
});
