import Titlebar from "./titlebar/Titlebar";
import { remote } from "electron";

class App extends React.PureComponent<{}, {}> {
    render() {
        return <Titlebar remote={remote} />;
    }
}

export default App;