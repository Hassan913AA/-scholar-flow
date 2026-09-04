import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export const addTask = async (task: any) => {
  return await supabase.from('tasks').insert(task);
};

export const getTasks = async (userId: string) => {
  return await supabase.from('tasks').select('*, subjects(*)').eq('user_id', userId);
};
