import React from 'react';
import { 
  Code2, 
  Database, 
  Server, 
  Globe, 
  Cpu, 
  Bot, 
  Layers, 
  Hexagon, 
  Boxes,
  Blocks,
  Terminal,
  Workflow
} from 'lucide-react';

export function TechIcon({ tech, size = 14 }: { tech: string, size?: number }) {
  const t = tech.toLowerCase();
  
  // AI / ML
  if (t.includes('gpt') || t.includes('ai') || t.includes('bert') || t.includes('t5')) return <Bot size={size} />;
  if (t.includes('python') || t.includes('pytorch') || t.includes('tensorflow')) return <Cpu size={size} />;
  if (t.includes('hugging face') || t.includes('spacy') || t.includes('nltk')) return <Blocks size={size} />;
  if (t.includes('langchain')) return <Workflow size={size} />;
  
  // Blockchain
  if (t.includes('ethereum') || t.includes('solidity') || t.includes('web3') || t.includes('ipfs')) return <Hexagon size={size} />;
  if (t.includes('metamask') || t.includes('hardhat') || t.includes('ganache')) return <Boxes size={size} />;
  
  // Web / Frontend
  if (t.includes('react') || t.includes('next.js')) return <Globe size={size} />;
  
  // Backend / Database
  if (t.includes('node.js') || t.includes('express')) return <Server size={size} />;
  if (t.includes('mongo') || t.includes('sql') || t.includes('ipfs') || t.includes('faiss') || t.includes('elasticsearch')) return <Database size={size} />;
  
  // Default
  return <Code2 size={size} />;
}
