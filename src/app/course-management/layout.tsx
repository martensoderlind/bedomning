import ToggleMenu from "@/components/toggle-menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en">
      <ToggleMenu />
      {children}
    </div>
  );
}
