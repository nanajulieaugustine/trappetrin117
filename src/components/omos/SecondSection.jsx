import Image from "next/image";
import ScrollFlow from "../animationer/ScrollFlow";
import Link from "next/link";
import Button from "../global/Button";

const SecondSection = () => {
  return (
    <div>
    <div className="flex flex-col items-center pb-10 md:items-start md:flex-row gap-8 px-(--content-width)">
          <ScrollFlow speed={-100}>
      <Image
        src="/omos/monsior_min_anus_gul.webp"
        alt="Monsior Min-An*S 2025"
        width={400}  
        height={400} 
        className="flex-shrink-0 mt-5" 
      />
      </ScrollFlow>
      <div>
        <h3>Begyndelsen</h3>
        <p className="max-w-[400]">
          Vi stiftede denne forening, da vi selv sad en dag, efter vi afsluttede Holbæk Drama College og ville opsætte et stykke. Der var ikke noget sted vi rigtig kunne gå til, hvor vi selv kunne udarbejde præcis dette stykke og med de tiltag som vi havde lyst til. Derfor skabte vi kunstnerkollektivforeningen “Trappetrin 117”. Så alle unge i Holbæk og omegn kan få lov at opføre lige det projekt som de vil. Om det er endnu et teaterstykke, en film, koncert, bogudgivelse, udstilling eller hvad man ellers har lyst til, kan de gøre det her. Trappetrin 117 er for dig, der vil tage din kreativitet til den næste etage.
        </p>
      </div>
    </div>

        <div className="flex flex-col items-center md:items-start md:flex-row gap-8 px-(--content-width)">
      <div>
        <h3>Hvor vi startede</h3>
        <p className="max-w-[400]">
          Foreningen startede som en underforening til Teaterrødderne, en amatørteater forening i lokalområdet. Her delte foreningen CVR, men med egne vedtægter og økonomi. Sidenhen er Trappetrin 117 blevet sin egen selvstændige forening, og kan nu søge fonde med sit eget CVR. </p>
          <p className="max-w-[400]">
        Teaterrødderne startede 20. november 1988 efter at Herredspillet i Holbæk havde skabt lyst til at fortsætte arbejdet med amatørteater. De ideer, de havde om teaterarbejde, fandtes ikke i nogen eksisterende forening, derfor skabte de sin egen.
        </p>
        <p className="max-w-[400]">Teaterrøddernes opstart og ambitioner, stemte overens med vores egne i forbindelse med at skabe et forum for vækstlaget i Holbæks lokalområde, og var derfor et essentielt samarbejde for opstarten af foreningen. </p>
        <Link href="trappetrin117_vedtaegter.pdf" target="_blank">
        <Button>
        Læs mere om vedtægter
        </Button>
        </Link>
      </div>
          <ScrollFlow speed={-100}>
            <Image
        src="/omos/medea17.webp"
        alt="Medea 2024"
        width={400}  
        height={400} 
        className="flex-shrink-0 mt-10" 
      />
      </ScrollFlow>
    </div>
      </div>
  );
};

export default SecondSection;
