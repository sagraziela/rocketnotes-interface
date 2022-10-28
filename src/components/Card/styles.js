import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 112px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    padding: 16px 22px;
    margin-bottom: 16px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border: none;
    border-radius: 10px;

    > h2 {
        font-size: ${({ theme }) => theme.FONT_SIZE.XXL};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
    }
`;