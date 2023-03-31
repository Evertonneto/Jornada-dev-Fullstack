import React from "react";
import "./videofooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videofooter__text">
        <h3>@evertonneto</h3>
        <p>Descrição do vídeo</p>
        <div className="videofooter__music">
          <MusicNoteIcon className="videofooter_icon" />
          <div className="videofooterMusic__text">
             <p>Título da música</p>
          </div>

        </div>
      </div>
      <img
        className="videofooter_record"
        alt="imagem de um vinil grande"
        src="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/vinil.png?alt=media&token=d174bbec-b930-41e4-ab50-af1ea81bb7da"
      />
    </div>
  );
}

export default VideoFooter;
