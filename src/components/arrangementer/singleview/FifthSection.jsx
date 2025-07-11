const FifthSection = ({event}) => {
    return ( <div className="px-(--content-width) flex justify-center">
         <iframe
        src={event.trailer}
        width="560"
        height="315"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div> );
}
 
export default FifthSection;