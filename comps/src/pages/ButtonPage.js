import Button from '../components/Button';
import { GoBell } from 'react-icons/go';
import { GoCloudDownload } from 'react-icons/go';
import { GoDatabase } from 'react-icons/go';

function ButtonPage() {
	return (
		<div>
			<div>
				<Button success rounded outline className='mb-5'>
					<GoBell />
					Click me!
				</Button>
			</div>
			<div>
				<Button secondary rounded outline>
					<GoCloudDownload />
					Click me!
				</Button>
			</div>
			<div>
				<Button danger outline>
					<GoDatabase />
					Buy Now!
				</Button>
			</div>
			<div>
				<Button warning>See Deal!</Button>
			</div>
			<div>
				<Button primary>Hide Ads!</Button>
			</div>
		</div>
	);
}

export default ButtonPage;
