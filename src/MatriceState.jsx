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
            matriceBlu: [],
            matriceCordinate: [],
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
                matriceApp[i].push(Math.floor(Math.random() * 100,1))
            }
        }
        this.setState({
            matrice: [...matriceApp],
            matriceBlu: [...matriceApp]
        })
    }  

    componentDidUpdate(){
        //let x = this.state.xState
        //let y = this.state.yState
        //console.log('entra')
        //console.log(x, y)
        this.clickStyle(this.state.xState-1,this.state.yState)
    }

    clickStyle = (x,y) => {
        
        let matriceAp = []
        let matriceCordAp = []
        //eseguo la copia di tutta matriceBlu in matriceAp
        for(let i=0; i<this.state.matriceBlu.length; i++) {
            matriceAp.push([])
            matriceCordAp.push([])
            for(let j=0; j<this.state.matriceBlu.length; j++) {
                matriceAp[i].push(this.state.matriceBlu[i][j])
                matriceCordAp.push([])
            }
        }
        /*console.log(x,y)
        console.log('matriceblu')
        console.log(this.state.matriceBlu)
        console.log('matriceap')
        console.log(matriceAp)*/

        //controllo prima se il campo non è undefined ovvero al di fuori della matrice 
        if( matriceAp[x] !== undefined && matriceAp[y] !== undefined){
            if(matriceAp[x-1] !== undefined && matriceAp[y-1] !== undefined){
                if(matriceAp[x-1][y-1] < matriceAp[x][y] &&  matriceAp[x][y] !== 200 ){
                    matriceCordAp.push(x-1, y-1)
                    //matriceAp[x-1][y-1] = 200
                } 
            }
            if(matriceAp[x-1] !== undefined){
                if( matriceAp[x-1][y] < matriceAp[x][y] &&  matriceAp[x][y] !== 200 ){
                    //matriceAp[x-1][y] = 200
                    matriceCordAp.push(x-1, y-1)
                    console.log('condizione')
                    /*this.setState({
                        matriceBlu: [...matriceAp]
                    }), () => this.clickStyle(x-1,y))//() => { console.log(this.state.matriceBlu)}) */
                    //this.componentDidUpdate(x-1,y)
                    
                }
            }
            if(matriceAp[x-1] !== undefined && matriceAp[y+1] !== undefined){
                if( matriceAp[x-1][y+1] < matriceAp[x][y] &&  matriceAp[x][y] !== 200 ){
                    //matriceAp[x-1][y+1] = 200
                    matriceCordAp.push(x-1, y-1)
                   /*  this.setState({
                        matriceBlu: [...matriceAp]
                    }, () => this.clickStyle(x-1,y+1))*/
                } 
            }
            if(matriceAp[y-1] !== undefined){
                if( matriceAp[x][y-1] < matriceAp[x][y] &&  matriceAp[x][y] !== 200 ){
                    //matriceAp[x][y-1] = 200
                    matriceCordAp.push(x-1, y-1)
                   /*  this.setState({
                        matriceBlu: [...matriceAp]
                    }, () => this.clickStyle(x,y-1)) */
                }
            }
            if(matriceAp[y+1] !== undefined){
                if( matriceAp[x][y+1] < matriceAp[x][y] &&  matriceAp[x][y] !== 200 ){
                    //matriceAp[x][y+1] = 200
                    matriceCordAp.push(x-1, y-1)
                }
            }
            if(matriceAp[x+1] !== undefined && matriceAp[y-1] !== undefined){
                if( matriceAp[x+1][y-1] < matriceAp[x][y] &&  matriceAp[x][y] !== 200 ){
                    //matriceAp[x+1][y-1] = 200
                    matriceCordAp.push(x-1, y-1)
                }
            }
            if(matriceAp[x+1] !== undefined){
                if( matriceAp[x+1][y] < matriceAp[x][y] &&  matriceAp[x][y] !== 200 ){
                    //matriceAp[x+1][y] = 200
                    matriceCordAp.push(x-1, y-1)
                }
            }
            if(matriceAp[x+1] !== undefined && matriceAp[y+1] !== undefined){
                if( matriceAp[x+1][y+1] < matriceAp[x][y] &&  matriceAp[x][y] !== 200 ){
                    //matriceAp[x+1][y+1] = 200
                    matriceCordAp.push(x-1, y-1)
                }
            }
            //matriceAp[x][y] = 200
            matriceCordAp.push(x,y)
            for(let i=0; i<matriceCordAp.length; i+=2){
                console.log(matriceCordAp[0])
                //matriceAp[matriceCordAp[i]][matriceCordAp[i+1]] = 200
            }
            this.setState({
                matriceBlu: [...matriceAp],
                xState: x,
                yState: y
            })
            /*,  () => this.clickStyle(x-1,y) )*/  
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