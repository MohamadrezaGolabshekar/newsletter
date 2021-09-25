import styled, { keyframes } from 'styled-components'

const motion = () => keyframes`
  0% {
      transform: rotate(0deg);
  }
  100% {
    transform: rotate(720deg);
  }
`

const Wrapper = styled.div<{height?: string}>`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${props => `${props.height || `calc(100vh - ${props.theme.headerHeight + props.theme.headerHeight}px)`}`};
`

const RingSpinner = styled.div<{ size: number }>`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  margin: 6px;
  border: 6px solid ${props => props.theme.primary};
  border-radius: 50%;
  animation: ${props => motion()} .8s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${props => props.theme.primary} transparent transparent transparent;

  :nth-child(1) {
    animation-delay: -0.45s;
  }
  :nth-child(2) {
    animation-delay: -0.3s;
  }
  :nth-child(3) {
    animation-delay: -0.15s;
  }
`

const Loading = ({ size = 60, height }: { size?: number, height?: string }) => (
    <Wrapper height={height}>
        <RingSpinner size={size} />
    </Wrapper>
)

export default Loading