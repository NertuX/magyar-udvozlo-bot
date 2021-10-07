const Discord = require("discord.js");

module.exports = (client) => {
  const channelId = "Üdvözlő Csatorna ID-ja";
  client.on("guildMemberAdd", (member) => {

    const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setTitle(member.user.tag + " Belépett!")
    .setDescription(`Üdvözöllek \`${member.user.tag}\` a **${member.guild.name}** szerveren!`)
    .addField(`Jelenlegi tagok száma: `, member.guild.memberCount, true)
    .setTimestamp()
    .setFooter(member.guild.name)
    const channel = member.guild.channels.cache.get(channelId);
    channel.send(embed)
  });

  client.on("guildMemberRemove", (member) => {

    const embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle(member.user.tag + " Kilépett!")
        .setDescription(`\`${member.user.tag}\` Kilépett a szerverről!`)
        .addField(`Jelenlegi tagok száma: `, member.guild.memberCount, true)
        .setTimestamp()
        .setFooter(member.guild.name)
        const channel = member.guild.channels.cache.get(channelId);
        channel.send(embed)
  });
};
