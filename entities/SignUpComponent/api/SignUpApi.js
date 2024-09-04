import axios from "axios";
import { BASE_URL } from "../../../shared/config/config";

export const signUp = (name, id, password, birth, pef) => {
    console.log(`signup 함수로 들어옴, ${name}, ${id}, ${password}, ${birth}, ${pef}`);
    
    axios.post(`${BASE_URL}/api/signUp`,
        {
            "name": name,      
            "loginId": id,
            "password": password,
            "birth": birth,
            "pef": pef
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error('error!', error.response?.data || error.message);
    });
};
