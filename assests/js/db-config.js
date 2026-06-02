import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://yzgwdjbltwkyxjrncvoo.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6Z3dkamJsdHdreXhqcm5jdm9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzOTIyNDUsImV4cCI6MjA5NTk2ODI0NX0.gA4E6_tGqta3-dQ2qAA_w-Bz8A_XNWR_o2UWw7StNOQ';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
console.log("System Status: Database Connection Initialized");
export { supabase };
