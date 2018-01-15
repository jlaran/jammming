const clientID = "d89e877048f04e0f8ac3b40de1bf1b33";
const redirectURI = "http://localhost:3000/";
let token = '';
let expiresIn;
let playlistID;

let Spotify = {
	getAccessToken: function(){
		if (token !== '') {
			return token;
		} else if (window.location.href.match(/access_token=([^&]*)/) && window.location.href.match(/expires_in=([^&]*)/)) {
			token = window.location.href.match(/access_token=([^&]*)/)[1];
			expiresIn = window.location.href.match(/expires_in=([^&]*)/)[1];
			window.setTimeout(() => token = '', expiresIn * 1000);
			window.history.pushState('Access Token', null, '/');
		} else {
			window.location = "https://accounts.spotify.com/authorize?client_id="+clientID+"&response_type=token&scope=playlist-modify-public&redirect_uri="+redirectURI;
		}
	},

	search: async function(searchTerm){
		let response = await fetch('https://api.spotify.com/v1/search?type=track&q='+searchTerm, { headers: {Authorization: `Bearer ${token}`}});
		try {
			if (response.ok) {
		  		let jsonResponse = await response.json();

		  		return jsonResponse;

		  		
		  		// tracks
			}
			throw new Error('Request failed!');
		} catch (error) {
			console.log(error);
		}
	},

	savePlaylist : async function(playlistName, trackURIs){
		
		// if (playlistName && trackURIs) {

			let accessToken = token;
			let headers = {Authorization: `Bearer ${token}`};
			let userID = "";

			let response = await fetch('https://api.spotify.com/v1/me', { headers : headers });
			if (response.ok) {
		  		let jsonResponse = await response.json();

		  		console.log(jsonResponse);

		  		userID = jsonResponse.id;
			}

			try {
				let response = await fetch('https://api.spotify.com/v1/users/'+userID+'/playlists/{playlist_id}/tracks', {
					headers: headers,
					method: 'POST',
					body: JSON.stringify({uris: trackURIs})
				});

				console.log(response);
				
				if(response.ok){
					let jsonResponse = await response.json();
					playlistID = jsonResponse.id;
					return jsonResponse;
				}
				throw new Error('Request failed!');
			} catch(error) {
				console.log(error);
			}

		// } else {
			// return;
		// }
	}
};

Spotify.getAccessToken();

export default Spotify;