function Welcome(props) {
    return (
        <>
            <div>Welcome from function. {props.name + ' ' + props.children} </div>
        </>
    );
}

export default Welcome;
