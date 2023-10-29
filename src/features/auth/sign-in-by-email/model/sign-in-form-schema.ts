import * as Yup from 'yup';

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Password must be atleast 6 characters').max(20, 'Too Long!').required('Required'),
});

export default SignInSchema;
