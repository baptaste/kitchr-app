import { logAny } from '../../utils/logs.utils';
import { supabase } from '../../utils/supabase/supabase';
import Login from '../Login';

// export default function Auth(): JSX.Element {
//     const user = supabase.auth.user()
//     const session = supabase.auth.session()
//     if (user) {
//         logAny('sup user:', user);
//         return <Login />
//     }
// }
