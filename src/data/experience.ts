export interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Uptycs',
    role: 'Principal Software Engineer',
    period: 'Nov 2021 – Present',
    bullets: [
      'Owned backend architecture for Azure cloud security products, enabling enterprise customer onboardings',
      'Designed Go-based microservices for high-volume cloud telemetry ingestion (Azure Event Hubs)',
      'Architected ingestion pipeline syncing 500K+ graph nodes into MemgraphDB for security graph analytics',
      'Built distributed services for Risk Prioritization, Attack Path Analysis, and CIEM Analytics',
      'Led backend for agentless scanning (Azure VM disk analysis, AWS S3 DSPM)',
      'Mentored team of 4–6 engineers, set backend best practices',
    ],
  },
  {
    company: 'Oracle',
    role: 'Software Engineer',
    period: 'Mar 2020 – Oct 2021',
    bullets: [
      'Worked on Order Management systems within Oracle Fusion Cloud (O2R)',
      'Developed extensions during migration from legacy GSI to Fusion Cloud',
    ],
  },
  {
    company: 'Gen (NortonLifeLock)',
    role: 'Software Engineer',
    period: 'Sep 2017 – Feb 2020',
    bullets: [
      'Developed backend and extension features for Norton security products',
      'Built ad-blocking tools and dashboards using ELK stack',
      'Contributed to password management solutions across iOS and macOS',
    ],
  },
];
