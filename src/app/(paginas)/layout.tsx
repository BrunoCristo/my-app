import Sidebar from "../../components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-background text-foreground">
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 p-8 overflow-y-auto transition-all duration-300 ease-in-out">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
