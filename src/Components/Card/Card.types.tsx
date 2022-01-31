import { ReactNode } from 'react';

export type CardProps = {
    title?: string | null;
    loadingbar?: React.ReactNode;
    children: ReactNode;
    loadingText?: string;
    className?: string;
};

export type StyledCardProps = {
    loadingbar: React.ReactNode | undefined;
};
