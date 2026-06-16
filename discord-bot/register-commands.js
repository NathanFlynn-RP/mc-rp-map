require('dotenv').config();

const { REST, Routes, SlashCommandBuilder } = require('discord.js');

const required = ['DISCORD_TOKEN', 'CLIENT_ID', 'GUILD_ID'];
for (const key of required) {
  if (!process.env[key]) {
    console.error(`Missing ${key} in .env`);
    process.exit(1);
  }
}

const commands = [
  new SlashCommandBuilder()
    .setName('mcmap')
    .setDescription('Post the MC RP interactive map link')
    .toJSON()
];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log('Registering /mcmap slash command...');
    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands }
    );
    console.log('Registered /mcmap successfully.');
  } catch (error) {
    console.error('Failed to register command:');
    console.error(error);
    process.exit(1);
  }
})();
