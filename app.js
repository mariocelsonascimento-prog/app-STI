const state = {
  portal: "interne",
  page: "accueil",
  query: "",
  missionFilter: "all",
  globalCalendarMonth: "2026-04-01",
  collaboratorAvailability: {
    Lun: ["matin"],
    Mar: ["matin", "aprem"],
    Mer: ["aprem"],
    Jeu: ["matin", "aprem"],
    Ven: ["matin"],
    Sam: [],
    Dim: ["aprem"],
  },
};

const missions = [
  {
    id: "m1",
    date: "2026-04-13",
    day: "Lun",
    time: "08:30",
    end: "10:30",
    client: "Tribunal judiciaire de Nanterre",
    city: "Nanterre",
    language: "Arabe",
    type: "Interprétation présentielle",
    status: "confirmed",
    collaborator: "Samir Haddad",
    sector: "Judiciaire",
    notes: "Prévoir pièce d'identité et convocation à l'accueil.",
  },
  {
    id: "m2",
    date: "2026-04-13",
    day: "Lun",
    time: "11:00",
    end: "12:00",
    client: "Centre hospitalier Delafontaine",
    city: "Saint-Denis",
    language: "Tamoul",
    type: "Interprétation distancielle",
    status: "pending",
    collaborator: "À assigner",
    sector: "Médico-social",
    notes: "Lien visio à envoyer dès confirmation.",
  },
  {
    id: "m3",
    date: "2026-04-14",
    day: "Mar",
    time: "09:15",
    end: "12:45",
    client: "Commissariat de Sarcelles",
    city: "Sarcelles",
    language: "Roumain",
    type: "Interprétation présentielle",
    status: "urgent",
    collaborator: "Elena Popescu",
    sector: "Judiciaire",
    notes: "Mission prioritaire, confirmation client attendue avant 18h.",
  },
  {
    id: "m4",
    date: "2026-04-14",
    day: "Mar",
    time: "14:00",
    end: "17:30",
    client: "Association Horizon",
    city: "Montreuil",
    language: "LSF",
    type: "Accompagnement",
    status: "confirmed",
    collaborator: "Camille Renaud",
    sector: "Associatif",
    notes: "Deux rendez-vous sur site, trajet entre les lieux à prévoir.",
  },
  {
    id: "m5",
    date: "2026-04-15",
    day: "Mer",
    time: "10:00",
    end: "16:00",
    client: "Studio Lumière",
    city: "Paris 11e",
    language: "Coréen",
    type: "Traduction audiovisuelle",
    status: "confirmed",
    collaborator: "Mina Park",
    sector: "Audiovisuel",
    notes: "Sous-titrage urgent, livraison intermédiaire à 16h.",
  },
  {
    id: "m6",
    date: "2026-04-16",
    day: "Jeu",
    time: "13:30",
    end: "15:00",
    client: "Maison d'arrêt de Fresnes",
    city: "Fresnes",
    language: "Dari",
    type: "Interprétation présentielle",
    status: "pending",
    collaborator: "À assigner",
    sector: "Judiciaire",
    notes: "Accès sécurisé, transmettre la fiche intervenant.",
  },
  {
    id: "m7",
    date: "2026-04-17",
    day: "Ven",
    time: "09:00",
    end: "11:00",
    client: "Préfecture du Val-d'Oise",
    city: "Cergy",
    language: "Bambara",
    type: "Interprétation présentielle",
    status: "confirmed",
    collaborator: "Awa Traoré",
    sector: "Administratif",
    notes: "Demander confirmation du bâtiment exact la veille.",
  },
  {
    id: "m8",
    date: "2026-04-17",
    day: "Ven",
    time: "15:30",
    end: "17:00",
    client: "Cabinet Fontaine",
    city: "Paris 8e",
    language: "Anglais",
    type: "Traduction assermentée",
    status: "done",
    collaborator: "Nora Bellamy",
    sector: "Entreprise",
    notes: "Documents livrés, facture à générer.",
  },
  {
    id: "m9",
    date: "2026-04-15",
    day: "Mer",
    time: "08:45",
    end: "10:15",
    client: "Office français de l'immigration",
    city: "Bobigny",
    language: "Roumain",
    type: "Interprétation présentielle",
    status: "confirmed",
    collaborator: "Elena Popescu",
    sector: "Administratif",
    notes: "Entretien individuel, arriver 15 minutes avant l'accueil.",
  },
  {
    id: "m10",
    date: "2026-04-16",
    day: "Jeu",
    time: "15:00",
    end: "17:00",
    client: "Cabinet Martin & Associés",
    city: "Paris 9e",
    language: "Roumain",
    type: "Traduction assermentée",
    status: "confirmed",
    collaborator: "Elena Popescu",
    sector: "Entreprise",
    notes: "Relire les actes avant envoi au client final.",
  },
  {
    id: "m11",
    date: "2026-04-18",
    day: "Sam",
    time: "10:30",
    end: "12:00",
    client: "Plateforme d'écoute sociale",
    city: "Distanciel",
    language: "Roumain",
    type: "Interprétation distancielle",
    status: "pending",
    collaborator: "Elena Popescu",
    sector: "Associatif",
    notes: "Attendre la validation du lien téléphonique.",
  },
  {
    id: "m12",
    date: "2026-04-19",
    day: "Dim",
    time: "16:00",
    end: "17:00",
    client: "Astreinte hospitalière Henri-Mondor",
    city: "Créteil",
    language: "Roumain",
    type: "Interprétation distancielle",
    status: "urgent",
    collaborator: "Elena Popescu",
    sector: "Médico-social",
    notes: "Astreinte week-end, confirmer le numéro du médecin référent.",
  },
  {
    id: "m13",
    date: "2026-04-15",
    day: "Mer",
    time: "14:30",
    end: "16:30",
    client: "Tribunal judiciaire de Bobigny",
    city: "Bobigny",
    language: "Wolof",
    type: "Interprétation présentielle",
    status: "pending",
    collaborator: "À assigner",
    sector: "Judiciaire",
    notes: "Chercher un profil judiciaire avec disponibilité mercredi après-midi.",
  },
  {
    id: "m14",
    date: "2026-04-16",
    day: "Jeu",
    time: "09:00",
    end: "11:30",
    client: "Clinique Victor Hugo",
    city: "Levallois-Perret",
    language: "Tigrinya",
    type: "Interprétation présentielle",
    status: "urgent",
    collaborator: "À assigner",
    sector: "Médico-social",
    notes: "Besoin confirmé par le service social, contact sur place à transmettre.",
  },
  {
    id: "m15",
    date: "2026-04-18",
    day: "Sam",
    time: "13:30",
    end: "18:00",
    client: "Festival documentaire",
    city: "Paris 19e",
    language: "Japonais",
    type: "Traduction audiovisuelle",
    status: "confirmed",
    collaborator: "Mina Park",
    sector: "Audiovisuel",
    notes: "Sous-titres et vérification des cartons avant projection.",
  },
  {
    id: "m16",
    date: "2026-04-19",
    day: "Dim",
    time: "11:00",
    end: "12:30",
    client: "Centre d'accueil Croix-Rouge",
    city: "Clichy",
    language: "Ukrainien",
    type: "Accompagnement",
    status: "pending",
    collaborator: "À assigner",
    sector: "Associatif",
    notes: "Affecter un collaborateur disponible dimanche matin.",
  },
  {
    id: "m17",
    date: "2026-04-13",
    day: "Lun",
    time: "07:30",
    end: "09:00",
    client: "Maison des solidarités",
    city: "Saint-Ouen",
    language: "Roumain",
    type: "Interprétation présentielle",
    status: "done",
    collaborator: "Elena Popescu",
    sector: "Médico-social",
    notes: "Mission terminée, attestation de fin de mission attendue.",
  },
  {
    id: "m18",
    date: "2026-04-14",
    day: "Mar",
    time: "14:30",
    end: "16:00",
    client: "Service pénitentiaire d'insertion",
    city: "Pontoise",
    language: "Roumain",
    type: "Interprétation distancielle",
    status: "confirmed",
    collaborator: "Elena Popescu",
    sector: "Judiciaire",
    notes: "Appel sécurisé, attendre les consignes du chargé de projet.",
  },
  {
    id: "m19",
    date: "2026-04-17",
    day: "Ven",
    time: "09:30",
    end: "10:30",
    client: "Préfecture de Seine-Saint-Denis",
    city: "Bobigny",
    language: "Roumain",
    type: "Interprétation présentielle",
    status: "pending",
    collaborator: "Elena Popescu",
    sector: "Administratif",
    notes: "Créneau proposé, confirmation finale attendue.",
  },
  {
    id: "m20",
    date: "2026-04-17",
    day: "Ven",
    time: "15:00",
    end: "16:30",
    client: "Association Tremplin",
    city: "Paris 13e",
    language: "Roumain",
    type: "Accompagnement",
    status: "confirmed",
    collaborator: "Elena Popescu",
    sector: "Associatif",
    notes: "Rendez-vous administratif avec déplacement court.",
  },
];

const collaborators = [
  {
    name: "Samir Haddad",
    role: "Interprète judiciaire",
    languages: ["Arabe", "Français", "Anglais"],
    city: "Paris",
    status: "Disponible cette semaine",
    rating: "4.9",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=180&q=80",
    free: ["Lun", "Mer", "Ven"],
  },
  {
    name: "Elena Popescu",
    role: "Interprète & traductrice",
    languages: ["Roumain", "Moldave", "Français"],
    city: "Cergy",
    status: "Mission mardi matin",
    rating: "4.8",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=180&q=80",
    free: ["Mar", "Jeu"],
  },
  {
    name: "Camille Renaud",
    role: "Interprète LSF",
    languages: ["LSF", "Français"],
    city: "Montreuil",
    status: "Disponible après 14h",
    rating: "5.0",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=180&q=80",
    free: ["Lun", "Mar", "Jeu", "Ven"],
  },
  {
    name: "Mina Park",
    role: "Traductrice audiovisuelle",
    languages: ["Coréen", "Anglais", "Français"],
    city: "Paris",
    status: "À distance uniquement",
    rating: "4.7",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df52b?auto=format&fit=crop&w=180&q=80",
    free: ["Mer", "Jeu"],
  },
  {
    name: "Awa Traoré",
    role: "Interprète accompagnatrice",
    languages: ["Bambara", "Malinké", "Français"],
    city: "Saint-Denis",
    status: "Disponible vendredi",
    rating: "4.9",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=180&q=80",
    free: ["Ven"],
  },
  {
    name: "Nora Bellamy",
    role: "Traductrice assermentée",
    languages: ["Anglais", "Français", "Espagnol"],
    city: "Versailles",
    status: "Documents en cours",
    rating: "4.8",
    avatar:
      "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=180&q=80",
    free: ["Lun", "Mar", "Mer"],
  },
];

const pages = {
  interne: ["accueil", "planning", "missions", "collaborateurs"],
  externe: ["accueil", "planning", "missions"],
};

const pageLabels = {
  accueil: "Accueil",
  planning: "Planning",
  missions: "Missions",
  collaborateurs: "Collaborateurs",
};

const statusLabels = {
  confirmed: "Confirmée",
  pending: "À assigner",
  urgent: "Urgent",
  done: "Terminée",
};

const missionFilters = [
  { key: "all", label: "Toutes" },
  { key: "past", label: "Passées" },
  { key: "documents", label: "Documents en attente" },
];

const missionDocuments = {
  m1: { convocation: true, attestation: false },
  m2: { convocation: false, attestation: false },
  m3: { convocation: true, attestation: false },
  m4: { convocation: true, attestation: false },
  m5: { convocation: true, attestation: false },
  m6: { convocation: false, attestation: false },
  m7: { convocation: true, attestation: false },
  m8: { convocation: true, attestation: true },
  m9: { convocation: true, attestation: false },
  m10: { convocation: true, attestation: false },
  m11: { convocation: false, attestation: false },
  m12: { convocation: true, attestation: false },
  m13: { convocation: false, attestation: false },
  m14: { convocation: false, attestation: false },
  m15: { convocation: true, attestation: false },
  m16: { convocation: false, attestation: false },
  m17: { convocation: true, attestation: false },
  m18: { convocation: true, attestation: false },
  m19: { convocation: false, attestation: false },
  m20: { convocation: true, attestation: false },
};

const availabilityDays = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

const availabilityPeriods = [
  { key: "matin", label: "Matin" },
  { key: "aprem", label: "Après-midi" },
];

const appView = document.querySelector("#app-view");
const pageTitle = document.querySelector("#page-title");
const portalEyebrow = document.querySelector("#portal-eyebrow");
const newMissionButton = document.querySelector("#new-mission-button");
const notice = document.querySelector("#notice");
const searchInput = document.querySelector("#global-search");
const dialog = document.querySelector("#mission-dialog");
const missionDetailDialog = document.querySelector("#external-mission-dialog");
const missionDetailContainer = document.querySelector("#external-mission-detail");
const globalCalendarDialog = document.querySelector("#global-calendar-dialog");
const globalCalendarContent = document.querySelector("#global-calendar-content");
const documentFileInput = document.createElement("input");

let pendingDocumentUpload = null;

documentFileInput.type = "file";
documentFileInput.accept = ".pdf,.jpg,.jpeg,.png,.doc,.docx";
documentFileInput.hidden = true;
document.body.append(documentFileInput);

function byQuery(items) {
  const query = state.query.trim().toLowerCase();
  if (!query) return items;

  return items.filter((item) =>
    [
      item.client,
      item.city,
      item.language,
      item.type,
      item.collaborator,
      item.sector,
      item.name,
      item.role,
      ...(item.languages || []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()
      .includes(query),
  );
}

function availabilitySlotCount() {
  return Object.values(state.collaboratorAvailability).reduce(
    (total, periods) => total + periods.length,
    0,
  );
}

function isAvailableSlot(day, period) {
  return state.collaboratorAvailability[day]?.includes(period);
}

function availabilitySummary(day) {
  const periods = state.collaboratorAvailability[day] || [];
  if (periods.length === 2) return "Journée";
  if (periods.length === 0) return "Indisponible";

  return availabilityPeriods.find((period) => period.key === periods[0])?.label || "Disponible";
}

function byDateTime(a, b) {
  return `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`);
}

function parseLocalDate(dateValue) {
  const [year, month, day] = dateValue.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatMonthKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}-01`;
}

function addGlobalCalendarMonth(delta) {
  const current = parseLocalDate(state.globalCalendarMonth);
  state.globalCalendarMonth = formatMonthKey(new Date(current.getFullYear(), current.getMonth() + delta, 1));
}

function calendarScopeMissions() {
  const scopedMissions =
    state.portal === "externe"
      ? missions.filter((mission) => mission.collaborator === "Elena Popescu")
      : missions;

  return [...scopedMissions].sort(byDateTime);
}

function getMissionDocuments(mission) {
  if (!missionDocuments[mission.id]) {
    missionDocuments[mission.id] = {
      convocation: false,
      attestation: mission.status === "done",
    };
  }

  missionDocuments[mission.id].convocationName ||= "";
  missionDocuments[mission.id].attestationName ||= "";

  return missionDocuments[mission.id];
}

function documentFileText(docs, type, fallback) {
  const fileName = docs[`${type}Name`];
  return fileName ? `Fichier : ${fileName}` : fallback;
}

function requestDocumentUpload(missionId, type) {
  pendingDocumentUpload = { missionId, type };
  documentFileInput.value = "";
  documentFileInput.click();
}

function canSubmitAttestation(mission) {
  return mission.status === "done";
}

function missionDocumentStats(missionList) {
  return missionList.reduce(
    (stats, mission) => {
      const docs = getMissionDocuments(mission);
      if (!docs.convocation) stats.missingConvocations += 1;
      if (canSubmitAttestation(mission) && !docs.attestation) stats.missingAttestations += 1;
      if (docs.convocation) stats.sentConvocations += 1;
      if (docs.attestation) stats.receivedAttestations += 1;
      return stats;
    },
    {
      missingConvocations: 0,
      missingAttestations: 0,
      sentConvocations: 0,
      receivedAttestations: 0,
    },
  );
}

function isPastMission(mission) {
  return mission.status === "done";
}

function hasPendingDocuments(mission) {
  const docs = getMissionDocuments(mission);
  return !docs.convocation || (canSubmitAttestation(mission) && !docs.attestation);
}

function applyMissionFilter(missionList) {
  if (state.missionFilter === "past") return missionList.filter(isPastMission);
  if (state.missionFilter === "documents") return missionList.filter(hasPendingDocuments);

  return missionList;
}

function renderMissionFilterControls(missionList) {
  const counts = {
    all: missionList.length,
    past: missionList.filter(isPastMission).length,
    documents: missionList.filter(hasPendingDocuments).length,
  };

  return `
    <div class="mission-filter-tabs" aria-label="Filtrer les missions">
      ${missionFilters
        .map(
          (filter) => `
            <button class="${state.missionFilter === filter.key ? "is-active" : ""}" data-mission-filter="${filter.key}" type="button" aria-pressed="${state.missionFilter === filter.key}">
              ${filter.label}
              <span>${counts[filter.key]}</span>
            </button>
          `,
        )
        .join("")}
    </div>
  `;
}

function setRouteFromHash() {
  const [portalFromHash, pageFromHash] = window.location.hash.replace("#", "").split("/");
  const nextPortal = pages[portalFromHash] ? portalFromHash : state.portal;
  const nextPage = pages[nextPortal].includes(pageFromHash) ? pageFromHash : "accueil";

  state.portal = nextPortal;
  state.page = nextPage;
  render();
}

function navigate(portal, page = "accueil") {
  window.location.hash = `${portal}/${page}`;
}

function setNotice(message) {
  notice.textContent = message;
  notice.hidden = false;
  window.setTimeout(() => {
    notice.hidden = true;
  }, 3000);
}

function render() {
  document.body.classList.toggle("is-external", state.portal === "externe");
  pageTitle.textContent = pageLabels[state.page];
  portalEyebrow.textContent = state.portal === "interne" ? "Portail interne" : "Portail collaborateur";
  newMissionButton.hidden = state.portal === "externe";

  document.querySelectorAll(".portal-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.portal === state.portal);
  });

  document.querySelectorAll(".nav-item").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.nav === `${state.portal}:${state.page}`);
  });

  const renderer = {
    "interne:accueil": renderInternalHome,
    "interne:planning": renderInternalPlanning,
    "interne:missions": renderMissions,
    "interne:collaborateurs": renderCollaborators,
    "externe:accueil": renderExternalHome,
    "externe:planning": renderExternalPlanning,
    "externe:missions": renderExternalMissions,
  }[`${state.portal}:${state.page}`];

  appView.innerHTML = renderer();
  bindViewEvents();
}

function renderInternalHome() {
  const todayMissions = byQuery(missions.filter((mission) => mission.day === "Lun")).sort(byDateTime);
  const pendingCount = missions.filter((mission) => mission.status === "pending").length;
  const urgentCount = missions.filter((mission) => mission.status === "urgent").length;
  const freeCount = collaborators.filter((collaborator) => collaborator.free.includes("Lun")).length;

  return `
    <section class="metric-grid" aria-label="Indicateurs du jour">
      ${metricCard("Missions aujourd'hui", todayMissions.length, "4 langues mobilisées", "accent-green")}
      ${metricCard("À assigner", pendingCount, "Priorité avant 18h", "accent-yellow")}
      ${metricCard("Urgences", urgentCount, "Une confirmation client attendue", "accent-red")}
      ${metricCard("Disponibles", freeCount, "Collaborateurs joignables", "accent-cyan")}
    </section>

    <section class="split-layout">
      <div class="section">
        <div class="section-header">
          <div>
            <p class="eyebrow">Lundi 13 avril</p>
            <h2>Planning opérationnel</h2>
            <p>Les créneaux sensibles restent visibles en premier.</p>
          </div>
          <button class="secondary-action" data-go="interne/planning" type="button">Voir la semaine</button>
        </div>
        <div class="timeline-list">
          ${todayMissions.map((mission) => timelineItem(mission, "interactive")).join("") || emptyState("Aucune mission ne correspond à la recherche.")}
        </div>
      </div>

      <aside class="profile-panel">
        <div class="profile-cover" role="img" aria-label="Réunion d'équipe autour d'un planning"></div>
        <div>
          <p class="eyebrow">Suivi rapide</p>
          <h2>Coordination STI</h2>
        </div>
        <ul class="quick-list">
          <li><span>Langues couvertes</span><strong>120+</strong></li>
          <li><span>Réseau collaborateurs</span><strong>1200+</strong></li>
          <li><span>Demandes 24/7</span><strong>Actif</strong></li>
          <li><span>Créneaux à risque</span><strong>${pendingCount + urgentCount}</strong></li>
        </ul>
      </aside>
    </section>
  `;
}

function renderInternalPlanning() {
  const filteredMissions = [...byQuery(missions)].sort(byDateTime);
  const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
  const dayDates = {
    Lun: "13 avr",
    Mar: "14 avr",
    Mer: "15 avr",
    Jeu: "16 avr",
    Ven: "17 avr",
    Sam: "18 avr",
    Dim: "19 avr",
  };

  return `
    <section class="planning-panel">
      <div class="planning-toolbar">
        <div>
          <p class="eyebrow">Semaine du 13 avril 2026</p>
          <h2>Planning missions</h2>
        </div>
        <div class="mission-meta">
          <span class="badge">${filteredMissions.length} missions</span>
          <span class="badge">${filteredMissions.filter((mission) => mission.status === "pending").length} à assigner</span>
          <span class="badge">${filteredMissions.filter((mission) => mission.status === "urgent").length} urgente</span>
          <button class="secondary-action" data-open-global-calendar type="button">Calendrier global</button>
        </div>
      </div>
      <div class="calendar-scroll-note">Semaine complète 24/7, organisée par jour.</div>
      <div class="week-grid">
        ${days
          .map((day) => {
            const dayMissions = filteredMissions.filter((mission) => mission.day === day);
            return `
              <div class="day-column">
                <div class="day-title">
                  <div>
                    <span class="day-name">${day}</span>
                    <span class="day-date">${dayDates[day]}</span>
                  </div>
                  <span class="day-count">${dayMissions.length} mission${dayMissions.length > 1 ? "s" : ""}</span>
                </div>
                ${dayMissions.map(planningEvent).join("") || emptyState("Libre")}
              </div>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderMissions() {
  const searchableMissions = [...byQuery(missions)].sort(byDateTime);
  const filteredMissions = applyMissionFilter(searchableMissions);
  const docsStats = missionDocumentStats(filteredMissions);

  return `
    <section class="section">
      <div class="section-header">
        <div>
          <p class="eyebrow">Gestion des demandes</p>
          <h2>Liste des missions</h2>
          <p>Assignation, confirmation et suivi administratif.</p>
        </div>
        <button class="primary-action" data-new-mission type="button">Nouvelle mission</button>
      </div>
      <div class="filter-strip">
        ${renderMissionFilterControls(searchableMissions)}
        <span class="badge">${filteredMissions.length} résultats</span>
        <span class="badge">${filteredMissions.filter((mission) => mission.status === "confirmed").length} confirmées</span>
        <span class="badge">${filteredMissions.filter((mission) => mission.status === "pending").length} à assigner</span>
        <span class="badge">${docsStats.missingConvocations} convocations à ajouter</span>
        <span class="badge">${docsStats.missingAttestations} attestations attendues</span>
      </div>
      <div class="mission-list">
        ${filteredMissions.map(missionCard).join("") || emptyState("Aucune mission trouvée.")}
      </div>
    </section>
  `;
}

function renderCollaborators() {
  const filteredCollaborators = byQuery(collaborators);

  return `
    <section class="section">
      <div class="section-header">
        <div>
          <p class="eyebrow">Réseau linguistique</p>
          <h2>Collaborateurs</h2>
          <p>Disponibilités, langues et domaines d'intervention.</p>
        </div>
        <span class="badge">${filteredCollaborators.length} profils actifs</span>
      </div>
      <div class="collaborator-grid">
        ${filteredCollaborators.map(collaboratorCard).join("") || emptyState("Aucun collaborateur trouvé.")}
      </div>
    </section>
  `;
}

function renderExternalHome() {
  const myMissions = [
    ...byQuery(missions.filter((mission) => mission.collaborator === "Elena Popescu")),
  ].sort(byDateTime);
  const nextMission = myMissions[0];
  const nextMissionValue = nextMission ? nextMission.time : "-";
  const nextMissionDetail = nextMission ? `${nextMission.day} à ${nextMission.city}` : "Aucun résultat";

  return `
    <section class="external-hero">
      <div class="external-summary">
        <div>
          <p class="eyebrow">Bonjour Elena</p>
          <h2>${myMissions.length} créneaux demandent votre attention cette semaine.</h2>
        </div>
        <div class="metric-grid">
          ${metricCard("Prochaine mission", nextMissionValue, nextMissionDetail, "accent-red")}
          ${metricCard("Missions prévues", myMissions.length, "Semaine en cours", "accent-green")}
          ${metricCard("Disponibilités", availabilitySlotCount(), "Créneaux matin/après-midi", "accent-cyan")}
          ${metricCard("Documents", 3, "À transmettre", "accent-yellow")}
        </div>
        <div class="external-list">
          ${myMissions.map((mission) => timelineItem(mission, "interactive")).join("") || emptyState("Aucune mission ne correspond à la recherche.")}
        </div>
      </div>
    </section>
  `;
}

function renderExternalPlanning() {
  const myMissions = [
    ...byQuery(missions.filter((mission) => mission.collaborator === "Elena Popescu")),
  ].sort(byDateTime);

  return `
    <section class="section">
      <div class="section-header">
        <div>
          <p class="eyebrow">Mes disponibilités</p>
          <h2>Planning collaborateur</h2>
          <p>Activez vos créneaux du matin ou de l'après-midi.</p>
        </div>
        <div class="section-actions">
          <span class="badge">${availabilitySlotCount()} créneaux disponibles</span>
          <button class="secondary-action" data-open-global-calendar type="button">Calendrier global</button>
        </div>
      </div>
      <div class="availability-editor">
        ${availabilityDays
          .map(
            (day) => `
              <div class="availability-day">
                <div>
                  <strong>${day}</strong>
                  <span class="availability-summary">${availabilitySummary(day)}</span>
                </div>
                <div class="slot-buttons">
                  ${availabilityPeriods
                    .map(
                      (period) => `
                        <button class="${isAvailableSlot(day, period.key) ? "is-free" : ""}" data-toggle-slot="${day}" data-toggle-period="${period.key}" type="button">
                          ${period.label}
                        </button>
                      `,
                    )
                    .join("")}
                </div>
              </div>
            `,
          )
          .join("")}
      </div>
    </section>

    <section class="section">
      <div class="section-header">
        <div>
          <p class="eyebrow">Missions assignées</p>
          <h2>Mes prochains rendez-vous</h2>
          <p>Vue semaine, avec deux missions maximum affichées par jour.</p>
        </div>
        <span class="badge">${myMissions.length} missions cette semaine</span>
      </div>
      ${renderExternalMissionCalendar(myMissions)}
    </section>
  `;
}

function renderExternalMissions() {
  const searchableMissions = [
    ...byQuery(missions.filter((mission) => mission.collaborator === "Elena Popescu")),
  ].sort(byDateTime);
  const myMissions = applyMissionFilter(searchableMissions);
  const docsStats = missionDocumentStats(myMissions);

  return `
    <section class="section">
      <div class="section-header">
        <div>
          <p class="eyebrow">Documents missions</p>
          <h2>Mes missions</h2>
          <p>Convocations et attestations de fin de mission.</p>
        </div>
        <span class="badge">${myMissions.length} missions</span>
      </div>
      <div class="filter-strip">
        ${renderMissionFilterControls(searchableMissions)}
        <span class="badge">${docsStats.sentConvocations} convocations reçues</span>
        <span class="badge">${docsStats.missingConvocations} convocations en attente</span>
        <span class="badge">${docsStats.missingAttestations} attestations à déposer</span>
      </div>
      <div class="external-mission-list">
        ${myMissions.map(externalMissionCard).join("") || emptyState("Aucune mission trouvée.")}
      </div>
    </section>
  `;
}

function renderGlobalCalendar() {
  const monthDate = parseLocalDate(state.globalCalendarMonth);
  const month = monthDate.getMonth();
  const year = monthDate.getFullYear();
  const monthLabel = new Intl.DateTimeFormat("fr-FR", {
    month: "long",
    year: "numeric",
  }).format(monthDate);
  const monthMissions = calendarScopeMissions().filter((mission) => {
    const missionDate = parseLocalDate(mission.date);
    return missionDate.getMonth() === month && missionDate.getFullYear() === year;
  });
  const firstWeekOffset = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const totalCells = Math.ceil((firstWeekOffset + daysInMonth) / 7) * 7;
  const scopeLabel = state.portal === "interne" ? "Toutes les missions STI" : "Mes missions assignées";

  return `
    <div class="global-calendar">
      <div class="global-calendar-header">
        <div>
          <p class="eyebrow">Calendrier global</p>
          <h2>${monthLabel}</h2>
          <p>${scopeLabel}</p>
        </div>
        <div class="calendar-nav">
          <button class="secondary-action" data-calendar-month="-1" type="button">Mois précédent</button>
          <button class="secondary-action" data-calendar-month="1" type="button">Mois suivant</button>
        </div>
      </div>
      <div class="filter-strip">
        <span class="badge">${monthMissions.length} missions sur le mois</span>
        <span class="badge">${monthMissions.filter((mission) => mission.status === "pending").length} à assigner</span>
        <span class="badge">${monthMissions.filter((mission) => mission.status === "urgent").length} urgentes</span>
      </div>
      <div class="global-calendar-scroll">
        <div class="global-calendar-grid">
          ${availabilityDays.map((day) => `<div class="calendar-weekday">${day}</div>`).join("")}
          ${Array.from({ length: totalCells }, (_, index) => {
            const dayNumber = index - firstWeekOffset + 1;
            if (dayNumber < 1 || dayNumber > daysInMonth) {
              return `<div class="calendar-cell is-muted"></div>`;
            }

            const dateKey = `${year}-${String(month + 1).padStart(2, "0")}-${String(dayNumber).padStart(2, "0")}`;
            const dayMissions = monthMissions.filter((mission) => mission.date === dateKey);
            const visibleMissions = dayMissions.slice(0, 3);
            const hiddenCount = Math.max(dayMissions.length - visibleMissions.length, 0);

            return `
              <div class="calendar-cell">
                <div class="calendar-cell-header">
                  <strong>${dayNumber}</strong>
                  ${dayMissions.length ? `<span>${dayMissions.length}</span>` : ""}
                </div>
                <div class="calendar-cell-events">
                  ${
                    visibleMissions
                      .map(
                        (mission) => `
                          <button class="calendar-event ${mission.status}" data-open-calendar-mission="${mission.id}" type="button">
                            <span>${mission.time}</span>
                            <strong>${mission.language}</strong>
                            <small>${mission.city}</small>
                          </button>
                        `,
                      )
                      .join("") || `<span class="calendar-empty">Libre</span>`
                  }
                  ${hiddenCount ? `<span class="more-missions">+${hiddenCount} autre${hiddenCount > 1 ? "s" : ""}</span>` : ""}
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    </div>
  `;
}

function metricCard(label, value, detail, accent) {
  return `
    <article class="metric-card ${accent}">
      <span>${label}</span>
      <strong>${value}</strong>
      <p class="meta">${detail}</p>
    </article>
  `;
}

function renderExternalMissionCalendar(myMissions) {
  return `
    <div class="collaborator-week-grid" aria-label="Calendrier hebdomadaire des prochaines missions">
      ${availabilityDays
        .map((day) => {
          const dayMissions = myMissions.filter((mission) => mission.day === day);
          const visibleMissions = dayMissions.slice(0, 2);
          const hiddenCount = Math.max(dayMissions.length - visibleMissions.length, 0);

          return `
            <div class="collaborator-day-column">
              <div class="day-title">
                <span>${day}</span>
                <span class="day-label">${dayMissions.length} rdv</span>
              </div>
              ${visibleMissions.map(externalMissionEvent).join("") || emptyState("Aucun rdv")}
              ${hiddenCount ? `<span class="more-missions">+${hiddenCount} autre${hiddenCount > 1 ? "s" : ""}</span>` : ""}
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderDocumentPanel(mission, mode) {
  const docs = getMissionDocuments(mission);
  const isInternal = mode === "internal";
  const attestationReady = canSubmitAttestation(mission);
  const convocationText = docs.convocation
    ? documentFileText(docs, "convocation", "Document transmis avant mission")
    : "À ajouter par l'équipe STI";
  const attestationText = docs.attestation
    ? documentFileText(docs, "attestation", "Document reçu après mission")
    : attestationReady
      ? "À déposer après la mission"
      : "Disponible après mission";

  return `
    <div class="document-panel">
      <div class="document-row">
        <div>
          <strong>Convocation</strong>
          <span>${convocationText}</span>
        </div>
        ${
          docs.convocation
            ? `<div class="document-actions">
                <span class="document-chip uploaded">Transmise</span>
                ${isInternal ? `<button class="small-action" data-add-convocation="${mission.id}" type="button">Remplacer fichier</button>` : ""}
              </div>`
            : isInternal
              ? `<button class="small-action" data-add-convocation="${mission.id}" type="button">Choisir convocation</button>`
              : `<span class="document-chip missing">En attente STI</span>`
        }
      </div>
      <div class="document-row">
        <div>
          <strong>Attestation fin de mission</strong>
          <span>${attestationText}</span>
        </div>
        ${
          docs.attestation
            ? `<div class="document-actions">
                <span class="document-chip uploaded">Reçue</span>
                ${!isInternal && attestationReady ? `<button class="small-action" data-add-attestation="${mission.id}" type="button">Remplacer fichier</button>` : ""}
              </div>`
            : !attestationReady
              ? `<span class="document-chip locked">Après mission</span>`
              : isInternal
                ? `<span class="document-chip missing">Attendue</span>`
                : `<button class="small-action" data-add-attestation="${mission.id}" type="button">Choisir attestation</button>`
        }
      </div>
    </div>
  `;
}

function externalMissionCard(mission) {
  return `
    <article class="external-mission-card clickable-mission" role="button" tabindex="0" data-open-mission-detail="${mission.id}">
      <div class="mission-title">
        <h3>${mission.client}</h3>
        <span class="status-chip ${mission.status}">${statusLabels[mission.status]}</span>
      </div>
      <div class="mission-meta">
        <span>${mission.day} ${mission.time} - ${mission.end}</span>
        <span>${mission.city}</span>
        <span>${mission.language}</span>
        <span>${mission.type}</span>
      </div>
      ${renderDocumentPanel(mission, "external")}
    </article>
  `;
}

function renderMissionDetailModal(mission, mode) {
  const isInternal = mode === "internal";

  return `
    <div class="modal-mission-detail">
      <p class="eyebrow">Détail mission</p>
      <div class="section-header">
        <div>
          <h2>${mission.client}</h2>
          <p>${mission.language} - ${mission.city}</p>
        </div>
        <span class="status-chip ${mission.status}">${statusLabels[mission.status]}</span>
      </div>

      <div class="detail-grid">
        <div>
          <span>Date</span>
          <strong>${mission.day} ${mission.date}</strong>
        </div>
        <div>
          <span>Horaire</span>
          <strong>${mission.time} - ${mission.end}</strong>
        </div>
        <div>
          <span>Ville</span>
          <strong>${mission.city}</strong>
        </div>
        <div>
          <span>Langue</span>
          <strong>${mission.language}</strong>
        </div>
        <div>
          <span>Type</span>
          <strong>${mission.type}</strong>
        </div>
        <div>
          <span>Secteur</span>
          <strong>${mission.sector}</strong>
        </div>
        <div>
          <span>${isInternal ? "Collaborateur" : "Intervenant"}</span>
          <strong>${mission.collaborator}</strong>
        </div>
      </div>

      <div class="mission-note">
        <span>Notes STI</span>
        <p>${mission.notes}</p>
      </div>

      ${renderDocumentPanel(mission, mode)}
    </div>
  `;
}

function externalMissionEvent(mission) {
  return `
    <article class="external-mission-event clickable-mission ${mission.status}" role="button" tabindex="0" data-open-mission-detail="${mission.id}">
      <span class="event-time">${mission.time} - ${mission.end}</span>
      <strong>${mission.client}</strong>
      <span>${mission.city}</span>
      <div class="mission-meta">
        <span class="language-chip">${mission.language}</span>
        <span class="status-chip ${mission.status}">${statusLabels[mission.status]}</span>
      </div>
    </article>
  `;
}

function timelineItem(mission, mode = "static") {
  const interactiveAttrs =
    mode === "interactive"
      ? ` role="button" tabindex="0" data-open-mission-detail="${mission.id}"`
      : "";
  const className = mode === "interactive" ? "timeline-item clickable-mission" : "timeline-item";

  return `
    <article class="${className}"${interactiveAttrs}>
      <div class="timeline-time">${mission.time}</div>
      <div class="timeline-main">
        <h3>${mission.client}</h3>
        <div class="mission-meta">
          <span>${mission.city}</span>
          <span>${mission.language}</span>
          <span>${mission.type}</span>
        </div>
      </div>
      <span class="status-chip ${mission.status}">${statusLabels[mission.status]}</span>
    </article>
  `;
}

function planningEvent(mission) {
  return `
    <button class="planning-event clickable-mission ${mission.status}" data-open-mission-detail="${mission.id}" type="button">
      <span class="event-time">${mission.time} - ${mission.end}</span>
      <strong>${mission.language}</strong>
      <span>${mission.client}</span>
      <span class="type-chip">${mission.type}</span>
    </button>
  `;
}

function missionCard(mission) {
  return `
    <article class="mission-card clickable-mission" role="button" tabindex="0" data-open-mission-detail="${mission.id}">
      <div>
        <div class="mission-title">
          <h3>${mission.client}</h3>
          <span class="status-chip ${mission.status}">${statusLabels[mission.status]}</span>
        </div>
        <div class="mission-meta">
          <span>${mission.day} ${mission.time} - ${mission.end}</span>
          <span>${mission.city}</span>
          <span>${mission.language}</span>
          <span>${mission.collaborator}</span>
        </div>
        ${renderDocumentPanel(mission, "internal")}
      </div>
      <button class="small-action" data-open-mission-detail="${mission.id}" type="button">Détail</button>
    </article>
  `;
}

function collaboratorCard(collaborator) {
  const days = ["L", "M", "M", "J", "V"];
  const fullDays = ["Lun", "Mar", "Mer", "Jeu", "Ven"];

  return `
    <article class="collaborator-card">
      <div class="collaborator-head">
        <img class="avatar" src="${collaborator.avatar}" alt="Portrait de ${collaborator.name}" />
        <div>
          <h3>${collaborator.name}</h3>
          <p class="meta">${collaborator.role}</p>
        </div>
      </div>
      <div class="language-row">
        ${collaborator.languages.map((language) => `<span class="language-chip">${language}</span>`).join("")}
      </div>
      <ul class="quick-list">
        <li><span>Ville</span><strong>${collaborator.city}</strong></li>
        <li><span>Note qualité</span><strong>${collaborator.rating}/5</strong></li>
        <li><span>Statut</span><strong>${collaborator.status}</strong></li>
      </ul>
      <div class="availability" aria-label="Disponibilités de ${collaborator.name}">
        ${days
          .map(
            (day, index) =>
              `<span class="${collaborator.free.includes(fullDays[index]) ? "is-free" : ""}">${day}</span>`,
          )
          .join("")}
      </div>
    </article>
  `;
}

function emptyState(message) {
  return `<div class="empty-state">${message}</div>`;
}

function attachDocumentActionHandlers(root = document) {
  root.querySelectorAll("[data-add-convocation]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const mission = missions.find((item) => item.id === button.dataset.addConvocation);
      if (!mission) return;

      requestDocumentUpload(mission.id, "convocation");
    });
  });

  root.querySelectorAll("[data-add-attestation]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const mission = missions.find((item) => item.id === button.dataset.addAttestation);
      if (!mission) return;

      requestDocumentUpload(mission.id, "attestation");
    });
  });
}

function openMissionDetail(missionId) {
  const mission = missions.find((item) => item.id === missionId);
  if (!mission) return;

  const mode = state.portal === "interne" ? "internal" : "external";
  missionDetailContainer.innerHTML = renderMissionDetailModal(mission, mode);
  attachDocumentActionHandlers(missionDetailDialog);

  if (!missionDetailDialog.open) {
    missionDetailDialog.showModal();
  }
}

function openGlobalCalendar() {
  globalCalendarContent.innerHTML = renderGlobalCalendar();
  bindGlobalCalendarEvents();

  if (!globalCalendarDialog.open) {
    globalCalendarDialog.showModal();
  }
}

function bindGlobalCalendarEvents() {
  globalCalendarDialog.querySelectorAll("[data-calendar-month]").forEach((button) => {
    button.addEventListener("click", () => {
      addGlobalCalendarMonth(Number(button.dataset.calendarMonth));
      globalCalendarContent.innerHTML = renderGlobalCalendar();
      bindGlobalCalendarEvents();
    });
  });

  globalCalendarDialog.querySelectorAll("[data-open-calendar-mission]").forEach((button) => {
    button.addEventListener("click", () => {
      const missionId = button.dataset.openCalendarMission;
      globalCalendarDialog.close();
      openMissionDetail(missionId);
    });
  });
}

function bindViewEvents() {
  document.querySelectorAll("[data-go]").forEach((button) => {
    button.addEventListener("click", () => {
      const [portal, page] = button.dataset.go.split("/");
      navigate(portal, page);
    });
  });

  document.querySelectorAll("[data-open-mission]").forEach((button) => {
    button.addEventListener("click", () => {
      navigate("interne", "planning");
    });
  });

  document.querySelectorAll("[data-new-mission]").forEach((button) => {
    button.addEventListener("click", openMissionDialog);
  });

  document.querySelectorAll("[data-open-global-calendar]").forEach((button) => {
    button.addEventListener("click", openGlobalCalendar);
  });

  document.querySelectorAll("[data-open-mission-detail]").forEach((card) => {
    card.addEventListener("click", (event) => {
      const buttonTarget = event.target.closest("button");
      if (buttonTarget && buttonTarget !== card) return;
      openMissionDetail(card.dataset.openMissionDetail);
    });
    card.addEventListener("keydown", (event) => {
      if (!["Enter", " "].includes(event.key)) return;
      const buttonTarget = event.target.closest("button");
      if (buttonTarget && buttonTarget !== card) return;
      event.preventDefault();
      openMissionDetail(card.dataset.openMissionDetail);
    });
  });

  document.querySelectorAll("[data-mission-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.missionFilter = button.dataset.missionFilter;
      render();
    });
  });

  attachDocumentActionHandlers(document);

  document.querySelectorAll("[data-toggle-slot]").forEach((button) => {
    button.addEventListener("click", () => {
      const day = button.dataset.toggleSlot;
      const period = button.dataset.togglePeriod;
      const periods = state.collaboratorAvailability[day] || [];

      if (periods.includes(period)) {
        state.collaboratorAvailability[day] = periods.filter((item) => item !== period);
      } else {
        state.collaboratorAvailability[day] = availabilityPeriods
          .map((item) => item.key)
          .filter((item) => [...periods, period].includes(item));
      }

      const label = availabilityPeriods.find((item) => item.key === period)?.label || "Créneau";
      setNotice(`Disponibilité ${day} ${label.toLowerCase()} mise à jour.`);
      render();
    });
  });
}

function openMissionDialog() {
  const dateField = dialog.querySelector('[name="date"]');
  const timeField = dialog.querySelector('[name="time"]');
  dateField.value = "2026-04-13";
  timeField.value = "09:00";
  dialog.showModal();
}

document.querySelectorAll(".portal-button").forEach((button) => {
  button.addEventListener("click", () => navigate(button.dataset.portal, "accueil"));
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

newMissionButton.addEventListener("click", openMissionDialog);

documentFileInput.addEventListener("change", () => {
  const file = documentFileInput.files?.[0];
  if (!file || !pendingDocumentUpload) return;

  const mission = missions.find((item) => item.id === pendingDocumentUpload.missionId);
  if (!mission) return;

  const docs = getMissionDocuments(mission);
  const type = pendingDocumentUpload.type;
  docs[type] = true;
  docs[`${type}Name`] = file.name;

  const label = type === "convocation" ? "Convocation" : "Attestation de fin de mission";
  pendingDocumentUpload = null;
  setNotice(`${label} ajoutée : ${file.name}`);
  render();

  if (missionDetailDialog.open) {
    openMissionDetail(mission.id);
  }
});

dialog.addEventListener("close", () => {
  if (dialog.returnValue !== "confirm") return;

  const formData = new FormData(dialog.querySelector("form"));
  const day = new Intl.DateTimeFormat("fr-FR", { weekday: "short" })
    .format(new Date(formData.get("date")))
    .replace(".", "");

  const missionId = `m${Date.now()}`;

  missions.push({
    id: missionId,
    date: formData.get("date"),
    day: day.charAt(0).toUpperCase() + day.slice(1, 3),
    time: formData.get("time"),
    end: "À définir",
    client: formData.get("client"),
    city: formData.get("city"),
    language: formData.get("language"),
    type: formData.get("type"),
    status: "pending",
    collaborator: "À assigner",
    sector: "À qualifier",
    notes: "Nouvelle demande ajoutée depuis la maquette.",
  });
  missionDocuments[missionId] = { convocation: false, attestation: false };

  dialog.querySelector("form").reset();
  setNotice("Mission ajoutée au planning avec le statut À assigner.");
  navigate("interne", "planning");
  render();
});

window.addEventListener("hashchange", setRouteFromHash);

if (!window.location.hash) {
  navigate("interne", "accueil");
} else {
  setRouteFromHash();
}
