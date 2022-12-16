import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { useContext, useState } from "react";
import Input from "../../components/forms/Input";
import { AuthContext, AuthRequestType } from "../../contexts/AuthContext";
import { AuthLoginSchema } from "../../schemas/AuthLoginSchema";
import { AuthValidationSchema } from "../../schemas/AuthValidationSchema";
import { BG, Card, FormError, InputIcons, SubmitButton } from "./styles";

interface AuthProps{
    hide?: boolean
}

export default function Auth(props: AuthProps){
    const authContext = useContext(AuthContext)
    const [loginMode, setLoginMode] = useState<boolean>(true)

    const changeMode = () => {
        if(loginMode){
            setLoginMode(false)
        }
        else{
            setLoginMode(true)
        }
    }

    const onSubmit = async (values: AuthRequestType, actions: FormikHelpers<AuthRequestType>) => {
        loginMode ? authContext.login(values): authContext.signup(values)

        actions.resetForm()
    }

    return(
        <BG>
            <p><strong>My</strong> Money</p>
            <Card>
                <p>Welcome!</p>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    }}
                    validationSchema={loginMode? AuthLoginSchema : AuthValidationSchema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        {!loginMode ? (
                            <InputIcons>
                                <i className="fa fa-user"></i>
                                <Field name="name"
                                    type="text"
                                    placeholder="Insert Name"
                                    as={Input}/>
                            </InputIcons>
                        ) : ''}
                        <ErrorMessage component={FormError} name="name"/>

                        <InputIcons>
                            <i className="fa fa-envelope"></i>
                            <Field name="email"
                                type="text"
                                placeholder="Insert Email"
                                as={Input}/>
                        </InputIcons>
                        <ErrorMessage component={FormError} name="email"/>

                        <InputIcons>
                            <i className="fa fa-lock"></i>
                            <Field name="password"
                                type="password"
                                placeholder="Insert Password"
                                as={Input}/>
                        </InputIcons>
                        <ErrorMessage component={FormError} name="password"/>
                    

                        {!loginMode ? (
                            <InputIcons>
                                <i className="fa fa-lock"></i>
                                <Field name="confirmPassword"
                                    type="text"
                                    placeholder="Confirm Password"
                                    as={Input}/>
                            </InputIcons>
                        ) : ''}
                        <ErrorMessage component={FormError} name="confirmPassword"/>

                        <SubmitButton
                            type="submit"
                            className="primary">
                                Submit
                        </SubmitButton>
                    </Form>

                </Formik>
                
                <span onClick={() => changeMode()}>
                    {loginMode ? 'New user? Sign up now!':
                    'Already registered? Log in!'}
                </span>
            </Card>
        </BG>
    )
}