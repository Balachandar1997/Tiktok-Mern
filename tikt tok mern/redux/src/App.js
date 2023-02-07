//import logo from './logo.svg';
import './App.css';
import Video from './components/Video';

function App() {
  return (
    <div className="App">
      <div className='app_videos'>
         <Video url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4" 
         channel="Bala2"
         description="New Full stack developer"
         song="She keep calling She keep calling"
         likes={239}
         shares={345}
         messages={890}
         />
         <Video 
         url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169739/video2_mecbdo.mp4" 
         channel="Storror"
         description="Free style Parkour"
         song="She keep calling She keep calling"
         likes={105}
         shares={85}
         messages={71}
         />
     </div>
         </div>
  );
}

export default App;
