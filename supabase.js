import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

// আপনার সুপাবেজ ড্যাশবোর্ড থেকে API সেকশন থেকে এগুলো পাবেন
const SUPABASE_URL = 'https://yvprbyxzpgdiqbccrqss.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_QIrBt9BgDgC83UvPiKAJIg_naoSB9ed';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
        persistSession: false,
    },
});