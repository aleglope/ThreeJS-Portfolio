const githubProfile = "https://github.com/aleglope";
const profileCases = `${githubProfile}/aleglope/blob/main/case-studies`;

export const professionalArchive = `${githubProfile}/production-systems-case-studies`;

export const recentWork = [
  { id: "velvet", status: "client" },
  { id: "rastro", status: "prototype", caseUrl: `${profileCases}/rastro` },
  { id: "combivideo", status: "experimental", caseUrl: `${profileCases}/combivideo` },
  { id: "palermo", status: "development" },
  { id: "virusinvaders", status: "documented", href: `${githubProfile}/VirusInvaders` },
  { id: "music-ia", status: "development" },
  { id: "wentwit", status: "prototype" },
];

export const professionalCases = [
  { id: "audionow", href: `${professionalArchive}/blob/main/projects/audionow.md` },
  { id: "online-registration", href: `${professionalArchive}/blob/main/projects/online-registration.md` },
  { id: "printflow", href: `${professionalArchive}/blob/main/projects/printflow.md` },
];
