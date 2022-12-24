import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    // password = React.createRef();

    state = {
        password: '',
        clicked: false,
        validated: false,
    };

    onChangeIpb = (e) => {
        this.setState({
            ...this.state,
            password: e.target.value,
        });
    };

    onClickBtn = (e) => {
        this.setState({
            ...this.state,
            clicked: true,
            validated: this.state.password === '0000',
        });
        // this.password.current.focus();
        this.password.focus();
    };

    render() {
        return (
            <>
                <input
                    onChange={this.onChangeIpb}
                    type="password"
                    value={this.state.password}
                    className={
                        this.state.clicked
                            ? this.state.validated
                                ? 'success'
                                : 'faliure'
                            : ''
                    }
                    // ref={this.password}
                    ref={(ref) => (this.password = ref)}
                />
                <button onClick={this.onClickBtn}>검증하기</button>
            </>
        );
    }
}

export default ValidationSample;
