import { keyframes } from 'styled-components';
let degrees = 74;
const percentArray = [];
const smoothAnimation = () =>{
    for (let index = 1; index <90; index++) {
        degrees+=2
        percentArray.push(`${index}%{
            background: linear-gradient( ${degrees}deg, rgba(255,255,255,1) 0%, rgba(239,239,239,1) 100% );
        }`)
       
    }
}
smoothAnimation();
const veryLongString = percentArray.join(" ");
console.log(veryLongString)
export const flipOnHover = keyframes`
  0%{
    background: linear-gradient( ${degrees}deg, rgba(255,255,255,1) 0%, rgba(239,239,239,1) 100% );
  }
  ${veryLongString}
  100% {
    background: linear-gradient( ${74}deg, rgba(255,255,255,1) 0%, rgba(239,239,239,1) 100% );
  }
`;