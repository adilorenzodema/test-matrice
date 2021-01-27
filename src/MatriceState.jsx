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
            xState: undefined,
            yState: undefined
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
            matrice: [...matriceApp]
        })
    }  

    componentDidUpdate(){
        //let x = this.state.xState
        //let y = this.state.yState
        //console.log('entra')
        console.log(this.state.xState)
        if( this.state.xState > 0 && this.state.xState < this.state.Righe -1 ){
            if( this.state.matrice[this.state.xState-1][this.state.yState].valore < this.state.matrice[this.state.xState][this.state.yState].valore){
                this.clickStyle(this.state.xState-1,this.state.yState)
            }
            if( this.state.matrice[this.state.xState+1][this.state.yState].valore < this.state.matrice[this.state.xState][this.state.yState].valore){
                this.clickStyle(this.state.xState+1,this.state.yState)
            }
        }
    }

    clickStyle = (x,y) => {
        let matriceAp = []
        //eseguo la copia di tutta matriceBlu in matriceAp
        for(let i=0; i<this.state.matrice.length; i++) {
            matriceAp.push([])
            for(let j=0; j<this.state.matrice.length; j++) {
                matriceAp[i].push(this.state.matrice[i][j])
            }
        }
        console.log(x,y)
        if( x !== undefined && y !== undefined){
            //if( this.state.count === 0){
                if(x > -1 && x < this.state.Righe && y >-1 && y<this.state.Colonne){
                    for(let i=x-1; i<x+2; i++){
                        for(let j=y-1; j<y+2; j++){
                            if(i> -1 && i < this.state.Righe && j>-1 && j<this.state.Colonne){
                                if(matriceAp[i][j].valore < matriceAp[x][y].valore){
                                    matriceAp[i][j].colore = true
                                }
                            }
                        }
                    }
                    matriceAp[x][y].colore = true
                    // salvi in set stase x e y in modo che il componentdiupdated richiama lo state x-1 e cosi via
                    this.setState({
                        matrice: [...matriceAp],
                        xState: x,
                        yState: y
                    })
                }
            //}
            /*if(x > -1 && x < this.state.Righe && y >-1 && y<this.state.Colonne){
                if (this.state.count > 0 && matriceAp[x][y].colore === true){
                    for(let i=x-1; i<x+2; i++){
                        for(let j=y-1; j<y+2; j++){
                            if(i> -1 && i < this.state.Righe && j>-1 && j<this.state.Colonne){
                                if(matriceAp[i][j].valore < matriceAp[x][y].valore){
                                    matriceAp[i][j].colore = true
                                }
                            }
                        }
                    }
                    //matriceAp[x][y].colore = true
                    // salvi in set stase x e y in modo che il componentdiupdated richiama lo state x-1 e cosi via
                    this.setState({
                        matrice: [...matriceAp],
                        xState: x,
                        yState: y,
                        count: this.state.count +1
                    })
                }
                else if (this.state.count > 0 && matriceAp[x][y].colore === false){
                    console.log(x,y)
                    for(let i=x-1; i<x+2; i++){
                        for(let j=y-1; j<y+2; j++){
                            if(i> -1 && i < this.state.Righe && j>-1 && j<this.state.Colonne){
                                if(matriceAp[i][j].valore < matriceAp[x][y].valore){
                                    matriceAp[i][j].colore = true
                                }
                            }
                        }
                    }
                    matriceAp[x][y].colore = true
                    // salvi in set stase x e y in modo che il componentdiupdated richiama lo state x-1 e cosi via
                    this.setState({
                        matrice: [...matriceAp],
                        count: this.state.count +1
                    })
                }
            }*/
        }
    }
    
    //crea nel componentdefault una funzione che per ogni campo della matrice inserisce un random
    // definisco una matrice vuota ed uno stato con la dimensione
    render() {
        const {matrice} = this.state
        const renderMatrice = <MostraMatrice matrice={matrice} onClick={(i,j) => this.clickStyle(i,j) }/>
        return (
            <div className="center Body">
                {renderMatrice} 
            </div>
        )
    }
}

export default MatriceState