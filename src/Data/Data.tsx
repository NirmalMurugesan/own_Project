import cat_1 from '../Assets/Images/cat-1.jpg';
import cat_2 from '../Assets/Images/cat-2.jpg';
import cat_3 from '../Assets/Images/cat-3.png';
import dog_1 from '../Assets/Images/dog-1.jpg';
import fish_1 from '../Assets/Images/fish-1.png';
import fish_2 from '../Assets/Images/fish-2.png';

interface petData {
  id: number;
  category: string;
  sellerInfo: {
    name: string;
    phoneNumber: number;
  };
  sellerAddress: {
    state: string;
    district: string;
    subDistrict: string;
    city: string;
    pinCode: number;
    landMark: string;
  };
  Imgs: {
    img_1: any;
    img_2: any;
    img_3: any;
    img_4: any;
  };
  price: number;
  description: string;
}

const Data: petData[] = [
  {
    id: 1,
    category: "Cats",
    sellerInfo: {
      name: "abc",
      phoneNumber: 1234,
    },
    sellerAddress: {
      state: "TamilNadu",
      district: "salem",
      subDistrict: "Mettur",
      city: "Jkpm",
      pinCode: 636501,
      landMark: "G.Hospital",
    },
    Imgs: {
      img_1: cat_1,
      img_2: "b",
      img_3: "c",
      img_4: "d",
    },
    price: 1234,
    description: "lncdoncjknconmsoivno"
  },
  {
    id: 2,
    category: "Cats",
    sellerInfo: {
      name: "abc",
      phoneNumber: 1234,
    },
    sellerAddress: {
      state: "TamilNadu",
      district: "salem",
      subDistrict: "Mettur",
      city: "Jkpm",
      pinCode: 636501,
      landMark: "G.Hospital",
    },
    Imgs: {
      img_1: cat_2,
      img_2: "b",
      img_3: "c",
      img_4: "d",
    },
    price: 1234,
    description: "lncdoncjknconmsoivno"
  },
  {
    id: 3,
    category: "Dog",
    sellerInfo: {
      name: "abc",
      phoneNumber: 1234,
    },
    sellerAddress: {
      state: "TamilNadu",
      district: "salem",
      subDistrict: "Mettur",
      city: "Jkpm",
      pinCode: 636501,
      landMark: "G.Hospital",
    },
    Imgs: {
      img_1: dog_1,
      img_2: "b",
      img_3: "c",
      img_4: "d",
    },
    price: 1234,
    description: "lncdoncjknconmsoivno"
  },
  {
    id: 4,
    category: "Dog",
    sellerInfo: {
      name: "abc",
      phoneNumber: 1234,
    },
    sellerAddress: {
      state: "TamilNadu",
      district: "salem",
      subDistrict: "Mettur",
      city: "Jkpm",
      pinCode: 636501,
      landMark: "G.Hospital",
    },
    Imgs: {
      img_1: dog_1,
      img_2: "b",
      img_3: "c",
      img_4: "d",
    },
    price: 1234,
    description: "lncdoncjknconmsoivno"
  },
  {
    id: 5,
    category: "Fish",
    sellerInfo: {
      name: "abc",
      phoneNumber: 1234,
    },
    sellerAddress: {
      state: "TamilNadu",
      district: "salem",
      subDistrict: "Mettur",
      city: "Jkpm",
      pinCode: 636501,
      landMark: "G.Hospital",
    },
    Imgs: {
      img_1: fish_1,
      img_2: "b",
      img_3: "c",
      img_4: "d",
    },
    price: 1234,
    description: "lncdoncjknconmsoivno"
  },
  {
    id: 6,
    category: "Fish",
    sellerInfo: {
      name: "abc",
      phoneNumber: 1234,
    },
    sellerAddress: {
      state: "TamilNadu",
      district: "salem",
      subDistrict: "Mettur",
      city: "Jkpm",
      pinCode: 636501,
      landMark: "G.Hospital",
    },
    Imgs: {
      img_1: fish_2,
      img_2: "b",
      img_3: "c",
      img_4: "d",
    },
    price: 1234,
    description: "lncdoncjknconmsoivno"
  },
  {
    id: 7,
    category: "Birds",
    sellerInfo: {
      name: "abc",
      phoneNumber: 1234,
    },
    sellerAddress: {
      state: "TamilNadu",
      district: "salem",
      subDistrict: "Mettur",
      city: "Jkpm",
      pinCode: 636501,
      landMark: "G.Hospital",
    },
    Imgs: {
      img_1: cat_3,
      img_2: "b",
      img_3: "c",
      img_4: "d",
    },
    price: 1234,
    description: "lncdoncjknconmsoivno"
  },
  {
    id: 8,
    category: "Birds",
    sellerInfo: {
      name: "abc",
      phoneNumber: 1234,
    },
    sellerAddress: {
      state: "TamilNadu",
      district: "salem",
      subDistrict: "Mettur",
      city: "Jkpm",
      pinCode: 636501,
      landMark: "G.Hospital",
    },
    Imgs: {
      img_1: cat_3,
      img_2: "b",
      img_3: "c",
      img_4: "d",
    },
    price: 1234,
    description: "lncdoncjknconmsoivno"
  },
  {
    id: 9,
    category: "Cow",
    sellerInfo: {
      name: "abc",
      phoneNumber: 1234,
    },
    sellerAddress: {
      state: "TamilNadu",
      district: "salem",
      subDistrict: "Mettur",
      city: "Jkpm",
      pinCode: 636501,
      landMark: "G.Hospital",
    },
    Imgs: {
      img_1: cat_3,
      img_2: "b",
      img_3: "c",
      img_4: "d",
    },
    price: 1234,
    description: "lncdoncjknconmsoivno"
  },
  {
    id: 10,
    category: "Horses",
    sellerInfo: {
      name: "abc",
      phoneNumber: 1234,
    },
    sellerAddress: {
      state: "TamilNadu",
      district: "salem",
      subDistrict: "Mettur",
      city: "Jkpm",
      pinCode: 636501,
      landMark: "G.Hospital",
    },
    Imgs: {
      img_1: cat_3,
      img_2: "b",
      img_3: "c",
      img_4: "d",
    },
    price: 1234,
    description: "lncdoncjknconmsoivno"
  },
];
export default Data;
