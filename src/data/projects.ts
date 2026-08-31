import {
  BarChart3,
  Brain,
  Cpu,
  Database,
  Network,
  Workflow,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { getAssetPath } from '@/utils/pathUtils';

export type ProjectCategory =
  | 'Data Engineering'
  | 'AI'
  | 'Distributed Systems'
  | 'ML';

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: ProjectCategory;
  status?: string;
  sortRank?: number;
  tech: string[];
  fullDescription: string;
  features: string[];
  challenges: string;
  solution: string;
  github?: string;
  liveUrl?: string;
  liveLabel?: string;
  image?: string;
  featured?: boolean;
}

const projectItems: PortfolioProject[] = [
  {
    id: 'crypto-intelligence-platform',
    title: 'Crypto Intelligence Platform',
    description: 'Real-time ingestion and stream processing platform for live crypto trade data from Binance and Coinbase.',
    icon: Zap,
    category: 'Data Engineering',
    sortRank: 10,
    tech: ['Python', 'Apache Kafka', 'Apache Flink', 'Grafana'],
    fullDescription: 'A real-time data platform that ingests live trade streams from Binance and Coinbase WebSockets via Kafka, processes them through stateful Flink pipelines for cross-exchange trade analysis, and routes processing events and operational metrics to Grafana for live visualization.',
    features: [
      'Real-time ingestion from multiple exchange WebSocket feeds',
      'Kafka-based event streaming backbone',
      'Stateful Flink pipelines for cross-exchange trade analysis',
      'Live operational metrics routed to Grafana dashboards',
    ],
    challenges: 'Crypto trade data arrives continuously across multiple exchanges with different formats and timing, making it hard to analyze trends consistently in real time.',
    solution: 'Built a Kafka-backed ingestion layer to normalize incoming streams, with Flink handling stateful, low-latency processing across exchanges before feeding live metrics to Grafana.',
    github: 'https://github.com/kavya-yeluguri/crypto-intelligence-platform',
    image: getAssetPath('/crypto-architecture.png'),
    featured: true,
    status: 'Currently building',
  },
  {
    id: 'claude-mcp-data-connector',
    title: 'Claude-MCP Data Connector',
    description: 'A custom MCP server exposing BigQuery tools to Claude for natural-language querying, with schema-grounding guardrails.',
    icon: Brain,
    category: 'AI',
    sortRank: 20,
    tech: ['Python', 'FastMCP', 'BigQuery', 'MCP'],
    fullDescription: 'Built a custom Model Context Protocol (MCP) server using FastMCP and Python to expose BigQuery tools to Claude, enabling natural-language querying with schema-grounding guardrails to prevent unnecessary or malformed table scans.',
    features: [
      'Natural-language to validated BigQuery SQL translation',
      'Schema-grounding to keep generated queries accurate',
      'Execution safeguards to control cost-intensive scans',
    ],
    challenges: 'LLMs querying a database directly can generate malformed or expensive queries without any grounding in the actual schema or cost constraints.',
    solution: 'Built an MCP server that grounds the LLM in real schema information and enforces execution safeguards before any query runs.',
    image: getAssetPath('/mcp-hero.png'),
    featured: true,
  },
];

export const projects = [...projectItems].sort(
  (a, b) => (a.sortRank ?? 999) - (b.sortRank ?? 999),
);

export const featuredProjects = projects.filter((project) => project.featured);

export const projectCategories: Array<'All' | ProjectCategory> = [
  'All',
  'Data Engineering',
  'AI',
  'Distributed Systems',
  'ML',
];
