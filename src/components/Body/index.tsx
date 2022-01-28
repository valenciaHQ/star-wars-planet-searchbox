import { IData } from "../../types";
import Autocomplete from "../Autocomplete";

const data: IData[] = [
  { code: crypto.randomUUID(), name: "apple" },
  { code: crypto.randomUUID(), name: "apricot" },
  { code: crypto.randomUUID(), name: "banana" },
];

const Body = () => {
  return (
    <section>
      <Autocomplete data={data} />
    </section>
  );
};

export default Body;
