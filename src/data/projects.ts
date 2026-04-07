export interface Project {
  title: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: 'MCP Security Gateway',
    description:
      'Security proxy between AI applications/MCP clients and LLMs. Intercepts tool calls, validates against per-session contracts, enforces policies. On-premises deployment for enterprise customers.',
    tags: ['Go', 'MCP Protocol', 'Security', 'Kubernetes', 'Policy Engine'],
  },
  {
    title: 'Prompt Injection Detection Pipeline',
    description:
      'Fine-tuned DeBERTa-v3-base as text-pair classifier with ONNX Runtime for sub-50ms inference. Multi-turn context awareness with three-layer summarization. Differentiated confidence thresholds per interception point.',
    tags: ['Python', 'DeBERTa', 'ONNX', 'FastAPI', 'gRPC', 'Redis', 'MLflow'],
  },
  {
    title: 'MCP Server Catalog & Trust Scoring',
    description:
      'Discovery and security evaluation service for MCP servers from public registries. Four-tier pipeline: metadata/provenance, manifest analysis, static code analysis (CVE + secret scanning), and dynamic sandbox analysis.',
    tags: ['Go', 'Security Analysis', 'GitHub API', 'Smithery', 'trufflehog'],
  },
  {
    title: 'Cloud Security Graph Analytics',
    description:
      'Ingestion pipeline syncing 500K+ nodes into MemgraphDB across hundreds of cloud accounts. Powers attack path analysis and risk prioritization for enterprise cloud security.',
    tags: ['Go', 'MemgraphDB', 'Azure', 'AWS', 'Graph Analytics'],
  },
  {
    title: 'File Scanning Microservice',
    description:
      'Go service for parsing PDF, DOCX, XLSX, PPTX to detect sensitive/harmful content. Uses Apache Tika for extraction, DeBERTa + Presidio for ML inference and PII detection.',
    tags: ['Go', 'Apache Tika', 'Presidio', 'DeBERTa', 'ONNX'],
  },
];
