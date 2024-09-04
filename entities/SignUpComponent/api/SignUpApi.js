import axios from "axios";
import {BASE_URL} from "../../../shared/config/config"

export const signUp = () => {
    axios.post(`${BASE_URL}/api/signUp`,
        {
            "name" : "김정은",
            "loginId" : "jungeun1",
            "password" : "1234",
            "birth" : "2002.11.15",
            "pef" : 275  
        }
    )
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.error('error!', error);
      })
}