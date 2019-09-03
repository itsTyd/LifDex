import "./Titlebar.scss";

interface Props {
    remote: Electron.Remote
}

class Titlebar extends React.PureComponent<Props, {}> {
    constructor(props: Props) {
        super(props);
        
        this.onClick = this.onClick.bind(this);
    }

    onClick(action: String) {
        const { remote } = this.props;
        const currentWindow = remote.BrowserWindow.getFocusedWindow();

        if(currentWindow) {
            switch(action) {
                case "minimize": {
                    currentWindow.minimize();
                    break;
                }
                case "maximize": {
                    currentWindow.maximize();
                    break;
                }
                case "close": {
                    currentWindow.close();
                    break;
                }
            }   
        }        
    }

    render() {
        return(
            <div className="title-bar">
                <span className="app-title">LifDex</span>
                <div className="app-buttons">
                    <div className="titlebar-btn" onClick={() => this.onClick('minimize')}>
                        <svg name="TitleBarMinimize" aria-hidden="false" width="12" height="12" viewBox="0 0 12 12">
                            <rect fill="#ffffff" width="10" height="1" x="1" y="6"></rect>
                        </svg>
                    </div>
                    <div className="titlebar-btn" onClick={() => this.onClick('maximize')}>
                        <svg name="TitleBarMaximize" aria-hidden="false" width="12" height="12" viewBox="0 0 12 12">
                            <rect width="10" height="10" x="1.5" y="1.5" fill="none" stroke="#ffffff"></rect>
                        </svg>
                    </div>
                    <div className="titlebar-btn close" onClick={() => this.onClick('close')}>
                        <svg name="TitleBarClose" aria-hidden="false" width="12" height="12" viewBox="0 0 12 12">
                            <polygon fill="#ffffff" fillRule="evenodd" points="11 1.576 6.583 6 11 10.424 10.424 11 6 6.583 1.576 11 1 10.424 5.417 6 1 1.576 1.576 1 6 5.417 10.424 1"></polygon>
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
} 

export default Titlebar;