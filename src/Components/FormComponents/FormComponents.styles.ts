import styled from 'styled-components';
import { Checkbox } from 'antd';

export const StyledLabel = styled.label`
    color: #888888;
    padding-bottom: 1px;
`;
export const StyledSelectLabel = styled.label`
    color: #888888;
    padding-bottom: 1px;
    margin-right: 15px;
`;

export const StyledContainer = styled.div`
    .edit-action {
        padding-left: 10px;
    }
`;

export const CheckboxStyle = styled(Checkbox)`
    padding: 20px 45px;

    &.ant-checkbox-wrapper {
        padding: 0 10px 0 0;
        &:hover {
            .ant-checkbox-inner {
                border-color: #58c2e9;
            }
        }
    }

    a {
        &:hover {
            text-decoration: underline;
        }
    }

    .ant-checkbox {
        &:hover {
            .ant-checkbox-inner {
                border-color: #58c2e9;
            }
        }

        .ant-checkbox-input {
            color: #66c6e8;
            padding: 0 10px 0 0;
            &:focus &:hover {
                + .ant-checkbox-inner {
                    border-color: #58c2e9;
                }
            }
        }

        &.ant-checkbox-checked {
            .ant-checkbox-inner {
                background-color: #58c2e9;
                border-color: #58c2e9;
            }
        }
    }
    .policy {
        color: #66c6e8;
        font-weight: 600;
    }
`;

export const FileUploaderStyles = styled.div`
    padding: 0.65rem 0;
    .input {
        width: 415px;

        .drag-input-wrapper {
            &.error {
                .ant-upload-drag {
                    border: 1px dashed #e97373;
                }

                .ant-upload-text {
                    color: #e97373;
                }
            }

            .ant-upload-list {
                display: none;
            }
        }

        .ant-upload {
            p.ant-upload-text {
                font-size: 13px;
                text-align: center;
                color: #bebebe;
            }

            .drag-input-file-name {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 15px;

                svg {
                    width: 16px;

                    path {
                        fill: #58c2e9;
                    }
                }

                .file-name {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    max-width: 20ch;
                }
            }

            .drag-input-text {
                color: #888888;
                display: flex;
                justify-content: center;
                svg {
                    margin: 3px 0px 0px 10px;
                }
            }
        }

        .ant-upload-list-item-info {
            > span {
                display: flex;
                align-items: center;
            }
        }

        .ant-upload-list-item-name {
            line-height: 1.3;
        }
    }
`;
