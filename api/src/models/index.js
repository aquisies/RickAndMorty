const {Sequelize}= require('sequelize');
const { dbUser, dbName,dbPort, dbHost,dbPassword}= require('../utils/config')

const CharacterFactory=require('./Characters'); 
const EpisodesFactory=require('./Episodes'); 

const sequelize= new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`);

const Character = CharacterFactory(sequelize);
const Episode = EpisodesFactory(sequelize);

// Estableciendo las relaciones

Character.belongsToMany(Episode, {through:'CharacterEpisode', as : 'episode'});
Episode.belongsToMany(Character, {through:'CharacterEpisode', as : 'episode'});

module.exports={
    conn:sequelize,
    Character,
    Episode
}