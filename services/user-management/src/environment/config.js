const config = {
  name: 'User Management Service',
  baseAPIRoute: 'api',
  port: process.env.PORT || 8080,
  messagebus: process.env.MESSAGE_BUS || 'amqp://rabbitmq',
  environment: process.env.ENVIRONMENT || 'dev',
  db: {
    dbname: process.env.DB_NAME || 'Barrio-User-Management-Database',
    uri:
      process.env.DB_URI
      || 'mongodb+srv://sankara:7TYQLMuxRoHsS5nX@cluster0-4avtj.mongodb.net/test?retryWrites=true&w=majority',
    username: process.env.DB_USERNAME || 'mongoadmin',
    password: process.env.DB_PASSWORD || 'mongoadmin',
  },
  services: {},
  messageTimeout: 500,
  jwtsecret: 'yoursecretkey',
};

config.startedMessage = `${config.name} is running on port ${config.port}/`;

module.exports = config;
