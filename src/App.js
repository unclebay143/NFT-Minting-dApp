import "./App.css";
import { Header } from "./components/header/Header";
import NftMinter from "./pages/nft-minter/NftMinter";
import { MoralisProvider } from "react-moralis";

function App() {
  const serverUrl = process.env.REACT_APP_MORALIS_SERVER_URL;
  const appId = process.env.REACT_APP_MORALIS_APP_ID;

  return (
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <div className='App'>
        <Header />
        <main>
          <NftMinter />
          <div className='App-overlay'></div>
        </main>
      </div>
    </MoralisProvider>
  );
}

export default App;
