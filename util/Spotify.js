let Spotify = {
	getAccessToken: function(){
		if (token !== '') {
			return token;
		}
	}
};

let token = ''; 

export Spotify;
