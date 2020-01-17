# 스켈레톤 프로젝트




### 1. 스켈레톤 프로젝트 개발 환경 설정

### 2. 와이어프레임 작성

- 와이어프레임 초안
![IMG](front-sk/images/와이어프레임1.PNG)
- 와이어프레임 수정안
![IMG](front-sk/images/와이어프레임2.PNG)

### 3. FrontEnd 화면 
 
- 커스터 마이징
![IMG](front-sk/images/login기본.PNG)
![IMG](front-sk/images/login버튼활성화.PNG)
![IMG](front-sk/images/login비밀번호오류.PNG)![IMG](front-sk/images/login이메일오류.PNG)

BackEnd에서 로그인 성공/실패 여부 관련 없이 로그인 실패 알림(Login.vue)
```
alert("로그인 실패 알림")
```



### 4. FrontEnd BackEnd 통신
- 로그인 버튼 클릭시 백엔드에 해당하는 API와 통신

Front End : User API 예시
```
import Axios from "axios"
import qs from 'qs';

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

```


- BackEnd Swagger Config 수정

package는 controller 위치
```
.apis(RequestHandlerSelectors. basePackage"com.web.curation.controller.account"))
```

해당 url 설정
```
.paths(PathSelectors.ant("/account/**"))
```







