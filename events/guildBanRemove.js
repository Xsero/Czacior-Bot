const {RichEmbed} = require('discord.js');
module.exports = (guild, user) => {
  console.log(`Użytkownik ${user.username} został odbanowany.`);
  guild.channels.get(guild.channels.find('name', 'wchodzenie_wychodzenie').id).send(`Użytkownik **${user.username}** został odbanowany.`);
  user.send('Mamy świetną nowinę! Właśnie cię odbanowano na najlepszym serwerze Czacior! Łap zaproszenie i się ciesz: https://discord.gg/Gew6cRE :smile:');
};
