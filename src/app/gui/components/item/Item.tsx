import './Item.scss';

export type ItemType = {
  id: number,
  name: string,
  description: string,
  type: string,
  status: boolean,
  color: string,
};

interface Props {
  item: ItemType;
}

class Item extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { item, } = this.props;

    return (
      <div className="item">
        {item.name}
      </div>
    );
  }
}

export default Item;
