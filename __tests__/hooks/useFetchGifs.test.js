import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en el Hook useFetchGifs()', () => {
	test('debe regresar el estado inicial', () => {
		const {
			result: {
				current: { images, isLoading },
			},
		} = renderHook(() => useFetchGifs('Dragon Ball'));

		//const { images, isLoading } = result.current;

		expect(images).toHaveLength(0);
		expect(isLoading).toBeTruthy();
	});

	test('debe retornar un arreglo de imágenes y el isLoading en false', async () => {
		const { result } = renderHook(() => useFetchGifs('Dragon Ball'));

		await waitFor(
			() => expect(result.current.images.length).toBeGreaterThan(0)
			// { timeout: 5000 }
		);

		const { images, isLoading } = result.current;

		expect(images.length).toBeGreaterThan(0);
		expect(isLoading).toBeFalsy();
	});
});
