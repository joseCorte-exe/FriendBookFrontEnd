import React from 'react'

import Card from '../../components/Card/Card';

import bannerBook from "../../assets/bannerBook.svg";

import { HomePageView } from './HomePageView';

export default function HomePage() {
  return (
    <HomePageView>
      <img src={bannerBook} className="banner" />
      <section>

        <h3>Para quem gosta e quer transmitir conhecimento!!</h3>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu
          aliquet arcu. Pellentesque fringilla tellus eu lorem imperdiet, sed
          tristique enim tincidunt. Curabitur mollis risus vel libero
          sollicitudin, sed sollicitudin elit ullamcorper. Cras vulputate pulvinar
          sem, eu elementum lectus ullamcorper ornare. Ut leo neque, dictum
          tincidunt dictum a, blandit vel lectus. Duis interdum ligula metus, non
          facilisis tortor rutrum sed. Morbi in augue urna. Nulla facilisi.
        </p>

        <button>Doe aqui seu livro!!</button>

        <h2>Algumas de nossas instituições:</h2>
        <article>
          <Card bookName="instituição 1" imgUrl="https://www.contandodestinos.com/wp-content/uploads/2017/02/Melhores-Sebos-de-Sao-Paulo.jpg" />
          <Card bookName="instituição 1" imgUrl="https://www.contandodestinos.com/wp-content/uploads/2017/02/Melhores-Sebos-de-Sao-Paulo.jpg" />
          <Card bookName="instituição 1" imgUrl="https://www.contandodestinos.com/wp-content/uploads/2017/02/Melhores-Sebos-de-Sao-Paulo.jpg" />
        </article>
      </section>
    </HomePageView>
  )
}
