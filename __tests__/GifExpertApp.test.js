import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
	const inputValue = 'Goku';

	test('debe hacer match con el snapshot', () => {
		const { container } = render(<GifExpertApp />);

		expect(container).toMatchSnapshot();
	});

	test('debe retornar el resultado de una categoria', () => {
		render(<GifExpertApp />);

		expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1);
	});

	test('debe retornar un arreglo de imagenes', () => {
		render(<GifExpertApp />);

		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);

		expect(
			screen.getAllByRole('heading', { level: 3 }).length
		).toBeGreaterThan(1);
	});
});
