import { Provider } from '@supabase/supabase-js';
import { KITCHR_CLIENT_ENTRYPOINT } from '../../../../utils/constants/endpoints.utils';
import { supabase } from '../../../../utils/supabase/client/supabase.utils';

export async function loginWithEmailPassword(email: string, password: string) {
	return await supabase.auth.signIn({ email, password });
}

export async function registerOrLoginWithProvider(provider: Provider) {
	return await supabase.auth.signIn({ provider }, { redirectTo: KITCHR_CLIENT_ENTRYPOINT });
}

export async function sendMagicLinkEmail(email: string) {
	return await supabase.auth.signIn({ email }, { redirectTo: KITCHR_CLIENT_ENTRYPOINT });
}

export async function sendResetPasswordEmail(email: string) {
	return await supabase.auth.api.resetPasswordForEmail(email);
}
