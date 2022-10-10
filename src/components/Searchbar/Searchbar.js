import { Formik } from 'formik';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { SearchForm, Input, Button, Span, Header } from './Searchbar.styled';
let currentPage = 0;
const Searchbar = ({ onSubmit }) => {
	const handleSubmit = async (values, actions) => {
		if (values.name.trim() === '') {
			toast.error('Введите текст запроса!', { position: 'top-right' });
			return;
		}
		currentPage = currentPage + 1;
		await onSubmit(values.name, currentPage);
		
		actions.setSubmitting(false);
		// actions.resetForm();
	
	};
	return (
		<Header>
			<Formik initialValues={{ name: ''}} onSubmit={handleSubmit}>
				{({ isSubmitting }) => (
					<SearchForm>
						<Button type="submit" disabled={isSubmitting}>
							<Span data-comp="spanItem">Search</Span>
						</Button>

						<Input
							name='name'
							type='text'
							autoComplete="off"
							autoFocus
							placeholder="Search images and photos"
						/>
					</SearchForm>)}
			</Formik>
		</Header>
	);
}

export default Searchbar;

Searchbar.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};