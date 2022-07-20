import On from '../../icons/on.jsx'
import Off from '../../icons/off.jsx'

function MyButton(props) {
    
    // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>',props.path)
    // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>',props)
    return (
        <button onClick={props.handleClick}>

            {/* {props.path == props.path['on'] ? setImagePath(props.path['off']): console.log('>>>>>>>>>>>>>>>')} */}
            {props.isMuted ? <Off /> : <On />}
            
        </button>
    )
}
export default MyButton