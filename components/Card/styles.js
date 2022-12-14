import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  align-items: center;
  width: 80%;
  height: 150px;
  margin: 0 auto 15px;
  background-color: #0f0f0f;
  border-radius: 10px;
  overflow: auto;
  & img {
    height: 100%;
    margin-right: 15px;
  }
  & p {
    font-family: sans-serif;
    font-size: 2em;
    color: white;
  }
`
