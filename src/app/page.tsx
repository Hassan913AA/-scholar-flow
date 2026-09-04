import { Dashboard } from '../components/Dashboard';

export default function Page() {
  const mockTasks = [{ id: 1, title: 'مذاكرة فيزياء' }, { id: 2, title: 'حل مسائل رياضيات' }];
  return <Dashboard tasks={mockTasks} />;
}
