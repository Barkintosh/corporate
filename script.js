"use strict";

// French lives in the HTML and stays readable without JavaScript.
// English mirrors those keys. Translation never injects HTML.
const english = {
  "skip": "Skip to content",
  "brandLabel": "Corporate, home",
  "navigationLabel": "Main navigation",
  "mobileNavigationLabel": "Mobile navigation",
  "languageLabel": "Website language",
  "menuOpen": "Open menu",
  "menuClose": "Close menu",
  "navGuild": "Guild",
  "navRaids": "Raids",
  "navLoot": "Loot",
  "navCommunity": "Crew",
  "joinDiscord": "Join our Discord",
  "heroTag": "French-speaking guild · World of Warcraft",
  "heroTitle1": "Bosses.",
  "heroTitle2": "Targets.",
  "heroTitle3": "One team.",
  "heroDescription": "Welcome to Corporate! Our core business: taking down bosses in good company. We help each other, make progress, and keep team play fun. 🍻",
  "discover": "So, when’s the next raid?",
  "photoCaption": "The real loot? The guild.",
  "factFocus": "PvE & endgame progression",
  "factDays": "Wednesday & Sunday",
  "factHours": "9:00 PM → midnight",
  "guildTitle": "🎮 We’re here to play together.",
  "guildIntro": "Players of all skill levels, one shared team culture: getting better while having a good time.",
  "valueProgressTitle": "⚔️ Take down bosses",
  "valueProgressText": "We prepare, learn from our wipes, and enjoy the wins. Our favourite KPI? A boss down and a voice channel full of laughter.",
  "valueShareTitle": "🧙 Help each other",
  "valueShareText": "Need class advice, a craft, or a helping hand? Sharing what we know is part of onboarding, whatever your experience.",
  "valueTeamTitle": "🌍 Share the adventure",
  "valueTeamText": "Expansions change, the spirit stays: respect, good humour, and a guild where you feel at home.",
  "journeyLabel": "🧭 The guild roadmap",
  "journeySod": "🌱 The guild is founded",
  "journeyMop": "🐼 A new chapter",
  "raidTitle": "📅 When do we raid?",
  "raidIntro": "Our team meetings: Wednesday and Sunday, from 9:00 PM to midnight. Come prepared — we’ll take on the bosses together!",
  "raidNights": "The plan for the evening",
  "scheduleDescription": "Two required evenings. Extra, optional raids may be added when needed.",
  "schedule20Time": "8:00 PM",
  "schedule20Title": "Time to confirm!",
  "schedule20Text": "Tentative sign-ups that haven’t been updated are replaced.",
  "schedule2030Time": "8:30 PM",
  "schedule2030Title": "Invites go out",
  "schedule2030Text": "Join the group and finish getting ready.",
  "schedule2050Time": "8:50 PM",
  "schedule2050Title": "Last call",
  "schedule2050Text": "Late players who haven’t let us know are replaced.",
  "schedule21Time": "9:00 PM",
  "schedule21Title": "⚔️ Let’s pull!",
  "schedule21Text": "Everyone is ready and soft reserves are in.",
  "scheduleFootnote": "Check the Raid-Helper events on Discord for the reference times.",
  "preparationTitle": "Got everything?",
  "preparationIntro": "A quick check before the adventure.",
  "checklistLegend": "My raid preparation",
  "checkGear": "🛡️ Gear suitable for the raid",
  "checkEnchants": "✨ All your enchantments",
  "checkGems": "💎 Every gem socket filled",
  "checkConsumables": "🧪 Consumables in your bags",
  "checkBuffs": "🌍 World buffs",
  "checkBuffsNote": "When we’re playing Vanilla",
  "checklistLocal": "Checklist saved on this device.",
  "checklistReset": "Start over",
  "signupTitle": "📝 Sign-ups & absences",
  "signupText": "Sign up early through Raid-Helper on Discord. Events list the date, raid, group size, and difficulty.",
  "absenceText": "Running late, can’t make it, or changed your availability? Tell us in",
  "absenceEnd": " so we can plan ahead.",
  "operationsTitle": "🎙️ During the raid",
  "operationsText": "A detailed briefing in the first week, then straight to the essentials. During attempts, Syllou leads operations: we follow his calls and stay focused.",
  "operationsVoice": "Keep voice comms quiet when asked. Loot is handed out at the end of the raid or before its trade timer runs out.",
  "lootTitle": "🎁 What about the loot?",
  "lootIntro": "Loot is our shared investment. We use soft reserves (SR) to distribute it fairly and help the whole team progress.",
  "lootDeadline": "⏰ Fill in your SR before 9:00 PM!",
  "lootAsk": "Not sure? Ask on Discord",
  "lootDouble": "Double reserve, +25 bonus",
  "lootTriple": "Triple reserve, +40 bonus",
  "lootBisText": "Look up your BiS items before choosing your reserves.",
  "lootRelevantText": "SR must fit your class and role. Officers may reject a reserve that doesn’t.",
  "communityTitle": "🍻 Guild life happens between raids, too.",
  "communityIntro": "Discord is our HQ. Say hello, suggest a run, lend a hand: team building happens between raids, too!",
  "charterTitle": "A few good habits 🤝",
  "charterRespect": "😌 Be respectful, calm, and kind.",
  "charterCharacter": "🛠️ Look after your character and their progression.",
  "charterAttendance": "📅 Show up reliably and keep Raid-Helper updated.",
  "charterCommunity": "💬 Join in, help out, and suggest activities.",
  "channelAbsences": "Absences & delays",
  "channelCrafting": "Crafting & resources",
  "ranksTitle": "Who does what?",
  "rankOfficer": "Officer",
  "rankOfficerText": "The executive team: organisation and decisions for the guild.",
  "rankVeteran": "Veteran",
  "rankVeteranText": "A familiar face, from one expansion to the next.",
  "rankMember": "Member",
  "rankMemberText": "Active in raids and everyday guild life.",
  "rankNew": "Newcomer",
  "rankNewText": "Just joined, or not yet very active. Welcome aboard!",
  "ctaTitle": "There’s a seat at the tavern 🍺",
  "ctaText": "Come say hello on Discord. Your next adventure might start right here!",
  "footerCommunity": "A World of Warcraft guild.",
  "footerLegal": "Fan website, not affiliated with Blizzard Entertainment. World of Warcraft is a trademark of Blizzard Entertainment.",
  "journeyIntro": "Founded in Season of Discovery, Corporate keeps the adventure going with the same love of playing together.",
  "journeySodText": "Our first raids and the beginnings of Corporate.",
  "journeyMopText": "The guild sets off for Pandaria.",
  "journeyTbc": "🔥 On to Outland",
  "journeyTbcText": "The team crosses the Dark Portal once again.",
  "journeyForever": "✨ Our new direction",
  "journeyForeverText": "Now, we’re looking ahead to WoW Forever together.",
  "leadershipTitle": "🏢 Our little management team",
  "leadershipIntro": "A question, an idea, or an issue? Our offices are on Discord.",
  "leaderBuzkRole": "👑 Guild Master",
  "leaderSyllouRole": "⚔️ Main Officer",
  "buzkProfileLabel": "Open buzk’s Discord profile",
  "syllouCopyLabel": "Copy Syllou’s Discord username: hyllou"
};

const storageKeys = { language: "corporate-language", checklist: "corporate-raid-checklist-v1" };
const french = { menuClose: "Fermer le menu" };
const textElements = [...document.querySelectorAll("[data-i18n]")];
const labelElements = [...document.querySelectorAll("[data-i18n-aria]")];
textElements.forEach(element => { french[element.dataset.i18n] = element.textContent; });
labelElements.forEach(element => { french[element.dataset.i18nAria] = element.getAttribute("aria-label"); });

const metadata = {
  fr: {
    title: "Corporate",
    description: "Corporate, guilde francophone World of Warcraft. Des raids le mercredi et le dimanche, des boss à tomber et des bons moments ensemble. Rejoignez-nous !",
    social: "Une guilde WoW, du PvE et de la bonne humeur. Découvrez nos raids, nos règles de loot et notre bande de joueurs."
  },
  en: {
    title: "Corporate",
    description: "Corporate, a French-speaking World of Warcraft guild. Wednesday and Sunday raids, bosses to beat, and good times together. Join us!",
    social: "A WoW guild, PvE, and good company. Discover our raids, loot rules, and crew of players."
  }
};

function readStorage(key) {
  try { return localStorage.getItem(key); } catch { return null; }
}

function writeStorage(key, value) {
  try { localStorage.setItem(key, value); return true; } catch { return false; }
}

let currentLanguage = "fr";
let checklistStorageAvailable = true;
const menuButton = document.querySelector(".menu-toggle");
const mobileNavigation = document.getElementById("mobile-nav");
const checklistInputs = [...document.querySelectorAll(".raid-checklist input")];

function updateChecklist() {
  const completed = checklistInputs.filter(input => input.checked).length;
  const count = document.getElementById("checklist-count");
  count.textContent = `${completed} / ${checklistInputs.length}`;
  count.setAttribute("aria-label", currentLanguage === "en"
    ? `${completed} of ${checklistInputs.length} preparations completed`
    : `${completed} préparatifs terminés sur ${checklistInputs.length}`);
  const status = document.getElementById("checklist-status");
  const dictionary = currentLanguage === "en" ? english : french;
  status.textContent = checklistStorageAvailable ? dictionary.checklistLocal : currentLanguage === "en"
    ? "Storage is unavailable. Your checklist lasts for this visit."
    : "Le stockage est indisponible. Votre checklist est conservée pour cette visite.";
}

function setLanguage(language, persist = false) {
  currentLanguage = language === "en" ? "en" : "fr";
  const dictionary = currentLanguage === "en" ? english : french;
  document.documentElement.lang = currentLanguage;
  textElements.forEach(element => {
    const key = element.dataset.i18n;
    element.textContent = dictionary[key] ?? french[key];
  });
  labelElements.forEach(element => {
    const key = element.dataset.i18nAria;
    element.setAttribute("aria-label", dictionary[key] ?? french[key]);
  });
  menuButton.setAttribute("aria-label", dictionary[menuButton.getAttribute("aria-expanded") === "true" ? "menuClose" : "menuOpen"]);
  document.querySelectorAll("[data-language]").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.language === currentLanguage));
  });
  document.title = metadata[currentLanguage].title;
  document.querySelector('meta[name="description"]').content = metadata[currentLanguage].description;
  document.querySelector('meta[property="og:title"]').content = metadata[currentLanguage].title;
  document.querySelector('meta[property="og:description"]').content = metadata[currentLanguage].social;
  document.querySelector('meta[property="og:locale"]').content = currentLanguage === "en" ? "en_GB" : "fr_FR";
  updateChecklist();
  document.getElementById("team-copy-status").textContent = "";
  if (persist) {
    writeStorage(storageKeys.language, currentLanguage);
    const url = new URL(window.location.href);
    if (currentLanguage === "en") url.searchParams.set("lang", "en");
    else url.searchParams.delete("lang");
    // History updates may be blocked in file previews; translation still works.
    try { window.history.replaceState(null, "", url); } catch { /* No navigation required. */ }
  }
}

function languageFromLocation() {
  const language = new URLSearchParams(window.location.search).get("lang");
  if (language === "en" || language === "fr") return language;
  return readStorage(storageKeys.language) === "en" ? "en" : "fr";
}

function closeMenu(restoreFocus = false) {
  const wasOpen = menuButton.getAttribute("aria-expanded") === "true";
  mobileNavigation.hidden = true;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", currentLanguage === "en" ? english.menuOpen : french.menuOpen);
  if (restoreFocus && wasOpen) menuButton.focus();
}

menuButton.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") !== "true";
  mobileNavigation.hidden = !expanded;
  menuButton.setAttribute("aria-expanded", String(expanded));
  const dictionary = currentLanguage === "en" ? english : french;
  menuButton.setAttribute("aria-label", dictionary[expanded ? "menuClose" : "menuOpen"]);
});

mobileNavigation.addEventListener("click", event => {
  const link = event.target.closest("a");
  if (!link) return;
  closeMenu();
  if (link.hash) {
    const section = document.getElementById(link.hash.slice(1));
    if (section) {
      section.setAttribute("tabindex", "-1");
      section.focus({ preventScroll: true });
      section.addEventListener("blur", () => section.removeAttribute("tabindex"), { once: true });
    }
  }
});
document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(true); });
document.addEventListener("click", event => { if (!event.target.closest(".site-header")) closeMenu(); });
window.matchMedia("(min-width: 951px)").addEventListener("change", event => { if (event.matches) closeMenu(); });

try {
  const saved = JSON.parse(readStorage(storageKeys.checklist) || "{}");
  if (saved && typeof saved === "object" && !Array.isArray(saved)) {
    checklistInputs.forEach(input => { input.checked = saved[input.name] === true; });
  }
} catch { /* Malformed or old local data is ignored. */ }

function saveChecklist() {
  const state = Object.fromEntries(checklistInputs.map(input => [input.name, input.checked]));
  checklistStorageAvailable = writeStorage(storageKeys.checklist, JSON.stringify(state));
  updateChecklist();
}
checklistInputs.forEach(input => input.addEventListener("change", saveChecklist));
document.getElementById("reset-checklist").addEventListener("click", () => {
  checklistInputs.forEach(input => { input.checked = false; });
  saveChecklist();
});

document.querySelectorAll("[data-language]").forEach(button => {
  button.addEventListener("click", () => setLanguage(button.dataset.language, true));
});
window.addEventListener("popstate", () => setLanguage(languageFromLocation()));
setLanguage(languageFromLocation());
document.querySelector(".language-switch").hidden = false;
menuButton.hidden = false;
document.getElementById("checklist-count").hidden = false;
document.querySelector(".checklist-bottom").hidden = false;
document.getElementById("year").textContent = String(new Date().getFullYear());

// A username alone cannot identify a Discord profile. Keep the handle useful
// without inventing an ID, and only copy it when the visitor asks.
document.querySelectorAll("[data-discord-handle]").forEach(button => {
  button.hidden = false;
  button.addEventListener("click", async () => {
    const handle = button.dataset.discordHandle;
    const status = document.getElementById("team-copy-status");
    try {
      await navigator.clipboard.writeText(handle);
      status.textContent = currentLanguage === "en"
        ? `@${handle} copied. Paste it into Discord’s Add Friend field.`
        : `@${handle} copié. Colle-le dans le champ Ajouter un ami de Discord.`;
    } catch {
      status.textContent = currentLanguage === "en"
        ? `Copy is unavailable. Enter ${handle} in Discord’s Add Friend field.`
        : `La copie est indisponible. Saisis ${handle} dans le champ Ajouter un ami de Discord.`;
    }
  });
});

// The public guild invite identifies its creator, buzk. Refresh only that
// verified member's avatar, with no authentication or visitor credentials.
// The local portrait remains available if Discord is offline or rate-limited.
async function refreshGuildAvatar() {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 5000);
  try {
    const response = await fetch("https://discord.com/api/v10/invites/fHhJxuQCfZ?with_counts=false", {
      credentials: "omit",
      referrerPolicy: "no-referrer",
      signal: controller.signal
    });
    if (!response.ok) return;
    const { inviter } = await response.json();
    const avatar = document.querySelector('.leader-avatar[data-discord-id="107480887993589760"]');
    if (!avatar || inviter?.id !== avatar.dataset.discordId || !/^(a_)?[a-f0-9]{32}$/.test(inviter.avatar)) return;
    const candidate = new Image();
    candidate.referrerPolicy = "no-referrer";
    candidate.src = `https://cdn.discordapp.com/avatars/${inviter.id}/${inviter.avatar}.png?size=128`;
    await candidate.decode();
    avatar.src = candidate.src;
  } catch { /* Keep the local portrait; the rest of the site works offline. */ }
  finally { window.clearTimeout(timer); }
}

if ("IntersectionObserver" in window) {
  const avatarObserver = new IntersectionObserver(entries => {
    if (!entries.some(entry => entry.isIntersecting)) return;
    avatarObserver.disconnect();
    refreshGuildAvatar();
  }, { rootMargin: "200px" });
  avatarObserver.observe(document.querySelector(".leadership"));
} else {
  refreshGuildAvatar();
}

// A section indicator adds orientation without changing browser history.
if ("IntersectionObserver" in window) {
  const navigationLinks = [...document.querySelectorAll('.desktop-nav a')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navigationLinks.forEach(link => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-20% 0px -60% 0px", threshold: 0 });
  document.querySelectorAll("main > section").forEach(section => observer.observe(section));
}
