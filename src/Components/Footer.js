import React from 'react'

function Footer() {

    let footerstyle = {
        position:'relative',
        top:'5vh',
        width:'100%',
        // backgroundColor=6
    }
    return (
             <div className='bg-dark text-light py-3' style={footerstyle}>
                 <p className='text-center'>
                     Copyright &copy; Whycake.rf.gd
                 </p>
             </div>
    )
}

export default Footer

