<details>
  <summary>마인드 맵을 보려면 클릭하세요.</summary>
  <img src="https://user-images.githubusercontent.com/53066347/210162556-4871e40c-34c3-408d-8c5f-de572d115c89.jpg" />
</details>
<ul>
    <li>사용해야 하는 이유
    	<ul>
    	    <li>리액트의 탄생
    		    <ul>
    		        <li>자바스크립트의 발전</li>
    		        <li>지속적으로 데이터가 변화하는 대규모 애플리케이션 구축</li>
    		    </ul>
    		</li>
    	    <li>SPA
    	        <ul>
    		        <li>html 은 한번만</li>
    		        <li>필요한 데이터만 받아와서 업데이트</li>
    		        <li>기술적으로는 한 페이지, 경험적으로는 여러 페이지</li>
    		    </ul>
    		</li>
    	    <li>리액트의 특징
    	        <ul>
    	    	    <li>자바스크립트의 라이브러리인 리액트</li>
    	    	    <li>View 만을 신경쓰는 리액트</li>
    	    	    <li>Virtual DOM 을 이용한 필요한 DOM 만을 업데이트</li>
    	    	</ul>
    	    </li>
        </ul>
    </li>
    <li>문법
    	<ul>
    	    <li>자바스크립트
    		    <ul>
    		        <li>스프레드 연산자
    			        <ul>
                            <li>얕은 복사</li>
                        </ul>
                    </li>
    		        <li>화살표 함수
                        <ul>
    		                <li>function 함수와의 차이</li>
                        </ul>
    		        </li>
                    <li>제너레이터 함수</li>
    		        <li>프로미스 객체
                        <ul>
    			            <li>then
    			                <ul>
                                    <li>매개변수로 성공시 callback 함수를 넘긴다.</li>
                                </ul>
                            </li>
    			            <li>catch
                                <ul>
    			                    <li>매개변수로 실패시 callback 함수를 넘긴다.</li>
                                </ul>
                            </li>
    			            <li>async/await
                                <ul>
    			                    <li>async 는 await 을 포함하는 함수 명 앞에 await 은 포함된 Promise 객체 앞에</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
    		        <li>비구조화 할당</li>
                </ul>
    	    <li>JSX</li>
        </ul>
    </li>
    <li>컴포넌트
    	<ul>
    	    <li>클래스형 컴포넌트
    	    	<ul>
    	    	    <li>life cycle method
                        <ul>
    	    	    	    <li>컴포넌트 생성
                                <ul>
    	    	    		        <li>constructor</li>
    	    	    		        <li>getDerivedStateFromProps</li>
    	    	    		        <li>render</li>
    	    	    		        <li>componentDidMount</li>
                                </ul>
                            </li>
    	    	    	    <li>컴포넌트 업데이트
                                <ul>
    	    	    	        	<li>getDerivedStateFromProps</li>
    	    	    	        	<li>shouldComponentUpdate</li>
    	    	    	        	<li>render</li>
    	    	    	        	<li>getSnapshotBeforeUpdate</li>
    	    	    	        	<li>componentDidUpdate</li>
                                </ul>
                            </li>
    	    	    	    <li>컴포넌트 언마운트
                                <ul>
    	    	    	        	<li>componentWillUnmount</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
    		<li>state
                <ul>
    		    	<li>불변성</li>
                        <ul>
    		    	    	<li>직접 변경 불가</li>
                        </ul>
                    </li>
                </ul>
            </li>
    		<li>props
                <ul>
    		    	<li>자식 컴포넌트에서 직접 변경 불가</li>
                </ul>
            </li>
    	    <li>함수형 컴포넌트
                <ul>
    	        	<li>state</li>
    	        	<li>pops</li>
    	        	<li>hooks
                        <ul>
    	        		    <li>useState
                                <ul>
    	        		        	<li>초기값</li>
    	        		        	<li>set 함수</li>
                                </ul>
                            </li>
    	        		    <li>useEffect
                                <ul>
    	        		        	<li>실행할 함수
                                        <ul>
    	        		        	    	<li>return clean up 함수</li>
                                        </ul>
                                    </li>
    	        		        	<li>실행 조건
                                        <ul>
    	        		        	    	<li>빈 배열</li>
    	        		        	    	<li>state 배열</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
    	        		    <li>useReducer
                                <ul>
    	        		        	<li>액션 객체
                                        <ul>
    	        		        	    	<li>type</li>
    	        		        	    	<li>매개변수</li>
                                        </ul>
                                    </li>
    	        		        	<li>dispatch
                                        <ul>
    	        		        	    	<li>매개변수
                                                <ul>
    	        		        	    	    	<li>state</li>
    	        		        	    	    	<li>action</li>
                                                </ul>
                                            </li>
    	        		        	    	<li>분기처리</li>
    	        		        	    	<li>리턴</li>
                                        </ul>
                                    </li>
                                </ul>
    	        		    <li>useMemo
                                <ul>
    	        		        	<li>함수 재호출 방지
                                        <ul>
    	        		        	    	<li>호출할 함수</li>
    	        		        	    	<li>변화를 감지할 값</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
    	        		    <li>useCallback
                                <ul>
    	        		        	<li>함수 재생성 방지
                                        <ul>
    	        		        	    	<li>생성할 함수</li>
    	        		        	    	<li>변화를 감지할 값</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
    	        		    <li>useRef
                                <ul>
    	        		        	<li>DOM Ref</li>
    	        		        	<li>렌더링과 관련없는 값</li>
                                </ul>
                            </li>
    	        		    <li>커스텀 hooks</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
    <li>라우터
    	<ul>
    	    <li>Routes</li>
    	    <li>Route
                <ul>
    		        <li>path</li>
    		        <li>element</li>
    		        <li>중첩 라우트
                        <ul>
    			            <li>부모 라우트</li>
    			            <li>자식 라우트</li>
    			            <li>Outlet</li>
                        </ul>
                    </li>
                </ul>
            </li>
    	    <li>Link
                <ul>
    	        	<li>path</li>
    	        	<li>NavLink
                        <ul>
    	        	    	<li>path</li>
    	        	    	<li>isActive</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
    <li>전역 상태 관리</li>
    	<ul>
    	    <li>Context
    	    	<ul>
    	    	    <li>Consumer
                        <ul>
    	    	        	<li>context 값 가져오기</li>
                        </ul>
                    </li>
    	    	    <li>Provider
                        <ul>
    	    	    	    <li>context 값 변경하기</li>
                        </ul>
                    </li>
                </ul>
            </li>
    	    <li>Redux
                <ul>
    	    	    <li>action
                        <ul>
    	    	    	    <li>기본값</li>
    	    	    	    <li>객체 생성 함수
                                <ul>
    	    	    	        	<li>type 은 필수값</li>
    	    	    	        	<li>객체를 리턴해야한다.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
    	    	    <li>dispatch
                        <ul>
    	    	    	    <li>매개변수로 객체 생성 함수를 넘겨준다.</li>
                        </ul>
                    </li>
    	    	    <li>middleware
                        <ul>
    	    	    	    <li>thunk
                                <ul>
    	    	    	    	    <li>thunk 함수
                                        <ul>
    	    	    	    	    	    <li>(param) => /*return*/ (dispatch) => {}</li>
                                        </ul>
                                    </li>
    	    	    	    	    <li>비동기 작업 처리
                                        <ul>
    	    	    	    	    	    <li>axios
                                                <ul>
    	    	    	    	    	        	<li>RESTAPI</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
    	    	    	    <li>saga
                                <ul>
    	    	    	    	    <li>saga 함수
                                        <ul>
    	    	    	    	        	<li>function* fn() {}</li>
                                        </ul>
                                    </li>
    	    	    	    	    <li>요청 관리
                                        <ul>
    	    	    	    	        	<li>요청 취소</li>
    	    	    	    	        	<li>재요청</li>
    	    	    	    	        	<li>...</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
    	    	    <li>reducer
                        <ul>
    	    	    	    <li>state
                                <ul>
    	    	    	        	<li>store 에 저장된 이전 값</li>
                                </ul>
                            </li>
    	    	    	    <li>action
                                <ul>
    	    	    	    	    <li>액션 객체</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
    	    	    <li>store
                        <ul>
    	    	    	    <li>createStore
                            <ul>
    	    	    		    <li>reducer 등록
                                    <ul>
    	    	    		    	    <li>combineReducers 로 reducer 들을 모은다.</li>
                                    </ul>
                                </li>
                            </ul>
    	    	    		<li>middleware 등록</li>
                        </ul>
                    </li>
    	    	    <li>subscribe
                        <ul>
    	    	        	<li>dispatch 후 상태가 업데이트될시 호출될 함수
                                <ul>
    	    	    		        <li>unsubscribe 로 호출 종료</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
    	    	    <li>connect
                        <ul>
    	    	        	<li>mapStateToProps
                                <ul>
    	    	            		<li>필요한 값만 props 로 내려준다.</li>
                                </ul>
                            </li>
    	    	    	    <li>mapDispatchToProps
                                <ul>
    	    	    	        	<li>필요한 액션 객체 생성 함수만 props 로 내려준다.</li>
                                </ul>
                            </li>
    	    	    	    <li>컨테이너 컴포넌트
                                <ul>
    	    	    	    	    <li>store 와 연결될 컨테이너 컴포넌트 등록</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
    	    	    <li>hooks
                        <ul>
    	    	    	    <li>useSelector
                                <ul>
    	    	    	        	<li>state 에서 props 로 쓸 값을 리턴한다.</li>
                                </ul>
                            </li>
    	    	    	    <li>useDispatch
                                <ul>
    	    	    	    	    <li>리턴받은 함수에 액션 객체 생성 함수를 넣고 호출한다.</li>
                                </ul>
                            </li>
    	    	    	    <li>useStore
                                <ul>
    	    	    	    	    <li>store 를 직접 사용(권장하지 않음)</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
    <li>스타일링</li>
    	<ul>
    	    <li>CSS
    		    <ul>
		            <li>Cascading Style Sheet</li>
                </ul>
            </li>
	        <li>SASS
                <ul>
	        	    <li>Syntactically Awesome Style Sheet
                        <ul>
	        	    	    <li>CSS 의 확장 문법</li>
                        </ul>
                    </li>
                </ul>
            </li>
	        <li>SCSS
                <ul>
	        	    <li>CSS + SASS
                        <ul>
	        	            <li>변수</li>
	        	            <li>중첩구문</li>
	        	            <li>모듈화</li>
	        	            <li>믹스인(함수)</li>
	        	            <li>확장, 상속</li>
	        	            <li>연산자</li>
	                        <li>CSS Module</li>
                        </ul>
                    </li>
                </ul>
            </li>
	        <li>styled-components
                <ul>
	        	    <li>tagged template literal</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>코드 스플리팅과 서버 사이드 렌더링
    	<ul>
    	    <li>코드 스플리팅
    		    <ul>
    		        <li>프로젝트 빌드를 최적화
                        <ul>
    		        	    <li>React.lazy</li>
    		        	    <li>Suspense</li>
    		        	    <li>Loadable Components</li>
                        </ul>
                    </li>
                </ul>
            </li>
    	    <li>서버 사이드 렌더링
    	    	<ul>
                    <li>초기 렌더링 속도 최적화</li>
    	    		<li>webpack 설정</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>프레임워크
    	<ul>
    	    <li>Next.js
    		    <ul>
    		        <li>SSR(Server Side Rendering</li>
    		            <ul>
                            <li>설정 간편</li>
                        </ul>
                    </li>
    		        <li>Code Splitting</li>
    		            <ul>
                            <li>bundler 설정 X</li>
                        </ul>
                    </li>
                </ul>
            </li>
    	    <li>Express
                <ul>
    		        <li>Http 통신 처리 용이</li>
    		        <li>호환성</li>
                </ul>
            </li>
    	    <li>Koa
                <ul>
    		        <li>Http 통신 처리 용이</li>
    		        <li>호환성</li>
    		        <li>가벼움</li>
                </ul>
            </li>
        </ul>
    </li>
</ul>
