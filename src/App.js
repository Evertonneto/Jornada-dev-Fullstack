import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
     <div className="app__videos">
        <Video
          likes={110} 
          messages={200}
          shares={300}
          name="Paulo"
          description="O goleiro"
          music="Epic Music"
          url="https://firebasestorage.googleapis.com/v0/b/jornada-b5e9d.appspot.com/o/brecker2.mp4?alt=media&token=9aa979e9-0907-4093-abd5-a71efe4fc946"
          
        />
        <Video
          likes={230} 
          messages={100}
          shares={50}
          name="zé"
          description="O melhor goleiro"
          music="Real Music"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />
        
        
        

     </div>
    </div>
  );
}

export default App;
