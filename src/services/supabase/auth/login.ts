import { Provider } from '@supabase/supabase-js';
import { fetchAPI } from '../../../lib/fetch';
import { KITCHR_CLIENT_ENTRYPOINT } from '../../../utils/constants/endpoints.utils';
import { logAny } from '../../../utils/logs.utils';
import { supabase } from '../../../utils/supabase/supabase.utils';

export async function loginWithEmail(email: string, password: string) {
	return await supabase.auth.signIn({ email, password });
}

export async function loginWithMagicLink(email: string) {
	return await supabase.auth.signIn({ email }, { redirectTo: KITCHR_CLIENT_ENTRYPOINT });
}

export async function loginWithProvider(provider: Provider) {
	return await supabase.auth.signIn({ provider }, { redirectTo: KITCHR_CLIENT_ENTRYPOINT });
}
