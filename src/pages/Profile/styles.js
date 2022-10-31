import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    width: 100%;
    height: 144px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_900};

    display: flex;
    justify-content: left;
    align-items: center;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_700};

    > button {
        background-color: transparent;
        border: none;
        margin-left: 144px;

        > svg {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
            font-size: 24px;
        }
    }
`;

export const Avatar = styled.div`
    width: 186px;
    height: 186px;
    margin: auto;
    position: relative;
    margin: -94px auto 32px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    label {
        width: 48px;
        height: 48px;
        background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT_COLOR};
        border-radius: 50%;

        position: absolute;
        right: 7px;
        bottom: 7px;
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;

        input {
            display: none;
        }

        svg {
            color: ${({ theme }) => theme.COLORS.GRAY_900};
        }
    }
`;

export const Form = styled.form`
    width: 340px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 32px auto;

    > div:nth-child(3) {
        margin-top: 16px;
    }
`;