import styled from 'styled-components/native';

interface PropType {
  serviceTag: {border?: boolean; width?: string};
  text: {size?: string; color?: string};
}

const FormLayout = styled.View`
  width: 100%;
  /* height: 300px; */
  background: #ffffff;
`;

const DescriptionBox = styled.View`
  width: 100%;
  height: 100px;
`;

const SubDescription = styled.View`
  margin: 10px 0;
`;

const TagBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ServiceTag = styled.Pressable<PropType['serviceTag']>`
  background: #f4f5f6;
  border: ${({border}) => (border ? '2px solid #619BFF' : 'none')};
  width: ${({width}) => width || '105px'};
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export {FormLayout, DescriptionBox, SubDescription, TagBox, ServiceTag};
