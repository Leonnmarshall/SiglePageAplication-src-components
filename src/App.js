import React from 'react';
import './App.css';
import Card from './components/Card.js';
import Title from './components/Title.js'

function App() {
  return(
    <div className="App">
      <Title/>
      <Card
      title='Caderno de Receitas'
      imageUrl='https://www.estudopratico.com.br/wp-content/uploads/2019/06/comidas-em-ingles.jpg'
      body='Estas receitas saudáveis são uma ótima alternativa.'
      />
      <Card
      title='Cuide-se Bem'
      imageUrl='https://habitodiario.files.wordpress.com/2017/03/img_7386.jpg'
      body='Nova linha de produtos em cuidados pessoais.'
      />
      <Card
      title='Onde encontrar Vitamina C?'
      imageUrl='https://www.clarin.com/img/2022/09/08/s4sqOwACy_360x240__1.jpg'
      body='Descubra por que os seres humanos pararam de produzir a vitamina C!'
      />
    </div> 
  );
}

export default App;
