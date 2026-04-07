export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend & Distributed Systems',
    skills: [
      'Go',
      'Microservices',
      'Concurrency',
      'High-throughput Pipelines',
      'Event-driven Architecture',
      'gRPC',
      'REST APIs',
      'Service Ownership',
      'Observability',
    ],
  },
  {
    title: 'AI/ML Engineering',
    skills: [
      'Fine-tuning (DeBERTa, HuggingFace)',
      'ONNX Runtime',
      'Prompt Injection Detection',
      'FastAPI',
      'MLflow',
      'DVC',
      'pgvector',
      'LLM Integration',
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    skills: [
      'AWS',
      'Azure',
      'GCP',
      'Terraform',
      'CloudFormation',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'GitHub Actions',
    ],
  },
  {
    title: 'Data & Storage',
    skills: [
      'PostgreSQL',
      'Redis',
      'MongoDB',
      'MemgraphDB',
      'Presto',
      'Graph Databases',
      'RDS',
    ],
  },
  {
    title: 'Security',
    skills: [
      'Cloud Security Posture Management (CSPM)',
      'MCP Security',
      'CIEM',
      'Attack Path Analysis',
      'Risk Prioritization',
      'PII Detection (Presidio)',
      'Agentless Scanning',
    ],
  },
];
