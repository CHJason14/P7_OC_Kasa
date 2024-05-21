import { useEffect, useMemo } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import InfosLogements from "../components/InfosLogements";
import logements from "../datas/logements.json";

export default function LogementDetails() {
  const params = useParams();
  const navigate = useNavigate();

  const logement = useMemo(() => {
    return logements.find((logement) => logement.id === params.id)
  }, [params]);

  useEffect(() => {
    if (!logement) {
      navigate('/NotFound');
    }
  }, [logement]);

  return logement?.id && <>
    <Carrousel logement={logement} />
    <InfosLogements logement={logement} />
 </>
}