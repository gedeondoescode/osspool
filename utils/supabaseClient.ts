import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnon = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnon) {
	throw new Error("Missing API keys");
}

export const supabase = createClient(supabaseUrl, supabaseAnon);
