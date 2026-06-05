// db-config.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://yzgwdjbltwkyxjrncvoo.supabase.co';
// Access the variable from the environment
const SUPABASE_KEY = import.meta.env.SUPABASE_KEY; 

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
