import { Formik } from 'formik';
import { SearchForm, Input, Button, Span, Header } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
	const handleSubmit = async (values, actions) => {
		await onSubmit(values);
		actions.setSubmitting(false);
		actions.resetForm();
	};
	return (
		<Header>
			<Formik initialValues={{ name: '' }} onSubmit={handleSubmit}>
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