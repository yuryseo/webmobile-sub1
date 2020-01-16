import Axios from "axios"
import qs from 'qs';

/*
 User API 예시
 */

const requestLogin = (data,callback,errorCallback) => {
    //백앤드와 로그인 통신하는 부분
Axios.post("http://localhost:8080/account/login",qs.stringify(data))
.then(Response=>{
    callback(Response);
}).catch(Error=>{
    errorCallback(Error);
})

}


const UserApi = {
    requestLogin:(data,callback,errorCallback)=>requestLogin(data,callback,errorCallback)
}

export default UserApi
