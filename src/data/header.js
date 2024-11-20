import { CiBaseball, CiCoins1, CiBoxes, CiBullhorn, CiDumbbell, CiFries, CiMoneyBill } from "react-icons/ci";

import { AiFillGithub, AiOutlineCodepen, AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
    {
        title: "나의 유튜브",
        icon: <CiBaseball />,
        src: "/"
    },
    {
        title: "추천 영상",
        icon: <CiMoneyBill />,
        src: "/today"
    },
    {
        title: "추천 개발자",
        icon: <CiCoins1 />,
        src: "/developer"
    },
    {
        title: "웹디자인기능사",
        icon: <CiBoxes />,
        src: "/webd"
    },
    {
        title: "웹표준 사이트",
        icon: <CiBullhorn />,
        src: "/website"
    },
    {
        title: "포트폴리오 사이트",
        icon: <CiDumbbell />,
        src: "/port"
    },
    {
        title: "유튜브 클론 사이트",
        icon: <CiFries />,
        src: "/youtube"
    },
];

export const searchKeyword = [
    {
        title: "myyoutube",
        src: "/search/myyoutube"
    },
    {
        title: "HTML",
        src: "/search/html"
    },
    {
        title: "CSS",
        src: "/search/css"
    },
    {
        title: "JavaScript",
        src: "/search/javascript"
    },
    {
        title: "React.js",
        src: "/search/react.js"
    },
    {
        title: "Vue.js",
        src: "/search/vue.js"
    },
    {
        title: "Next.js",
        src: "/search/next.js"
    },
    {
        title: "Node.js",
        src: "/search/node.js"
    },
    {
        title: "SQL",
        src: "/search/sql"
    },
    {
        title: "portfolio",
        src: "/search/React Portfolio"
    },
    {
        title: "music",
        src: "/search/NewJeans"
    }
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/jmk255",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "https://www.youtube.com/myyoutube",
        icon: <AiFillYoutube />
    },
    {
        title: "codepen",
        url: "https://codepen.io/jmk255",
        icon: <AiOutlineCodepen />
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/jmk255",
        icon: <AiOutlineInstagram />
    },
]