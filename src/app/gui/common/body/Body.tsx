import GroupItems from '../../components/groupItems/GroupItems';
import './Body.scss';

class Body extends React.PureComponent<{}, {}> {
	render() {
		const groupsMock = [
			{
				id: 0,
				groupName: 'Lights',
				items: [
					{
						id: 15,
						name: 'Test',
						description: 'Test',
						type: 'Test',
						status: false,
						color: '#ff0000',
					},
					{
						id: 7,
						name: 'Test',
						description: 'Test',
						type: 'Test',
						status: false,
						color: '#ff0000',
					},
					{
						id: 6,
						name: 'Test',
						description: 'Test',
						type: 'Test',
						status: false,
						color: '#ff0000',
					},
					{
						id: 5,
						name: 'Test',
						description: 'Test',
						type: 'Test',
						status: false,
						color: '#ff0000',
					},
					{
						id: 4,
						name: 'Test',
						description: 'Test',
						type: 'Test',
						status: false,
						color: '#ff0000',
					},
					{
						id: 3,
						name: 'Test',
						description: 'Test',
						type: 'Test',
						status: false,
						color: '#ff0000',
					},
					{
						id: 2,
						name: 'Test',
						description: 'Test',
						type: 'Test',
						status: false,
						color: '#ff0000',
					},
					{
						id: 1,
						name: 'Test',
						description: 'Test',
						type: 'Test',
						status: false,
						color: '#ff0000',
					},
				],
			},
			{
				id: 1,
				groupName: 'Groups',
				items: [
					{
						id: 15,
						name: 'Test',
						description: 'Test',
						type: 'Test',
						status: false,
						color: '#ff0000',
					},
				],
			},
		];

		return (
			<div className="app-body">
				{groupsMock.map(group => (
					<GroupItems key={group.id} {...group} />
				))}
			</div>
		);
	}
}

export default Body;
