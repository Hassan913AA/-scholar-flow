create table profiles (
  id uuid references auth.users primary key,
  username text,
  xp integer default 0,
  streak_days integer default 0,
  last_active_date date,
  ai_api_key_encrypted text
);

create table subjects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  name text not null,
  color_code text
);

create table tasks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  subject_id uuid references subjects(id),
  title text not null,
  due_date timestamp with time zone,
  priority integer,
  status text default 'pending',
  is_ai_generated boolean default false
);

create table sub_tasks (
  id uuid primary key default gen_random_uuid(),
  task_id uuid references tasks(id),
  content text not null,
  is_completed boolean default false
);
