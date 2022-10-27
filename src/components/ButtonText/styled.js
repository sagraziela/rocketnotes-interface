import styled from "styled-components";

export const Container = styled.button`
    width: fit-content;
    border: none;
    background: none;
    font-size: ${({ theme }) => theme.FONT_SIZE.MD};
    color: ${({ theme }) => theme.COLORS.HIGHLIGHT_COLOR};
`;