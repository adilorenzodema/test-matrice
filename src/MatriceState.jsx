import React, { Component } from 'react'
import MostraMatrice from './MostraMatrice'
import './index.css'

class MatriceState extends Component {
    constructor(props){
        super(props)
        this.state = {
            Righe: 10,
            Colonne: 10,
            matrice: [],
            matriceBlu: []
        }
    }

    componentDidMount(){
        const {Righe,Colonne} = this.state
        const matriceApp = []

        for(let i=0; i<Righe; i++){
            // questo aggiunge un elemento vuoto nella riga altrimenti non si può assegnare se è undefined
            matriceApp.push([])
            for(let j=0; j<Colonne; j++){
                //questo aggiunge sulla colonna i i numeri rand facendo un append (concat)
                matriceApp[i].push(Math.floor(Math.random() * 100,1))
            }
        }
        this.setState({
            matrice: [...matriceApp],
            matriceBlu: [...matriceApp]
        })
    }  

    componentDidUpdate(){
        console.log(this.state.matriceBlu)
        //let x = this.state.xState
        //let y = this.state.yState
        //console.log('entra')
        //console.log(x, y)
        //this.clickStyle(x,y)
    }

    clickStyle = (x,y) => {
        let matriceAp = []
        //eseguo la copia di tutta matriceBlu in matriceAp
        for(let i=0; i<this.state.matriceBlu.length; i++) {
            matriceAp.push([])
            for(let j=0; j<this.state.matriceBlu.length; j++) {
                matriceAp[i].push(this.state.matriceBlu[i][j])
            }
        }

        //controllo prima se il campo non è undefined ovvero al di fuori della matrice 
        if( matriceAp[x] !== undefined && matriceAp[y] !== undefined){
            if(matriceAp[x-1] !== undefined && matriceAp[y-1] !== undefined){
                if(matriceAp[x-1][y-1] < matriceAp[x][y] &&  matriceAp[x][y] !== 200 ){
                    matriceAp[x-1][y-1] = 200
                    //console.log(x-1,y-1)
                    //this.clickStyle(x-1,y-1)
                } 
            }
            if(matriceAp[x-1] !== undefined){
                if( matriceAp[x-1][y] < matriceAp[x][y] &&  matriceAp[x][y] !== 200 ){
                    matriceAp[x-1][y] = 200
                    console.log(x-1,y)
                    matriceAp[x][y] = 200
                    this.setState({
                        matriceBlu: [...matriceAp]
                    } , () => this.clickStyle(x-1,y))
                }
            }
            if(matriceAp[x-1] !== undefined && matriceAp[y+1] !== undefined){
                if( matriceAp[x-1][y+1] < matriceAp[x][y] &&  matriceAp[x][y] !== 200 ){
                    matriceAp[x-1][y+1] = 200
                }
            }
            if(matriceAp[y-1] !== undefined){
                if( matriceAp[x][y-1] < matriceAp[x][y] &&  matriceAp[x][y] !== 200 ){
                    matriceAp[x][y-1] = 200
                }
            }
            if(matriceAp[y+1] !== undefined){
                if( matriceAp[x][y+1] < matriceAp[x][y] &&  matriceAp[x][y] !== 200 ){
                    matriceAp[x][y+1] = 200
                }
            }
            if(matriceAp[x+1] !== undefined && matriceAp[y-1] !== undefined){
                if( matriceAp[x+1][y-1] < matriceAp[x][y] &&  matriceAp[x][y] !== 200 ){
                    matriceAp[x+1][y-1] = 200
                }
            }
            if(matriceAp[x+1] !== undefined){
                if( matriceAp[x+1][y] < matriceAp[x][y] &&  matriceAp[x][y] !== 200 ){
                    matriceAp[x+1][y] = 200
                }
            }
            if(matriceAp[x+1] !== undefined && matriceAp[y+1] !== undefined){
                if( matriceAp[x+1][y+1] < matriceAp[x][y] &&  matriceAp[x][y] !== 200 ){
                    matriceAp[x+1][y+1] = 200
                }
            }
            /*matriceAp[x][y] = 200
            this.setState({
                matriceBlu: [...matriceAp]
            } , () => this.clickStyle(x-1,y) )*/  
        }
    }
    
    //crea nel componentdefault una funzione che per ogni campo della matrice inserisce un random
    // definisco una matrice vuota ed uno stato con la dimensione
    render() {
        const {matrice, matriceBlu} = this.state
        const renderMatrice = <MostraMatrice matrice={matrice} matriceBlu={matriceBlu} onClick={(i,j) => this.clickStyle(i,j) }/>
        return (
            <div className="center Body">
                {renderMatrice} 
            </div>
        )
    }
}

export default MatriceState