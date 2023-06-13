import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

export const MovieContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px;
  /* border-bottom: 1px solid black; */
  box-shadow: ${({ theme }) => theme.shadows.small};
  margin-bottom: 10px;
`;

export const ImgContainer = styled.div`
  width: 200px;
  height: 300px;
`;

export const InformList = styled.ul`
  padding-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const AddContainer = styled.div`
  box-shadow: ${({ theme }) => theme.shadows.small};
  padding: 10px;
  margin-bottom: 10px;
`;

export const OutletContainer = styled(Outlet)`
  padding: 10px;
  box-shadow: ${({ theme }) => theme.shadows.small};
`;
