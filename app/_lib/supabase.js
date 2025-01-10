import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_RULE;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
