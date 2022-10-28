import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;

    grid-template-columns: 250px auto;
    grid-template-rows: 105px 128px auto 64px;
    grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newNote content";

    background-color: ${({ theme }) => theme.COLORS.GRAY_800};
`;

export const Brand = styled.div`
    grid-area: brand;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: auto;
    background-color: ${({ theme }) => theme.COLORS.GRAY_900};

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_700};;
    
    > h1 {
        font-size: ${({ theme }) => theme.FONT_SIZE.XXL};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
        color: ${({ theme }) => theme.COLORS.HIGHLIGHT_COLOR};
    }

`;

export const Menu = styled.ul`
    grid-area: menu;
    list-style: none;
    background-color: ${({ theme }) => theme.COLORS.GRAY_900};

    text-align: center;
    padding: 64px 0;

    > li {
        margin-bottom: 24px;
    }
`;

export const Search = styled.div`
    grid-area: search;
    padding: 0 64px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    grid-area: content;
    margin: 0 64px 32px 64px;
    overflow-y: auto;
`;

export const NewNote = styled.button`
    grid-area: newNote;
    background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT_COLOR};
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;

