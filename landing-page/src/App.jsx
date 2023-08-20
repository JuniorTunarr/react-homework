import HomeWrapper from "./components/Home/HomeWrapper";
import RootLayout from "./layout/RootLayout";

function App() {
  return (
    <div className="App">
      <RootLayout>
        <HomeWrapper />
      </RootLayout>
    </div>
  );
}

export default App;
