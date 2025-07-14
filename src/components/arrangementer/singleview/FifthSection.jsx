const FifthSection = ({ event }) => {
  return (
    <div className="w-full flex justify-center px-5 md:px-[var(--content-width)]">
      <div className="relative w-full max-w-4xl aspect-video">
        <iframe
          src={event.trailer}
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default FifthSection;
