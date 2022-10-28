import styled from "styled-components/native";
import colors from "../../styles/colors";

interface Props {
    width: string;
    height: string;
}

export const Container = styled.TouchableOpacity<Props>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    position: relative;
    padding: 0 6px;
    margin: 5px 0;
`;

export const FilmImg = styled.Image`
    height: 100%;
    border-radius: 8px;
`;
export const Score = styled.Text`
    position: absolute;
    right: 15px;
    top: 20px;
    background-color: ${colors.secundary.default};
    padding: 4px 8px;
    border-radius: 12px;
    color: ${colors.gray[600]};
`;
