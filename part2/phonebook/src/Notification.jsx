/* eslint-disable react/prop-types */
const Notification = ({message}) => {

    if(message === null){
        return null
    }

    return(
        <div className='added'>
            {message}
        </div>
    )

}

export default Notification