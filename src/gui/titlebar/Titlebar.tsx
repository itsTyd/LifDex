import "./Titlebar.scss";

class Titlebar extends React.PureComponent<{}, {}> {
    render() {
        return(
            <div className="title-bar">
                <span className="app-title">LifDex</span>
                <div className="app-buttons">
                    <div>m</div>
                    <div>M</div>
                    <div>X</div>
                </div>
            </div>
        )
    }
} 

export default Titlebar;