import { Component } from 'react';

class EventPractice extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         message: '',
    //     };
    //     this.onChangeIpb = this.onChangeIpb.bind(this);
    //     this.onClickBtn = this.onClickBtn.bind(this);
    // }

    state = {
        message: '',
        username: '',
    };
    //아래 주석처리된 코드처럼 작성시에는 생성자에서 바인딩해주는 작업이 필요하다.
    // onChangeIpb(e) {
    onChangeIpb = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    // onClickBtn() {
    onClickBtn = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({ message: '', username: '' });
    };

    onKeyUpIpb = (e) => {
        if (e.key === 'Enter') {
            this.onClickBtn();
        }
    };

    render() {
        return (
            <>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="이름이 뭐예요"
                    value={this.state.username}
                    onChange={this.onChangeIpb}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 쓰세요"
                    value={this.state.message}
                    onChange={this.onChangeIpb}
                    onKeyUp={this.onKeyUpIpb}
                />
                <button onClick={this.onClickBtn}>
                    스테이트 출력후 초기화
                </button>
            </>
        );
    }
}

export default EventPractice;
