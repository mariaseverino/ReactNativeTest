import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
    background-color: ${colors.primary.dark};
    padding: 15px;
`;
export const Scroll = styled.ScrollView``;

export const Tittle = styled.Text`
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 22px;
    color: ${colors.gray[600]};
`;
