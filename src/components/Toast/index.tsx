import styled from 'styled-components';
import { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { ReactComponent as IconOff } from "../../assets/bookmarkoff-icon@2x.svg";
import { ReactComponent as IconOn } from "../../assets/bookmarkon-icon@2x.svg";

const ToastDiv = styled.div<{ isSuccess: boolean }>`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 30px;
  background-color: ${props => props.isSuccess ? "green" : "red"};
  color: ${props => props.theme.light};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Toast = ({show, isSuccess, hideToast}: any) => {
  const [node] = useState(document.createElement('div'));

  const t = <ToastDiv isSuccess={isSuccess}>
    {isSuccess ? <IconOn style={{ width: 18 }} /> : <IconOff style={{ width: 18 }} />}&nbsp;
    {`${!isSuccess ? "REMOVED FROM" : "ADDED TO"} BOOKMARK`}
  </ToastDiv>

  const removeNode = () => {
    if (document?.querySelector('#toast')?.children.length) {
      document?.querySelector('#toast')?.childNodes[0].remove();
    }
  };

  useEffect(() => {
    if (show) {
      document?.querySelector('#toast')?.appendChild(node)

      setTimeout(() => {
        removeNode();
        hideToast();
      }, 1000);
    } else {
      removeNode();
    }

    return () => removeNode();
  }, [node, show]);

  return ReactDOM.createPortal(t, node);
};

export default Toast;