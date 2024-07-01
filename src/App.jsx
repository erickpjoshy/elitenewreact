import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import MediaCenter from './Page/More Abou Media Center/MediaCenter';
import Residential from './Page/Residential/Residential';
// import Portal from './Page/Portal/Portal';
import District from './Page/District Page/District';
import HomLoanFaq from './Page/Home Loan FAQ/HomLoanFaq';
import Philosophy from './Page/Philosophy Page/Philosophy';
import ElitePrivilage from './Page/Elite Privilage/ElitePrivilage';
import EliteBlogs from './Page/Eliite Blogs/EliteBlogs';
import EliteBlogExtraPage from './Page/Elite Blog Extra/EliteBlogExtraPage';
import ImageFallery from './Page/Image Gallery/ImageFallery';
// import HomeSlider from './Page/Portal/HomeSlider';
// import State from './Page/Portal/State';
// import HomePortal from './Page/Portal/Home';
// import DistrictAdd from './Page/Portal/District';
import ContactPage from './Page/Contact Page/ContactPage';
import HomeGuide from './Page/Home Buying Guide/HomeGuide';
import ProductDetails from './Page/Product Details/ProductDetails';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media-center" element={<MediaCenter />} />
        <Route path="/residential" element={<Residential />} />
        <Route path="/districtName/:district" element={<District />} />
        <Route path="/homeloan" element={<HomLoanFaq />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/elite-privilage" element={<ElitePrivilage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/home-buying-guide" element={<HomeGuide />} />
        <Route path="/elite-blog" element={<EliteBlogs />} />
        <Route path="/elite-blog-extra/:id" element={<EliteBlogExtraPage />} />
        <Route
          path="/media-center/image-gallery/:id"
          element={<ImageFallery />}
        />
        <Route path="/productDetails/:id" element={<ProductDetails />} />
        {/* <Route path="/portal" element={<Portal />} /> */}
      </Routes>
    </div>
  );
};

export default App;
