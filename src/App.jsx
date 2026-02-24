import { Experience, TourCards } from "@/Layout";
import { useTourController } from "@/Hooks/tourController";

const App = () => {
  const { card } = useTourController();

  console.log(card);

  return (
    <div>
      <Experience />
      <TourCards />
    </div>
  );
};

export default App;
