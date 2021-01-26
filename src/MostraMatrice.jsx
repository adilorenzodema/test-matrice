import React, { Component } from 'react'

class MostraMatrice extends Component {

    style = (matriceB) => {
        if(matriceB.colore === true)
            return ( {
                backgroundColor: '#64b5f6',
                transition: 'background-color 2s'
        })
        else if(matriceB.valore < 30) 
            return ( {backgroundColor: '#689f38'})
        else if (matriceB.valore < 60)
            return ( {backgroundColor: '#fdd835'})
        else if (matriceB.valore < 90)
            return ( {backgroundColor: '#ff8f00'})
        else if (matriceB.valore < 100)
            return ( {backgroundColor: '#e65100'})
    }
    
    render() {
        const matrice = [...this.props.matrice]
        const matriceBlu = [...this.props.matriceBlu]
        return (
            <div>
            {matrice.map((row,i) =>
                <div> {/* {console.log(row)} */}
                    {row.map((col,j) => 
                    <div> {col.valore} </div>)}
                </div>


                /*<div key={i}> 
                    {row.map((col,j) =>
                    /*passo il valore della matrice nella posizione i,j e al click chiamata la funzione nel padre*/
                    /*<div key={j} className="square"  style={this.style(matriceBlu[i][j])} onClick={() => this.props.onClick(i,j) > {col.valore} </div>
                    )}
                </div>*/
            )}
            </div>
        )
    }
}



/*function MostraMatrice(props) {
    const matrice = [...props.matrice]
    const matriceBlu = [...props.matriceBlu]

    const style = (matriceB) => {
        if(matriceB === 200)
            return ( {
                backgroundColor: '#64b5f6',
                transition: 'background-color 2s'
        })
        else if(matriceB < 30) 
            return ( {backgroundColor: '#689f38'})
        else if (matriceB < 60)
            return ( {backgroundColor: '#fdd835'})
        else if (matriceB < 90)
            return ( {backgroundColor: '#ff8f00'})
        else if (matriceB < 100)
            return ( {backgroundColor: '#e65100'})
    }

    return (
        <div>
            {matrice.map((row,i) =>
                <div key={i}> 
                    {row.map((col,j) => 
                    /*passo il valore della matrice nella posizione i,j e al click chiamata la funzione nel padre*/
                    /*<div key={j} className="square" style={style(matriceBlu[i][j])} onClick={() => props.onClick(i,j)} > {matrice[i][j]} </div>
                    )}
                </div>
            )}
        </div>
    )
}*/

export default MostraMatrice