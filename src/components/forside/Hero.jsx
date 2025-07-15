"use client";
import { useDarkBackground } from "@/hooks/useDarkBackground";

const Hero = ({
     poster,
  autoPlay = true,
  loop = true,
  muted = true,
}) => {
      const containerRef = useDarkBackground(0.1);

    return ( 
         <div ref={containerRef} style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', display: 'flex' }}>
      <video
        src="./index/medea_trailer.mp4"
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
        }}
      />
 
      <div className="relative z-10 white flex justify-end flex-col px-(--content-width)">
        <h1 className="white italic">trappetrin 117</h1>
        <p className="italic bold">Trappetrin 117 er en forening skabt af ambitiøse unge fra Holbæk Drama College. Du kan bruge Trappetrin117 til at udvikle din projekter, og have en forening i ryggen når/hvis, du søger fonde og puljer.</p>
        <p className="italic bold">Projekterne kan gennem Trappetrin 117 indebære professionel sparring eller instruktion, som kan guide og give lærdom. På den måde opnår hvert individ størst mulig udvikling, og kan nå nye højder. Et projekt kan ske i alle former og iblandt alle kunstarter. Det er kun dig selv, der sætter grænserne!</p>
      </div>
    </div>
     );
}
 
export default Hero;