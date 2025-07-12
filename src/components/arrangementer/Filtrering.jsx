import kategorier from "@/backend/kategorier.json"
import Button from "../global/Button";

const Filtrering = ({ activeCategory, setActiveCategory }) => {
  return (
    <div>
      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2">
        {kategorier.map((kategori) => (
          <li key={kategori.id}>
            <Button onClick={() => setActiveCategory(kategori.name)}>
              <h3
                className={
                  activeCategory === kategori.name
                    ? "text-(--yellow) italic underline"
                    : "italic"
                }
              >
                {kategori.name}
              </h3>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filtrering;
