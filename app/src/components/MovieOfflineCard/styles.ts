import styled from "styled-components/native";
import colors from "../../utils/colors";

interface Props {
    color: string;
}

export const Container = styled.View`
    background-color: ${colors.dark.primary};
    height: 100px;
    padding: 10px;
    flex-direction: row;
    border-radius: 8px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 10px;
    opacity: 0.8;
`;

export const MovieImage = styled.Image`
    height: 100%;
    width: 25%;
    border-radius: 8px;
    margin-right: 15px;
`;

export const MovieContent = styled.View``;

export const Wrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const MovieTitle = styled.Text`
    font-size: 22px;
    color: ${colors.dark.text};
`;

export const Text = styled.Text<Props>`
    font-size: 14px;
    color: ${colors.dark.text};
    background-color: ${(props) => props.color};
    padding: 2px 12px;
    border-radius: 12px;
    margin-top: 25px;
    margin-right: 10px;
`;
