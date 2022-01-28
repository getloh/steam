import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
    body{
        background-color: rgb(46, 46, 46);
        color: rgb(224, 224, 224);
    }

    .header{
        display: flex;
        justify-content: space-around;
    }

    .userarea{
        background-color: rgb(35, 35, 35);
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
