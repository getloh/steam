import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
    body{
        background-color: rgb(46, 46, 46);
        color: rgb(224, 224, 224);
        
    }

    .header{
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: rgb(30, 30, 30);
        min-height: 8vh;
        margin: 0px;
        padding: 0px;
    }
    .header h1{
        font-size: 2rem;
        margin: 0px;
    }

    .userarea{
        background-color: rgb(43, 43, 43);
    }
    .Usercontainer{
        display: flex;
        justify-content: center;
        
    }

    .error {
        position: fixed;
        color: red;
        font-size: 0.8rem;
        top: 0px;
        right: 0px;
    }
`
