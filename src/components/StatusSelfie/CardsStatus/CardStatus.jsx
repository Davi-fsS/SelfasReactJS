import "./style.css"

const CardStatus = ({ id, sended, situation, observations }) => {

    return (
        <div className="card-status-container">
            <div className="card-status-subcontainer">
                <span className="status-card-title">Selfie #{id}</span>
                <span>Enviado em: {sended}</span>
                <span>Situação:
                    {situation === "DECLINED" ?
                        <span style={{ color: "#D00000", fontWeight: "bold" }}> Reprovado</span>

                        : situation === "PENDING" ?
                            <span style={{ color: "#FFB703 ", fontWeight: "bold" }}> Pendente</span>

                            : <span style={{ color: "green", fontWeight: "bold" }}> Aprovado</span>
                    }
                </span>
                {
                    observations && (
                        <span>Motivo: {observations}</span>
                    )
                }
            </div>
        </div>
    )
}

export default CardStatus
