import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <LyricsDiaplay />
      <RecDisplay />
    </div>
  );
}

const Header = () => {
  return (<p>Search Bar</p>)
}

const LyricsDiaplay = () => {
  return (<p>Display Lyrics</p>)
}

const RecDisplay = () => {
  return (<p>Display Recommendation</p>)
}