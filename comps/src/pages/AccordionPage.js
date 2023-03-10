import Accordion from '../components/Accordion';

function AccordionPage() {
	const items = [
		{
			id: '342fdas',
			label: 'Can I use React on a project?',
			content:
				'You can use React on any project you wantYou can use React on any project you want',
		},
		{
			id: '765ggfds',
			label: 'Can I use JavaScript on a project?',
			content:
				'You can use Javascript on any project you wantYou can use React on any project you want',
		},
		{
			id: '432gfds46',
			label: 'Can I use React on a project?',
			content:
				'You can use React on any project you wantYou can use React on any project you want',
		},
	];
	return <Accordion items={items} />;
}

export default AccordionPage;
