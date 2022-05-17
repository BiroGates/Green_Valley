import React from 'react'

// Styled Componentes
import { StyledComfirmBox } from './styled'



export default function ConfirmBox({ open, setOpen, descision, id, setReRender, reRender }) {
    /*if (!open) return null

    // Deleting items
    async function deletingData() {
        if (descision) {
            api.deleteProducts(id);
            setReRender(!reRender);
        }
    }*/


    return (
        <StyledComfirmBox>
            <div className='box'>
                <div className='close' > <div onClick={() => setOpen(false)} >X</div> </div>
                <div className='texts'>
                    <div className='pop-title'> Tem certeza que deseja apagar esse produto ? </div>
                    <div className='pop-desc'> Essa ação não pode ser desfeita! </div>
                    <div className='pop-buttons'>
                        <div className='yes'> SIM </div>
                        <div className='no'> NAO </div>
                    </div>
                </div>
            </div>
        </StyledComfirmBox>
    )
}
