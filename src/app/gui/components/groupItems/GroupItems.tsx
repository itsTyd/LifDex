import Item, { ItemType } from '../item/Item';
import './GroupItems.scss';

interface State {
	isOpen: boolean;
}

interface Props {
	groupName: string;
	items: Array<ItemType>;
}

class GroupItems extends React.PureComponent<Props, State> {
	constructor(props: Props) {
		super(props);

		this.state = {
			isOpen: true,
		};

		this.toggleGroup = this.toggleGroup.bind(this);
	}

	toggleGroup() {
		this.setState(prevState => {
			return {
				isOpen: !prevState.isOpen,
			};
		});
	}

	render() {
		const { isOpen, } = this.state;
		const { groupName, items, } = this.props;

		return (
			<div className={'group-item' + (!isOpen ? ' closed' : '')}>
				<div className="title" onClick={this.toggleGroup}>
					<span>{groupName}</span>
				</div>
				<div className="items-container">
					<ul className="items-list">
						{items.map(item => {
							return <Item key={item.id} item={item} />;
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export default GroupItems;
