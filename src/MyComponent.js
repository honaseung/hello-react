import PropsTypes from 'prop-types';

const MyComponent = ({ name, children, favoriteNumber }) => {
    // const MyComponent = (props) => {
    // const {name, children} = props;
    return (
        <div>
            안녕 내이름은 {name}, 이라고 해!!
            <br />
            children 값은 {children}야.
            <br />
            좋아하는 숫자는 {favoriteNumber}
        </div>
    );
};

MyComponent.defaultProps = {
    name: '기본 이름',
    children: '메롱',
};

MyComponent.PropsTypes = {
    name: PropsTypes.string,
    favoriteNumber: PropsTypes.number.isRequired,
    children: PropsTypes.oneOf([]),
};

export default MyComponent;
