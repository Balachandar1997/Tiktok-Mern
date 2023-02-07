import React from 'react'
import "./VideoFooter.css"
//import MusicNoteIcon from '@material-ui/icons/MusicNote'
import MusicNoteSharpIcon from '@material-ui/icons/MusicNoteSharp';
//import Ticker from 'react-ticker'


const VideoFooter = ({channel,description,song}) => {
  return (
    <div className='videoFooter'>
        <div className='videoFooter_text'>
            <h3>@{channel}</h3>
            <p>{description}</p>
            <div className='videoFooter_ticker'>
                <MusicNoteSharpIcon className="videoFooter_icon" />
                 {/* <Ticker mode="smooth">
                    {({index})=>(
                        <>
                           <p>Iam a Windows PC</p>
                        </>
                    )}
                </Ticker>   */}
            </div>
        </div>
        <img className='videoFooter__record' src="https://static.thenounproject.com/png/934821-200.png" alt="video footer" />

        
    </div>
  )
}

export default VideoFooter