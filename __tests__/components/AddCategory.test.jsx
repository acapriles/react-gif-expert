import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
	test('debe cambiar el valor de la caja de texto', () => {
		render(<AddCategory onNewCategory={() => {}} />);

		const input = screen.getByRole('textbox');
		fireEvent.input(input, { target: { value: 'Goku' } });

		// console.log(input);
		//screen.debug(input);

		expect(input.value).toBe('Goku');
	});

	test('debe llamar a onNewCategory si el input tiene un valor', () => {
		const inputValue = 'Goku';
		const onNewCategory = jest.fn();

		render(<AddCategory onNewCategory={onNewCategory} />);

		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);

		expect(input.value).toBe('');

		expect(onNewCategory).toHaveBeenCalled();
		expect(onNewCategory).toHaveBeenCalledTimes(1);
		expect(onNewCategory).toHaveBeenCalledWith(inputValue);

		// screen.debug(form);
	});

	test('no debe llamar a onNewCategory si el input está vacío', () => {
		const onNewCategory = jest.fn();

		render(<AddCategory onNewCategory={onNewCategory} />);

		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.submit(form);

		expect(input.value).toBe('');
		expect(onNewCategory).not.toHaveBeenCalled();
		expect(onNewCategory).toHaveBeenCalledTimes(0);
	});
});
