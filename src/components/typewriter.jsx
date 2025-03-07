import {useTypewriter,cursor} from 'react-simple-typewriter'


function Type(){
    const[typeEffect] = useTypewriter({
        words : ['web developer','UI/UX Designer','Design Thinker','Python Developer','React Developer'],
        loop:{},
        typeSpeed:100,
        deleteSpeed:40
    })
return(
    <span style={{fontWeight:"bold",fontSize:"25px",color:"#915eff"}}>{typeEffect}</span>
);
}
export default Type;