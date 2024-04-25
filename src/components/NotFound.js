import logements from '../datas/logements.json'
import { useNavigate, Link, useParams, useLocation} from 'react-router-dom';
import { useEffect } from 'react';

export default function NotFound() {
    let location = useLocation();
    const navigate = useNavigate();
    let idPossible = [];
    logements.forEach((logement) => {
        idPossible.push("/" + logement.id);
    });
    useEffect(() => {
        if (idPossible.includes(location.pathname))
        {
            console.log("Good");
        }
        else 
        {
            navigate("/NotFound");
        }
    });
}
