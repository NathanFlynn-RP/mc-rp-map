require('dotenv').config();

const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Client,
  EmbedBuilder,
  GatewayIntentBits
} = require('discord.js');

const required = ['DISCORD_TOKEN', 'MAP_URL'];
for (const key of required) {
  if (!process.env[key]) {
    console.error(`Missing ${key} in .env`);
    process.exit(1);
  }
}

const mapTitle = process.env.MAP_TITLE || 'MC RP Interactive Map';
const mapUrl = process.env.MAP_URL;

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('interactionCreate', async (interaction) => {
  try {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.commandName !== 'mcmap') return;

    const embed = new EmbedBuilder()
      .setTitle(mapTitle)
      .setURL(mapUrl)
      .setDescription('Open the interactive RP map for club locations, jobs, gang locations, leadership intel, and required equipment.')
      .addFields(
        { name: 'Access', value: 'Use only in approved Discord channels/roles.', inline: true },
        { name: 'Backups', value: 'Export JSON after major marker edits.', inline: true }
      );

    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel('Open map')
        .setStyle(ButtonStyle.Link)
        .setURL(mapUrl)
    );

    await interaction.reply({ embeds: [embed], components: [row] });
  } catch (error) {
    console.error(error);
    if (interaction.isRepliable()) {
      await interaction.reply({ content: 'Could not post the map link. Check the bot logs.', ephemeral: true });
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
