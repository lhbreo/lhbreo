import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xfkdhoynwyvywrrlzerp.supabase.co'
const supabasePublishableKey = 'sb_publishable_4JkycZ7NI4qIOcD8kxT8BA_M5u6Y8m8'

export const supabase = createClient(supabaseUrl, supabasePublishableKey)
