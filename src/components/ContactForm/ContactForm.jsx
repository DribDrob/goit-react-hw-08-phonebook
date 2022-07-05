import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { FormEl, Label, Input, Button } from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    .required(),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
    )
    .required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormEl autoComplete="off">
        <Label>
          <span>Name</span>
          <Input type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </Label>

        <Label>
          <span>Number</span>
          <Input type="tel" name="number" />
          <ErrorMessage name="number" component="div" />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormEl>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
