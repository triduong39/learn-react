import styled from 'styled-components';

type propsType = {
    alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'start' | 'end';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
};

const Card = styled.div<propsType>`
    position: relative;
    width: 400px;
    height: 600px;
    border-radius: 25px;
    padding: 30px;
    box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%),
        0px 9px 46px 8px rgb(0 0 0 / 12%);
    display: flex;
    align-items: ${({ alignItems }) => (alignItems ? alignItems : 'flex-start')};
    justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'flex-start')};
    flex-direction: column;
`;
export default Card;
