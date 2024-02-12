import React, { useState } from 'react';
import { Heading, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import checkCredentials from '../../../services/GET/checkCredentials';

interface LoginProps {
    updateLoginState: (username: string, password: string) => void;
};

const Login: React.FC<LoginProps> = ({ updateLoginState }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showWarning, setShowWarning] = useState(false);

    const handleFormSubmit = async () => {

        const res = await checkCredentials(username, password);

        if (res === true) {
            updateLoginState(username, password);
        } else {
            setShowWarning(true);
            setTimeout(() => {
                setShowWarning(false);
            }, 3000);
        };
    };
    
    return ( 
        <div id='Login'>
            <div id="LoginContainer">
                <div id="LoginHeaderContainer">
                    <Heading id="LoginHeader">Admin Login</Heading>
                </div>
                <div id="LoginInputContainer">
                    <Input id="LoginNameInput" placeholder="Username" variant="filled" onChange={(e) => setUsername(e.target.value)} />
                    <InputGroup id="LoginPasswordInputContainer">
                        <Input 
                            id="LoginPasswordInput"
                            type={ showPassword ? "text" : "password" }
                            placeholder="Password"
                            variant="filled"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <InputRightElement id="LoginPasswordButtonContainer">
                            <Button id="LoginPasswordButton" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </div>
                <div id="LoginButtonContainer">
                    <Button id="LoginButton" colorScheme='blue' onClick={handleFormSubmit}>Login</Button>
                </div>
                <div id="LoginErrorContainer">
                    {showWarning && <p id="LoginError">Incorrect Credentials</p>}
                </div>
            </div>
            <style>
                {`

                    #Login {
                        display: flex;
                        position: relative;
                        width: 100vw;
                        height: 100vh;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    #LoginContainer {
                        display: flex;
                        position: relative;
                        width: 70%;
                        height: 75%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;                    
                        background-color: rgba(0, 0, 0, 0.8);
                        border-radius: 25px;
                    }

                    #LoginHeaderContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 30%;
                        justify-content: center;
                        align-items: center;
                    }

                    #LoginHeader {
                        font-size: 50px;
                        color: white;
                    }

                    #LoginInputContainer {
                        display: flex;
                        position: relative;
                        width: 80%;
                        height: 40%;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    #LoginNameInput {
                        height: 70px;
                        background-color: #E8F0FE;
                    }

                    #LoginPasswordInputContainer {
                        height: 70px;
                        margin-top: 5%;
                    }

                    #LoginPasswordInput {
                        height: 100%;
                        background-color: #E8F0FE; 
                    }

                    #LoginPasswordButtonContainer {
                        width: 60px;
                        height: 100%;
                        margin-right: 10px;
                    }

                    #LoginPasswordButton {
                        background-color: rgba(0, 0, 0, 0.9);
                        color: white;
                    }

                    #LoginButtonContainer {
                        display: flex;
                        position: relative;
                        width: 100%;
                        height: 30%;
                        justify-content: center;
                        align-items: center;
                    }

                    #LoginButton {
                        width: 180px;
                        height: 50px;
                        border-radius: 20px;
                    }

                    #LoginErrorContainer {
                        display: flex;
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        height: 10%;
                        justify-content: center;
                        align-items: center;
                        color: red;
                        font-size: 20px;
                    }

                `}
            </style>
        </div>
    );
};

export default Login;