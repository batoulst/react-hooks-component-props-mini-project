function About({
    imageSrc='https://via.placeholder.com/215',
    about='About this blog'})
    {
        console.log(imageSrc)
    return(
        <aside>
            <img src={imageSrc} alt="blog logo"/>
            <p>{about}</p>
        </aside>

    )
}
export default About;