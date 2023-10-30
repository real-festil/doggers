import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(20, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Password must be atleast 6 characters').max(20, 'Too Long!').required('Required'),
});

export default RegisterSchema;
