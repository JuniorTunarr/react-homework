import { useState, useEffect } from "react";
import HomeWrapper from "./components/Home/HomeWrapper";
import RootLayout from "./layout/RootLayout";
import Spinner from "./components/Common/Spinner";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1초 뒤에 Spinner 숨기기 (필요한 경우 대기 시간을 조절하거나 제거할 수 있음)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading && (
        <div className="flex justify-center items-center fixed inset-0 w-full h-full z-50">
          <Spinner />
        </div>
      )}
      <RootLayout>
        <HomeWrapper />
      </RootLayout>
    </div>
  );
}

export default App;
