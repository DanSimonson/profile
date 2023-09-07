import { createSlice } from "@reduxjs/toolkit";

const data = {
  projects: [
    {
      index: 0,
      name: "mariposa online store",
      url: "https://github.com/DanSimonson/dan_ghie_store",
      link: "https://dan-ghie-store.herokuapp.com/",
      picture:
        "https://res.cloudinary.com/dmglopmul/image/upload/v1623451582/projectPhotos/dossier/shop.jpg",
    },
    {
      index: 1,
      name: "mariposa spa website",
      url: "https://github.com/DanSimonson/spa",
      link: "https://spa-mariposa.herokuapp.com/",
      picture:
        "https://res.cloudinary.com/dmglopmul/image/upload/v1610890432/projectPhotos/dossier/projectPhotos_dossier_smassagetables-c_scale_h_240_w_320.jpg",
    },
  ],
};

const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers,
});

export default carouselSlice.reducers;
