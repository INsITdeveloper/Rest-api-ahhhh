import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { MainContent } from './MainContent';

export const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};
