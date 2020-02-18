const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find(ch => ch.name === 'channelname');
  if (!channel) return;
  channel.send(`Welcome ${member}`);
});
  // This is a case sensitive message
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong')
  }
})
  // This is a keyword message, it finds the "donate" in a message
client.on('message', (msg) => {
	if (msg.content.toLowerCase().includes('donate'))
	msg.channel.send(new Discord.MessageEmbed()
			.setTitle('Click here to donate!')
			.setDescription('Donations are processed through a secure page on our website!')
			.setURL(http://www.donate.com/)
		  .setColor(0xd3d3d3)
			.setTimestamp(new Date()));
})

client.login(config.token);
