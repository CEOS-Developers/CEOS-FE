## 프로젝트 구성 설명

본 프로젝트는 유령 의존성을 피하기 위한 `yarn berry` 패키지 매니저와 ceos 웹 페이지와 어드민을 동시에 관리하기 위한 모노레포 툴로서 `turbo`를 이용하고 있습니다. [참고 링크](https://toss.tech/article/node-modules-and-yarn-berry). <br />
이에 따라 두 프로젝트는 `apps` 디렉터리에, 그리고 이들이 공통적으로 활용하는 UI 컴포넌트 및 유틸 함수는 `package` 디렉터리에 위치합니다.

### 환경 설치

```
yarn install
```

### 환경 변수 파일 설정

> 프로젝트 인수인계자로부터 .env 관련 파일 내용을 전달 받아 `apps/ceos`와 `apps/admin` 디렉터리에 만들어 넣습니다.

### 실행 및 빌드

모노 레포인만큼 `yarn dev` 명령어를 통해 package.json의 scripts 필드에 적힌 명령어를 실행하면 두 3000, 3001번의 두 포트에서 각각의 프로젝트가 실행될 것입니다. 개별적으로 실행하고 싶다면 `yarn workspace` 명령어를 이용하거나 이를 활용한 스크립트를 만들어서 실행하십시오.

```
# 실행
yarn turbo run dev

# admin 실행
yarn admin

# ceos 실행
yarn ceos
```

### 프로젝트 구성

1. 본 프로젝트는 메타 프레임워크로는 nextJS를 이용합니다. 루트 package.json에 기술된 버전은 13 메이저 버전(app route 방식)이지만, 실제 프로젝트의 라우팅 구성을 보면 app 디렉터리가 아닌, page 디렉터리를 이용하는 페이지 라우팅 구성을 활용하고 있습니다. 본 문서를 보시는 운영진 분들께서 원하신다면 app routing으로 마이그레이션하는 작업을 진행하셔도 좋습니다(As you wish...)
