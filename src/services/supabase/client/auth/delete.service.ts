import { supabase } from '../../../../utils/supabase/client/supabase.utils';

export async function deleteAccount(userId: string) {
	return await supabase.from('users').delete({ returning: 'minimal' }).match({ id: userId });
}
