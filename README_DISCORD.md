# Add the MC RP Interactive Map to Discord

Discord cannot directly run a folder of HTML/CSS/JS from a channel message. Host the map as a website, then share the hosted link in Discord.

## Recommended setup

1. Finish your markers in the map app.
2. Click `Export JSON` and keep the backup file.
3. Upload the whole `rp-interactive-map` folder to a static web host such as GitHub Pages, Netlify, Cloudflare Pages, or your own VPS.
4. Copy the final public map URL.
5. Post it in a private Discord channel, for example `#mc-map`, `#club-intel`, or `#staff-map`.
6. Pin the message.
7. Use Discord role permissions so only the correct members can see the channel.

## Copy/paste Discord message

```text
**1% MC Interactive Map**

Use this map for club locations, jobs, gang locations, leadership intel, and required equipment.

Map link: PASTE_YOUR_MAP_URL_HERE

Rules:
- Do not share the leadership version outside approved roles.
- Export a JSON backup after major edits.
- Report wrong markers to leadership or staff.
```

## Optional Discord bot command

The included `discord-bot` folder adds a `/mcmap` slash command that sends your map link with a button.

### Bot setup

1. Install Node.js 18 or newer.
2. Go into the `discord-bot` folder.
3. Run:

```bash
npm install
```

4. Copy `.env.example` to `.env`.
5. Fill in:

```env
DISCORD_TOKEN=your_bot_token_here
CLIENT_ID=your_discord_application_client_id_here
GUILD_ID=your_discord_server_id_here
MAP_URL=https://your-hosted-map-url-here
MAP_TITLE=1% MC Interactive Map
```

6. Register the slash command:

```bash
npm run register
```

7. Start the bot:

```bash
npm start
```

8. In Discord, type:

```text
/mcmap
```

## Important security note

The map app's edit PIN is browser-side only. Do not put secret gang intel, stash details, or leadership-only route data on a public URL unless the page itself is protected by real hosting authentication or the Discord channel is private and trusted.
