import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <div>
        {/* This is where you build your dashboard cards, tables, charts */}
        <h2 className="text-xl font-bold">Welcome to your dashboard!</h2>
      </div>
    </MainLayout>
  );
}

export default App;
