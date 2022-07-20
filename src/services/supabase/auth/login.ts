import { Provider } from '@supabase/supabase-js';
import { fetchAPI } from '../../../lib/fetch';
import { KITCHR_CLIENT_ENTRYPOINT } from '../../../utils/constants/endpoints.utils';
import { logAny } from '../../../utils/logs.utils';
import { supabase } from '../../../utils/supabase/supabase.utils';

export async function loginWithEmail(email: string, password: string) {
	logAny('Service | loginWithEmail, email:', email, ' password:', password);
	// return await fetchAPI('/auth/login/email', { method: 'POST' }, { email, password });
	return await supabase.auth.signIn({ email, password });
}

export async function loginWithMagicLink(email: string) {
	// return await fetchAPI('/auth/login/magic-link', { method: 'POST' }, email);
	return await supabase.auth.signIn({ email }, { redirectTo: KITCHR_CLIENT_ENTRYPOINT });
}

export async function loginWithProvider(provider: Provider) {
	// return await fetchAPI('/auth/login/provider', { method: 'POST' }, provider);
	return await supabase.auth.signIn({ provider }, { redirectTo: KITCHR_CLIENT_ENTRYPOINT });
}
