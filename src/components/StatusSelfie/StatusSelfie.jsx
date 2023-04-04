import CardStatus from './CardsStatus/CardStatus'
import './style.css'

const StatusSelfie = ({ selfies }) => {
    return (
        <div className="status-container">
            <div className="status-subcontainer">
                <span className="status-title">Status de Aprovação</span>
                {
                    selfies && selfies.map((value, index) => {
                        return (
                            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                                <li key={index}>
                                    <CardStatus id={value.id}
                                        sended={value.sended}
                                        situation={value.situation}
                                        observations={value.observations} />
                                </li>
                            </ul>
                        )

                    })
                }
            </div>

        </div>
    )
}

export default StatusSelfie
