import React from 'react';
import { PublicAppLayoutStyled } from './PublicAppLayout.styles';

type Props = {
    children: React.ReactNode;
};
const PublicAppLayout = ({ children }: Props): JSX.Element => {
    return (
        <PublicAppLayoutStyled>
            <section className="public-app-wrapper">
                <picture className="logo">
                    <img src="/images/auth-logo.png" alt="" />
                </picture>
                {children}
            </section>
        </PublicAppLayoutStyled>
    );
};

export default PublicAppLayout;
