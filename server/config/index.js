module.exports = {
  stage: "DEVELOPMENT",
  online: true,
  database: {
    username: "admin",
    password: "admin"
  },
  port: process.env.PORT || 1337,
  secret: "D2BD73F062D5CB6DF17ED4E33D51080C94ECAEB8BA2A4004F55DD70D042F8ABC",
  keys: {
    google: {
      clientID:
        "229055281360-gn5vht9q86l6hkqf249rrk35sqbloaab.apps.googleusercontent.com",
      clientSecret: "YSlT1b1L8JSlqNxovM2sgDun"
    }
  }
};
