import './style.css'
import { AccountCircle } from '@mui/icons-material'
import CardSelfie from '../CardSelfie/CardSelfie'

const Profile = ({ name }) => {
    return (
        <div className="profile-container">
            <div className="profile-subcontainer">
                <div className="profile">
                    <AccountCircle sx={{ color: '#fff', fontSize: "10vw" }} />
                    <span className="hello-msg">Olá, {name.toUpperCase()[0] + name.substring(1, name.length)}</span>
                </div>
                <CardSelfie />
            </div>
        </div>
    )
}

export default Profile
