<details>
  <summary>마인드 맵</summary>
  <img src="https://user-images.githubusercontent.com/53066347/210162556-4871e40c-34c3-408d-8c5f-de572d115c89.jpg" />
</details>
<ul>
사용해야 하는 이유
	리액트의 탄생
		자바스크립트의 발전
		지속적으로 데이터가 변화하는 대규모 애플리케이션 구축
	SPA
		html 은 한번만
		필요한 데이터만 받아와서 업데이트
		기술적으로는 한 페이지, 경험적으로는 여러 페이지
	리액트의 특징
		자바스크립트의 라이브러리인 리액트
		View 만을 신경쓰는 리액트
		Virtual DOM 을 이용한 필요한 DOM 만을 업데이트

문법
	자바스크립트
		스프레드 연산자
			얕은 복사
		화살표 함수
			function 함수와의 차이
		제너레이터 함수
		프로미스 객체
			then
				매개변수로 성공시 callback 함수를 넘긴다.
			catch
				매개변수로 실패시 callback 함수를 넘긴다.
			async/await
				async 는 await 을 포함하는 함수 명 앞에 await 은 포함된 Promise 객체 앞에
		비구조화 할당
	JSX

컴포넌트
	클래스형 컴포넌트
		life cycle method
			컴포넌트 생성
				constructor
				getDerivedStateFromProps
				render
				componentDidMount
			컴포넌트 업데이트
				getDerivedStateFromProps
				shouldComponentUpdate
				render
				getSnapshotBeforeUpdate
				componentDidUpdate
			컴포넌트 언마운트
				componentWillUnmount
		state
			불변성
				직접 변경 불가
		props
			자식 컴포넌트에서 직접 변경 불가
	함수형 컴포넌트
		state
		pops
		hooks
			useState
				초기값
				set 함수
			useEffect
				실행할 함수
					return clean up 함수
				실행 조건
					빈 배열
					state 배열
			useReducer
				액션 객체
					type
					매개변수
				dispatch
					매개변수
						state
						action
					분기처리
					리턴
			useMemo
				함수 재호출 방지
					호출할 함수
					변화를 감지할 값
			useCallback
				함수 재생성 방지
					생성할 함수
					변화를 감지할 값
			useRef
				DOM Ref
				렌더링과 관련없는 값
			커스텀 hooks

라우터
	Routes
	Route
		path
		element
		중첩 라우트
			부모 라우트
			자식 라우트
			Outlet
	Link
		path
		NavLink
			path
			isActive

전역 상태 관리
	Context
		Consumer
			context 값 가져오기
		Provider
			context 값 변경하기
	Redux
		action
			기본값
			객체 생성 함수
				type 은 필수값
				객체를 리턴해야한다.
		dispatch
			매개변수로 객체 생성 함수를 넘겨준다.
		middleware
			thunk
				thunk 함수
					(param) => /*return*/ (dispatch) => {}
				비동기 작업 처리
					axios
						RESTAPI
			saga
				saga 함수
					function* fn() {}
				요청 관리
					요청 취소
					재요청
					...
		reducer
			state
				store 에 저장된 이전 값
			action
				액션 객체
		store
			createStore
				reducer 등록
					combineReducers 로 reducer 들을 모은다.
				middleware 등록
		subscribe
			dispatch 후 상태가 업데이트될시 호출될 함수
				unsubscribe 로 호출 종료
		connect
			mapStateToProps
				필요한 값만 props 로 내려준다.
			mapDispatchToProps
				필요한 액션 객체 생성 함수만 props 로 내려준다.
			컨테이너 컴포넌트
				store 와 연결될 컨테이너 컴포넌트 등록
		hooks
			useSelector
				state 에서 props 로 쓸 값을 리턴한다.
			useDispatch
				리턴받은 함수에 액션 객체 생성 함수를 넣고 호출한다.
			useStore
				store 를 직접 사용(권장하지 않음)

스타일링
	CSS
		Cascading Style Sheet
	SASS
		Syntactically Awesome Style Sheet
			CSS 의 확장 문법
	SCSS
		CSS + SASS
			변수
			중첩구문
			모듈화
			믹스인(함수)
			확장, 상속
			연산자
	CSS Module
	styled-components
		tagged template literal

코드 스플리팅과 서버 사이드 렌더링
	코드 스플리팅
		프로젝트 빌드를 최적화
			React.lazy
			Suspense
			Loadable Components
	서버 사이드 렌더링
		초기 렌더링 속도 최적화
			webpack 설정

프레임워크
	Next.js
		SSR(Server Side Rendering
			설정 간편
		Code Splitting
			bundler 설정 X
	Express
		Http 통신 처리 용이
		호환성
	Koa
		Http 통신 처리 용이
		호환성
		가벼움
</ul>

