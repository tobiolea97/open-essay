import StartWritingPanelComponent from "../components/home/StartWritingPanelComponent";
import WritingHistoryComponent from "../components/home/WritingHistoryComponent";

function Home() {
  return (
    <main className="main-home">
      <StartWritingPanelComponent />
      <WritingHistoryComponent />
    </main>
  );
}

export default Home;
