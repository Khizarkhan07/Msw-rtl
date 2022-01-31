/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Formik } from "formik";
import { LoginValues } from "./Login.types";
import { authenticateUser } from "./Login.service";
import Card from "../../Components/Card";
import { LoginFormStyled } from "./Login.style";
import { InputField } from "../../Components/FormComponents";
import { Alert, Button } from "antd";
import * as yup from "yup";

const initialValues: LoginValues = {
  email: "",
  password: "",
};

const Login = (): JSX.Element => {
  const [apierrors, setErrors] = useState<string>("");
const [loading, setLoading] = useState(false);

  const handleLogin = React.useCallback(
      (values: any) => {
          setLoading(true);
          authenticateUser(values)
              .then(resp => {
                  setLoading(false);
                  setErrors('');
              })
              .catch(e => {
                  setLoading(false);
                  setErrors(e.message);
              });
      },
      [],
  );

  const LoginValidationSchema = yup.object().shape({
    email: yup.string().email("Invalid Email").required(),
    password: yup.string().required().min(8, "Password must be 8 characters"),
  });

  return (
      
    <Card title="Login">
      <Formik
        initialValues={initialValues}
        onSubmit={handleLogin}
        validationSchema={LoginValidationSchema}
        validateOnBlur={false}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          
        }) => (
          <LoginFormStyled>
            <div className="login-form">
              <InputField
                label="Email"
                name="email"
                type="text"
                placeholder="Enter Your Email Address"
                disabled={loading}
              />
              {touched.email && errors.email && (
                <Alert closable type="error" message={errors.email} />
              )}
              <InputField
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your Password"
                isPasswordField
                disabled={loading}
              />
              {errors.password && touched.password && (
                <Alert closable type="error" message={errors.password} />
              )}
              <br />
            </div>
            <hr className="card-divider" />
            <div className="form-actions">
              <input type="submit" style={{ display: "none" }} />
              <Button
                onClick={() => {
                  handleSubmit();
                }}
                loading={loading}
                disabled={values.password === "" || values.email === ""}
              >
                LOGIN
              </Button>
            </div>
            {apierrors && < Alert message={apierrors} type="error" closable />}
          </LoginFormStyled>
        )}
      </Formik>
    </Card>
  );
};

export default Login;
