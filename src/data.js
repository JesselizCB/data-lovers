const app = {
  // Primera Historia de Usuario-- Acceso al sistema
  loginValidate: (user, password) => {
    let msg = '';
    if (user !== '' && password !== '') {
      if (user === 'LABORATORIA' && password === 'LABORATORIA') {
        msg = 'ok';
      } else {
        user = '';
        password = '';
        msg = 'Usuario o contraseña incorrectas';
      }
    } else {
      if (user === '') {
        msg = 'Ingrese el usuario';
      } else {
        msg = 'Ingrese la contraseña';
      }
    }
    return msg;
  },

  // Segunda Historia de Usuario-- Mostrar los campeones

  obj: {
    Blitzcrank: 'https://i.blogs.es/e5a747/blitz/1366_2000.jpg',
    Jinx: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_13.jpg',
    LeeSin: 'img/splash/LeeSin_Splash_11.jpg',
    Lucian: 'https://i.blogs.es/cc1ded/lucian_hiredgun_splash/1366_2000.jpg',
    Orianna: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Orianna_8.jpg',
    Shaco: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_6.jpg',
    Singed: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Singed_5.jpg',
    TahmKench: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TahmKench_3.jpg',
    Thresh: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_6.jpg',
  },

  dataCurated: (data, personajes) => {
    const arrJugadores = Object.values(data);
    for (let i = 0; i < arrJugadores.length; i++) {
      if (personajes.hasOwnProperty(arrJugadores[i].id)) {
        arrJugadores[i].splash = app.obj[arrJugadores[i].id];
      }
    } return arrJugadores;
  },

  selectedData: (data) => {
    const newArrayDataCampeones = [];
    for (let i = 0; i < data.length; i++) {
      newArrayDataCampeones.push(
        {
          name: data[i].name,
          aka: data[i].title,
          id: data[i].id,
          icon: data[i].img,
          img: data[i].splash,
          attack: data[i].info.attack,
          magic: data[i].info.magic,
          defense: data[i].info.defense,
          difficulty: data[i].info.difficulty,
          helpPoints: data[i].stats.hp,
          helpPointsPerLevel: data[i].stats.hpperlevel,
          hpRegen: data[i].stats.hpregen,
          hpRegenPerLevel: data[i].stats.hpregenperlevel,
          mana: data[i].stats.mp,
          manaPerLevel: data[i].stats.mpperlevel,
          movespeed: data[i].stats.movespeed,
          attackrange: data[i].stats.attackrange,
          attackdamage: data[i].stats.attackdamage,
          tags: data[i].tags
        });
    };
    return newArrayDataCampeones;
  },

  //  Orden Alfabetico
  sortChampionsAz: (data, clickOrder) => {
    const arrSortName = data.sort((ab, bc) => {
      /* a es menor que b según criterio de ordenamiento */
      if (ab.name > bc.name) {
        return 1;
      } if (ab.name < bc.name) {
        return -1;
      }
      // return 0;
    });
    if (clickOrder === '0') {
      return arrSortName;
    }
    if (clickOrder === '1') {
      return arrSortName.reverse();
    }
    // return 0;
  },

  // Orden de Daño de attack Ascendente y Descendente

  sortAttackdamage: (data, clickOrder) => {
    const arrSortAttackdamage = data.sort((ab, bc) => {
      if (ab.attackdamage > bc.attackdamage) {
        return 1;
      } if (ab.attackdamage < bc.attackdamage) {
        return -1;
      }
      // return 0;
    });
    if (clickOrder === '0') {
      return arrSortAttackdamage;
    }
    if (clickOrder === '1') {
      return arrSortAttackdamage.reverse();
    }
    // return 0;
  },

  // Filtro por tipo
  selectTypeChampions: (data, type) => {
    const filterTypeChamp = data.filter((obj) => {
      if (type !== 'Total') {
        return (obj.tags[0] === type || obj.tags[1] === type); // 0 y 1 para repetir campeones
      } else {
        return data;
      }
    });
    return filterTypeChamp;
  },
};
window.app = app;