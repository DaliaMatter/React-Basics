function List(props) {
    const names = ['dalia', 'nada', 'ahmed', 'mohamed'];
    return (
        <>
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
        </>
    );
}

export default List;
