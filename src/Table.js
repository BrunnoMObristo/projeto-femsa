import React from 'react'
import MaterialTable from 'material-table'

export const Table=()=>{   
        const data=[
            {n_ordem:'1', dt_emissao: '04/10/2021', st_pag: 'Efetuado'},
            {n_ordem:'2', dt_emissao: '05/10/2021', st_pag: 'Não processado'},
            {n_ordem:'3', dt_emissao: '06/10/2021', st_pag: 'Em análise'},
            {n_ordem:'4', dt_emissao: '07/10/2021', st_pag: 'Efetuado'},
        ]

        const columns=[
            {title:'N° Ordem de Serviço', field: 'n_ordem'},            
            {title:'Data de Emissão', field: 'dt_emissao'},  
            {title:'Status do Pagamento', field: 'st_pag'}, 
        ]
       return(<div> 
            <MaterialTable title="Monitoramento de Compras"
            data={data}
            columns={columns}
            style={{position: ''}}/>
        </div>)    

}