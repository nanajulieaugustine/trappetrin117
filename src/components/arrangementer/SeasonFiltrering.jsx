import seasons from "@/backend/seasons.json"
import Button from "../global/Button";

const SeasonFiltrering = ({ activeCategory, setActiveCategory }) => {
  return (
    <div>
      <ul className="flex justify-between">
        {seasons.map((season) => (
          <li key={season.id}>
            <Button onClick={() => setActiveCategory(season.name)}>
              <h3 className={activeCategory === season.name ? "text-(--yellow) italic underline" : "italic"}>
                {season.name}
              </h3>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeasonFiltrering;
