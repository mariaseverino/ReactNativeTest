import styled from "styled-components/native";
import colors from "../../utils/colors";

interface Props {
    color: string;
    opacity: number;
}

export const Container = styled.View`
    display: flex;
    flex: 1;
    position: relative;
    background-color: ${colors.dark.background};
    padding: 15px 20px;
`;

export const Wrapper = styled.View`
    flex-direction: row;
    width: 160px;
    margin-bottom: 15px;
`;

export const Text = styled.Text<Props>`
    font-size: 14px;
    color: ${colors.dark.text};
    background-color: ${(props) => props.color};
    padding: 2px 12px;
    border-radius: 12px;
    margin-right: 10px;
`;

export const WrapperPlay = styled.View`
    height: 40%;
    position: relative;
`;

export const MovieImage = styled.Image`
    height: 100%;
    border-radius: 20px;
`;

export const Icon = styled.TouchableOpacity`
    position: absolute;
    top: 60px;
    left: 130px;
    background-color: ${colors.dark.secundary};
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    height: 55px;
    width: 55px;
    opacity: 0.9;
`;

export const Subtitle = styled.Text`
    font-size: 18px;
    color: ${colors.dark.text};
    margin-top: 15px;
    margin-bottom: 5px;
`;

export const Description = styled.Text`
    font-size: 14px;
    color: ${colors.dark.gray};
`;

export const Button = styled.TouchableOpacity<Props>`
    background-color: ${colors.dark.secundary};
    color: burlywood;
    position: absolute;
    bottom: 10px;
    left: 20px;
    width: 100%;
    padding: 15px;
    align-items: center;
    border-radius: 8px;
    flex-direction: row;
    justify-content: center;
    opacity: ${(props) => props.opacity}; ;
`;

export const ButtonText = styled.Text`
    font-size: 16px;
    color: ${colors.dark.text};
    margin-left: 5px;
`;
