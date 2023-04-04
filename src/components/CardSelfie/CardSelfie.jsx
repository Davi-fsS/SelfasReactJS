import { AddAPhoto, CheckBox, Close } from '@mui/icons-material'
import './style.css'
import { useState } from 'react'
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'

const CardSelfie = () => {

    const [isButtonClicked, setIsButtonClicked] = useState(false)
    const [isChecked, setIsChecked] = useState(true)

    const handleClose = () => setIsButtonClicked(false)

    return (
        <>
            <div className="card-container">
                <div className="card-itens">
                    <span className="title">HORA DA SELFIE</span>
                    <span className="photo-space">
                        <AddAPhoto sx={{ color: "#B6B6B699", fontSize: "10vw" }} />
                    </span>
                    <button className="button-take-photo" onClick={() => setIsButtonClicked(!isButtonClicked)}>TIRAR</button>
                </div>
            </div>

            <Dialog
                open={isButtonClicked}
                onClose={handleClose}
                maxWidth={'md'}
            >
                <DialogTitle style={{ display: "flex", flexDirection: "row", padding: 10, justifyContent: "space-between" }}>
                    <span style={{ color: "#003C9C", fontWeight: "bolder", paddingLeft: 10 }}>Regras</span>
                    <DialogActions style={{ padding: 0 }}>
                        <button style={{ border: 'none', background: "none" }} onClick={handleClose}><Close sx={{ color: "#003C9C", fontSize: "medium" }} /></button>
                    </DialogActions>
                </DialogTitle>
                <DialogContent style={{ paddingLeft: 5, paddingRight: 5 }}>
                    <ul style={{ display: 'flex', flexDirection: "column", gap: 10 }}>
                        <li>Fundo branco ou bem claro;</li>
                        <li>Sem máscaras, chapéu ou acessórios que descaracterize o rosto;</li>
                        <li>Rosto iluminado (sem sombras marcantes).</li>
                    </ul>
                </DialogContent>
                <CheckBox
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    inputProps={{ 'aria-label': 'controlled' }}
                />


            </Dialog>
        </>
    )
}

export default CardSelfie
