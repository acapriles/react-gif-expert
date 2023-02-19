import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
	const category = 'Dragon Ball';

	/* test('debe mostrar el loading inicialmente', () => {

		render(<GifGrid category={category} />);

		expect(screen.getByText('Cargando...'));
		expect(screen.getByText(category));
	}); */

	test('debe mostrar el loading inicialmente', () => {
		useFetchGifs.mockReturnValue({
			images: [],
			isLoading: true,
		});

		render(<GifGrid category={category} />);

		expect(screen.getByText('Cargando...')).toBeTruthy();
		expect(screen.getByText(category)).toBeTruthy();
	});

	test('debe mostrar items cuando se cargan las imágenes desde useFetchGifs', () => {
		const gifs = [
			{
				id: 1,
				title: 'Dragon Ball',
				url: 'http://casa.com/drago.jpg',
			},
			{
				id: 2,
				title: 'Super Campeones',
				url: 'http://casa.com/super.jpg',
			},
		];

		useFetchGifs.mockReturnValue({
			images: gifs,
			isLoading: false,
		});

		render(<GifGrid category={category} />);

		expect(screen.getAllByRole('img').length).toBe(2);
	});
});
