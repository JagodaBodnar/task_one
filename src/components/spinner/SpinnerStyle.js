import styled from "styled-components";

export const StyledSpinner = styled.div`
  margin: 100px auto;
  font-size: 25px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  -webkit-animation: load5 1.1s infinite ease;
  animation: load5 1.1s infinite ease;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
@-webkit-keyframes load5 {
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em #425eb3, 1.8em -1.8em 0 0em rgba(66,94,179, 0.2), 2.5em 0em 0 0em rgba(66,94,179, 0.2), 1.75em 1.75em 0 0em rgba(66,94,179, 0.2), 0em 2.5em 0 0em rgba(66,94,179, 0.2), -1.8em 1.8em 0 0em rgba(66,94,179, 0.2), -2.6em 0em 0 0em rgba(66,94,179, 0.5), -1.8em -1.8em 0 0em rgba(66,94,179, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(66,94,179, 0.7), 1.8em -1.8em 0 0em #425eb3, 2.5em 0em 0 0em rgba(66,94,179, 0.2), 1.75em 1.75em 0 0em rgba(66,94,179, 0.2), 0em 2.5em 0 0em rgba(66,94,179, 0.2), -1.8em 1.8em 0 0em rgba(66,94,179, 0.2), -2.6em 0em 0 0em rgba(66,94,179, 0.2), -1.8em -1.8em 0 0em rgba(66,94,179, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(66,94,179, 0.5), 1.8em -1.8em 0 0em rgba(66,94,179, 0.7), 2.5em 0em 0 0em #425eb3, 1.75em 1.75em 0 0em rgba(66,94,179, 0.2), 0em 2.5em 0 0em rgba(66,94,179, 0.2), -1.8em 1.8em 0 0em rgba(66,94,179, 0.2), -2.6em 0em 0 0em rgba(66,94,179, 0.2), -1.8em -1.8em 0 0em rgba(66,94,179, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(66,94,179, 0.2), 1.8em -1.8em 0 0em rgba(66,94,179, 0.5), 2.5em 0em 0 0em rgba(66,94,179, 0.7), 1.75em 1.75em 0 0em #425eb3, 0em 2.5em 0 0em rgba(66,94,179, 0.2), -1.8em 1.8em 0 0em rgba(66,94,179, 0.2), -2.6em 0em 0 0em rgba(66,94,179, 0.2), -1.8em -1.8em 0 0em rgba(66,94,179, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(66,94,179, 0.2), 1.8em -1.8em 0 0em rgba(66,94,179, 0.2), 2.5em 0em 0 0em rgba(66,94,179, 0.5), 1.75em 1.75em 0 0em rgba(66,94,179, 0.7), 0em 2.5em 0 0em #425eb3, -1.8em 1.8em 0 0em rgba(66,94,179, 0.2), -2.6em 0em 0 0em rgba(66,94,179, 0.2), -1.8em -1.8em 0 0em rgba(66,94,179, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(66,94,179, 0.2), 1.8em -1.8em 0 0em rgba(66,94,179, 0.2), 2.5em 0em 0 0em rgba(66,94,179, 0.2), 1.75em 1.75em 0 0em rgba(66,94,179, 0.5), 0em 2.5em 0 0em rgba(66,94,179, 0.7), -1.8em 1.8em 0 0em #425eb3, -2.6em 0em 0 0em rgba(66,94,179, 0.2), -1.8em -1.8em 0 0em rgba(66,94,179, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(66,94,179, 0.2), 1.8em -1.8em 0 0em rgba(66,94,179, 0.2), 2.5em 0em 0 0em rgba(66,94,179, 0.2), 1.75em 1.75em 0 0em rgba(66,94,179, 0.2), 0em 2.5em 0 0em rgba(66,94,179, 0.5), -1.8em 1.8em 0 0em rgba(66,94,179, 0.7), -2.6em 0em 0 0em #425eb3, -1.8em -1.8em 0 0em rgba(66,94,179, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(66,94,179, 0.2), 1.8em -1.8em 0 0em rgba(66,94,179, 0.2), 2.5em 0em 0 0em rgba(66,94,179, 0.2), 1.75em 1.75em 0 0em rgba(66,94,179, 0.2), 0em 2.5em 0 0em rgba(66,94,179, 0.2), -1.8em 1.8em 0 0em rgba(66,94,179, 0.5), -2.6em 0em 0 0em rgba(66,94,179, 0.7), -1.8em -1.8em 0 0em #425eb3;
  }
}
@keyframes load5 {
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em #425eb3, 1.8em -1.8em 0 0em rgba(66,94,179, 0.2), 2.5em 0em 0 0em rgba(66,94,179, 0.2), 1.75em 1.75em 0 0em rgba(66,94,179, 0.2), 0em 2.5em 0 0em rgba(66,94,179, 0.2), -1.8em 1.8em 0 0em rgba(66,94,179, 0.2), -2.6em 0em 0 0em rgba(66,94,179, 0.5), -1.8em -1.8em 0 0em rgba(66,94,179, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(66,94,179, 0.7), 1.8em -1.8em 0 0em #425eb3, 2.5em 0em 0 0em rgba(66,94,179, 0.2), 1.75em 1.75em 0 0em rgba(66,94,179, 0.2), 0em 2.5em 0 0em rgba(66,94,179, 0.2), -1.8em 1.8em 0 0em rgba(66,94,179, 0.2), -2.6em 0em 0 0em rgba(66,94,179, 0.2), -1.8em -1.8em 0 0em rgba(66,94,179, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(66,94,179, 0.5), 1.8em -1.8em 0 0em rgba(66,94,179, 0.7), 2.5em 0em 0 0em #425eb3, 1.75em 1.75em 0 0em rgba(66,94,179, 0.2), 0em 2.5em 0 0em rgba(66,94,179, 0.2), -1.8em 1.8em 0 0em rgba(66,94,179, 0.2), -2.6em 0em 0 0em rgba(66,94,179, 0.2), -1.8em -1.8em 0 0em rgba(66,94,179, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(66,94,179, 0.2), 1.8em -1.8em 0 0em rgba(66,94,179, 0.5), 2.5em 0em 0 0em rgba(66,94,179, 0.7), 1.75em 1.75em 0 0em #425eb3, 0em 2.5em 0 0em rgba(66,94,179, 0.2), -1.8em 1.8em 0 0em rgba(66,94,179, 0.2), -2.6em 0em 0 0em rgba(66,94,179, 0.2), -1.8em -1.8em 0 0em rgba(66,94,179, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(66,94,179, 0.2), 1.8em -1.8em 0 0em rgba(66,94,179, 0.2), 2.5em 0em 0 0em rgba(66,94,179, 0.5), 1.75em 1.75em 0 0em rgba(66,94,179, 0.7), 0em 2.5em 0 0em #425eb3, -1.8em 1.8em 0 0em rgba(66,94,179, 0.2), -2.6em 0em 0 0em rgba(66,94,179, 0.2), -1.8em -1.8em 0 0em rgba(66,94,179, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(66,94,179, 0.2), 1.8em -1.8em 0 0em rgba(66,94,179, 0.2), 2.5em 0em 0 0em rgba(66,94,179, 0.2), 1.75em 1.75em 0 0em rgba(66,94,179, 0.5), 0em 2.5em 0 0em rgba(66,94,179, 0.7), -1.8em 1.8em 0 0em #425eb3, -2.6em 0em 0 0em rgba(66,94,179, 0.2), -1.8em -1.8em 0 0em rgba(66,94,179, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(66,94,179, 0.2), 1.8em -1.8em 0 0em rgba(66,94,179, 0.2), 2.5em 0em 0 0em rgba(66,94,179, 0.2), 1.75em 1.75em 0 0em rgba(66,94,179, 0.2), 0em 2.5em 0 0em rgba(66,94,179, 0.5), -1.8em 1.8em 0 0em rgba(66,94,179, 0.7), -2.6em 0em 0 0em #425eb3, -1.8em -1.8em 0 0em rgba(66,94,179, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(66,94,179, 0.2), 1.8em -1.8em 0 0em rgba(66,94,179, 0.2), 2.5em 0em 0 0em rgba(66,94,179, 0.2), 1.75em 1.75em 0 0em rgba(66,94,179, 0.2), 0em 2.5em 0 0em rgba(66,94,179, 0.2), -1.8em 1.8em 0 0em rgba(66,94,179, 0.5), -2.6em 0em 0 0em rgba(66,94,179, 0.7), -1.8em -1.8em 0 0em #425eb3;
  }
`;
