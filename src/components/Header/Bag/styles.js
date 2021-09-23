  import styled from "styled-components";


export const BagContainer = styled.div`

  @media only screen and (min-width: 800px) {
    position: relative;
    margin-left: 60%;
    top: 20%;
    cursor: pointer;
    &:hover {
      .icon {
        filter: opacity(0.7);
        transform: scale(1.1);
      }
      span {
        transform: scale(1.2);
      }
    }
  }

  @media only screen and (max-width: 800px) {
    position: relative;
    display: flex;
    
    top: 10%;
    cursor: pointer;  
  }

`;

  export const BagCounter = styled.span`
    @media only screen and (min-width: 800px) {
      background: #13DAD4;
      height: 17px;
      width: 16px;
      top: 15px;
      left: 15px;
      border-radius: 50%;
      font-weight: bold;
      font-size: 12px;
      line-height: 20px;
      color: #ffffff;
      text-align: center;
      justify-content: center;
      transition: 0.2s ease-in-out;
      z-index: 1;
      position: absolute;
    }

    @media only screen and (max-width: 768px){
      background: #13DAD4;
      height: 15px;
      width: 14px;
      border-radius: 50%;
      font-weight: bold;
      font-size: 10px;
      line-height: 14px;
      color: #ffffff;
      align-items: center;
      justify-content: center;
      z-index: 1;
    }
  `;

