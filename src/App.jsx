import "./App.scss";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import HeaderNew from "./comp/header new/HeaderNew";
import About from "./pages/about/About";
import Footer from "./comp/footer/Footer";
import Contact from "./pages/contact/Contact";
import Male from "./pages/dr-page/Male";
import Female from "./pages/dr-page/Female";
import BlogDetails from "./pages/blog-details/BlogDetails";
import ScrollToTop from "./pages/ScrollToTop";
import GeneralDental from "./pages/services/general dental/GeneralDental";
import RestorativeDentistry from "./pages/services/restorative dentistry/RestorativeDentistry";
import CosmeticDentistry from "./pages/services/cosmetic dentistry/CosmeticDentistry";
import OrthodonticTreatments from "./pages/services/orthodontic treatments/OrthodonticTreatments";
import FullMouthRihabilitation from "./pages/services/full mouth rihabilitation/FullMouthRihabilitation";
import DentureTreatment from "./pages/services/denture treatment/DentureTreatment";
import PediatricDentistry from "./pages/services/pediatric dentistry/PediatricDentistry";
import DentalLasers from "./pages/services/dental lasers/DentalLasers";
import DentalCheckUps from "./pages/sub services/dental check ups/DentalCheckUps";
import DentalXRay from "./pages/sub services/dental x-ray/DentalXRay";
import TeethCleaning from "./pages/sub services/teeth cleaning/TeethCleaning";
import RootCanalTreatment from "./pages/sub services/root canal treatment/RootCanalTreatment";
import RootCanalReTreatment from "./pages/sub services/root canal re-treatment/RootCanalReTreatment";
import ToothExtraction from "./pages/sub services/tooth extraction/ToothExtraction";
import WisdomToothExtraction from "./pages/sub services/wisdom tooth extraction/WisdomToothExtraction";
import MinorOralSurgeries from "./pages/sub services/minor oral surgeries/MinorOralSurgeries";
import ToothColouredFeeling from "./pages/sub services/tooth coloured filling/ToothColouredFeeling";
import DentalCrowns from "./pages/sub services/dental crowns/DentalCrowns";
import CrownsBridges from "./pages/sub services/crowns bridges/CrownsBridges";
import InlaysOnlays from "./pages/sub services/inlays and onlays/InlaysOnlays";
import SmileAnalysisConsultation from "./pages/sub services/smile analysis consul/SmileAnalysisConsultation";
import SmileDesigning from "./pages/sub services/smile designing/SmileDesigning";
import TeethWhiteningTreatment from "./pages/sub services/teeth whiteing treatment/TeethWhiteningTreatment";
import PorcelainVennersTreatment from "./pages/sub services/porcelain veneers treatment/PorcelainVennersTreatment";
import CompositeVeeners from "./pages/sub services/composite veener/CompositeVeeners";
import CompositeBonding from "./pages/sub services/commposite bonding/CompositeBonding";
import GumDepizmentation from "./pages/sub services/gum depezmentation/GumDepizmentation";
import ClearAligners from "./pages/sub services/clear aligner/ClearAligners";
import CeramicBraces from "./pages/sub services/ceramic braces/CeramicBraces";
import AllOnFour from "./pages/sub services/all on four/AllOnFour";
import ImplantSupported from "./pages/sub services/implant supported/ImplantSupported";
import Blogs from "./pages/blogs/Blogs";
import Cbct from "./pages/technology/cbct/Cbct";
import IntraOralScanning from "./pages/technology/intra oral scanning/IntraOralScanning";
import GbtCleaning from "./pages/technology/gbt cleaning/GbtCleaning";
import GbtMachine from "./pages/technology/gbt machine/GbtMachine";
import DentalLoupes from "./pages/technology/dental loupes/DentalLoupes";
import LaughingGas from "./pages/technology/laughing gas/LaughingGas";
import DentalTourism from "./pages/dental tourism/DentalTourism";
import OurWork from "./pages/our work/OurWork";
import DentalImplantsTreatment from "./pages/services/dental implants treatment/DentalImplantsTreatment";
import ToothReshaping from "./pages/sub services/tooth reshaping/ToothReshaping";
import GumCountouring from "./pages/sub services/gum contouring/GumCountouring";
import MetalBraces from "./pages/sub services/metal braces/MetalBraces";
import LingualBraces from "./pages/sub services/lingual braces/LingualBraces";



function AppLayout() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/header";

  return (
    <>
      <ScrollToTop />
      {!hideHeaderFooter && <HeaderNew />}
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<GeneralDental />} path="/general-dental" />
        <Route element={<RestorativeDentistry />} path="/restorative-dentistry" />
        <Route element={<CosmeticDentistry />} path="/cosmetic-dentistry" />
        <Route element={<OrthodonticTreatments />} path="/orthodontic-treatments" />
        <Route element={<DentalImplantsTreatment />} path="/dental-implants-treatment" />
        <Route element={<FullMouthRihabilitation />} path="/full-mouth-rehabilitation" />
        <Route element={<DentureTreatment />} path="/denture-treatment" />
        <Route element={<PediatricDentistry />} path="/pediatric-dentistry" />
        <Route element={<DentalCheckUps />} path="/dental-check-ups" />
        <Route element={<DentalXRay />} path="/dental-x-ray" />
        <Route element={<DentalXRay />} path="/dental-x-ray" />
        <Route element={<TeethCleaning />} path="/teeth-cleaning" />
        <Route element={<RootCanalTreatment />} path="/root-canal-treatment" />
        <Route element={<RootCanalReTreatment />} path="/root-canal-retreatment" />
        <Route element={<ToothExtraction />} path="/tooth-extraction" />
        <Route element={<WisdomToothExtraction />} path="/wisdom-tooth-extraction" />
        <Route element={<MinorOralSurgeries />} path="/minor-oral-surgeries" />
        <Route element={<ToothColouredFeeling />} path="/tooth-coloured-feeling" />
        <Route element={<DentalCrowns />} path="/dental-crowns" />
        <Route element={<CrownsBridges />} path="/crowns-bridges" />
        <Route element={<InlaysOnlays />} path="/inlays-onlays" />
        <Route element={<SmileAnalysisConsultation />} path="/smile-analysis-consultation" />
        <Route element={<SmileDesigning />} path="/smile-designing" />
        <Route element={<TeethWhiteningTreatment />} path="/teeth-whitening-treatment" />
        <Route element={<PorcelainVennersTreatment />} path="/porcelain-veneers-treatment" />
        <Route element={<ToothReshaping />} path="/tooth-reshaping" />
        <Route element={<CompositeVeeners />} path="/composite-veneers" />
        <Route element={<CompositeBonding />} path="/composite-bonding" />
        <Route element={<GumCountouring />} path="/gum-countouring" />
        <Route element={<GumDepizmentation />} path="/gum-depizmentation" />
        <Route element={<ClearAligners />} path="/clear-aligners" />
        <Route element={<CeramicBraces />} path="/ceramic-braces" />
        <Route element={<MetalBraces />} path="/metal-braces" />
        <Route element={<LingualBraces />} path="/lingual-braces" />
        <Route element={<AllOnFour />} path="/all-on-four" />
        <Route element={<ImplantSupported />} path="/implant-supported" />
        <Route element={<Female />} path="/female-dr" />
        <Route element={<BlogDetails />} path="/blog-details" />
        <Route element={<Blogs />} path="/blogs" />
        <Route element={<DentalTourism />} path="/dental-tourism" />
        <Route element={<OurWork />} path="/our-work" />
        {/* technology  */}
        <Route element={<Cbct />} path="/cbct" />
        <Route element={<IntraOralScanning />} path="/intra-oral-scanning" />
        <Route element={<DentalLasers />} path="/dental-lasers" />
        <Route element={<GbtCleaning />} path="/gbt-cleaning" />
        <Route element={<GbtMachine />} path="/gbt-machine" />
        <Route element={<DentalLoupes />} path="/dental-loupes" />
        <Route element={<LaughingGas />} path="/laughing-gas" />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
