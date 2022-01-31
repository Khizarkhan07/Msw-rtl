import styled from 'styled-components';
import { Card } from 'antd';
import { StyledCardProps } from './Card.types';

export const StyledCard = styled(Card)`
    &.ant-card {
        width: 480px;
        box-shadow: -4px 0 15px 0 rgba(0, 0, 0, 0.18);
        background-color: #fff;
        border-radius: 6px;
    }
    .ant-spin-spinning {
        display: flex;
        flex-direction: column;
        padding: 25% 20%;
        align-items: center;
        position: absolute;
        color: #000000;
        .ant-spin-dot-spin {
            margin-bottom: 25px;
            .ant-spin-dot-item {
                background-color: #58c2e9;
            }
        }
    }
    .ant-spin.ant-spin-show-text .ant-spin-text {
        white-space: break-spaces;
    }
    .header {
        background-color: #f1f5f6;
        font-weight: 600;
        padding: 18px 0 18px 33px;
        font-size: 20px;
        color: #0f3d78;
        opacity: ${(props: StyledCardProps): number => (props.loadingbar ? 0.2 : 1)};
    }
    .card-children {
        opacity: ${(props: StyledCardProps): number => (props.loadingbar ? 0.2 : 1)};
    }
    .ant-card-body {
        padding: 0;
    }
`;
