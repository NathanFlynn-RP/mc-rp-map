# GitHub Auto-Update Setup

This version can save marker edits back to GitHub by committing `data/map-data.json` through the GitHub REST API.

## What this does

- Viewers can open the GitHub Pages website normally.
- Editors can enter edit mode, connect GitHub, and save marker changes to the repository.
- The app commits the map data to `data/map-data.json`.
- GitHub Pages may take a few minutes before the public website shows the committed changes to everyone.

## Security warning

Do not put a GitHub token directly into `app.js`, `index.html`, or any file in the repository.

Only trusted admins should enter a token in the browser. Normal viewers do not need a token.

The edit PIN is not real security. It only hides editing controls in the browser.

## GitHub token needed

Create a fine-grained personal access token with access only to this repository.

Required repository permission:

- Contents: Read and write

Recommended settings:

- Repository access: Only `mc-rp-map`
- Expiration: 30, 60, or 90 days
- Permissions: Contents read/write only

## First upload

Upload these files directly to the root of your GitHub repository:

```text
index.html
app.js
styles.css
data/
README.md
README_DISCORD.md
README_GITHUB_AUTO_UPDATE.md
client.lua
fxmanifest.lua
discord-bot/
```

The root of the repo should show `index.html` without clicking into another folder.

## GitHub Pages settings

Use:

```text
Settings -> Pages
Source: Deploy from a branch
Branch: main
Folder: /root
```

Your website should be:

```text
https://YOUR-GITHUB-USERNAME.github.io/mc-rp-map/
```

## Editor setup inside the map

1. Open the website.
2. Click `Enable edit mode`.
3. Enter the edit PIN.
4. In the `GitHub auto-update` panel, check these fields:

```text
GitHub owner: your GitHub username
Repository name: mc-rp-map
Branch: main
Data file path: data/map-data.json
GitHub token: your fine-grained token
```

5. Click `Save GitHub config`.
6. Click `Save to GitHub now` to test.
7. Turn on `Auto-save marker changes to GitHub`.

## Normal workflow

```text
Edit marker -> Save marker -> app saves locally -> app commits data/map-data.json to GitHub
```

If you make many edits fast, the app waits briefly and commits after you stop changing things.

## If other people do not see updates yet

Wait a few minutes. GitHub Pages can take time to publish the new committed file.

You can also tell editors to click:

```text
Load latest from GitHub
```

This pulls the newest `data/map-data.json` directly from the repo.

## If saving fails

Check these:

- Token has Contents read/write permission.
- Token is for the correct repository.
- Repository owner and repo name are correct.
- Branch is `main`.
- File path is `data/map-data.json`.
- The repo is not blocked by organization token policies.
