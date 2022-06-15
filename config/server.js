module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array(
      "rR+H7inckBN7cVr3cXM9Gg==,eNmi21neJDAD8lsEObMLQg==,RY/ZjJJNUujydumQDMbcIQ==,oSRX3F89h/JHaCI/LbmyJw=="
    ),
  },
});
