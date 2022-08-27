import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {
//   useAddContactMutation,
//   useGetContactsQuery,
// } from 'redux/contacts/contactsSlice';
import { FormEl, Label, Input, ErrorText, Button } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';

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
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(contactsOperations.add(values));
    resetForm();
  };

  // const addContactItem = newContact => {
  //   if (contacts.find(contact => contact.name === newContact.name)) {
  //     toast.error(`${newContact.name} is already in contacts.`);
  //     return;
  //   }
  //   addContact(newContact);
  // };

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
