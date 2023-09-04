import axios from "axios";
const config={
    headers:{
        "Content-Type":"application/json"   
    }
}
const GetApi=async (apiurl)=>{
const {data}=await axios(`../../${apiurl}`,config)
return data;
}
export default GetApi