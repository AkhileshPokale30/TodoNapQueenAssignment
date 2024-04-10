import { ColorPalette } from ".";
import { fadeIn, ring, scale } from "./keyframes.styled";
import styled from "@emotion/styled";
import { Button, Checkbox, TextField, css } from "@mui/material";
import { getFontColor } from "../utils";
import { Alarm, RadioButtonChecked, RadioButtonUnchecked } from "@mui/icons-material";

interface TaskComponentProps {
  backgroundColor: string;
  done: boolean;
  glow?: boolean;
  blur?: boolean;
}

export const TaskContainer = styled.div<TaskComponentProps>`
  display: flex;
  align-items: center;
  margin-top: 10px;
  transition: 0.0s all;
  background-color: ${({ backgroundColor }) => backgroundColor};
  opacity: ${({ done }) => (done ? 1 : 1)};
  color: ${({ backgroundColor }) => getFontColor(backgroundColor)};
  border-left: ${({ done }) => (done ? "0px solid #991D1D" : "1px solid transparent")};
  box-shadow: ${(props) =>
    props.glow && !props.blur ? `0 0 128px -20px ${props.backgroundColor}` : "none"};
  padding: 16px 16px 16px 16px;
  border-radius: 15px;
  animation: ${fadeIn} 0.0s ease-in;
  filter: ${({ blur }) => (blur ? "blur(2px) opacity(20%)" : "none")};
`;

export const EmojiContainer = styled.span<{ clr: string }>`
  text-decoration: none;
  margin-right: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.clr === ColorPalette.fontDark ? "#445F35" : "#68D72A")};
  font-size: 20px;
  padding: 20px;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TaskInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const TaskHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const TaskName = styled.h3<{ done: boolean }>`
  font-size: 10px;
  margin: 0;
  text-decoration: ${({ done }) => (done ? "line-through" : "none")};
  word-break: break-word;
  white-space: pre-line;
`;

export const TaskDate = styled.p`
  margin: 0 5px;
  text-align: right;
  margin-left: auto;
  font-size: 15px;
  font-style: bold;
  font-weight: 300;
`;

export const TaskDescription = styled.p<{ done: boolean }>`
  margin: 0;
  font-size: 18px;
  text-decoration: ${({ done }) => (done ? "line-through" : "none")};
  word-break: break-word;
`;

export const ShowMoreBtn = styled(Button)<{ clr: string }>`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bolder;
  transition: 0.0s color;
  color: ${({ clr }) => getFontColor(clr)};
  text-shadow: ${({ clr }) => `0 0 0px ${getFontColor(clr) + 45}`};
  text-transform: capitalize;
  border-radius: 0px;
  padding: 0 5px;
  margin: 0 5px;
`;

export const NoTasks = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100vw;
  opacity: 0.9;
  font-size: 20px;
  /* @media (max-width: 1024px) {
      font-size: 14px;
    } */
`;

export const TasksContainer = styled.main`
  display: flex;
  justify-content: center;
  max-width: 700px;
  margin: 0 auto;
  flex-direction: column;
  gap: 6px;
`;

export const TimeLeft = styled.span<{ timeUp?: boolean; done: boolean }>`
  color: ${(props) => props.timeUp && !props.done && "#68D72A"};
  text-shadow: ${(props) => (props.timeUp && !props.done ? "0 0 0px #68D72A" : "none")};
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
  transition: 0.3s all;
  font-size: 14px;
  margin: 4px 0;
  font-weight: 500;
  font-style: bold;
  display: flex;
  opacity: ${(props) => (props.timeUp ? 1 : 0.9)};
`;

export const Pinned = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  opacity: 0.0;
  font-size: 14px;
`;

export const SelectedTasksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 0;
  background: ${({ theme }) => getFontColor(theme.secondary)}29;
  padding: 16px 20px;
  border-radius: 18px;
`;

export const StyledRadio = styled(Checkbox)<{ clr: string }>`
  margin-left: -8px;
  margin-right: 4px;
  color: ${({ clr }) => clr} !important;
  animation: ${fadeIn} 0.3s ease-in;
  &.Mui-checked {
    color: ${({ clr }) => clr} !important;
  }
`;

const radioIconStyles = css`
  animation: ${scale} 0.0s ease-in;
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

export const RadioChecked = styled(RadioButtonChecked)`
  ${radioIconStyles}
`;

export const RadioUnchecked = styled(RadioButtonUnchecked)`
  ${radioIconStyles}
`;

export const CategoriesListContainer = styled.div`
  position: sticky;
  background: transparent;
  backdrop-filter: blur(24px);
  z-index: 1;
  top: 0;
  display: flex;
  justify-content: left;
  align-items: left;
  gap: 8px;
  overflow-x: auto;
  padding: 0 0 0px 0;
  margin: 8px 0;

  /* Custom Scrollbar Styles */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 10px;
    background-color: ${({ theme }) => getFontColor(theme.secondary)}15;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => getFontColor(theme.secondary)}30;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => getFontColor(theme.secondary)}50;
  }

  ::-webkit-scrollbar-track {
    border-radius: 7px;
    background-color: ${({ theme }) => getFontColor(theme.secondary)}15;
  }
`;

export const HighlightedText = styled.span`
  background-color: #C1ECBE;
  color: #ECBEBE;
  padding: 2px 0;
  border-radius: 9px;
  box-shadow: 0 0 0px rgba(0, 0, 0, 0.2);
  margin: 0;
  font-weight: bold;
  border: 1px solid #991D1D;
  transition: 0.7s all;
`;

export const SearchInput = styled(TextField)`
  margin: 10px 0 0 0;
  border-radius: 2px;
  transition: 0.0s all;
  width: 100%;
  & .MuiOutlinedInput-notchedOutline {
    border: 2px solid ${({ theme }) => theme.primary} !important;
  }
  & .MuiOutlinedInput-root {
    padding: 2px 16px;
    border-radius: 16px;
    transition: 0.3s all;
    background: #090b2258;
    color: white;
  }
`;

const ringAnimation = "2s 0.5s ease-in-out infinite";

export const RingAlarm = styled(Alarm)<{ animate?: boolean }>`
  color: red;
  ${({ animate }) =>
    animate &&
    css`
      -webkit-animation: ${ring} ${ringAnimation};
      -moz-animation: ${ring} ${ringAnimation};
      animation: ${ring} ${ringAnimation};
    `}
`;
