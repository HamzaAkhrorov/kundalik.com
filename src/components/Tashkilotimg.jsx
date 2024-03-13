import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: 960, height: 1200 }} cols={4} rowHeight={164}>
      {itemData.map((item) => (
        <img
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        alt={item.title}
        loading="lazy"
      />
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://static.emaktab.uz/img/uz/about/inst.svg',
    title: 'Breakfast',
  },
  {
    img: 'https://static.emaktab.uz/img/uz/about/logo_cb.svg',
    title: 'Burger',
  },
  {
    img: 'https://static.emaktab.uz/img/uz/about/mdso.svg',
    title: 'Camera',
  },
  {
    img: 'https://static.emaktab.uz/img/uz/about/mvd.svg',
    title: 'Coffee',
  },
  {
    img: 'https://static.emaktab.uz/img/uz/about/allgood.svg',
    title: 'Hats',
  },
  {
    img: 'https://static.emaktab.uz/img/uz/about/apex.svg',
    title: 'Honey',
  },
  {
    img: 'https://static.emaktab.uz/img/uz/about/click.svg',
    title: 'Basketball',
  },
  {
    img: 'https://static.emaktab.uz/img/uz/about/hm.png',
    title: 'Fern',
  },
  {
    img: 'https://static.emaktab.uz/img/uz/about/payme.svg',
    title: 'Mushrooms',
  },
  {
    img: 'https://static.emaktab.uz/img/uz/about/paynet.svg',
    title: 'Tomato basil',
  },
  {
    img: 'https://static.emaktab.uz/img/uz/about/sda.svg',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
  {
    img: 'https://static.emaktab.uz/img/uz/about/media_gazetauz.png',
    title: 'Fern',
  },
  {
    img: 'https://static.emaktab.uz/img/uz/about/media_uzreport.png',
    title: 'Mushrooms',
  },
  {
    img: 'https://static.emaktab.uz/img/uz/about/darakchi.svg',
    title: 'Tomato basil',
  },
  {
    img: 'https://static.emaktab.uz/img/uz/about/daryo.svg',
    title: 'Sea star',
  },
];