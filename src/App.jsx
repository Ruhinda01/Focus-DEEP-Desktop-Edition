import Timer from "./components/Timer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay, faPause, faRepeat } from "@fortawesome/free-solid-svg-icons";

library.add(faPlay, faPause, faRepeat);

const App = () => {
  return (
    <main>
      <Timer />
    </main>
  )
}

export default App
