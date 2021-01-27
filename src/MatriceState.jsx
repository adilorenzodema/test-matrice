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
        console.log('xState,yState in cDupdate')
        console.log(this.state.xState, this.state.yState)
        // verifica che le x e le y siano all'interno della matrice e richiama la funzione clickStyle nel quadrato intorno
        if( this.state.xState > 0 && this.state.xState < this.state.Righe -1 && this.state.yState > 0 && this.state.yState < this.state.Colonne - 1){
            if( this.state.matrice[this.state.xState-1][this.state.yState].valore < this.state.matrice[this.state.xState][this.state.yState].valore){
                this.clickStyle(this.state.xState-1,this.state.yState)
            }
            if( this.state.matrice[this.state.xState+1][this.state.yState].valore < this.state.matrice[this.state.xState][this.state.yState].valore){
                this.clickStyle(this.state.xState+1,this.state.yState)
            }
            if( this.state.matrice[this.state.xState-1][this.state.yState-1].valore < this.state.matrice[this.state.xState][this.state.yState].valore){
                this.clickStyle(this.state.xState-1,this.state.yState-1)
            }
            if( this.state.matrice[this.state.xState][this.state.yState-1].valore < this.state.matrice[this.state.xState][this.state.yState].valore){
                this.clickStyle(this.state.xState,this.state.yState-1)
            }
            if( this.state.matrice[this.state.xState+1][this.state.yState-1].valore < this.state.matrice[this.state.xState][this.state.yState].valore){
                this.clickStyle(this.state.xState+1,this.state.yState-1)
            }
            if( this.state.matrice[this.state.xState-1][this.state.yState+1].valore < this.state.matrice[this.state.xState][this.state.yState].valore){
                this.clickStyle(this.state.xState-1,this.state.yState+1)
            }
            if( this.state.matrice[this.state.xState][this.state.yState+1].valore < this.state.matrice[this.state.xState][this.state.yState].valore){
                this.clickStyle(this.state.xState,this.state.yState+1)
               /*  this.setState({
                    yState: this.state.yState+1
                }) */
            }
            if( this.state.matrice[this.state.xState+1][this.state.yState+1].valore < this.state.matrice[this.state.xState][this.state.yState].valore){
                this.clickStyle(this.state.xState+1,this.state.yState+1)
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
        console.log('cordinate')
        console.log(x,y)
        console.log('matriceAp')
        console.log(matriceAp)
        if( x !== undefined && y !== undefined){
            if(x > -1 && x < this.state.Righe && y > -1 && y < this.state.Colonne){
                /* this.setState({
                    xState: x,
                    yState: y
                }) */
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
                // salvo in set stase x e y in modo che il componentdiupdated richiama lo state x-1 e cosi via
                console.log('set state')
                this.setState({
                    matrice: [...matriceAp],
                    xState: x,
                    yState: y
                })
            }
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