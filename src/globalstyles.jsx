import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
    body{
        background-color: rgb(46, 46, 46);
        color: rgb(224, 224, 224);
        
    }
    a {
        color: white;
    }

    .header{
        display: flex;
        justify-content: space-around;
 
        align-items: center;
        background-color: rgb(30, 30, 30);
        min-height: 10vh;
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

    .Gamelist{
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        
    }
    #game-hyperlink{
        text-decoration: none;
    }


    .error {
        position: fixed;
        color: red;
        font-size: 0.8rem;
        top: 0px;
        right: 0px;
    }

    #howto {
        position: fixed;
        opacity: 0;
        background-color: rgba(131, 72, 5, 0.85);
        transition: 1s ease;
        width: 40vw;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -30%);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        font-size: 0.9em;
        border-radius: 10px;
        z-index: -1;
    }
    #howto.reveal {
        opacity: 1;
        z-index: 9;
    }
    .splashhead {
        margin-top: -3vh;
        display: flex;
        align-items: center;
    }
    .splashhead Button{
        position: relative;
        margin-left: 5vw;
        opacity: 1;
    }

    #about {

        position: fixed;
        opacity: 0;
        background-color: rgba(42, 123, 129, 0.85);
        transition: 1s ease;
        width: 40vw;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -30%);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        font-size: 0.9em;
        border-radius: 10px;
        z-index: -1;
    }
    #about.reveal{

        opacity: 1;
        z-index: 9;
    }




}

`
