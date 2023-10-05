import styled from 'styled-components/native';

const CategoriesLayout = styled.View`
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom-width: 2px;
  border-bottom-color: #d6d6d6;
  padding-bottom: 20px;
`;

const CategoryBox = styled.View`
  width: 80px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconSection = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-bottom: 10px;
  background: #d5d5d5;
`;

export {CategoriesLayout, CategoryBox, IconSection};
