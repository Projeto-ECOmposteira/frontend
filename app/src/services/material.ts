import { MaterialProps } from "../types/types";

export function getMaterials(): Array<MaterialProps> {
  const materials = [
    {
      _id: "1",
      name: "Serragem",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308048/materials/1_cyreqx.png",
      materialType: "1",
    },
    {
      _id: "2",
      name: "Papelão",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308048/materials/2_cu57e6.png",
      materialType: "1",
    },
    {
      _id: "3",
      name: "Folhas secas",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308048/materials/3_ew158n.png",
      materialType: "1",
    },
    {
      _id: "4",
      name: "Jornal",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308048/materials/4_nepozi.png",
      materialType: "1",
    },
    {
      _id: "5",
      name: "Embalagem de papelão",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308048/materials/5_olzt5h.png",
      materialType: "1",
    },
    {
      _id: "6",
      name: "Ovos",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308048/materials/6_wjlchr.png",
      materialType: "1",
    },
    {
      _id: "7",
      name: "Toalhas de papel",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308049/materials/7_himoi1.png",
      materialType: "1",
    },
    {
      _id: "8",
      name: "Grama seca",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308049/materials/8_h3dabd.png",
      materialType: "1",
    },
    {
      _id: "9",
      name: "Feno de capim",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308048/materials/9_frc5tg.png",
      materialType: "1",
    },
    {
      _id: "10",
      name: "Frutas, legumes e verduras",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308049/materials/10_rcdkey.png",
      materialType: "2",
    },
    {
      _id: "11",
      name: "Cascas de ovos",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308049/materials/11_zpxroq.png",
      materialType: "2",
    },
    {
      _id: "12",
      name: "Podas de arbustos e jardins",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308049/materials/12_ug4udp.png",
      materialType: "2",
    },
    {
      _id: "13",
      name: "Borra de café",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308049/materials/13_m2uf9e.png",
      materialType: "2",
    },
    {
      _id: "14",
      name: "Esterco de herbívoro",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308050/materials/14_xknj0g.png",
      materialType: "2",
    },
    {
      _id: "15",
      name: "Grãos em geral",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308049/materials/15_jlrwwc.png",
      materialType: "2",
    },
    {
      _id: "16",
      name: "Sachê de chá",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308049/materials/16_xwuybb.png",
      materialType: "2",
    },
    {
      _id: "17",
      name: "Cereais",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308049/materials/17_oie2xj.png",
      materialType: "2",
    },
    {
      _id: "18",
      name: "Carnes de qualquer natureza",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308050/materials/18_eha4yw.png",
      materialType: "3",
    },
    {
      _id: "19",
      name: "Alimentos cozidos em excesso",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308050/materials/19_cm28y5.png",
      materialType: "3",
    },
    {
      _id: "20",
      name: "Laticínios",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308050/materials/20_fm1zvq.png",
      materialType: "3",
    },
    {
      _id: "21",
      name: "Alimentos cítricos",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308050/materials/21_vgxpa8.png",
      materialType: "3",
    },
    {
      _id: "22",
      name: "Alimentos ricos em enxofre",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308051/materials/22_hn8k5d.png",
      materialType: "3",
    },
    {
      _id: "23",
      name: "Ossos",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308050/materials/23_opmole.png",
      materialType: "4",
    },
    {
      _id: "24",
      name: "Fezes de humanos e de animais domésticos",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308051/materials/24_yncyie.png",
      materialType: "4",
    },
    {
      _id: "25",
      name: "Óleos e gorduras",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308050/materials/25_z3q4dv.png",
      materialType: "4",
    },
    {
      _id: "26",
      name: "Materiais com produtos químicos fortes",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308050/materials/26_pkupb9.png",
      materialType: "4",
    },
    {
      _id: "27",
      name: "Pilhas e baterias",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308052/materials/27_k2aqyb.png",
      materialType: "4",
    },
    {
      _id: "28",
      name: "Couro, tintas e graxas",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308051/materials/28_icwk1u.png",
      materialType: "4",
    },
    {
      _id: "29",
      name: "Bitucas de cigarro",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308051/materials/29_vzimxn.png",
      materialType: "4",
    },
    {
      _id: "30",
      name: "Plásticos, vidros ou metais",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308051/materials/30_bpb6zb.png",
      materialType: "4",
    },
    {
      _id: "31",
      name: "Tecidos e conchas",
      imageLink:
        "https://res.cloudinary.com/dpj1vzntn/image/upload/v1620308051/materials/31_plpbbm.png",
      materialType: "4",
    },
  ];

  return materials;
}
