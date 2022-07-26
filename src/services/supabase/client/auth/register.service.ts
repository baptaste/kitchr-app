import { supabase } from '../../../../utils/supabase/client/supabase.utils';

export async function registerWithEmailPassword(email: string, password: string) {
	return await supabase.auth.signUp({ email, password });
}
