module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'TrackAliChile',
      script    : 'server/main.js'
    }
  ],
  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'dgacitua',
      host : [ 'dgacitua.info' ],
      ref  : 'origin/master',
      repo : 'git@github.com:dgacitua/TrackAliChile.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && npm run build && npm run deploy-client && pm2 reload ecosystem.config.js --env production',
      env  : {
        NODE_ENV: 'production'
      }
    },
    dev : {
      user : 'dgacitua',
      host : [ 'localhost' ],
      ref  : 'origin/master',
      repo : 'git@github.com:dgacitua/TrackAliChile.git',
      path : '/var/www/development',
      'post-deploy' : 'npm install && npm run build && npm run deploy-client && pm2 reload ecosystem.config.js --env production',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};
