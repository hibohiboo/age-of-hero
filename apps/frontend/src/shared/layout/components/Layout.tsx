import { Layout as UILayout } from '@age-of-hero/ui/index';
import { Outlet } from 'react-router';

export function Layout() {
  return (
    <UILayout>
      <Outlet />
    </UILayout>
  );
}
