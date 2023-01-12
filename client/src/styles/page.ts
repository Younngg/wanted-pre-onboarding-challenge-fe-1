import styled from 'styled-components';

export const Container = styled.div`
  width: 100rem;
  margin: 10rem auto 0;
  display: flex;
  background-color: #fff;
  border-radius: 10px;
`;

export const PageContainer = styled.div`
  width: 50rem;
  padding: 0 5rem;
  position: relative;

  + div {
    border-left: 1px dashed lightgrey;
  }
`;

export const PageTitle = styled.h2`
  font-size: 2rem;
  padding: 2rem 0;
  display: flex;
`;
