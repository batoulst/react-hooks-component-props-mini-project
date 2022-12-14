function Icon({minutes}){
    let icon;
    let numOfincons;
    const arrayOficons=[];
    if(minutes<30){ numOfincons=Math.ceil(minutes/5);
     icon= <span>☕️</span> }
    else{ numOfincons=Math.ceil(minutes/10);
     icon=<span>🍱</span>}
     for(let i=0; i<numOfincons;i++){arrayOficons.push(icon)}
     
    return(<span>{arrayOficons}</span>)
    }
export default Icon;