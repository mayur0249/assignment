import styled from "styled-components";

export const HeaderContainer = styled.header`
    padding : 10px 30px;
    position : sticky;
    top : 0;
    backdrop-filter : blur(8px);
    background: rgb(9 34 39 / 50%);
`
export const LogoContainer = styled.div`
    width : 150px;
    height : 100px;
    img {
        width: 100%;
        height : 100%;
        object-fit : cover;
    }
`
export const Navigations = styled.nav`
    display : flex;
    align-items : center;
    a {
        font-size : 21px;
        text-decoration : none ;
        color : #FFFF;
        padding : 15px 20px;
        margin : 0 10px;
        border : 2px solid  #455757;
        transition : all linear 0.5s;
        &:hover {
            color : #FFFF;
            opacity : 0.8;
            box-shadow : 5px 5px  #ebda86;
        
        }
    }
`
