# 리액트 스터디 프로젝트
## 소개
### 리액트에 관한 내용을 정리해둔 레파지토리입니다.
<pre>
리액트의 전반적인 흐름을 한눈에 볼 수 있는 이미지를 제공하고 있으며 상세한 내용은 하단에서 원하는 내용 클릭시 해당 게시물로 이동됩니다.
이 레파지토리에는 아래의 내용에 관한 모든 정보를 Disscussions 카테고리에 가지고 있지만 Source code 형태로는 가지고 있지않습니다.
게시글을 내부적으로 해당하는 Source code 를 가지고 있는 레파지토리와 링크 시켜 놓았습니다.
Source code 를 보시길 원하신다면 이 레파지토리의 Source code 를 확인하지 마시고 게시글 내부에 링크되어 있는 부분을 확인하시기 바랍니다.
</pre>

### 레파지토리 카테고리
레파지토리의 카테고리는 크게 `Issues` 와 `Pull requests`, `Discussions` 그리고 `Projects` 를 사용하고 있습니다.
각각의 카테고리에 대해서 설명 드리겠습니다.
<pre>
Issues: 수정사항이나 작업해야할 내용을 적는 공간입니다. 꼭 코드에 관한 내용이 아니더라도 관계 없습니다.
Pull requests: 작업한 내용을 반영하는 곳입니다. Soure code 를 merge 합니다.
Disscusstions: 정보와 지식을 공유하는 커뮤니티 공간입니다. 세부 카테고리로 분리되어있습니다.
Projects: Issues, Pull requests 와 연동되어 현재 진행상황을 한 눈에 볼 수 있습니다.
</pre>
그외에 글을 작성함에 있어서 부가적인 설정을 하는 항목들입니다.
<pre>
label: 글의 내용이 무엇에 관한 내용인지 대략적인 분류입니다. (복수 허용)
milestone: 글이 어떤 작업에 관한 내용인지 알려줍니다. Projects 와도 연동되며 작업이 얼마나 진행되었는지 한눈에 파악하기 위함입니다.
</pre>
label 과 milestone 은 언제든지 자유롭게 추가할 수 있으니 편하게 이용바랍니다.

### 실구현 어플리케이션
아래는 리액트를 활용하여 실제로 구현한 어플리케이션들 입니다.
<ul>
	<li>
	<a href="https://github.com/honaseung/todo-app">클래스형 컴포넌트로 props 교환을 통한 할일 목록 어플</a>
	</li>
	<li>
		<a href="https://github.com/honaseung/news-viewer">외부 API 호출을 통한 뉴스 뷰어</a>
	</li>
	<li>
		<a href="https://github.com/honaseung/react-blog">redux 를 활용한 블로그 형태의 CRUD 구현</a>
	</li>
</ul>

## 목차
<!-- <details> -->
<!--   <summary><h1>마인드 맵을 보려면 클릭하세요.</h1></summary> -->
  <img src="https://user-images.githubusercontent.com/53066347/211130361-96905fa1-3b7b-4c9d-b8eb-3d6c78e92836.jpg" />
<!-- </details> -->
<ul>
    <li>사용해야 하는 이유
    	<ul>
    	    <li>리액트의 탄생
    		    <ul>
    		        <li>자바스크립트의 발전</li>
    		        <li>지속적으로 데이터가 변화하는 대규모 애플리케이션 구축</li>
    		    </ul>
    		</li>
    	    <li><a href="https://github.com/honaseung/hello-react/discussions/56">SPA</a>
    	        <ul>
    		    <li><a href="https://github.com/honaseung/hello-react/discussions/57">html 은 한번만</a></li>
    		    <li>필요한 데이터만 받아와서 업데이트</li>
    		    <li>기술적으로는 한 페이지, 경험적으로는 여러 페이지</li>
    		</ul>
    	    </li>
    	    <li>리액트의 특징
    	        <ul>
    	    	    <li>자바스크립트의 라이브러리인 리액트</li>
    	    	    <li>View 만을 신경쓰는 리액트</li>
    	    	    <li><a href="https://github.com/honaseung/hello-react/discussions/58">Virtual DOM 을 이용한 필요한 DOM 만을 업데이트</a></li>
    	    	</ul>
    	    </li>
        </ul>
    </li>
    <li>문법
    	<ul>
    	    <li>자바스크립트
    		<ul>
    		    <li><a href="https://github.com/honaseung/hello-react/discussions/59">스프레드 연산자</a>
    		        <ul>
                            <li>얕은 복사</li>
                        </ul>
                    </li>
    		    <li>화살표 함수
                        <ul>
    		            <li><a href="https://github.com/honaseung/hello-react/discussions/60">function 함수와의 차이</a></li>
                        </ul>
    		    </li>
                    <li><a href="https://github.com/honaseung/hello-react/discussions/61">제너레이터 함수</a></li>
    		    <li><a href="https://github.com/honaseung/hello-react/discussions/62">프로미스 객체</a>
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
    			    <li><a href="https://github.com/honaseung/hello-react/discussions/63">async/await</a>
                                <ul>
    			            <li>async 는 await 을 포함하는 함수 앞에 await 은 포함된 Promise 객체 앞에</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
    		    <li><a href="https://github.com/honaseung/hello-react/discussions/64">비구조화 할당</a></li>
                </ul>
    	    <li><a href="https://github.com/honaseung/hello-react/discussions/65">JSX</a></li>
        </ul>
    </li>
    <li><a href="https://github.com/honaseung/hello-react/discussions/67">컴포넌트</a>
    	<ul>
    	    <li><a href="https://github.com/honaseung/hello-react/discussions/70">클래스형 컴포넌트</a>
    	    	<ul>
    	    	    <li><a href="https://github.com/honaseung/hello-react/discussions/69">life cycle method</a>
                        <ul>
    	    	    	    <li><a href="https://github.com/honaseung/hello-react/discussions/70">컴포넌트 생성</a>
                                <ul>
    	    	    		        <li><a href="https://github.com/honaseung/hello-react/discussions/71">constructor</a></li>
    	    	    		        <li><a href="https://github.com/honaseung/hello-react/discussions/72">getDerivedStateFromProps</a></li>
    	    	    		        <li><a href="https://github.com/honaseung/hello-react/discussions/73">render</a></li>
    	    	    		        <li><a href="https://github.com/honaseung/hello-react/discussions/74">componentDidMount</a></li>
                                </ul>
                            </li>
    	    	    	    <li>컴포넌트 업데이트
                                <ul>
    	    	    	        	<li>getDerivedStateFromProps</li>
    	    	    	        	<li><a href="https://github.com/honaseung/hello-react/discussions/75">shouldComponentUpdate</a></li>
    	    	    	        	<li>render</li>
    	    	    	        	<li><a href="https://github.com/honaseung/hello-react/discussions/76">getSnapshotBeforeUpdate</a></li>
    	    	    	        	<li><a href="https://github.com/honaseung/hello-react/discussions/77">componentDidUpdate</a></li>
                                </ul>
                            </li>
    	    	    	    <li>컴포넌트 언마운트
                                <ul>
    	    	    	        	<li><a href="https://github.com/honaseung/hello-react/discussions/78">componentWillUnmount</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
            </li>
    		<li><a href="https://github.com/honaseung/hello-react/discussions/79">state</a>
                <ul>
    		    	<li>불변성</li>
                        <ul>
    		    	    	<li>직접 변경 불가</li>
                        </ul>
                    </li>
                </ul>
            </li>
    		<li><a href="https://github.com/honaseung/hello-react/discussions/80">props</a>
                <ul>
    		    	<li>자식 컴포넌트에서 직접 변경 불가</li>
                </ul>
          </li>
          </ul>
    	    <li>함수형 컴포넌트
                <ul>
    	        	<li><a href="https://github.com/honaseung/hello-react/discussions/79">state</a></li>
    	        	<li><a href="https://github.com/honaseung/hello-react/discussions/80">pops</a></li>
    	        	<li><a href="https://github.com/honaseung/hello-react/discussions/81">hooks</a>
                        <ul>
    	        		    <li><a href="https://github.com/honaseung/hello-react/discussions/82">useState</a>
                                <ul>
    	        		        	<li>초기값</li>
    	        		        	<li>set 함수</li>
                                </ul>
                            </li>
    	        		    <li><a href="https://github.com/honaseung/hello-react/discussions/83">useEffect</a>
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
    	        		    <li><a href="https://github.com/honaseung/hello-react/discussions/84">useReducer</a>
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
    	        		    <li><a href="https://github.com/honaseung/hello-react/discussions/85">useMemo</a>
                                <ul>
    	        		        	<li>함수 재호출 방지
                                        <ul>
    	        		        	    	<li>호출할 함수</li>
    	        		        	    	<li>변화를 감지할 값</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
    	        		    <li><a href="https://github.com/honaseung/hello-react/discussions/86">useCallback</a>
                                <ul>
    	        		        	<li>함수 재생성 방지
                                        <ul>
    	        		        	    	<li>생성할 함수</li>
    	        		        	    	<li>변화를 감지할 값</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
    	        		    <li><a href="https://github.com/honaseung/hello-react/discussions/87">useRef</a>
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
    <li><a href="https://github.com/honaseung/hello-react/discussions/88">라우터</a>
    	<ul>
    	    <li><a href="https://github.com/honaseung/hello-react/discussions/89">Routes</a></li>
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
    	    <li><a href="https://github.com/honaseung/hello-react/discussions/90">Link</a>
                <ul>
    	        	<li>path</li>
    	        	<li><a href="https://github.com/honaseung/hello-react/discussions/91">NavLink</a>
                        <ul>
    	        	    	<li>path</li>
    	        	    	<li>isActive</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </li>
    <li><a href="https://github.com/honaseung/hello-react/discussions/92">전역 상태 관리</a></li>
    	<ul>
    	    <li><a href="https://github.com/honaseung/hello-react/discussions/93">Context</a>
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
    	    <li><a href="https://github.com/honaseung/hello-react/discussions/94">Redux</a>
                <ul>
    	    	    <li><a href="https://github.com/honaseung/hello-react/discussions/95">action</a>
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
    	    	    <li><a href="https://github.com/honaseung/hello-react/discussions/96">dispatch</a>
                        <ul>
    	    	    	    <li>매개변수로 객체 생성 함수를 넘겨준다.</li>
                        </ul>
                    </li>
    	    	    <li><a href="https://github.com/honaseung/hello-react/discussions/97">middleware</a>
                        <ul>
    	    	    	    <li><a href="https://github.com/honaseung/hello-react/discussions/98">thunk</a>
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
    	    	    	    <li><a href="https://github.com/honaseung/hello-react/discussions/99">saga</a>
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
    	    	    <li><a href="https://github.com/honaseung/hello-react/discussions/100">reducer</a>
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
    	    	    <li><a href="https://github.com/honaseung/hello-react/discussions/101">store</a>
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
    	    	    <li><a href="https://github.com/honaseung/hello-react/discussions/102">connect</a>
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
    	    	    <li><a href="https://github.com/honaseung/hello-react/discussions/103">hooks</a>
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
    	    <li><a href="https://github.com/honaseung/hello-react/discussions/104">CSS</a>
    		    <ul>
		            <li>Cascading Style Sheet</li>
                </ul>
            </li>
	        <li><a href="https://github.com/honaseung/hello-react/discussions/105">SASS</a>
                <ul>
	        	    <li>Syntactically Awesome Style Sheet
                        <ul>
	        	    	    <li>CSS 의 확장 문법</li>
                        </ul>
                    </li>
                </ul>
            </li>
	        <li><a href="https://github.com/honaseung/hello-react/discussions/106">SCSS</a>
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
    <li><a href="https://github.com/honaseung/hello-react/discussions/107">코드 스플리팅과 서버 사이드 렌더링</a>
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
