var APP_DATA = {
  "scenes": [
    {
      "id": "0-frente",
      "name": "FRENTE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.11304468424628666,
        "pitch": 0.025496330158926384,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.7442753770247101,
          "pitch": 0.1578828019272791,
          "rotation": 0,
          "target": "1-ingreso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-ingreso",
      "name": "INGRESO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.5485320506267879,
        "pitch": 0.070368949484239,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -0.03048731114076375,
          "pitch": 0.16533025339833785,
          "rotation": 0,
          "target": "2-ingresoii"
        },
        {
          "yaw": -2.6205535261431834,
          "pitch": 0.13849384461849823,
          "rotation": 0,
          "target": "0-frente"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ingresoii",
      "name": "INGRESOII",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.059522831598679105,
          "pitch": 0.17911883509744086,
          "rotation": 0,
          "target": "3-living"
        },
        {
          "yaw": -1.4048193502549307,
          "pitch": 0.21513785425566567,
          "rotation": 0,
          "target": "0-frente"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living",
      "name": "LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3709980781015965,
          "pitch": 0.15025326572046183,
          "rotation": 0,
          "target": "2-ingresoii"
        },
        {
          "yaw": 0.7018214759594237,
          "pitch": 0.08973865617944732,
          "rotation": 0,
          "target": "4-cocina"
        },
        {
          "yaw": -1.2325654244124884,
          "pitch": 0.02145280707968844,
          "rotation": 0,
          "target": "6-pasillo"
        },
        {
          "yaw": -0.4501440183570864,
          "pitch": 0.12923417925719605,
          "rotation": 0,
          "target": "5-comedor"
        },
        {
          "yaw": -0.646517978809289,
          "pitch": 0.09277682050417191,
          "rotation": 1.5707963267948966,
          "target": "9-ingreso-cuartos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-cocina",
      "name": "COCINA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.651827047173402,
        "pitch": 0.43070650115347675,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 2.611810192313974,
          "pitch": 0.20549576950273618,
          "rotation": 0,
          "target": "3-living"
        },
        {
          "yaw": -2.4652394308852372,
          "pitch": 0.0322204552454064,
          "rotation": 0,
          "target": "5-comedor"
        },
        {
          "yaw": -2.9295734515704517,
          "pitch": 0.11267670467605306,
          "rotation": 0,
          "target": "6-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-comedor",
      "name": "COMEDOR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5716629813918264,
          "pitch": 0.055760145735627376,
          "rotation": 0,
          "target": "4-cocina"
        },
        {
          "yaw": 0.06075360234180849,
          "pitch": 0.03821551771428666,
          "rotation": 0,
          "target": "6-pasillo"
        },
        {
          "yaw": -0.7667540194889355,
          "pitch": 0.06513015250913234,
          "rotation": 0,
          "target": "7-toilette"
        },
        {
          "yaw": 1.0097126183165592,
          "pitch": 0.10733050493960583,
          "rotation": 0,
          "target": "8-ingreso-patio-trasero-"
        },
        {
          "yaw": -2.0337041861832432,
          "pitch": 0.17422874405953692,
          "rotation": 0,
          "target": "3-living"
        },
        {
          "yaw": -2.227754860980099,
          "pitch": 0.08016487900121483,
          "rotation": 0,
          "target": "2-ingresoii"
        },
        {
          "yaw": 2.049034057571557,
          "pitch": 0.11104849484692991,
          "rotation": 1.5707963267948966,
          "target": "10-ingreso-cuartos-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-pasillo",
      "name": "PASILLO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.050519910221091,
          "pitch": 0.19525435744973763,
          "rotation": 0,
          "target": "5-comedor"
        },
        {
          "yaw": 1.6413438723115448,
          "pitch": 0.08855941303219694,
          "rotation": 0,
          "target": "4-cocina"
        },
        {
          "yaw": 2.126217250952646,
          "pitch": 0.14756876413360231,
          "rotation": 0,
          "target": "3-living"
        },
        {
          "yaw": 2.9513817046230644,
          "pitch": 0.2787224388517089,
          "rotation": 0,
          "target": "7-toilette"
        },
        {
          "yaw": -0.27617678916258015,
          "pitch": 0.10245959558653261,
          "rotation": 0,
          "target": "8-ingreso-patio-trasero-"
        },
        {
          "yaw": 0.6584981240364325,
          "pitch": 0.1228133839303105,
          "rotation": 0,
          "target": "9-ingreso-cuartos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-toilette",
      "name": "TOILETTE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.2767779667186687,
        "pitch": 0.5853417161642724,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 2.8867091186930534,
          "pitch": 0.15642672741708274,
          "rotation": 0,
          "target": "6-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-ingreso-patio-trasero-",
      "name": "INGRESO PATIO TRASERO ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.057652502902588,
          "pitch": 0.17235772581748598,
          "rotation": 0,
          "target": "6-pasillo"
        },
        {
          "yaw": 0.1834896336598426,
          "pitch": 0.08666881529019221,
          "rotation": 0,
          "target": "14-patio-trasero"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-ingreso-cuartos",
      "name": "INGRESO CUARTOS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.38290386650896124,
        "pitch": 0.2638835605658656,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -0.569912063304006,
          "pitch": 0.2015598836578647,
          "rotation": 0,
          "target": "10-ingreso-cuartos-ii"
        },
        {
          "yaw": 1.6294891362612676,
          "pitch": 0.11904395983136418,
          "rotation": 0,
          "target": "7-toilette"
        },
        {
          "yaw": 0.7258739461049171,
          "pitch": 0.1328676034340983,
          "rotation": 0,
          "target": "3-living"
        },
        {
          "yaw": -2.794895203364339,
          "pitch": 0.18112392136873545,
          "rotation": 0.7853981633974483,
          "target": "8-ingreso-patio-trasero-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-ingreso-cuartos-ii",
      "name": "INGRESO CUARTOS II",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1136179306590144,
          "pitch": 0.15858797416610848,
          "rotation": 0,
          "target": "11-cuarto-principal"
        },
        {
          "yaw": -1.330354214702469,
          "pitch": 0.13018870094671442,
          "rotation": 0,
          "target": "12-cuarto"
        },
        {
          "yaw": -0.12061011123950749,
          "pitch": 0.13533370320507032,
          "rotation": 0,
          "target": "13-bao"
        },
        {
          "yaw": 3.0332772835049937,
          "pitch": 0.15949223926773648,
          "rotation": 0,
          "target": "9-ingreso-cuartos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-cuarto-principal",
      "name": "CUARTO PRINCIPAL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.30632309320717077,
        "pitch": 0.2915299729207277,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 2.83477720656947,
          "pitch": 0.2421267382171841,
          "rotation": 0,
          "target": "10-ingreso-cuartos-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-cuarto",
      "name": "CUARTO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0460909342741456,
          "pitch": 0.1298470765059605,
          "rotation": 0,
          "target": "10-ingreso-cuartos-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-bao",
      "name": "BAÑO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3338690420196038,
          "pitch": 0.08962939827722316,
          "rotation": 0,
          "target": "10-ingreso-cuartos-ii"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-patio-trasero",
      "name": "PATIO TRASERO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.475108917444391,
        "pitch": 0.2075387060173064,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.401727656762098,
          "pitch": 0.041380072395828194,
          "rotation": 4.71238898038469,
          "target": "8-ingreso-patio-trasero-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Casa Las Heras ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
