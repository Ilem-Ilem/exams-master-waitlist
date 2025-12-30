
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wgfrbuoxiqbcrhpfezsd.supabase.co';
const supabaseAnonKey = 'sb_publishable_dvSYLrchN0fi8xRjyqKorA_YoiBQa4U';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
