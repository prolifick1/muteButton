function MyButton(props) {
    return (
        <img onClick={props.handleClick} src={props.imagePath} />
    )
}
export default MyButton
