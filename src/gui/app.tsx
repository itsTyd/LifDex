import Titlebar from "./titlebar/Titlebar";
import Body from "./body/Body";
import { remote } from "electron";

class App extends React.PureComponent<{}, {}> {
    render() {
        const window = remote.BrowserWindow.getAllWindows();

        if(window) {
            return (<>
                <Titlebar mainWindow={window[0]} />
                <Body />
            </>);
        }

        return null;
    }
}

export default App;