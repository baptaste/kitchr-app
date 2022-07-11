import { Session } from '@auth0/nextjs-auth0';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { logAny } from '../logs.utils';

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_KEY;

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);
supabase.auth.onAuthStateChange((event: any, session: any) => {
	logAny('onAuthStateChange event:', event, 'session:', session);
});

// export function getSupabase(access_token?: string): SupabaseClient {
// 	const supabase: SupabaseClient | any = createClient(supabaseUrl, supabaseKey);

// 	if (access_token) {
// 		supabase.auth.session = () => ({
// 			access_token,
// 		});
// 	}

// 	return supabase;
// }
