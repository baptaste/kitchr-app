import { fetchAPI } from '../../../../lib/fetch';
import { logAny } from '../../../../utils/logs.utils';
import { supabase } from '../../../../utils/supabase/client/supabase.utils';

export async function logoutUser() {
	return await supabase.auth.signOut();
}
