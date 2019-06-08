import Api from './Api';

export default {
    
    getMovieByTitle(title){
        return Api().get('/title='+title);
    },

    getMoviesSelection(request){
        return Api().post('/', request);
    },

    getTopTen(toptenType, genre){
        return Api().get('topten/type='+toptenType+'&genres='+genre);
    },
}