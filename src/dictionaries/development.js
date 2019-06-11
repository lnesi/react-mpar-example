import StarWarsApp from "../components/StarWarsApp";
import StarWarsBanner from "../components/StarWarsBanner";


export default {
  StarWarsApp: {
    class: StarWarsApp,
    name: "StarWarsAppSPA",
    description:
      "StarWarsApp",
    reduxEnabled: true,
    createState: true
  },
  StarWarsBanner: {
    class: StarWarsBanner,
    name: "StarWarsBanner",
    description:
      "StarWarsBanner",
    reduxEnabled: true,
    createState: false
  }
};
