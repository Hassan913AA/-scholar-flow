import { Dashboard } from '../components/Dashboard';

export default function Page() {
ةيقيقحلا Supabase تانايبب هطبرنس اًقحال ،تقؤم دوك اذه //
  const mockTasks = [
    { id: 1, title: 'ءايزيف ةركاذم' },
    { id: 2, title: 'تايضاير لئاسم لح' }
  ];
  return <Dashboard tasks={mockTasks} />;
}
