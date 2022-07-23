import { SidebarContent } from "./SidebarContent";

export function MobileSidebar() {
  return (
    <aside className="fixed inset-y-0 z-50 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-purple-light dark:bg-gray-800 lg:hidden">
      <SidebarContent />
    </aside>
  );
}
