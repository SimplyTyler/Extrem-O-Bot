// Copyright [2020] [Tyler-Ka and copycat240]

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

  //  http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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
