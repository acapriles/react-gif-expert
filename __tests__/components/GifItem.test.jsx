import { getByRole, render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => {
	const properties = {
		id: 1,
		title: 'Dragon Ball',
		url: 'https://media3.giphy.com/media/GRSnxyhJnPsaQy9YLn/giphy.gif?cid=4ff38d30e3sg5o7ov5jvitl2bmssc3rnbnvig7nbsx8xqgei&rid=giphy.gif&ct=g',
	};

	const { title, url } = properties;

	test('debe hacer match con el snapshot', () => {
		const { container } = render(<GifItem {...properties} />);

		expect(container).toMatchSnapshot();
	});

	test('debe mostrar la imagen con el URL y el ALT indicado', () => {
		const { container } = render(<GifItem {...properties} />);
		// screen.debug();

		// expect(screen.getByRole('img').src).toBe( url );
		// expect(screen.getByRole('img').alt).toBe( title );

		const { src, alt } = screen.getByRole('img');
		expect(src).toBe(url);
		expect(alt).toBe(title);
	});

	test('debe mostrar el título en el componente', () => {
		const { container } = render(<GifItem {...properties} />);

		expect(screen.getByText(title)).toBeTruthy();
	});
});
