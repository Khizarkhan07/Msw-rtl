import styled from 'styled-components';

export const LoginFormStyled = styled.div`
    .form-actions {
        padding: 15px 0 15px 33px;
    }
    .extra-info {
        color: #888888;
        padding-top: 10px;
    }

    .login-form {
        padding: 41px 32px;
        .login-button {
            width: 100%;
            background-color: #ffffff;
            height: 43px;
            text-align: center;
            padding: 10px 0px;
            margin-bottom: 30px;
            box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.16);
            img {
                margin-right: 10px;
            }
            > a {
                color: #000000;
            }
        }
        .horizontal-line {
            display: flex;
            flex-direction: row;
            margin-bottom: 30px;
        }
        .horizontal-line:before,
        .horizontal-line:after {
            content: '';
            flex: 1 1;
            border-bottom: 1px solid #d4d4d4;
            margin: auto 12px;
        }
    }
`;
