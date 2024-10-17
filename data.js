var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "진입로",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.22274087252526797,
          "pitch": 0.1610226630470688,
          "rotation": 6.283185307179586,
          "target": "1--"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.00026209800081922197,
          "pitch": -0.03108013922609487,
          "title": "매장으로 가는 길",
          "text": "매장 입구로 가는 길입니다."
        }
      ]
    },
    {
      "id": "1--",
      "name": "진출입 정면",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "2---"
        },
        {
          "yaw": -2.1257829910146597,
          "pitch": -0.038852620755609024,
          "rotation": 0,
          "target": "0-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.008882139054962934,
          "pitch": -0.14116609457872364,
          "title": "매장 출입문",
          "text": "스테인레스 스틸 프레임으로 이루어진 커튼월, 출입문입니다."
        },
        {
          "yaw": -2.1516489653981985,
          "pitch": -0.22481455153939223,
          "title": "진입로",
          "text": "진입로로 되돌아 가는 길입니다."
        }
      ]
    },
    {
      "id": "2---",
      "name": "매장 안 입구",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1353367838640516,
          "pitch": 0.08405314109831252,
          "rotation": 0,
          "target": "1--"
        },
        {
          "yaw": 0.6113949047112399,
          "pitch": 0.08174689154358283,
          "rotation": 0,
          "target": "3-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.1412556205054463,
          "pitch": -0.07479533574949215,
          "title": "밖",
          "text": "바깥으로 나가는 길입니다."
        },
        {
          "yaw": 0.6205199555016829,
          "pitch": -0.05087189672989645,
          "title": "피팅룸",
          "text": "옷을 갈아입고 거울을 볼 수 있는 공간입니다."
        }
      ]
    },
    {
      "id": "3-",
      "name": "탈의영역",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.001310645524363,
          "pitch": 0.0405252161191374,
          "rotation": 0,
          "target": "2---"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.9981836152783785,
          "pitch": -0.09631062463074613,
          "title": "매장 입구",
          "text": "매장 입구로 가는 길입니다.<div>바깥으로 나갈 수 있습니다.</div>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
