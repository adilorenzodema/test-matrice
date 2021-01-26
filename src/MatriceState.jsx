import React, { Component } from 'react'
import MostraMatrice from './MostraMatrice'
import './index.css'

class MatriceState extends Component {
    constructor(props){
        super(props)
        this.state = {
            Righe: 10,
            Colonne: 10,
            matrice: [{
                valore: 0,
                colore: false}],
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
                matriceApp[i].push({valore: Math.floor(Math.random() * 100,1), colore: false})
            }
        }
        this.setState({
            matrice: [...matriceApp],
            matriceBlu: [...matriceApp]
        })
    }  

    componentDidUpdate(){
        console.log('entra')
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
        
        if(matriceAp[x].valore !== undefined && matriceAp[y].valore !== undefined){
            for(let i=x-1; i<x+2; i++){
                for(let j=y-1; j<y+2; j++){
                    if(matriceAp[i].valore !== undefined && matriceAp[j].valore !== undefined){
                        if(matriceAp[i][j].valore < matriceAp[x][y].valore){
                            matriceAp[i][j].colore = true
                        }
                    }
                }
            }
            matriceAp[x][y].colore = true
            this.setState({
                matriceBlu: [...matriceAp]
            })
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