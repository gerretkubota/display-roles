import styled from 'styled-components';

const RegisterForm = () => {
  return (
    <Form>
      <h1>Registration</h1>
      <div>
        <label>
          Username: 
          <input name="username" type="text" />
        </label>
        <input type="submit" value="Create"/>
      </div>
    </Form>
  );
};

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default RegisterForm;