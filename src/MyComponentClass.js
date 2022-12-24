import PropsTypes from 'prop-types';
import { Component } from 'react';

class MyComponentClass extends Component {
    static defaultProps = {
        name: '기본 이름',
        children: '메롱',
    };

    static propsTypes = {
        name: PropsTypes.string,
        favoriteNumber: PropsTypes.number.isRequired,
        children: PropsTypes.oneOf([]),
    };

    render() {
        const { name, children, favoriteNumber } = this.props;
        return (
            <div>
                안녕 내이름은 {name}, 이라고 해!!
                <br />
                children 값은 {children}야.
                <br />
                좋아하는 숫자는 {favoriteNumber}
            </div>
        );
    }
}

export default MyComponentClass;
