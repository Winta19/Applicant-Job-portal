import MyHeader from "./MyHeader";
export default function Layout({ children }) {
  return (
    <div className="flex flex-col w-full h-screen">
      <MyHeader />
      <main className="h-full">{children}</main>
    </div>
  );
}
