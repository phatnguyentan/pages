
let config = {}
switch(process.env.NODE_ENV){
  case 'production':
      config = {

      };
  default:
    config = {
      protocol: "http",
      host: "localhost",
      port: 8000
    };
}
config.url = `${config.protocol}://${config.host}:${config.port}`
config.basedir = `${__dirname}/../../`
module.exports = config
