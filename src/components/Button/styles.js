import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 56px;
    background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT_COLOR};
    color: ${({ theme }) => theme.COLORS.GRAY_800};

    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.MEDIUM};

    &:disabled {
        opacity: 0.5;
    }
`;  