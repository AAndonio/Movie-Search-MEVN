import Api from './Api';

export default {
    
    getMovieByTitle(title){
        return Api().get('/title='+title);
    },

    getMoviesSelection(params){
        return Api().post(params);
    }
}