import {
  FaTelegramPlane,
  FaVk,
  FaInstagram,
  FaYoutube,
  FaYandex,
} from 'react-icons/fa';
import './App.css';

const SOCIALS = [
  {
    name: 'Telegram',
    url: 'https://t.me/simsofdrones',
    icon: FaTelegramPlane,
  },
  {
    name: 'VK',
    url: 'https://vk.com/simsofdrones',
    icon: FaVk,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/agrotech.avia?igsh=MWFxamZzbm96dW5hYg==',
    icon: FaInstagram,
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@agrotechavia?si=mUhPtdbmYNaW93YC',
    icon: FaYoutube,
  },
  {
    name: 'Dzen',
    url: 'https://dzen.ru/id/688c5913d0e2536db2d4466c?share_to=link',
    icon: FaYandex,
  },
];

export default SOCIALS;
