# MC RP Interactive Map

This is a self-contained editable interactive map for a GTA V/FiveM RP server.
It lets you add and edit:

- MC locations
- Gang locations
- Job locations
- Equipment pickup/staging points
- Leadership names and ranks
- Required job equipment
- Visibility levels
- Notes and RP instructions

The app saves changes in the browser using localStorage and supports JSON export/import for backups.

## Browser use

1. Open `index.html` in a browser.
2. Click `Enable edit mode`.
3. Default PIN: `1111`.
4. Use `Add marker` or double-click the map while edit mode is enabled.
5. Edit marker details and save.
6. Use `Export JSON` to back up your map.

## Replacing the map image

Open edit mode, then use `Map settings`.

You can either:

- Paste an image path or URL into `Map image URL/path`.
- Upload a local image using `Upload map image`.

The included image is only a placeholder. Replace it with your own GTA V/FiveM map image or server map export.

## FiveM use

1. Rename the folder to something simple, for example `mc_rp_interactive_map`.
2. Put the folder into your server `resources` folder.
3. Add this to `server.cfg`:

```cfg
ensure mc_rp_interactive_map
```

4. Restart the server or start the resource.
5. In game, use `/mcmap` or press `F7` to open the map.

## Editing permissions

The edit PIN is only a simple browser-side lock. It is not secure authentication.
For a private leadership-only version, do not share the resource or exported JSON with players who should not see restricted info.

## Backup and transfer

Use `Export JSON` after edits. Keep that file somewhere safe.
Use `Import JSON` to restore the map on another computer or after clearing browser data.

## Common customizations

### Change the default PIN

Open edit mode, go to `Map settings`, change `Edit mode PIN`, and save settings.

### Change the F7 keybind

Edit `client.lua` and change this line:

```lua
RegisterKeyMapping('mcmap', 'Open MC RP interactive map', 'keyboard', 'F7')
```

### Change marker colors

Edit the CSS variables in `styles.css`:

```css
--mc: #3c8cff;
--gang: #9b59ff;
--job: #48c774;
--equipment: #f2c94c;
--intel: #e06464;
```

## Data format

The exported JSON contains:

```json
{
  "settings": {
    "title": "1% MC Interactive Map",
    "mapImage": "data/default-map.svg",
    "editPin": "1111"
  },
  "markers": []
}
```

Each marker supports these fields:

- id
- name
- category
- x
- y
- visibility
- controlledBy
- leaderName
- leaderRank
- jobType
- risk
- roles
- cooldown
- equipment
- notes

## Discord use

For Discord, host this folder as a website first. Discord messages can link to the hosted map, but they cannot directly run this HTML folder from inside a normal text channel.

See `README_DISCORD.md` for:

- A copy/paste pinned Discord message
- Hosting flow
- Private channel recommendations
- Optional `/mcmap` Discord bot command
