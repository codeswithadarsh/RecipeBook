import Veggie from "../components/Veggie";
import Nonveg from "../components/Nonveg";
import Dailymeal from "../components/Dailymeal";
import Popular from "../components/Popular";
import {motion} from "framer-motion";
import Footer from "../components/Footer";

function Home() {
    return (
      <motion.div
      animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
      >
        <Popular />
        <Veggie />
        <Nonveg />
        <Dailymeal />
        <Footer />
      
      </motion.div>
    )
  }
  
  export default Home;
  