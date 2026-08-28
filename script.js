// Generador auxiliar de la estructura para 2027
const createBankStructure = (bankName) => ({
  "BORRADORES": {
    img: `https://via.placeholder.com/600x350?text=Borradores+${encodeURIComponent(bankName)}+2027`,
    items: [
      { grado: "1ero", url: "https://drive.google.com/drive/folders/1qq3BwMKCBihUGPebJqW0YHxDqroH_nY5?usp=drive_link" },
      { grado: "2do", url: "https://drive.google.com/drive/folders/1CC9ycuV88yxDNq78av31yDXvVnY0whib?usp=drive_link" },
      { grado: "3ero", url: "https://drive.google.com/drive/folders/1S7iCfdrjrZzQF8GDHfpQpCKzlgi5GLqr?usp=drive_link" },
      { grado: "4to", url: "https://drive.google.com/drive/folders/14sUxwA4Jf-LpSv5pWlCrJ6yUQdaS22ju?usp=drive_link" },
      { grado: "5to", url: "https://drive.google.com/drive/folders/1bCvv3Vtbq5qMsa8_0puiPLZLEHDbSyhR?usp=drive_link" },
      { grado: "5to Pre", url: "https://drive.google.com/drive/folders/19cBHC-7p9U6Y5f-f8sKDzGIDhEZbwOi5?usp=drive_link" }
    ]
  },
  "PRIMERA REVISIÓN": {
    img: `https://via.placeholder.com/600x350?text=Revision+1+${encodeURIComponent(bankName)}+2027`,
    items: [
      { grado: "1ero", url: "https://drive.google.com/drive/folders/11g-e4NPLl8XUcJs4lJ7ZpS359l1KrVjE?usp=drive_link" },
      { grado: "2do", url: "https://drive.google.com/drive/folders/172aJEf4eIBPOdzoYGGuQpW5yKSXRQU9V?usp=drive_link" },
      { grado: "3ero", url: "https://drive.google.com/drive/folders/1lDl9VOsXWr_NDFmT-kGZG8jUTJs-bckb?usp=drive_link" },
      { grado: "4to", url: "https://drive.google.com/drive/folders/14rTXN-XhMELSnIASck2vIfg0kED3zZZi?usp=drive_link" },
      { grado: "5to", url: "https://drive.google.com/drive/folders/1PTaf4ygCrsgx3cuiyKB-93CUnmkcOdPp?usp=drive_link" },
      { grado: "5to Pre", url: "https://drive.google.com/drive/folders/1LLmlBeAYdl0kh2UiMefIlK4EW_HizI9r?usp=drive_link" }
    ]
  },
  "SEGUNDA REVISIÓN": {
    img: `https://via.placeholder.com/600x350?text=Revision+2+${encodeURIComponent(bankName)}+2027`,
    items: [
      { grado: "1ero", url: "https://drive.google.com/drive/folders/1PKAlLltinVA413r6PlNhbkvTJGvdtIB2?usp=drive_link" },
      { grado: "2do", url: "https://drive.google.com/drive/folders/1FJm9cT7gcBW8o2-7ecfn0SxGplu3bkGB?usp=drive_link" },
      { grado: "3ero", url: "https://drive.google.com/drive/folders/1KeSzBFkponvYmufiAEvzHUJLFseLYdUV?usp=drive_link" },
      { grado: "4to", url: "https://drive.google.com/drive/folders/1AAB0NzHflVa0wzovqhCdN2V3FRzrtILL?usp=drive_link" },
      { grado: "5to", url: "https://drive.google.com/drive/folders/1ZuntrljUDn08FOf2_G4MROHo6ewtDlWh?usp=drive_link" },
      { grado: "5to Pre", url: "https://drive.google.com/drive/folders/1dCAelDA-166I3uzrAfKXRQnurZRHRwyr?usp=drive_link" }
    ]
  },
  "REVISIÓN FINAL": {
    img: `https://via.placeholder.com/600x350?text=Revision+Final+${encodeURIComponent(bankName)}+2027`,
    items: [
      { grado: "1ero", url: "https://drive.google.com/drive/folders/1NtIdfytzXoG26vimZcro_ski2g2olRSk?usp=drive_link" },
      { grado: "2do", url: "https://drive.google.com/drive/folders/1V_uCDU6x1JEWsLCdJZqlw7GLTcRmryYS?usp=drive_link" },
      { grado: "3ero", url: "https://drive.google.com/drive/folders/1DiiHaa4V8YWdMAwIkat-SQT3PBkc_edH?usp=drive_link" },
      { grado: "4to", url: "https://drive.google.com/drive/folders/13GM2UA_vP7uUODi8FESZufcqTYHvTiFA?usp=drive_link" },
      { grado: "5to", url: "https://drive.google.com/drive/folders/1EFDBzRiL_ZX7zf1fqKGm9iNHCUUKM8jQ?usp=drive_link" },
      { grado: "5to Pre", url: "https://drive.google.com/drive/folders/1CHlCQe1DHOcViYvK3aW3hIQSfiKRKicZ?usp=drive_link" }
    ]
  }
});

// Base de datos global estructurada por Año -> Banco -> Etapa
const database = {
  "2025": {
    "BANCO I": {
      "MATERIAL DE APOYO": [
        { grado: "1ero", url: "https://drive.google.com/drive/folders/1vcpwGHcg7jNuvVqwgwHGyfBj-V3jaHAo?usp=drive_link" },
        { grado: "2do", url: "https://drive.google.com/drive/folders/1pPSREH3WCcjw5iwFgWviAQ75mJ6wl_B1?usp=drive_link" },
        { grado: "3ero", url: "https://drive.google.com/drive/folders/1ifBg45GSthiiEqKXqANbWoyU7oGpjpyK?usp=drive_link" },
        { grado: "4to", url: "https://drive.google.com/drive/folders/1mOU90PxMK2Q5MylupOmdOi-76TtJieXf?usp=drive_link" },
        { grado: "5to", url: "https://drive.google.com/drive/folders/1WevFDxJ-36gPVHtmjHjYW2qtUVEx683v?usp=drive_link" },
        { grado: "5to Pre", url: "https://drive.google.com/drive/folders/1A3ExpdYV_31q33r2Mxjz-qF35u3zvTnv?usp=drive_link" }
      ]
    },
    "BANCO II": {
      "MATERIAL DE APOYO": [
        { grado: "1ero", url: "https://drive.google.com/drive/folders/1GcP_khLRnqP7nO-gHf_fHQr4kMF3T0oZ?usp=drive_link" },
        { grado: "2do", url: "https://drive.google.com/drive/folders/1LJQde30Cup6delLQxfaeOZDV75e_5NQd?usp=drive_link" },
        { grado: "3ero", url: "https://drive.google.com/drive/folders/1N8CfiOQOUzdUHhsPKO3mvkpkyYA8ihKH?usp=drive_link" },
        { grado: "4to", url: "https://drive.google.com/drive/folders/1m81WVdd0fG7b22jBR7BqB5con2S0Hgsl?usp=drive_link" },
        { grado: "5to", url: "https://drive.google.com/drive/folders/1NgrlnYLa-GIZjxjNkXGM9CSO0EIjJ-uW?usp=drive_link" },
        { grado: "5to Pre", url: "https://drive.google.com/drive/folders/16hB39ATGLK-CIzljXDSFSw7kgvcLEU6l?usp=drive_link" }
      ]
    },
    "BANCO III": {
      "MATERIAL DE APOYO": [
        { grado: "1ero", url: "https://drive.google.com/drive/folders/1TZY0GH1LepkGe74sk47gADEisBHuvKBc?usp=drive_link" },
        { grado: "2do", url: "https://drive.google.com/drive/folders/1mCwkI0ZsdXIMxitpTEWbPopT8Pbok3wS?usp=drive_link" },
        { grado: "3ero", url: "https://drive.google.com/drive/folders/1jFMb9YQ3vVQ2KVJDAF0aI7kjFahiD0de?usp=drive_link" },
        { grado: "4to", url: "https://drive.google.com/drive/folders/1Chro0wf3fP2QozCcppqOuNMTcBvmk4xH?usp=drive_link" },
        { grado: "5to", url: "https://drive.google.com/drive/folders/1aqvdfa97OO-ixZouPePvJbB_Pag-udmK?usp=drive_link" },
        { grado: "5to Pre", url: "https://drive.google.com/drive/folders/1XbInd5OdOHv5aelcGEhV53q11e4yd8fV?usp=drive_link" }
      ]
    },
    "BANCO IV": {
      "MATERIAL DE APOYO": [
        { grado: "1ero", url: "https://drive.google.com/drive/folders/1GmDpWsobM4EfRA3D44-8rK07-oAFuZdo?usp=drive_link" },
        { grado: "2do", url: "https://drive.google.com/drive/folders/1pmqd3hRnV0UVPRqI2x2lknZX_u0t8ZlX?usp=drive_link" },
        { grado: "3ero", url: "https://drive.google.com/drive/folders/1D36qx2FzbO90YRA5BUBoa1lsIrg5jbii?usp=drive_link" },
        { grado: "4to", url: "https://drive.google.com/drive/folders/1UesOkyKjP4lfw433_bPS4IvL5s2_zcqi?usp=drive_link" },
        { grado: "5to", url: "https://drive.google.com/drive/folders/1IYJlF53lvI8EiG86gC6icYSMxBnepDkT?usp=drive_link" },
        { grado: "5to Pre", url: "https://drive.google.com/drive/folders/184Mw75AyR9GYELlLfbWZAjpHzUr55OB2?usp=drive_link" }
      ]
    }
  },
  "2026": {
    "BANCO I": {
      "MATERIAL DE APOYO": [
        { grado: "1ero", url: "https://drive.google.com/drive/folders/11r6tWphIgEfVgHeP0gn7PH7fp2j_HGz4?usp=drive_link" },
        { grado: "2do", url: "https://drive.google.com/drive/folders/1uQI5DSbOWYRy4DLXP67ssj1gV-1n7gtB?usp=drive_link" },
        { grado: "3ero", url: "https://drive.google.com/drive/folders/1feMo-XkZbz2VqJdGiV5ZHvZ2w23V0Co8?usp=drive_link" },
        { grado: "4to", url: "https://drive.google.com/drive/folders/1XEyQlgdO4Cx3W1j_F-6hiACyvr19LZPO?usp=drive_link" },
        { grado: "5to", url: "https://drive.google.com/drive/folders/1Nxfe1BEJJu9jIsM04xLp87Df5nB1sb4m?usp=drive_link" },
        { grado: "5to Pre", url: "https://drive.google.com/drive/folders/1m3h4fEdMZSf2iqbw8czL7Wx1rpJxbatL?usp=drive_link" }
      ]
    },
    "BANCO II": {
      "MATERIAL DE APOYO": [
        { grado: "1ero", url: "https://drive.google.com/drive/folders/1t2-TUyZtbjQvrV_6laUMtmjzjXG2Tdt5?usp=drive_link" },
        { grado: "2do", url: "https://drive.google.com/drive/folders/1f9h8SUsl_9HkBZmj2i11195yX1lv5crs?usp=drive_link" },
        { grado: "3ero", url: "https://drive.google.com/drive/folders/1x6zHr3UVv8G1wJ4MeFuP5HuQMgUP63dl?usp=drive_link" },
        { grado: "4to", url: "https://drive.google.com/drive/folders/1XrP6hbs0DtIJK8jAOCunqmwq_G9x6ys3?usp=drive_link" },
        { grado: "5to", url: "https://drive.google.com/drive/folders/1MIqCdhcXwrlk3ujHGoVTG5HTcaWQJUEn?usp=drive_link" },
        { grado: "5to Pre", url: "https://drive.google.com/drive/folders/1UYM9vqNB6I2rloQg-c-o3FHl0HP2RTUE?usp=drive_link" }
      ]
    },
    "BANCO III": {
      "MATERIAL DE APOYO": [
        { grado: "1ero", url: "https://drive.google.com/drive/folders/1yIzPe3-1tlwhtIVqt17VL5hmi1f557Tl?usp=drive_link" },
        { grado: "2do", url: "https://drive.google.com/drive/folders/1GA8jGXZIdBz6_SzeyYR1fa0xFo0lqJG2?usp=drive_link" },
        { grado: "3ero", url: "https://drive.google.com/drive/folders/1bJJMmCUbN7FLr3HyrsEw0MLt7C6k6y8L?usp=drive_link" },
        { grado: "4to", url: "https://drive.google.com/drive/folders/1YAQXpalMKJ8-rhjTdCNOoPoXViXGW7kW?usp=drive_link" },
        { grado: "5to", url: "https://drive.google.com/drive/folders/1WhG4rmLUbtohVCMXYWTlVCjfa6VwAgyt?usp=drive_link" },
        { grado: "5to Pre", url: "https://drive.google.com/drive/folders/1w2tKGxaIZKOAaq-TXUn436FYB3TZVTn1?usp=drive_link" }
      ]
    },
    "BANCO IV": {
      "MATERIAL DE APOYO": [
        { grado: "1ero", url: "https://drive.google.com/drive/folders/15ee6geVlNrjeOAPFCLvCMgyVLn7FC-Ko?usp=drive_link" },
        { grado: "2do", url: "https://drive.google.com/drive/folders/1u46vSVe9O_k7vQMXGLiCZ935Q7Cbj-G5?usp=drive_link" },
        { grado: "3ero", url: "https://drive.google.com/drive/folders/1C3dMCXuS10XZF9LHBtJ6r1-NRhXmgE89?usp=drive_link" },
        { grado: "4to", url: "https://drive.google.com/drive/folders/1YIJCIBKjIYOU34dHpjL7fLDmUb2ketGV?usp=drive_link" },
        { grado: "5to", url: "https://drive.google.com/drive/folders/12OKLe_ew1euWi30L91yrvff8AOxBiEj2?usp=drive_link" },
        { grado: "5to Pre", url: "https://drive.google.com/drive/folders/1fEf9HtGm2tqdsXEyHtdVmBKN5OaxHxQe?usp=drive_link" }
      ]
    }
  },
  "2027": {
  "BANCO I": {
    "BORRADORES": {
      img: `https://via.placeholder.com/600x350?text=Borradores+BANCO+I+2027`,
      items: [
        { grado: "1ero", url: "https://drive.google.com/drive/folders/1qq3BwMKCBihUGPebJqW0YHxDqroH_nY5?usp=drive_link" },
        { grado: "2do", url: "https://drive.google.com/drive/folders/1CC9ycuV88yxDNq78av31yDXvVnY0whib?usp=drive_link" },
        { grado: "3ero", url: "https://drive.google.com/drive/folders/1S7iCfdrjrZzQF8GDHfpQpCKzlgi5GLqr?usp=drive_link" },
        { grado: "4to", url: "https://drive.google.com/drive/folders/14sUxwA4Jf-LpSv5pWlCrJ6yUQdaS22ju?usp=drive_link" },
        { grado: "5to", url: "https://drive.google.com/drive/folders/1bCvv3Vtbq5qMsa8_0puiPLZLEHDbSyhR?usp=drive_link" },
        { grado: "5to Pre", url: "https://drive.google.com/drive/folders/19cBHC-7p9U6Y5f-f8sKDzGIDhEZbwOi5?usp=drive_link" }
      ]
    },
    "PRIMERA REVISIÓN": {
      img: `https://via.placeholder.com/600x350?text=Revision+1+BANCO+I+2027`,
      items: [
        { grado: "1ero", url: "https://drive.google.com/drive/folders/1EnbbN5NIJmflYHUa3Lb782DC9cCXFaox?usp=drive_link" },
        { grado: "2do", url: "https://drive.google.com/drive/folders/1kjhtXmqMkXWbTO-le1rDURd-04MHAQe_?usp=drive_link" },
        { grado: "3ero", url: "https://drive.google.com/drive/folders/1Sb851XpNpT7cfrHYTmZguBokmdTxhgMN?usp=drive_link" },
        { grado: "4to", url: "https://drive.google.com/drive/folders/1G1KDKr3YjheKgVvQi2G7R8s_kwjlB85Z?usp=drive_link" },
        { grado: "5to", url: "https://drive.google.com/drive/folders/10tU9erC5JGnV3Tw_cd5NSA4dhasGsRr1?usp=drive_link" },
        { grado: "5to Pre", url: "https://drive.google.com/drive/folders/1E9opqUiqpmzlwDvPOYEPNYDtnzS9bxSy?usp=drive_link" }
      ]
    },
    "SEGUNDA REVISIÓN": {
      img: `https://via.placeholder.com/600x350?text=Revision+2+BANCO+I+2027`,
      items: [
        { grado: "1ero", url: "https://drive.google.com/drive/folders/1AngYfgPb-oln__UO8sK20JBbCpMottI2?usp=drive_link" },
        { grado: "2do", url: "https://drive.google.com/drive/folders/1IDpfHT9rWgzuTvMZcZreev9b52XS_pET?usp=drive_link" },
        { grado: "3ero", url: "https://drive.google.com/drive/folders/1NylygYXWqcsjWLEfEwV8zNEOGoiDqDC5?usp=drive_link" },
        { grado: "4to", url: "https://drive.google.com/drive/folders/1WltRneZNo5VSbZ0SySvw_srItydbWQ3V?usp=drive_link" },
        { grado: "5to", url: "https://drive.google.com/drive/folders/1QAdHfHyEZ0HxWNwcU-Je4JC86PMsyFNO?usp=drive_link" },
        { grado: "5to Pre", url: "https://drive.google.com/drive/folders/1h_jAmpot9iC6sccwaYH_hxVMLl_ZUH_t?usp=drive_link" }
      ]
    },
    "REVISIÓN FINAL": {
      img: `https://via.placeholder.com/600x350?text=Revision+Final+BANCO+I+2027`,
      items: [
        { grado: "1ero", url: "https://drive.google.com/drive/folders/1jXIfEM9x8Iy8OmRVjfBi1Dj93B2LavlF?usp=drive_link" },
        { grado: "2do", url: "https://drive.google.com/drive/folders/1HcAuc84r91SANxysWqca99_FkIlQljAs?usp=drive_link" },
        { grado: "3ero", url: "https://drive.google.com/drive/folders/1SAqto9CqUxtJzQZj5AS5Zp-ugwc0gjiy?usp=drive_link" },
        { grado: "4to", url: "https://drive.google.com/drive/folders/1LVXymFYA_lPMk2HzcurvOIfgLcQVqcji?usp=drive_link" },
        { grado: "5to", url: "https://drive.google.com/drive/folders/1_LNc20Pazt2y70ymFVPb23iHURKSJQBd?usp=drive_link" },
        { grado: "5to Pre", url: "https://drive.google.com/drive/folders/1EnbbN5NIJmflYHUa3Lb782DC9cCXFaox?usp=drive_link" }
      ]
    }
  },
  "BANCO II": {
    "BORRADORES": {
      img: `https://via.placeholder.com/600x350?text=Borradores+BANCO+II+2027`,
      items: [
        { grado: "1ero", url: "https://drive.google.com/drive/folders/171eTGN2weVMOD6UZijzD3_3Kjc4G3ty1?usp=drive_link" },
        { grado: "2do", url: "https://drive.google.com/drive/folders/1TghAWvtz1I6trmO8exXoJDktQ0iXPOP4?usp=drive_link" },
        { grado: "3ero", url: "https://drive.google.com/drive/folders/14cfYrDHVHS7803qF4SxSspFE5hvFpoL2?usp=drive_link" },
        { grado: "4to", url: "https://drive.google.com/drive/folders/1k_yShVWjBw4LCe8ZlgAdtpk85Odl7MDL?usp=drive_link" },
        { grado: "5to", url: "https://drive.google.com/drive/folders/19lQ4apa2nkxtTXYSGsIrXZddFwRYls3x?usp=drive_link" },
        { grado: "5to Pre", url: "https://drive.google.com/drive/folders/1tvZ3TtzkFM2JNNlWvuwcjgZZDxpv3szG?usp=drive_link" }
      ]
    },
    "PRIMERA REVISIÓN": {
      img: `https://via.placeholder.com/600x350?text=Revision+1+BANCO+II+2027`,
      items: [
        { grado: "1ero", url: "https://drive.google.com/drive/folders/1Jlem_eQ8Cyx6JBWH5luzE70z_ohRoco1?usp=drive_link" },
        { grado: "2do", url: "https://drive.google.com/drive/folders/1WYe3L9vI63GYCuQCoZ9gQcKagCuC0Gba?usp=drive_link" },
        { grado: "3ero", url: "https://drive.google.com/drive/folders/1C6eEYmDrizkhQxiiChhpUAma9lVR62zk?usp=drive_link" },
        { grado: "4to", url: "https://drive.google.com/drive/folders/1lqIFMzwVC_BILFN5BMP4xkwy8XFwUiDd?usp=drive_link" },
        { grado: "5to", url: "https://drive.google.com/drive/folders/1fe16bJqaLDn0fBK77fzaw0q80-8lfSCM?usp=drive_link" },
        { grado: "5to Pre", url: "https://drive.google.com/drive/folders/10fjKv1wXJxZqATZl6qnGT-Zf_3M5lBSH?usp=drive_link" }
      ]
    },
    "SEGUNDA REVISIÓN": {
      img: `https://via.placeholder.com/600x350?text=Revision+2+BANCO+II+2027`,
      items: [
        { grado: "1ero", url: "https://drive.google.com/drive/folders/1d0lVFrdUhx5qGqVBoLMmEFzj5nlu3lfL?usp=drive_link" },
        { grado: "2do", url: "https://drive.google.com/drive/folders/1Mlsdd-r4eygNpZMVZEIxd23BOlDD_gWx?usp=drive_link" },
        { grado: "3ero", url: "https://drive.google.com/drive/folders/1TC8CA-GSLYRTmppkCj2Wp48vs6FHnzTF?usp=drive_link" },
        { grado: "4to", url: "https://drive.google.com/drive/folders/1NkzexH4AlK_DgAoRcygG5lByNaLPrwDH?usp=drive_link" },
        { grado: "5to", url: "https://drive.google.com/drive/folders/1NqvgMaFugoOkoPXOuNleTwxNZT2Xrg7j?usp=drive_link" },
        { grado: "5to Pre", url: "https://drive.google.com/drive/folders/1fBLANg785HkrpHJaL2woj-ktrAqFXiSP?usp=drive_link" }
      ]
    },
    "REVISIÓN FINAL": {
      img: `https://via.placeholder.com/600x350?text=Revision+Final+BANCO+II+2027`,
      items: [
        { grado: "1ero", url: "https://drive.google.com/drive/folders/1jXIfEM9x8Iy8OmRVjfBi1Dj93B2LavlF?usp=drive_link" },
        { grado: "2do", url: "https://drive.google.com/drive/folders/1HQxkZnHDxj5Yzmb4Hmt6NPoobrvmB2En?usp=drive_link" },
        { grado: "3ero", url: "https://drive.google.com/drive/folders/1S1Wn60-j1k4E7BZI21_1c-Qrl9QJ0ZPV?usp=drive_link" },
        { grado: "4to", url: "https://drive.google.com/drive/folders/1bdQtJGpDwyI1JY2TCHurqW0DI0sFalCt?usp=drive_link" },
        { grado: "5to", url: "https://drive.google.com/drive/folders/1A83HyKzFI4anZvBn0zLzsoUJCSpXsZJs?usp=drive_link" },
        { grado: "5to Pre", url: "https://drive.google.com/drive/folders/1_DdKxRDXOYVnF_CU759uhLeSW6vhJZzL?usp=drive_link" }
      ]
    }
  },
  "BANCO III": {
    "BORRADORES": {
      img: `https://via.placeholder.com/600x350?text=Borradores+BANCO+III+2027`,
      items: [
        { grado: "1ero", url: "https://drive.google.com/drive/folders/1uX_1m6V5WGZ_z4Ykv_vEG14xYmHI_s1g?usp=drive_link" },
        { grado: "2do", url: "https://drive.google.com/drive/folders/1FYA1BOo7oWFeGIyYGxdRUHXuxcyM1Ceu?usp=drive_link" },
        { grado: "3ero", url: "https://drive.google.com/drive/folders/1vdBFKqGdKZ2xm0P_Oz_asMeOaj5CKNVG?usp=drive_link" },
        { grado: "4to", url: "https://drive.google.com/drive/folders/1hx2dBc-YLf9HBPVHjnyluisIZJlMq_fZ?usp=drive_link" },
        { grado: "5to", url: "https://drive.google.com/drive/folders/1RuwuGZhQJ7WlaJ_3h8xqHRVypK_6ujLP?usp=drive_link" },
        { grado: "5to Pre", url: "https://drive.google.com/drive/folders/1XIKjMbFZpJ73I6U5SHj77B518GvJCeLZ?usp=drive_link" }
      ]
    },
    "PRIMERA REVISIÓN": {
      img: `https://via.placeholder.com/600x350?text=Revision+1+BANCO+III+2027`,
      items: [
        { grado: "1ero", url: "https://drive.google.com/drive/folders/13fWaHbHiW3OHaiq5lrondz1BRxXXMA-j?usp=drive_link" },
        { grado: "2do", url: "https://drive.google.com/drive/folders/1vwOs757VUhYqLnFMlttrJdMF4xkNrVYS?usp=drive_link" },
        { grado: "3ero", url: "https://drive.google.com/drive/folders/1Ju26gn69IutAtLHTude1y14myU8fOEuO?usp=drive_link" },
        { grado: "4to", url: "https://drive.google.com/drive/folders/1Gb-8J3Ei4n-uh7iQ0kG_FLCT4SX6ldjW?usp=drive_link" },
        { grado: "5to", url: "https://drive.google.com/drive/folders/19DR1IJxvA457ZWNm4qIbKHCe23-LAHUn?usp=drive_link" },
        { grado: "5to Pre", url: "https://drive.google.com/drive/folders/15uGVUiBFt1r5hkHzMNuw9HHa7RSpSv_Z?usp=drive_link" }
      ]
    },
    "SEGUNDA REVISIÓN": {
      img: `https://via.placeholder.com/600x350?text=Revision+2+BANCO+III+2027`,
      items: [
        { grado: "1ero", url: "https://drive.google.com/drive/folders/18do4zpDC2g6-jLUgDBXeuhMgFemvvFHv?usp=drive_link" },
        { grado: "2do", url: "https://drive.google.com/drive/folders/1fWgc39gEWmNP9GWrzqSHug2NBeKt_XHM?usp=drive_link" },
        { grado: "3ero", url: "https://drive.google.com/drive/folders/1JYQH4P5fMv--sypjfSFUxBTqLHVsxArb?usp=drive_link" },
        { grado: "4to", url: "https://drive.google.com/drive/folders/1wi7_AAbWLJT4ZArmstABibae4rA3Zull?usp=drive_link" },
        { grado: "5to", url: "https://drive.google.com/drive/folders/1TX59zLmGcK3DepXNmZ470-V8Nw5t1LhK?usp=drive_link" },
        { grado: "5to Pre", url: "https://drive.google.com/drive/folders/1cl0hEB7BQkTjjjOjFRlkJ5gj9_uY_WEw?usp=drive_link" }
      ]
    },
    "REVISIÓN FINAL": {
      img: `https://via.placeholder.com/600x350?text=Revision+Final+BANCO+III+2027`,
      items: [
        { grado: "1ero", url: "https://drive.google.com/drive/folders/10wq4irGCgN6kGPGsT3fyDEwaUY8jeFun?usp=drive_link" },
        { grado: "2do", url: "https://drive.google.com/drive/folders/1lWFGhLwuaKDnZ3NSrBrCJkf7zOHCW5oQ?usp=drive_link" },
        { grado: "3ero", url: "https://drive.google.com/drive/folders/1GAxMoaMGxfEo5165KBt8Ih20T3w2U715?usp=drive_link" },
        { grado: "4to", url: "https://drive.google.com/drive/folders/1k7OqMMSOJGvuwGDgMCEVC73maH5_QwKp?usp=drive_link" },
        { grado: "5to", url: "https://drive.google.com/drive/folders/1T_Mr1tAN4U4cjPY0NBLxazElUWUKjoaJ?usp=drive_link" },
        { grado: "5to Pre", url: "https://drive.google.com/drive/folders/1RZ0_wt9xUXvjWbO85odWT_D1NxRT1Whi?usp=drive_link" }
      ]
    }
  },
  "BANCO IV": {
    "BORRADORES": {
      img: `https://via.placeholder.com/600x350?text=Borradores+BANCO+IV+2027`,
      items: [
        { grado: "1ero", url: "https://drive.google.com/drive/folders/1ZYARdlTVV8tzf4tZk26Z_Q4I_D4ECnnX?usp=drive_link" },
        { grado: "2do", url: "https://drive.google.com/drive/folders/1Bfx6PlOqnKQeH29ewMygLt4xjA5TTbTv?usp=drive_link" },
        { grado: "3ero", url: "https://drive.google.com/drive/folders/1Wocbyz81wNArItYYsNeB6vFS1b64rTOh?usp=drive_link" },
        { grado: "4to", url: "https://drive.google.com/drive/folders/1XluswewEl1u4b8shdWKYdTfMEEsHJ7xn?usp=drive_link" },
        { grado: "5to", url: "https://drive.google.com/drive/folders/16nfDRapq0v_2JWxrfTCdxlRCa068ZoXe?usp=drive_link" },
        { grado: "5to Pre", url: "https://drive.google.com/drive/folders/1FfcnUo330dbQBoPN_Mfitusd2hTBqWt0?usp=drive_link" }
      ]
    },
    "PRIMERA REVISIÓN": {
      img: `https://via.placeholder.com/600x350?text=Revision+1+BANCO+IV+2027`,
      items: [
        { grado: "1ero", url: "https://drive.google.com/drive/folders/17-ajyNxqxIVlWNxX0DThYR61nKXY2cKn?usp=drive_link" },
        { grado: "2do", url: "https://drive.google.com/drive/folders/1v3TCuHo57M0_S11vK0af0b2UZ_jLt0j4?usp=drive_link" },
        { grado: "3ero", url: "https://drive.google.com/drive/folders/17HaXHzV-hGMfI-MYX4mn4oAb_0M8QXoa?usp=drive_link" },
        { grado: "4to", url: "https://drive.google.com/drive/folders/10J8yIA0-i692FJioMCBtlAqVX6ZL42Yj?usp=drive_link" },
        { grado: "5to", url: "https://drive.google.com/drive/folders/17bdPQXeyW_tEXMPz5WthIRgloP0YMe0I?usp=drive_link" },
        { grado: "5to Pre", url: "https://drive.google.com/drive/folders/1GmMTVjS4Xoz1M67WfiKu25Rmh8Ah00_9?usp=drive_link" }
      ]
    },
    "SEGUNDA REVISIÓN": {
      img: `https://via.placeholder.com/600x350?text=Revision+2+BANCO+IV+2027`,
      items: [
        { grado: "1ero", url: "https://drive.google.com/drive/folders/16P_MUnl0UANGgB4iCtcmpf-1DLAJk600?usp=drive_link" },
        { grado: "2do", url: "https://drive.google.com/drive/folders/1JPqMFrx2ST7naJhimiyeK_S-5_c6gZqW?usp=drive_link" },
        { grado: "3ero", url: "https://drive.google.com/drive/folders/1N7N-jQO5IEvkLa6TYhYBKPOdhs0CPcpt?usp=drive_link" },
        { grado: "4to", url: "https://drive.google.com/drive/folders/1rqjlAvXn3BpVaGhigm2_bYyU77EF2Byh?usp=drive_link" },
        { grado: "5to", url: "https://drive.google.com/drive/folders/1buOFCK7w223KTISLy6Yl37_o7UestPeZ?usp=drive_link" },
        { grado: "5to Pre", url: "https://drive.google.com/drive/folders/1buOFCK7w223KTISLy6Yl37_o7UestPeZ?usp=drive_link" }
      ]
    },
    "REVISIÓN FINAL": {
      img: `https://via.placeholder.com/600x350?text=Revision+Final+BANCO+IV+2027`,
      items: [
        { grado: "1ero", url: "https://drive.google.com/drive/folders/1n7rFHjLGWbWjaQOrS6iRad3rsmuRYHR-?usp=drive_link" },
        { grado: "2do", url: "https://drive.google.com/drive/folders/1ZCxxwRDAGYbnKq5gz9rrwBpvOmt3fUT9?usp=drive_link" },
        { grado: "3ero", url: "https://drive.google.com/drive/folders/1oHoDlg483WZWbm_jpkWcrp47--9We5md?usp=drive_link" },
        { grado: "4to", url: "https://drive.google.com/drive/folders/1yI0p-w5j_4Y-ryMJj011RetGyQXZY0k-?usp=drive_link" },
        { grado: "5to", url: "https://drive.google.com/drive/folders/1EFc7CPf5uBuBoo50BGQb0uWdr52fUy0o?usp=drive_link" },
        { grado: "5to Pre", url: "https://drive.google.com/drive/folders/1I2ZC0OqVDoOl8zhzrdg7x0LBXRwTP1RF?usp=drive_link" }
      ]
    }
  }
}
};

let currentYear = null;
let currentBank = null;
let currentStage = null;

function selectYear(year) {
  currentYear = year;
  currentBank = null;
  currentStage = null;

  updateActiveButtons('year-group', currentYear);
  document.getElementById('bank-wrapper').style.display = 'block';
  document.getElementById('stage-wrapper').style.display = 'none';
  document.getElementById('main-card').style.display = 'none';
  clearActiveButtons('bank-group');
}

function selectBank(bank) {
  currentBank = bank;
  currentStage = null;

  updateActiveButtons('bank-group', currentBank);
  renderStageButtons();

  document.getElementById('stage-wrapper').style.display = 'block';
  document.getElementById('main-card').style.display = 'none';
}

function renderStageButtons() {
  const stageGroup = document.getElementById('stage-group');
  stageGroup.innerHTML = '';

  if (currentYear === '2025' || currentYear === '2026') {
    stageGroup.innerHTML = `<button class="btn btn-support" onclick="selectStage('MATERIAL DE APOYO')">Material de Apoyo</button>`;
  } else if (currentYear === '2027') {
    const stages = ['BORRADORES', 'PRIMERA REVISIÓN', 'SEGUNDA REVISIÓN', 'REVISIÓN FINAL'];
    stages.forEach(stage => {
      stageGroup.innerHTML += `<button class="btn btn-sub" onclick="selectStage('${stage}')">${capitalize(stage)}</button>`;
    });
  }
}

function selectStage(stage) {
  currentStage = stage;
  updateActiveButtons('stage-group', currentStage);
  renderModule();
  document.getElementById('main-card').style.display = 'block';
}

function capitalize(str) {
  return str.charAt(0) + str.slice(1).toLowerCase();
}

function getModuleData() {
  return database[currentYear]?.[currentBank]?.[currentStage] || [];
}

function renderModule() {
  document.getElementById('table-title').innerText = `${currentBank} - ${currentYear} (${currentStage})`;
  
  const itemsContainer = document.getElementById('items-container');
  const refImage = document.getElementById('ref-image');
  const tbody = document.getElementById('table-body');
  const itemsGrid = document.getElementById('items-grid');

  tbody.innerHTML = '';
  itemsGrid.innerHTML = '';

  const moduleData = getModuleData();

  if (currentYear === '2027') {
    if (moduleData && moduleData.items) {
      refImage.style.display = 'block';
      refImage.src = moduleData.img;

      itemsContainer.style.display = currentStage === 'BORRADORES' ? 'none' : 'block';

      moduleData.items.forEach(item => {
        const linkBtn = item.url 
          ? `<a class="link-btn" href="${item.url}" target="_blank">Abrir Enlace</a>`
          : `<span class="empty-msg">Sin Enlace</span>`;

        if (currentStage !== 'BORRADORES') {
          const card = document.createElement('div');
          card.className = 'item-card';
          card.innerHTML = `<span>${item.grado}</span>${linkBtn}`;
          itemsGrid.appendChild(card);
        }

        const row = document.createElement('tr');
        row.innerHTML = `<td><strong>${item.grado}</strong></td><td>${linkBtn}</td>`;
        tbody.appendChild(row);
      });
    }
  } else {
    // Rendereo para 2025 y 2026
    refImage.style.display = 'none';
    itemsContainer.style.display = 'none';

    const defaultGrados = ["1ero", "2do", "3ero", "4to", "5to", "5to Pre"];
    
    defaultGrados.forEach(grado => {
      const itemFound = Array.isArray(moduleData) ? moduleData.find(i => i.grado === grado) : null;
      const url = itemFound ? itemFound.url : "";

      const linkBtn = url 
        ? `<a class="link-btn" href="${url}" target="_blank">Abrir carpeta</a>`
        : `<span class="empty-msg">Pendiente de asignar enlace</span>`;

      const row = document.createElement('tr');
      row.innerHTML = `<td><strong>${grado}</strong></td><td>${linkBtn}</td>`;
      tbody.appendChild(row);
    });
  }
}

function updateActiveButtons(groupId, currentValue) {
  const group = document.getElementById(groupId);
  const buttons = group.getElementsByTagName('button');
  for (let btn of buttons) {
    if (currentValue && btn.innerText.toUpperCase() === currentValue.toUpperCase()) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  }
}

function clearActiveButtons(groupId) {
  const group = document.getElementById(groupId);
  const buttons = group.getElementsByTagName('button');
  for (let btn of buttons) {
    btn.classList.remove('active');
  }
}

function openModal() {
  const refImgSrc = document.getElementById('ref-image').src;
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-img');
  modal.style.display = 'flex';
  modalImg.src = refImgSrc;
}

function closeModal() {
  document.getElementById('image-modal').style.display = 'none';
}