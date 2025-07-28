import { Heading } from '@/components/ui/Heading'

import { TasksView } from './TasksView'

export default function TasksPage() {
	return (
		<div>
			<Heading title='Tasks' />
			<TasksView />
		</div>
	)
}
