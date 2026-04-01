export interface RoleConfig {
  id: string
  name: string
  domain: string
  tier: 'core' | 'specialist'
  dailyRateMin: number
  dailyRateMax: number
  color: string
}

export const ROLE_CONFIGS: RoleConfig[] = [
  { id: 'integration-engineer', name: 'Integration Engineer', domain: 'Engineering', tier: 'core', dailyRateMin: 800, dailyRateMax: 1200, color: '#06b3e8' },
  { id: 'solutions-architect', name: 'Solutions Architect', domain: 'Architecture', tier: 'core', dailyRateMin: 1200, dailyRateMax: 1800, color: '#8B5CF6' },
  { id: 'change-adoption-manager', name: 'Change & Adoption Manager', domain: 'Change', tier: 'core', dailyRateMin: 800, dailyRateMax: 1200, color: '#F97316' },
  { id: 'project-program-manager', name: 'Project/Program Manager', domain: 'Delivery', tier: 'core', dailyRateMin: 900, dailyRateMax: 1400, color: '#3B82F6' },
  { id: 'cowork-config-specialist', name: 'Cowork Config Specialist', domain: 'Setup', tier: 'core', dailyRateMin: 600, dailyRateMax: 900, color: '#10B981' },
  { id: 'data-analytics-engineer', name: 'Data & Analytics Engineer', domain: 'Data', tier: 'specialist', dailyRateMin: 800, dailyRateMax: 1200, color: '#6366F1' },
  { id: 'security-governance', name: 'Cybersecurity & AI Governance', domain: 'Security', tier: 'specialist', dailyRateMin: 1000, dailyRateMax: 1600, color: '#EF4444' },
  { id: 'enterprise-integration-dev', name: 'Enterprise Integration Developer', domain: 'Integration', tier: 'specialist', dailyRateMin: 900, dailyRateMax: 1400, color: '#0EA5E9' },
  { id: 'ai-trainer-prompt-engineer', name: 'AI Trainer / Prompt Engineer', domain: 'Training', tier: 'specialist', dailyRateMin: 600, dailyRateMax: 1000, color: '#EAB308' },
  { id: 'it-support-ai-enabled', name: 'IT Support (AI-Enabled)', domain: 'Support', tier: 'specialist', dailyRateMin: 500, dailyRateMax: 800, color: '#64748B' },
]

export function getRoleBySlug(slug: string): RoleConfig | undefined {
  return ROLE_CONFIGS.find((r) => r.id === slug)
}
