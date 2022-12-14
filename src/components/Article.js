import Icon from "./Icon";
function Article({title,date='January 1, 1970',preview,minutes}){
    
    
return(
<article>
    <h3>{title}</h3>
    <small>{date}.</small>
    <small> <Icon minutes={minutes}/>{minutes} min to read</small>

    <p>{preview}</p>
</article>
);
}
export default Article;