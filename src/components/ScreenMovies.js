import styled from "styled-components";
import axios from "axios";
import Movies from "./Movies"
import movieslist from "./Movies"
import React from 'react'
let listafilmes=[]
let i=0
export default function ScreenMovies(props) {
    
    React.useEffect(() => {
		const filmes=axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies');
        filmes.then((resposta) => {
            
            resposta.data.map( (c) => {
                props.setMovieImage(listafilmes);
                listafilmes.push({image: c.posterURL,id:c.id, title: c.title});
    
            });
	})}, []);
    return (

        <Main>
            <p>Selecione o Filme</p>
            <Movies movieimage={listafilmes} setMovieImage = {props.setMovieImage} filmeclicado={props.filmeclicado} setFilmeClicado = {props.setFilmeClicado} id={props.id} setId={props.setId} data={props.data} setData={props.setData} imagefooter={props.imagefooter} setImageFooter={props.setImageFooter}> </Movies>
        </Main>
    )

}
const Main = styled.div`

margin-top:67px;
p{
    height:110px;
    display: flex;
    align-items: center;
    justify-content:center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #293845;
    }
`