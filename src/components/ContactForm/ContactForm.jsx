import { Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, getItemsValue } from 'redux/slice';
import { FormEl, Label, Input, ErrorText, Button } from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const contacts = useSelector(getItemsValue);

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    addContactItem(values);
    resetForm();
  };

  const addContactItem = newContact => {
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    const contact = {
      id: nanoid(),
      ...newContact,
    };
    dispatch(addContact(contact));
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
          <FormError name="name" />
        </Label>

        <Label>
          <span>Number</span>
          <Input type="tel" name="number" />
          <FormError name="number" component="div" />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormEl>
    </Formik>
  );
};
