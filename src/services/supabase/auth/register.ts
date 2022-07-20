import { Provider } from '@supabase/supabase-js';
import { fetchAPI } from '../../../lib/fetch';
import { KITCHR_CLIENT_ENTRYPOINT } from '../../../utils/constants/endpoints.utils';
import { supabase } from '../../../utils/supabase/supabase.utils';

export async function registerWithEmail(email: string, password: string) {
	// return await fetchAPI('/auth/register/email', { method: 'POST' }, { email, password });
	return await supabase.auth.signUp({ email, password });
}

export async function registerWithMagicLink(email: string) {
	// return await fetchAPI('/auth/register/magic-link', { method: 'POST' }, email);
	return await supabase.auth.signIn({ email }, { redirectTo: KITCHR_CLIENT_ENTRYPOINT });
}

export async function registerWithProvider(provider: Provider) {
	// return await fetchAPI('/auth/register/provider', { method: 'POST' }, provider);
	return await supabase.auth.signIn({ provider }, { redirectTo: KITCHR_CLIENT_ENTRYPOINT });
}
