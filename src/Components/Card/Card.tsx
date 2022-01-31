import React from 'react';
import { Spin } from 'antd';
import { StyledCard } from './Card.styles';
import { CardProps } from './Card.types';

const Card = ({ title, children, loadingbar, loadingText, className }: CardProps): JSX.Element => {
    return (
        <StyledCard className={className || ''} loadingbar={loadingbar}>
            {loadingbar && loadingbar}
            {title && <div className="header">{title}</div>}
            {loadingbar && <Spin tip={loadingText} />}
            <div className="card-children">{children}</div>
        </StyledCard>
    );
};

export default Card;
