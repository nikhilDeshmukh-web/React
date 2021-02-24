import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        { title: 'Comfortably Numb', duration: '3.08'},
        { title: 'Coming back to Life', duration: '4.40'},
        { title: 'Please forgive me', duration: '3.50' }        
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload ;
    }
    return selectedSong ;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});