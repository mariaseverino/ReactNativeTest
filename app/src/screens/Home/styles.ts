import styled from "styled-components/native";
import colors from "../../utils/colors";

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.dark.background};
    padding-left: 15px;
    padding-right: 15px;
`;

export const WrapperSearch = styled.View`
    width: 100%;
    background-color: ${colors.dark.primary};
    height: 50px;
    border-radius: 20px;
    flex-direction: row;
    align-items: center;
    padding-left: 10px;
    padding-right: 20px;
`;

export const Search = styled.TextInput`
    width: 90%;
    height: 50px;
    margin-left: 10px;
    color: ${colors.dark.text};
    font-size: 18px;
`;

export const Tittle = styled.Text`
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 18px;
    color: ${colors.dark.text};
`;
