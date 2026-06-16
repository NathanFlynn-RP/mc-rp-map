const STORAGE_KEY = "mc_rp_interactive_map_v2";
const SYNC_CONFIG_KEY = "mc_rp_map_github_sync_v1";
const SYNC_TOKEN_LOCAL_KEY = "mc_rp_map_github_token_local_v1";
const SYNC_TOKEN_SESSION_KEY = "mc_rp_map_github_token_session_v1";

const categories = {
  mc: { label: "MC location", short: "MC" },
  gang: { label: "Gang location", short: "G" },
  job: { label: "Job", short: "J" },
  equipment: { label: "Equipment", short: "E" },
  intel: { label: "Leadership intel", short: "I" },
  custom: { label: "Custom", short: "C" }
};

const defaultState = {
  "settings": {
    "title": "Interactive Map",
    "mapImage": "https://www.igta5.com/images/gtav-map-atlas-huge.jpg",
    "editPin": "2001"
  },
  "markers": [
    {
      "id": "mc_clubhouse_sandy",
      "name": " DULLUHANS MC ",
      "category": "mc",
      "x": 61.45,
      "y": 35.63,
      "visibility": "public",
      "controlledBy": "Your MC",
      "leaderName": "Doug Boyd",
      "leaderRank": "President",
      "jobType": "",
      "risk": "None",
      "roles": "",
      "cooldown": "",
      "equipment": "",
      "notes": "Main meeting point. potential club house"
    },
    {
      "id": "gang_turf_sample",
      "name": "Eastside Ballas",
      "category": "gang",
      "x": 47.64,
      "y": 80.4,
      "visibility": "public",
      "controlledBy": "ESB",
      "leaderName": "",
      "leaderRank": "",
      "jobType": "",
      "risk": "Medium",
      "roles": "",
      "cooldown": "",
      "equipment": "",
      "notes": ""
    },
    {
      "id": "job_chop_shop_sample",
      "name": "Chop Shop ",
      "category": "job",
      "x": 49,
      "y": 37.98,
      "visibility": "members",
      "controlledBy": "FSG",
      "leaderName": "",
      "leaderRank": "",
      "jobType": "Criminal Job",
      "risk": "Medium",
      "roles": "",
      "cooldown": "",
      "equipment": "Lockpick @ $35 per",
      "notes": ""
    },
    {
      "id": "equipment_supply_sample",
      "name": "Illegal goods drops",
      "category": "job",
      "x": 69.5,
      "y": 29.41,
      "visibility": "public",
      "controlledBy": "",
      "leaderName": "",
      "leaderRank": "",
      "jobType": "",
      "risk": "Low",
      "roles": "",
      "cooldown": "",
      "equipment": "",
      "notes": "Drop off Illegal Goods for cash or rolls \nnote the car is unregistered. "
    },
    {
      "id": "marker_1781612953238_56f243",
      "name": "Chop Shop ",
      "category": "job",
      "x": 52.42,
      "y": 85.94,
      "visibility": "members",
      "controlledBy": "CB",
      "leaderName": "",
      "leaderRank": "",
      "jobType": "Criminal Job",
      "risk": "Medium",
      "roles": "",
      "cooldown": "",
      "equipment": "Lockpick @ $35 per",
      "notes": ""
    },
    {
      "id": "marker_1781613271155_bd7df3",
      "name": "Cypress Bravos",
      "category": "gang",
      "x": 52.46,
      "y": 80.07,
      "visibility": "public",
      "controlledBy": "CB",
      "leaderName": "",
      "leaderRank": "",
      "jobType": "",
      "risk": "Medium",
      "roles": "",
      "cooldown": "",
      "equipment": "",
      "notes": ""
    },
    {
      "id": "marker_1781613394441_f72e8b",
      "name": "Valhalla's Chosen MC",
      "category": "gang",
      "x": 60.34,
      "y": 25.12,
      "visibility": "public",
      "controlledBy": "VC MC",
      "leaderName": "",
      "leaderRank": "",
      "jobType": "",
      "risk": "Low",
      "roles": "",
      "cooldown": "",
      "equipment": "",
      "notes": ""
    },
    {
      "id": "marker_1781613557439_976f2e",
      "name": "Revelation MC",
      "category": "gang",
      "x": 44.69,
      "y": 15.35,
      "visibility": "public",
      "controlledBy": "Revelation MC",
      "leaderName": "",
      "leaderRank": "",
      "jobType": "",
      "risk": "Medium",
      "roles": "",
      "cooldown": "",
      "equipment": "",
      "notes": ""
    },
    {
      "id": "marker_1781613742365_99080e",
      "name": "Pillbox Cartel",
      "category": "gang",
      "x": 48.52,
      "y": 71.69,
      "visibility": "public",
      "controlledBy": "PBC",
      "leaderName": "",
      "leaderRank": "",
      "jobType": "",
      "risk": "Medium",
      "roles": "",
      "cooldown": "",
      "equipment": "",
      "notes": ""
    },
    {
      "id": "marker_1781613833947_1b1223",
      "name": "FADED SHADES OF GRAY",
      "category": "gang",
      "x": 51.81,
      "y": 45.99,
      "visibility": "public",
      "controlledBy": "FSG",
      "leaderName": "",
      "leaderRank": "",
      "jobType": "",
      "risk": "Medium",
      "roles": "",
      "cooldown": "",
      "equipment": "",
      "notes": ""
    },
    {
      "id": "marker_1781614078610_b37588",
      "name": "Varrio Davis Locos",
      "category": "gang",
      "x": 48.43,
      "y": 83.5,
      "visibility": "public",
      "controlledBy": "VDL",
      "leaderName": "Ramon Espina",
      "leaderRank": "Jefe",
      "jobType": "",
      "risk": "Medium",
      "roles": "",
      "cooldown": "",
      "equipment": "",
      "notes": ""
    },
    {
      "id": "marker_1781614277281_c15e24",
      "name": "Black Lotus MC",
      "category": "gang",
      "x": 53.63,
      "y": 67.89,
      "visibility": "public",
      "controlledBy": "BL MC",
      "leaderName": "Larry Tate",
      "leaderRank": "President",
      "jobType": "",
      "risk": "Medium",
      "roles": "",
      "cooldown": "",
      "equipment": "",
      "notes": ""
    },
    {
      "id": "marker_1781614469169_3b08c0",
      "name": "CDIV",
      "category": "gang",
      "x": 40.53,
      "y": 74,
      "visibility": "public",
      "controlledBy": "CDIV",
      "leaderName": "",
      "leaderRank": "",
      "jobType": "",
      "risk": "Medium",
      "roles": "",
      "cooldown": "",
      "equipment": "",
      "notes": ""
    }
  ]
};

let state = structuredClone(defaultState);
let editMode = false;
let selectedMarkerId = null;
let filters = Object.fromEntries(Object.keys(categories).map((key) => [key, true]));
let searchText = "";
let transform = { x: 0, y: 0, scale: 0.6 };
let dragState = null;
let markerDragState = null;
let githubSync = loadGithubSyncConfig();
let githubAutoSaveTimer = null;
let githubSaveInProgress = false;

const $ = (id) => document.getElementById(id);

const els = {
  body: document.body,
  app: $("app"),
  mapTitle: $("mapTitle"),
  statusText: $("statusText"),
  countText: $("countText"),
  mapViewport: $("mapViewport"),
  mapContent: $("mapContent"),
  mapImage: $("mapImage"),
  markerLayer: $("markerLayer"),
  filterList: $("filterList"),
  markerList: $("markerList"),
  searchInput: $("searchInput"),
  editToggleBtn: $("editToggleBtn"),
  addMarkerBtn: $("addMarkerBtn"),
  exportBtn: $("exportBtn"),
  importInput: $("importInput"),
  clickHint: $("clickHint"),
  markerModal: $("markerModal"),
  markerForm: $("markerForm"),
  closeModalBtn: $("closeModalBtn"),
  duplicateBtn: $("duplicateBtn"),
  deleteMarkerBtn: $("deleteMarkerBtn"),
  zoomInBtn: $("zoomInBtn"),
  zoomOutBtn: $("zoomOutBtn"),
  zoomResetBtn: $("zoomResetBtn"),
  titleInput: $("titleInput"),
  mapImageInput: $("mapImageInput"),
  mapImageUpload: $("mapImageUpload"),
  pinInput: $("pinInput"),
  saveSettingsBtn: $("saveSettingsBtn"),
  resetBtn: $("resetBtn"),
  fivemCloseBtn: $("fivemCloseBtn"),
  githubOwnerInput: $("githubOwnerInput"),
  githubRepoInput: $("githubRepoInput"),
  githubBranchInput: $("githubBranchInput"),
  githubPathInput: $("githubPathInput"),
  githubTokenInput: $("githubTokenInput"),
  githubRememberTokenInput: $("githubRememberTokenInput"),
  githubAutoSaveInput: $("githubAutoSaveInput"),
  githubSaveConfigBtn: $("githubSaveConfigBtn"),
  githubLoadBtn: $("githubLoadBtn"),
  githubSaveNowBtn: $("githubSaveNowBtn"),
  githubStatus: $("githubStatus")
};

const form = {
  id: $("markerId"),
  name: $("nameInput"),
  category: $("categoryInput"),
  x: $("xInput"),
  y: $("yInput"),
  visibility: $("visibilityInput"),
  controlledBy: $("controlledByInput"),
  leaderName: $("leaderNameInput"),
  leaderRank: $("leaderRankInput"),
  jobType: $("jobTypeInput"),
  risk: $("riskInput"),
  roles: $("rolesInput"),
  cooldown: $("cooldownInput"),
  equipment: $("equipmentInput"),
  notes: $("notesInput")
};

async function boot() {
  state = await loadInitialState();
  init();
}

async function loadInitialState() {
  const local = loadLocalState();
  if (local) return local;

  const bundled = await loadBundledMapData();
  if (bundled) return bundled;

  return structuredClone(defaultState);
}

function loadLocalState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return normalizeState(JSON.parse(raw));
  } catch (error) {
    console.warn("Failed to load local map data:", error);
    return null;
  }
}

async function loadBundledMapData() {
  try {
    const response = await fetch(`data/map-data.json?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) return null;
    return normalizeState(await response.json());
  } catch (error) {
    console.warn("Failed to load bundled map data:", error);
    return null;
  }
}

function normalizeState(input) {
  const normalized = structuredClone(defaultState);
  normalized.settings = { ...normalized.settings, ...(input.settings || {}) };
  normalized.markers = Array.isArray(input.markers) ? input.markers.map(normalizeMarker) : normalized.markers;
  return normalized;
}

function normalizeMarker(marker) {
  return {
    id: String(marker.id || makeId()),
    name: String(marker.name || "Untitled marker"),
    category: categories[marker.category] ? marker.category : "custom",
    x: clamp(Number(marker.x ?? 50), 0, 100),
    y: clamp(Number(marker.y ?? 50), 0, 100),
    visibility: String(marker.visibility || "public"),
    controlledBy: String(marker.controlledBy || ""),
    leaderName: String(marker.leaderName || ""),
    leaderRank: String(marker.leaderRank || ""),
    jobType: String(marker.jobType || ""),
    risk: String(marker.risk || "None"),
    roles: String(marker.roles || ""),
    cooldown: String(marker.cooldown || ""),
    equipment: String(marker.equipment || ""),
    notes: String(marker.notes || "")
  };
}

function saveState(options = {}) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state, null, 2));
  if (!options.skipGithubAutoSave) scheduleGithubAutoSave();
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function makeId() {
  return `marker_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function init() {
  if (window.location.protocol === "nui:") {
    document.body.classList.add("fivem-hidden");
    els.fivemCloseBtn.classList.remove("hidden");
  }

  buildFilters();
  bindEvents();
  applySettings();
  applyGithubSyncSettingsToUi();
  centerMap();
  render();
}

function applySettings() {
  els.mapTitle.textContent = state.settings.title;
  els.mapImage.src = state.settings.mapImage || defaultState.settings.mapImage;
  els.titleInput.value = state.settings.title;
  els.mapImageInput.value = state.settings.mapImage;
  els.pinInput.value = state.settings.editPin;
}

function buildFilters() {
  els.filterList.innerHTML = "";
  Object.entries(categories).forEach(([key, meta]) => {
    const row = document.createElement("div");
    row.className = "filter-row";
    row.innerHTML = `
      <label>
        <input type="checkbox" data-filter="${key}" checked />
        <span>${escapeHtml(meta.label)}</span>
      </label>
      <small>${escapeHtml(meta.short)}</small>
    `;
    els.filterList.appendChild(row);
  });
}

function bindEvents() {
  els.editToggleBtn.addEventListener("click", toggleEditMode);
  els.addMarkerBtn.addEventListener("click", () => {
    if (!editMode) return alert("Enable edit mode first.");
    openMarkerModal(newMarkerAt(50, 50));
  });
  els.exportBtn.addEventListener("click", exportJson);
  els.importInput.addEventListener("change", importJson);
  els.searchInput.addEventListener("input", (event) => {
    searchText = event.target.value.trim().toLowerCase();
    render();
  });
  els.filterList.addEventListener("change", (event) => {
    const key = event.target.dataset.filter;
    if (!key) return;
    filters[key] = event.target.checked;
    render();
  });
  els.markerLayer.addEventListener("click", markerLayerClick);
  els.markerLayer.addEventListener("mousedown", markerLayerMouseDown);
  els.markerList.addEventListener("click", markerListClick);
  els.mapViewport.addEventListener("mousedown", startPan);
  window.addEventListener("mousemove", onPointerMove);
  window.addEventListener("mouseup", endPointerAction);
  els.mapViewport.addEventListener("wheel", onWheel, { passive: false });
  els.mapViewport.addEventListener("dblclick", addMarkerFromDoubleClick);
  els.closeModalBtn.addEventListener("click", closeMarkerModal);
  els.markerModal.addEventListener("click", (event) => {
    if (event.target === els.markerModal) closeMarkerModal();
  });
  els.markerForm.addEventListener("submit", saveMarkerFromForm);
  els.duplicateBtn.addEventListener("click", duplicateCurrentMarker);
  els.deleteMarkerBtn.addEventListener("click", deleteCurrentMarker);
  els.zoomInBtn.addEventListener("click", () => zoomAtCenter(1.18));
  els.zoomOutBtn.addEventListener("click", () => zoomAtCenter(0.85));
  els.zoomResetBtn.addEventListener("click", centerMap);
  els.saveSettingsBtn.addEventListener("click", saveSettings);
  els.mapImageUpload.addEventListener("change", uploadMapImage);
  els.resetBtn.addEventListener("click", resetLocalData);
  els.fivemCloseBtn.addEventListener("click", closeFiveM);
  els.githubSaveConfigBtn.addEventListener("click", saveGithubSyncConfigFromUi);
  els.githubLoadBtn.addEventListener("click", loadLatestFromGithub);
  els.githubSaveNowBtn.addEventListener("click", () => saveToGithub({ manual: true }));
  els.githubAutoSaveInput.addEventListener("change", saveGithubSyncConfigFromUi);
  window.addEventListener("message", handleFiveMMessage);
  window.addEventListener("keydown", handleKeyDown);
}

function handleKeyDown(event) {
  if (event.key === "Escape") {
    if (!els.markerModal.classList.contains("hidden")) closeMarkerModal();
    else if (window.location.protocol === "nui:") closeFiveM();
  }
}

function toggleEditMode() {
  if (!editMode) {
    const pin = prompt("Enter edit mode PIN:", "");
    if (pin !== state.settings.editPin) {
      alert("Incorrect PIN.");
      return;
    }
  }
  editMode = !editMode;
  document.body.classList.toggle("edit-mode", editMode);
  els.editToggleBtn.textContent = editMode ? "Disable edit mode" : "Enable edit mode";
  els.statusText.textContent = editMode ? "Edit mode" : "View mode";
  els.clickHint.classList.toggle("hidden", !editMode);
  render();
}

function markerMatches(marker) {
  if (!filters[marker.category]) return false;
  if (!searchText) return true;
  const haystack = [
    marker.name,
    marker.category,
    marker.visibility,
    marker.controlledBy,
    marker.leaderName,
    marker.leaderRank,
    marker.jobType,
    marker.risk,
    marker.roles,
    marker.cooldown,
    marker.equipment,
    marker.notes
  ].join(" ").toLowerCase();
  return haystack.includes(searchText);
}

function getVisibleMarkers() {
  return state.markers.filter(markerMatches);
}

function render() {
  const markers = getVisibleMarkers();
  renderMarkers(markers);
  renderMarkerList(markers);
  els.countText.textContent = `${markers.length} of ${state.markers.length} markers shown`;
  applyTransform();
}

function renderMarkers(markers) {
  els.markerLayer.innerHTML = "";
  markers.forEach((marker) => {
    const button = document.createElement("button");
    button.className = `map-marker marker-${marker.category}${selectedMarkerId === marker.id ? " selected" : ""}`;
    button.dataset.id = marker.id;
    button.title = marker.name;
    button.style.left = `${marker.x}%`;
    button.style.top = `${marker.y}%`;
    button.innerHTML = `<span class="marker-pin"><span>${escapeHtml(categories[marker.category].short)}</span></span>`;
    els.markerLayer.appendChild(button);
  });

  const selected = state.markers.find((marker) => marker.id === selectedMarkerId);
  if (selected && markerMatches(selected)) addPopup(selected);
}

function addPopup(marker) {
  const popup = document.createElement("article");
  popup.className = "popup-card";
  popup.style.left = `${marker.x}%`;
  popup.style.top = `${marker.y}%`;

  const rows = [
    ["Category", categories[marker.category].label],
    ["Visibility", marker.visibility],
    ["Controlled by", marker.controlledBy],
    ["Leader", [marker.leaderName, marker.leaderRank].filter(Boolean).join(" - ")],
    ["Job type", marker.jobType],
    ["Risk", marker.risk],
    ["Roles", marker.roles],
    ["Cooldown", marker.cooldown],
    ["Equipment", marker.equipment]
  ].filter(([, value]) => value && value !== "None");

  popup.innerHTML = `
    <div class="popup-head">
      <span class="popup-tag">${escapeHtml(categories[marker.category].label)}</span>
      ${editMode ? `<button class="popup-edit secondary-btn" data-edit-id="${escapeHtml(marker.id)}">Edit</button>` : ""}
    </div>
    <h3>${escapeHtml(marker.name)}</h3>
    <dl>${rows.map(([key, value]) => `<dt>${escapeHtml(key)}</dt><dd>${escapeHtml(value)}</dd>`).join("")}</dl>
    ${marker.notes ? `<p class="popup-notes">${escapeHtml(marker.notes)}</p>` : ""}
  `;
  els.markerLayer.appendChild(popup);
}

function renderMarkerList(markers) {
  els.markerList.innerHTML = "";
  if (!markers.length) {
    els.markerList.innerHTML = `<p class="hint">No markers match the current filters.</p>`;
    return;
  }

  markers
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((marker) => {
      const item = document.createElement("button");
      item.className = "marker-list-item";
      item.dataset.id = marker.id;
      item.innerHTML = `
        <strong>${escapeHtml(marker.name)}</strong>
        <small>${escapeHtml(categories[marker.category].label)} | ${escapeHtml(marker.visibility)}${marker.leaderName ? ` | Leader: ${escapeHtml(marker.leaderName)}` : ""}</small>
      `;
      els.markerList.appendChild(item);
    });
}

function markerLayerClick(event) {
  const editButton = event.target.closest("[data-edit-id]");
  if (editButton) {
    const marker = state.markers.find((item) => item.id === editButton.dataset.editId);
    if (marker) openMarkerModal(marker);
    return;
  }

  const markerButton = event.target.closest(".map-marker");
  if (!markerButton) return;
  event.stopPropagation();
  selectedMarkerId = markerButton.dataset.id;
  render();
}

function markerLayerMouseDown(event) {
  const markerButton = event.target.closest(".map-marker");
  if (!markerButton || !editMode) return;
  event.preventDefault();
  event.stopPropagation();
  const marker = state.markers.find((item) => item.id === markerButton.dataset.id);
  if (!marker) return;
  markerDragState = {
    id: marker.id,
    startedAt: { x: event.clientX, y: event.clientY }
  };
}

function markerListClick(event) {
  const item = event.target.closest(".marker-list-item");
  if (!item) return;
  selectedMarkerId = item.dataset.id;
  const marker = state.markers.find((entry) => entry.id === selectedMarkerId);
  if (marker) focusMarker(marker);
  render();
}

function focusMarker(marker) {
  const viewportRect = els.mapViewport.getBoundingClientRect();
  const contentW = els.mapContent.offsetWidth;
  const contentH = els.mapContent.offsetHeight;
  transform.x = viewportRect.width / 2 - (marker.x / 100) * contentW * transform.scale;
  transform.y = viewportRect.height / 2 - (marker.y / 100) * contentH * transform.scale;
  applyTransform();
}

function addMarkerFromDoubleClick(event) {
  if (!editMode) return;
  const coords = screenToPercent(event.clientX, event.clientY);
  openMarkerModal(newMarkerAt(coords.x, coords.y));
}

function newMarkerAt(x, y) {
  return normalizeMarker({
    id: makeId(),
    name: "New marker",
    category: "custom",
    x,
    y,
    visibility: "members"
  });
}

function openMarkerModal(marker) {
  if (!editMode) return alert("Enable edit mode first.");
  form.id.value = marker.id;
  form.name.value = marker.name;
  form.category.value = marker.category;
  form.x.value = marker.x;
  form.y.value = marker.y;
  form.visibility.value = marker.visibility;
  form.controlledBy.value = marker.controlledBy;
  form.leaderName.value = marker.leaderName;
  form.leaderRank.value = marker.leaderRank;
  form.jobType.value = marker.jobType;
  form.risk.value = marker.risk;
  form.roles.value = marker.roles;
  form.cooldown.value = marker.cooldown;
  form.equipment.value = marker.equipment;
  form.notes.value = marker.notes;
  els.markerModal.classList.remove("hidden");
  form.name.focus();
}

function closeMarkerModal() {
  els.markerModal.classList.add("hidden");
}

function readMarkerFromForm() {
  return normalizeMarker({
    id: form.id.value || makeId(),
    name: form.name.value,
    category: form.category.value,
    x: Number(form.x.value),
    y: Number(form.y.value),
    visibility: form.visibility.value,
    controlledBy: form.controlledBy.value,
    leaderName: form.leaderName.value,
    leaderRank: form.leaderRank.value,
    jobType: form.jobType.value,
    risk: form.risk.value,
    roles: form.roles.value,
    cooldown: form.cooldown.value,
    equipment: form.equipment.value,
    notes: form.notes.value
  });
}

function saveMarkerFromForm(event) {
  event.preventDefault();
  const marker = readMarkerFromForm();
  const index = state.markers.findIndex((item) => item.id === marker.id);
  if (index >= 0) state.markers[index] = marker;
  else state.markers.push(marker);
  selectedMarkerId = marker.id;
  saveState();
  closeMarkerModal();
  render();
}

function duplicateCurrentMarker() {
  const marker = readMarkerFromForm();
  marker.id = makeId();
  marker.name = `${marker.name} copy`;
  marker.x = clamp(marker.x + 1, 0, 100);
  marker.y = clamp(marker.y + 1, 0, 100);
  state.markers.push(marker);
  selectedMarkerId = marker.id;
  saveState();
  closeMarkerModal();
  render();
}

function deleteCurrentMarker() {
  const id = form.id.value;
  if (!id) return closeMarkerModal();
  if (!confirm("Delete this marker?")) return;
  state.markers = state.markers.filter((marker) => marker.id !== id);
  if (selectedMarkerId === id) selectedMarkerId = null;
  saveState();
  closeMarkerModal();
  render();
}

function saveSettings() {
  state.settings.title = els.titleInput.value.trim() || defaultState.settings.title;
  state.settings.mapImage = els.mapImageInput.value.trim() || defaultState.settings.mapImage;
  state.settings.editPin = els.pinInput.value || defaultState.settings.editPin;
  saveState();
  applySettings();
  render();
}

function uploadMapImage(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    state.settings.mapImage = String(reader.result);
    saveState();
    applySettings();
  };
  reader.readAsDataURL(file);
}

function exportJson() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `mc-rp-map-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function importJson(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const imported = normalizeState(JSON.parse(String(reader.result)));
      state = imported;
      selectedMarkerId = null;
      saveState();
      applySettings();
      render();
      alert("Map data imported.");
    } catch (error) {
      alert("Could not import JSON. Check the file format.");
      console.error(error);
    }
  };
  reader.readAsText(file);
  event.target.value = "";
}

function resetLocalData() {
  if (!confirm("Reset all saved local map data to the included default data?")) return;
  localStorage.removeItem(STORAGE_KEY);
  state = structuredClone(defaultState);
  selectedMarkerId = null;
  saveState();
  applySettings();
  centerMap();
  render();
}

function startPan(event) {
  if (event.button !== 0 || event.target.closest(".map-marker") || event.target.closest(".popup-card")) return;
  dragState = {
    startX: event.clientX,
    startY: event.clientY,
    originX: transform.x,
    originY: transform.y
  };
  els.mapViewport.classList.add("dragging");
}

function onPointerMove(event) {
  if (markerDragState) {
    const coords = screenToPercent(event.clientX, event.clientY);
    const marker = state.markers.find((item) => item.id === markerDragState.id);
    if (marker) {
      marker.x = coords.x;
      marker.y = coords.y;
      selectedMarkerId = marker.id;
      saveState();
      render();
    }
    return;
  }

  if (!dragState) return;
  transform.x = dragState.originX + (event.clientX - dragState.startX);
  transform.y = dragState.originY + (event.clientY - dragState.startY);
  applyTransform();
}

function endPointerAction() {
  dragState = null;
  markerDragState = null;
  els.mapViewport.classList.remove("dragging");
}

function onWheel(event) {
  event.preventDefault();
  const rect = els.mapViewport.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;
  const oldScale = transform.scale;
  const factor = event.deltaY < 0 ? 1.12 : 0.9;
  const newScale = clamp(oldScale * factor, 0.2, 3.5);
  const worldX = (mouseX - transform.x) / oldScale;
  const worldY = (mouseY - transform.y) / oldScale;
  transform.scale = newScale;
  transform.x = mouseX - worldX * newScale;
  transform.y = mouseY - worldY * newScale;
  applyTransform();
}

function zoomAtCenter(factor) {
  const rect = els.mapViewport.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  onWheel({
    preventDefault() {},
    deltaY: factor > 1 ? -1 : 1,
    clientX: centerX,
    clientY: centerY
  });
}

function centerMap() {
  const viewport = els.mapViewport.getBoundingClientRect();
  const contentW = els.mapContent.offsetWidth || 1600;
  const contentH = els.mapContent.offsetHeight || 1600;
  const scale = Math.min(viewport.width / contentW, viewport.height / contentH) * 0.96 || 0.6;
  transform.scale = clamp(scale, 0.2, 1.2);
  transform.x = (viewport.width - contentW * transform.scale) / 2;
  transform.y = (viewport.height - contentH * transform.scale) / 2;
  applyTransform();
}

function applyTransform() {
  els.mapContent.style.transform = `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`;
}

function screenToPercent(clientX, clientY) {
  const rect = els.mapViewport.getBoundingClientRect();
  const contentW = els.mapContent.offsetWidth;
  const contentH = els.mapContent.offsetHeight;
  const x = ((clientX - rect.left - transform.x) / transform.scale / contentW) * 100;
  const y = ((clientY - rect.top - transform.y) / transform.scale / contentH) * 100;
  return {
    x: Number(clamp(x, 0, 100).toFixed(2)),
    y: Number(clamp(y, 0, 100).toFixed(2))
  };
}

function closeFiveM() {
  document.body.classList.add("fivem-hidden");
  if (typeof GetParentResourceName === "function") {
    fetch(`https://${GetParentResourceName()}/close`, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({})
    }).catch(() => {});
  }
}

function handleFiveMMessage(event) {
  if (!event.data || event.data.type !== "open") return;
  document.body.classList.remove("fivem-hidden");
  setTimeout(centerMap, 50);
}

function getDerivedGithubDefaults() {
  const defaults = {
    owner: "",
    repo: "",
    branch: "main",
    path: "data/map-data.json",
    rememberToken: false,
    autoSave: false
  };

  if (location.hostname.endsWith(".github.io")) {
    defaults.owner = location.hostname.replace(".github.io", "");
    const segments = location.pathname.split("/").filter(Boolean);
    if (segments[0]) defaults.repo = segments[0];
    const subdir = segments.slice(1).join("/");
    if (subdir) defaults.path = `${subdir}/data/map-data.json`;
  }

  return defaults;
}

function loadGithubSyncConfig() {
  const defaults = getDerivedGithubDefaults();
  try {
    const saved = JSON.parse(localStorage.getItem(SYNC_CONFIG_KEY) || "{}");
    const rememberToken = Boolean(saved.rememberToken);
    const token = rememberToken
      ? localStorage.getItem(SYNC_TOKEN_LOCAL_KEY) || ""
      : sessionStorage.getItem(SYNC_TOKEN_SESSION_KEY) || "";
    return { ...defaults, ...saved, rememberToken, token };
  } catch (error) {
    return { ...defaults, token: "" };
  }
}

function applyGithubSyncSettingsToUi() {
  els.githubOwnerInput.value = githubSync.owner || "";
  els.githubRepoInput.value = githubSync.repo || "";
  els.githubBranchInput.value = githubSync.branch || "main";
  els.githubPathInput.value = githubSync.path || "data/map-data.json";
  els.githubTokenInput.value = githubSync.token || "";
  els.githubRememberTokenInput.checked = Boolean(githubSync.rememberToken);
  els.githubAutoSaveInput.checked = Boolean(githubSync.autoSave);
  setGithubStatus(githubSync.autoSave ? "GitHub auto-save is enabled." : "GitHub auto-save is off.", "neutral");
}

function readGithubSyncConfigFromUi() {
  return {
    owner: els.githubOwnerInput.value.trim(),
    repo: els.githubRepoInput.value.trim(),
    branch: els.githubBranchInput.value.trim() || "main",
    path: els.githubPathInput.value.trim() || "data/map-data.json",
    token: els.githubTokenInput.value.trim(),
    rememberToken: els.githubRememberTokenInput.checked,
    autoSave: els.githubAutoSaveInput.checked
  };
}

function saveGithubSyncConfigFromUi() {
  githubSync = readGithubSyncConfigFromUi();
  const { token, ...storedConfig } = githubSync;
  localStorage.setItem(SYNC_CONFIG_KEY, JSON.stringify(storedConfig, null, 2));

  if (githubSync.rememberToken) {
    localStorage.setItem(SYNC_TOKEN_LOCAL_KEY, token);
    sessionStorage.removeItem(SYNC_TOKEN_SESSION_KEY);
  } else {
    sessionStorage.setItem(SYNC_TOKEN_SESSION_KEY, token);
    localStorage.removeItem(SYNC_TOKEN_LOCAL_KEY);
  }

  setGithubStatus(githubSync.autoSave ? "GitHub config saved. Auto-save is enabled." : "GitHub config saved. Auto-save is off.", "ok");
}

function hasGithubWriteConfig() {
  return Boolean(githubSync.owner && githubSync.repo && githubSync.branch && githubSync.path && githubSync.token);
}

function getGithubApiUrl(config = githubSync) {
  return `https://api.github.com/repos/${encodeURIComponent(config.owner)}/${encodeURIComponent(config.repo)}/contents/${encodePath(config.path)}`;
}

function encodePath(path) {
  return path.split("/").map(encodeURIComponent).join("/");
}

function getGithubHeaders(includeToken = true) {
  const headers = {
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28"
  };
  if (includeToken && githubSync.token) headers.Authorization = `Bearer ${githubSync.token}`;
  return headers;
}

function setGithubStatus(message, tone = "neutral") {
  els.githubStatus.textContent = message;
  els.githubStatus.dataset.tone = tone;
}

function scheduleGithubAutoSave() {
  if (!editMode || !githubSync.autoSave) return;
  if (!hasGithubWriteConfig()) {
    setGithubStatus("Saved locally only. Add GitHub owner, repo, file path, and token to auto-save online.", "warn");
    return;
  }

  clearTimeout(githubAutoSaveTimer);
  githubAutoSaveTimer = setTimeout(() => saveToGithub({ manual: false }), 1800);
  setGithubStatus("Local change saved. GitHub auto-save queued.", "neutral");
}

async function loadLatestFromGithub() {
  saveGithubSyncConfigFromUi();
  if (!githubSync.owner || !githubSync.repo || !githubSync.branch || !githubSync.path) {
    alert("Add GitHub owner, repo, branch, and data file path first.");
    return;
  }

  try {
    setGithubStatus("Loading latest data from GitHub...", "neutral");
    const file = await getGithubFile();
    state = normalizeState(JSON.parse(file.text));
    selectedMarkerId = null;
    saveState({ skipGithubAutoSave: true });
    applySettings();
    centerMap();
    render();
    setGithubStatus(`Loaded latest GitHub data from ${githubSync.path}.`, "ok");
  } catch (error) {
    console.error(error);
    setGithubStatus(error.message || "Could not load GitHub data.", "bad");
    alert(error.message || "Could not load GitHub data.");
  }
}

async function saveToGithub({ manual = false } = {}) {
  saveGithubSyncConfigFromUi();
  if (!hasGithubWriteConfig()) {
    const message = "Add GitHub owner, repo, branch, file path, and token before saving to GitHub.";
    setGithubStatus(message, "warn");
    if (manual) alert(message);
    return;
  }

  if (githubSaveInProgress) {
    setGithubStatus("A GitHub save is already running. Try again in a moment.", "warn");
    return;
  }

  githubSaveInProgress = true;
  try {
    setGithubStatus("Saving map data to GitHub...", "neutral");
    const currentFile = await getGithubFile({ allowMissing: true });
    const body = {
      message: `Update RP map data - ${new Date().toISOString()}`,
      content: utf8ToBase64(JSON.stringify(state, null, 2)),
      branch: githubSync.branch
    };
    if (currentFile.sha) body.sha = currentFile.sha;

    const response = await fetch(getGithubApiUrl(), {
      method: "PUT",
      headers: {
        ...getGithubHeaders(true),
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const details = await safeGithubError(response);
      throw new Error(`GitHub save failed (${response.status}). ${details}`);
    }

    const now = new Date().toLocaleString();
    setGithubStatus(`Saved to GitHub at ${now}. GitHub Pages may take a few minutes to show it to everyone.`, "ok");
  } catch (error) {
    console.error(error);
    setGithubStatus(error.message || "GitHub save failed.", "bad");
    if (manual) alert(error.message || "GitHub save failed.");
  } finally {
    githubSaveInProgress = false;
  }
}

async function getGithubFile({ allowMissing = false } = {}) {
  const url = `${getGithubApiUrl()}?ref=${encodeURIComponent(githubSync.branch)}&v=${Date.now()}`;
  const response = await fetch(url, { headers: getGithubHeaders(Boolean(githubSync.token)) });

  if (response.status === 404 && allowMissing) {
    return { sha: null, text: "" };
  }

  if (!response.ok) {
    const details = await safeGithubError(response);
    throw new Error(`GitHub load failed (${response.status}). ${details}`);
  }

  const json = await response.json();
  if (json.type !== "file" || !json.content) throw new Error("GitHub path is not a file or has no content.");
  return {
    sha: json.sha,
    text: base64ToUtf8(json.content)
  };
}

async function safeGithubError(response) {
  try {
    const json = await response.json();
    return json.message || response.statusText || "";
  } catch (error) {
    return response.statusText || "";
  }
}

function utf8ToBase64(value) {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.slice(i, i + chunkSize));
  }
  return btoa(binary);
}

function base64ToUtf8(value) {
  const binary = atob(String(value).replace(/\s/g, ""));
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

boot();
