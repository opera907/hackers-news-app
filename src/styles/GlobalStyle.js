import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
    };
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }
    body {
      font-family: "Roboto", sans-serif;
      font-size: 12px;
      background-color: #efefef;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    button {
      outline: none;
      background-color: inherit;
      border: none;
      padding: 0;
      margin: 0;
    }
    #root {
      max-width: 390px;
      border: 1px solid #eee;
      box-shadow: 10px 10px 10px #eee;
    }
    
    .list_desc > * {
      margin-right: 5px;
    }
    /* font */
    .ft_head_line_1_bold {
      font-size: 24px;
      font-weight: bold;
    }
    .ft_head_line_1_md {
      font-size: 22px;
      font-weight: 500;
    }
    .ft_head_line_2_bold {
      font-size: 16px;
      font-weight: bold;
      line-height: 24px;
    }
    .ft_head_line_3 {
      font-size: 14px;
      font-weight: bold;
    }
    .ft_gnb {
      font-size: 15px;
      font-weight: bold;
    }
    .ft_logo {
      font-size: 20px;
      font-weight: bold;
      color: #fff;
    }
    .menu_list.active {
      color: #222;
      position: relative;
    }
    .menu_list.active::before {
      content: "";
      display: block;
      width: 100%;
      height: 3px;
      background: #f9742e;
      border-radius: 2px 2px 0px 0px;
      position: absolute;
      bottom: 0;
    }
    .hero > img {
      width: 100%;
    }
    .content {
      padding: 24px 20px;
    }
    .category_story::after {
      left: 4px !important;
    }
    .category_user::after {
      left: calc(50% - 4px) !important;
    }
    
`;

export default GlobalStyle;
