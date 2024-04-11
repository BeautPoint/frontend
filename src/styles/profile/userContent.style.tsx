import styled from 'styled-components/native';

const UserContnetLayout = styled.ScrollView`
  width: 100%;
  padding-bottom: 180px;
  display: flex;
`;

const ContnetBox = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: #e9eaec;
  margin-bottom: 20px;
`;

const Title = styled.View``;
const Description = styled.View`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 5px 0;
`;
const CreatedDate = styled.View`
  margin-bottom: 10px;
`;

export {UserContnetLayout, ContnetBox, Title, Description, CreatedDate};
