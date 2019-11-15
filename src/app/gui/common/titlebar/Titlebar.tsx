import './Titlebar.scss';

interface Props {
	mainWindow: Electron.BrowserWindow;
}

interface State {
	isMaximized: Boolean;
}

class Titlebar extends React.PureComponent<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			isMaximized: false,
		};

		this.onClick = this.onClick.bind(this);
	}

	onClick(action: String) {
		const { mainWindow, } = this.props;

		switch (action) {
		case 'minimize': {
			mainWindow.minimize();
			break;
		}
		case 'maximize': {
			if (mainWindow.isMaximized()) {
				mainWindow.restore();
			} else {
				mainWindow.maximize();
			}

			this.setState({
				isMaximized: mainWindow.isMaximized(),
			});

			break;
		}
		case 'close': {
			mainWindow.close();
			break;
		}
		}
	}

	componentDidMount() {
		const { mainWindow, } = this.props;

		mainWindow.on('unmaximize', () => {
			this.setState({
				isMaximized: mainWindow.isMaximized(),
			});
		});
	}

	render() {
		const { isMaximized, } = this.state;

		return (
			<div className="title-bar">
				<div className="title-bar-wrapper">
					<span className="app-title">LifDex</span>
					<div className="app-buttons">
						<div
							className="titlebar-btn"
							onClick={() => this.onClick('minimize')}
						>
							<svg
								name="TitleBarMinimize"
								aria-hidden="false"
								width="12"
								height="12"
								viewBox="0 0 12 12"
							>
								<line x1="1" y1="6" x2="11" y2="6" className="line-style" />
							</svg>
						</div>
						<div
							className="titlebar-btn maximize"
							onClick={() => this.onClick('maximize')}
						>
							<svg
								name="TitleBarMaximize"
								aria-hidden="false"
								width="12"
								height="12"
								viewBox="0 0 12 12"
							>
								{!isMaximized ? (
									<>
										<line x1="1" y1="1" x2="10" y2="1" className="line-style" />
										<line x1="2" y1="1" x2="1" y2="10" className="line-style" />
										<line
											x1="10"
											y1="1"
											x2="10"
											y2="10"
											className="line-style"
										/>
										<line
											x1="1"
											y1="10"
											x2="10"
											y2="10"
											className="line-style"
										/>
									</>
								) : (
									<>
										<line x1="0" y1="3" x2="8" y2="3" className="line-style" />
										<line x1="1" y1="3" x2="1" y2="10" className="line-style" />
										<line x1="8" y1="3" x2="8" y2="10" className="line-style" />
										<line
											x1="1"
											y1="10"
											x2="8"
											y2="10"
											className="line-style"
										/>

										<line x1="2" y1="1" x2="10" y2="1" className="line-style" />
										<line x1="3" y1="1" x2="3" y2="2" className="line-style" />
										<line
											x1="10"
											y1="0"
											x2="10"
											y2="8"
											className="line-style"
										/>
										<line x1="8" y1="8" x2="10" y2="8" className="line-style" />
									</>
								)}
							</svg>
						</div>
						<div
							className="titlebar-btn close"
							onClick={() => this.onClick('close')}
						>
							<svg
								name="TitleBarClose"
								aria-hidden="false"
								width="12"
								height="12"
								viewBox="0 0 12 12"
							>
								<path className="line-style" d="M 1,1 L 10,10 M 10,1 L 1,10" />
							</svg>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Titlebar;
