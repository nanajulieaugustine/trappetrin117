import Image from "next/image";
import ScrollFlow from "../animationer/ScrollFlow";

const SecondSection = () => {
  return (
    <ScrollFlow speed={-100}>
    <div id="light" className="flex gap-8 px-(--content-width)">
      <Image
        src="/omos/monsior_min_anus_gul.webp"
        alt="Monsior Min-An*S 2025"
        width={400}  
        height={400} 
        className="flex-shrink-0" 
      />
      <div>
        <h3>Begyndelsen</h3>
        <p>
          Vi stiftede denne forening, da vi selv sad en dag, efter vi afsluttede Holbæk Drama College og ville opsætte et stykke. Der var ikke noget sted vi rigtig kunne gå til, hvor vi selv kunne udarbejde præcis dette stykke og med de tiltag som vi havde lyst til. Derfor skabte vi kunstnerkollektivforeningen “Trappetrin 117”. Så alle unge i Holbæk og omegn kan få lov at opføre lige det projekt som de vil. Om det er endnu et teaterstykke, en film, koncert, bogudgivelse, udstilling eller hvad man ellers har lyst til, kan de gøre det her. Trappetrin 117 er for dig, der vil tage din kreativitet til den næste etage.
        </p>
      </div>
    </div>
    </ScrollFlow>
  );
};

export default SecondSection;
