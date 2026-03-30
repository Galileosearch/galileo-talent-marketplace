-- P4: AI Talent Marketplace tables
-- Shared Supabase instance with P1, P2, P3

-- Core talent profile
CREATE TABLE IF NOT EXISTS talent_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  full_name text NOT NULL,
  email text NOT NULL UNIQUE,
  phone text,
  location text NOT NULL,
  avatar_url text,

  -- Role classification
  primary_role text NOT NULL,
  role_tier text NOT NULL CHECK (role_tier IN ('tier1_core', 'tier2_specialist')),
  seniority text NOT NULL CHECK (seniority IN ('Mid', 'Senior', 'Lead', 'Principal')),
  domain text NOT NULL,

  -- Rates
  daily_rate numeric NOT NULL,
  min_engagement_days integer DEFAULT 5,
  employment_type text DEFAULT 'contract' CHECK (employment_type IN ('contract', 'perm_open')),

  -- Experience
  years_experience integer NOT NULL,
  experience_highlights jsonb DEFAULT '[]'::jsonb,
  skills_verified jsonb DEFAULT '[]'::jsonb,
  tools_proficient text[] DEFAULT '{}',

  -- Verification
  anthropic_certified boolean DEFAULT false,
  certification_date date,
  certification_level text CHECK (certification_level IN ('foundation', 'advanced', 'expert')),
  background_check_status text DEFAULT 'pending' CHECK (background_check_status IN ('pending', 'cleared', 'flagged')),
  reference_check_status text DEFAULT 'pending' CHECK (reference_check_status IN ('pending', 'cleared', 'flagged')),
  cv_url text,
  portfolio_url text,

  -- AI assessment
  ai_assessment_score integer CHECK (ai_assessment_score >= 0 AND ai_assessment_score <= 100),
  ai_assessment_summary text,
  domain_expertise_scores jsonb,

  -- Marketplace status
  status text DEFAULT 'pending_review' CHECK (status IN ('pending_review', 'active', 'paused', 'archived')),
  availability text DEFAULT 'available' CHECK (availability IN ('available', 'engaged', 'available_soon')),
  available_from date,
  galileo_reviewed boolean DEFAULT false,

  -- Metadata
  invited_by uuid,
  source text CHECK (source IN ('seek', 'linkedin', 'referral', 'direct', 'anthropic_training')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Certification tracking
CREATE TABLE IF NOT EXISTS talent_certifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  talent_id uuid NOT NULL REFERENCES talent_profiles(id) ON DELETE CASCADE,
  certification_name text NOT NULL,
  issuer text NOT NULL,
  completed_at date,
  expires_at date,
  credential_url text,
  created_at timestamptz DEFAULT now()
);

-- Engagement tracking
CREATE TABLE IF NOT EXISTS talent_engagements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  talent_id uuid NOT NULL REFERENCES talent_profiles(id),
  workforce_plan_id uuid,
  client_name text NOT NULL,
  engagement_type text NOT NULL CHECK (engagement_type IN ('implementation', 'advisory', 'training', 'support')),
  role_on_project text NOT NULL,
  start_date date NOT NULL,
  end_date date,
  daily_rate numeric NOT NULL,
  total_days integer,
  status text DEFAULT 'active' CHECK (status IN ('active', 'completed', 'cancelled')),
  notes text,
  created_at timestamptz DEFAULT now()
);

-- Availability calendar
CREATE TABLE IF NOT EXISTS talent_availability (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  talent_id uuid NOT NULL REFERENCES talent_profiles(id) ON DELETE CASCADE,
  date date NOT NULL,
  status text DEFAULT 'available' CHECK (status IN ('available', 'booked', 'unavailable')),
  engagement_id uuid REFERENCES talent_engagements(id),
  UNIQUE(talent_id, date)
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_talent_profiles_role ON talent_profiles(primary_role);
CREATE INDEX IF NOT EXISTS idx_talent_profiles_status ON talent_profiles(status);
CREATE INDEX IF NOT EXISTS idx_talent_profiles_location ON talent_profiles(location);
CREATE INDEX IF NOT EXISTS idx_talent_profiles_availability ON talent_profiles(availability);
CREATE INDEX IF NOT EXISTS idx_talent_certifications_talent ON talent_certifications(talent_id);
CREATE INDEX IF NOT EXISTS idx_talent_engagements_talent ON talent_engagements(talent_id);
CREATE INDEX IF NOT EXISTS idx_talent_availability_date ON talent_availability(talent_id, date);
