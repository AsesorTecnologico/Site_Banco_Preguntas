// Generador auxiliar de la estructura para 2027
const createBankStructure = (bankName) => ({
  "BORRADORES": {
    img: `https://via.placeholder.com/600x350?text=Borradores+${encodeURIComponent(bankName)}+2027`,
    items: [
      { grado: "1ero", url: "https://drive.google.com/drive/folders/1WeERLnwvh3nj5o2eyp51wCzuVgr4Ih6v?usp=drive_link" },
      { grado: "2do", url: "https://drive.google.com/drive/folders/1OJ5c0y8SrMSvG5TnWq-V2QUOdYjGf5zs?usp=drive_link" },
      { grado: "3ero", url: "https://drive.google.com/drive/folders/18UTotz5sc6Ur6kFTOyOqIhasG3Zh33py?usp=drive_link" },
      { grado: "4to", url: "https://drive.google.com/drive/folders/1hM1A2Q7xrwgiWDnASYjtIvcpKsa9uXyh?usp=drive_link" },
      { grado: "5to", url: "https://drive.google.com/drive/folders/146TTYP53RXMnoBtNDAlBtb1uhFNeR_bq?usp=drive_link" },
      { grado: "5to Pre", url: "https://drive.google.com/drive/folders/16KVzHgU7omNvFZkue5vLZ1DJQtwX2YG-?usp=drive_link" }
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
    "BANCO I": createBankStructure("BANCO I"),
    "BANCO II": createBankStructure("BANCO II"),
    "BANCO III": createBankStructure("BANCO III"),
    "BANCO IV": createBankStructure("BANCO IV")
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