import Api from './Api';

export default {
    
    getMovieByTitle(title){
        return Api().get('/title='+title);
    },

    getMoviesSelection(request){
        return Api().post('/', request);
    },

    getTopTen(toptenType, genre){
        return Api().get('topten/type='+toptenType+'&genre='+genre);
    },

    getAppareances(number, genre){
        return Api().get('cast/genre='+genre);
    }
}