interface MainProps {
  children: React.ReactNode;
}

export function Main({ children }: MainProps) {
  <main className="h-full overflow-y-auto">
    <div className="container grid px-6 mx-auto">{children}</div>
  </main>;
}
